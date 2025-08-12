import React, { useState } from 'react';
import '../style/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate=useNavigate()

  const handelSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8080/user/register",{email,password,name},{
      withCredentials:true,
    })
    .then((res)=>{
      toast(res.data.message)
      navigate("/otp")
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="signup-wrapper">
      <div className="signup-left">
        <div className="logo">🟢</div>
        <h2 className="title">Welcome to Evernote!</h2>
        <p className="subtitle">Sign up and start taking notes.</p>

        <form action="" onSubmit={handelSubmit}>
          <input
            type="text"
            placeholder="Enter your Name"
            className="signup-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your Email address"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signup-btn" disabled={!email}>
            Continue
          </button>

        </form>

        <div className="or-divider">or</div>

        <button className="social-btn">
          <img src="https://img.icons8.com/color/16/google-logo.png" alt="G" />
          Continue with Google
        </button>
        <button className="social-btn">
          <img src="https://img.icons8.com/ios-filled/20/mac-os.png" alt="Apple" />
          Continue with Apple
        </button>

        {/* <p className="policy-text">
          By creating an account, you are agreeing to our
          <a href="#"> Terms of Service </a> and
          <a href="#"> Privacy Policy</a>.
        </p> */}

        <p className="login-l">
          Already have an account?
          <Link to={"/login"}> Log in</Link>
        </p>
      </div>

      <div className="signup-right">
        <div className="shapes">
          <div className="shape orange"></div>
          <div className="shape green1"></div>
          <div className="shape green2"></div>
          <div className="shape pink"></div>
          <div className="shape yellow"></div>
          <div className="shape face">😊</div>
          <div className="shape darkgreen"></div>
          <div className="shape purple"></div>
        </div>
        <h3 className="right-text">
          Work. School. Life. <br />
          <span>Remember everything</span>
        </h3>
      </div>
    </div>
  );
}
