import logo from '../../logo.svg';
import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './WorkoutZone.css'
import UserExperience from '../UserExperience/UserExperience';

const WorkoutZone = () => {
      const [workouts, setWorkouts] = useState([]);
      const [time, setTime] = useState([]);
      useEffect(() => {
            fetch('workout.json')
                  .then(res => res.json())
                  .then(data => setWorkouts(data))
      }, []);
      const addToExerciseTime = (workout) => {
            const newTime = [...time, workout];
            setTime(newTime)
      }
      return (
            <div className='workout-zone'>
                  <div>
                        <div>
                              <div className='head-container'>
                                    <img src={logo} alt="" />
                                    <h1>Free Hand Exercise Club</h1>
                              </div>
                              <h3 className='moto'>Track Everyday's Freehand Exercise</h3>
                        </div>
                        <div className='workouts-container'>
                              {
                                    workouts.map(workout => <Workout
                                          workout={workout}
                                          key={workout.id}
                                          addToExerciseTime={addToExerciseTime}
                                    ></Workout>)
                              }
                        </div>
                  </div>
                  <div className='user-experience-container'>
                        <UserExperience times={time}></UserExperience>
                  </div>
            </div>
      );
};

export default WorkoutZone;