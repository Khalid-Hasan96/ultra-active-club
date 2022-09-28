import logo from '../../logo.svg';
import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './WorkoutZone.css'
import UserExperience from '../UserExperience/UserExperience';

const WorkoutZone = () => {
      const [workouts, setWorkouts] = useState([]);
      useEffect(() => {
            fetch('workout.json')
                  .then(res => res.json())
                  .then(data => setWorkouts(data))
      }, [])
      return (
            <div className='workout-zone'>
                  <div>
                        <div>
                              <div className='head-container'>
                                    <img src={logo} alt="" />
                                    <h1>Be Active</h1>
                              </div>
                              <h3 className='moto'>Track Everyday's Exercise</h3>
                        </div>
                        <div className='workouts-container'>
                              {
                                    workouts.map(workout => <Workout
                                          workout={workout}
                                          key={workout.id}
                                    ></Workout>)
                              }
                        </div>
                  </div>
                  <div className='user-experience-container'>
                        <UserExperience></UserExperience>
                  </div>
            </div>
      );
};

export default WorkoutZone;