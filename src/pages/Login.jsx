import React, { useState } from 'react';
import '../style/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate(); 

  const handelSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8080/user/login",{email,password},{
            withCredentials:true
        }).then((res)=>{
            console.log(res.data.message)
            toast(res.data.message)
            navigate("/");
        }).catch((err)=>{
           toast("please create a account first")
           navigate("/register")
            console.log(err)
        })
  }

  return (
    <div className="login-container">
      <div className="shape-left"></div>
      <div className="shape-right"></div>
      <div className="logo">🟢</div>
      <h2 className="login-heading">Sign in</h2>
      <p className="login-subheading">to continue to your account</p>

      <form onSubmit={handelSubmit}>
        <input
          className="login-input"
          type="email"
          placeholder="Email address or Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-button" disabled={!email || !password}>
          Continue
        </button>
      </form>

      <div className="divider">or</div>

      <div className="social-button">
        <img src="https://img.icons8.com/color/16/google-logo.png" alt="G" />
        Continue with Google
      </div>

      <div className="social-button">
        <img src="https://img.icons8.com/ios-filled/20/mac-os.png" alt="Apple" />
        Continue with Apple
      </div>

      <p className="footer-text" style={{ paddingTop: "10px" }}>
        Don't have an account?
        <Link to={"/register"}> Sign up</Link>
      </p>

      <p className="footer-text">
        Can't sign in?
        <Link to={"/"}>  Click here</Link>
      </p>

    </div>
  );
}
