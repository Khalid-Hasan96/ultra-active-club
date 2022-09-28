import React from 'react';
import './Workout.css'

const Workout = ({ workout }) => {
      console.log(workout)
      const { picture, name, about, time } = workout
      return (
            <div className='workouts'>
                  <img src={picture} alt="" />
                  <div className='workout-info'>
                        <h3>{name}</h3>
                        <p>{about}</p>
                        <p>Time: {time}s</p>
                  </div>
                  <button className='list-btn'>
                        <p className='list-btn-text'>Add to List</p>
                  </button>
            </div>
      );
};

export default Workout;