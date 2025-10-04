import React, { useState } from "react";
import { FaBackward, FaLock } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Styles from '../module.css/Login.module.css';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const sendOtp = () => {
    // Logic to check if the phone number field is empty
    if (phoneNumber.trim() === '') {
      toast.error("Please enter your phone number!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // Logic for a valid phone number
      toast.success("OTP has been sent to your phone number!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className={Styles.top1}>
        <div className={Styles.top}>
          {/* <li><i> <FaBackward/> </i> Back To Home</li> */}
        </div>
        <div className={Styles.container}>
          <div className={Styles.container1}>
            <i><FaLock/></i>
            <h5>Welcome to <span>SportsInfo</span></h5>
            <p>Enter your Phone Number To get Started</p>
          </div>
          <div className={Styles.container2}>
            <h5>Phone Number</h5>
            <input 
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <p>We'll Send You a Verification Code</p>
            <button className={Styles.otpBtn} onClick={sendOtp}>Send OTP</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;