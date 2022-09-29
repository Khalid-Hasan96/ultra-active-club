import React, { useState } from 'react';
import img from '../../images/person-icon.png';
import './UserExperience.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserExperience = ({ times }) => {
      const [breakTime, setBreakTime] = useState(0);
      const updateBreakTime = (event) => setBreakTime(event);
      const successToast = () => {
            toast.success("Wow. Thanks for exercise!!!")
      }
      let exerciseTime = 0;
      for (const time of times) {
            exerciseTime = exerciseTime + time.time;
      };
      return (
            <div className='user-container'>
                  <div className='user'>
                        <div className='user-img-name'>
                              <img src={img} alt="" />
                              <h2>Khan Chowdhury</h2>
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
                        <button onClick={() => updateBreakTime(10)}>10s</button>
                        <button onClick={() => updateBreakTime(20)}>20s</button>
                        <button onClick={() => updateBreakTime(30)}>30s</button>
                        <button onClick={() => updateBreakTime(40)}>40s</button>
                        <button onClick={() => updateBreakTime(50)}>50s</button>

                  </div>
                  <div className='exercise-details-container'>
                        <h1>Exercise Details</h1>
                        <div className='time-container'>
                              <div className='times'><p>Exercise Time:</p> <p><strong>{exerciseTime}</strong>seconds</p></div>
                              <div className='break-time times'><p>Break Time:</p> <p>{breakTime}seconds</p></div>
                        </div>
                  </div>
                  <button className='activity-btn' onClick={successToast}>
                        Activity Complete
                  </button>
                  <ToastContainer position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover />
            </div>
      );
};

export default UserExperience;