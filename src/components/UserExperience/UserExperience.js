import React from 'react';
import img from '../../images/person-icon.png';
import './UserExperience.css'

const UserExperience = () => {
      return (
            <div className='user-container'>
                  <div className='user'>
                        <div className='user-img-name'>
                              <img src={img} alt="" />
                              <h2>Monkey D. Luffy</h2>
                        </div>
                        <p>Dhaka, Bangladesh</p>
                  </div>
                  <div className='user-info'>
                        <small>85kg <br /> Weight</small>
                        <small>5ft 11inch <br /> Height</small>
                        <small>26yrs <br /> Age</small>
                  </div>
                  <div className='break-btn-container'>
                        <h1>Add a Break</h1>
                        <button><small>10s</small></button>
                        <button><small>20s</small></button>
                        <button><small>30s</small></button>
                        <button><small>40s</small></button>
                        <button><small>50s</small></button>

                  </div>
                  <div className='exercise-details-container'>
                        <h1>Exercise Details</h1>
                        <div className='time-container'>
                              <div className='times'><p>Exercise Time:</p> <p>0seconds</p></div>
                              <div className='break-time times'><p>Break Time:</p> <p>0seconds</p></div>
                        </div>
                  </div>
                  <button className='activity-btn'>
                        Activity Complete
                  </button>
            </div>
      );
};

export default UserExperience;