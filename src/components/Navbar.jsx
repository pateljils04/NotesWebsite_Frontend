import React, { useState } from 'react';
import "../style/Navbar.css"
import { FaEvernote } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate()
  const [err,seterr]=useState(false)

  const handelClick = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8080/user/logout", { withCredentials: true })
      .then((res) => {
        toast(res.data.message)
        navigate("/login")
      }).catch((err) => {
        console.log(err)
      })
  }
  const handelDelete=(e)=>{
    e.preventDefault();
    axios.delete("http://localhost:8080/note/deleteallnotes",{withCredentials:true})
    .then((res)=>{
      toast(res.data.message)
      navigate("/")
    }).catch((err)=>{
      console.log(err)
        seterr(true)
    })
  }
  return (
    <nav className="navbar" style={{ paddingRight: "10px", paddingLeft: "10px" }}>
      <div className="navbar-left">
        <FaEvernote className="logo-icon" />
        <span className="logo-text">Evernote</span>
      </div>

      <ul className="navbar-links">
        <li><Link to={"/"}>Home</Link></li>
        <li className="dropdown">
          <Link to={"/create"}>
            Create
          </Link>
        </li>
        <li><Link to={"/getnotes"}>Notes</Link></li>
        <li><Link to={"/getallnotes"}>AdminNotes</Link></li>
      </ul>

      <div className="navbar-actions">
        <Link to={"/login"}><button className="btn-outline">Log in</button></Link>
        <Link><button className="btn-outline" onClick={handelClick} style={{ backgroundColor: "rgb(30, 199, 30)", color: "white" }}>Logout</button></Link>
        <button onClick={handelDelete} className="btn-outline">DeleteNotesByAdmin</button>
      </div>
    </nav>
  );
};

export default Navbar;
