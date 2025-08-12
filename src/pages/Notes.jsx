import React, { useEffect, useState } from 'react'
import "../style/Notes.css"
import { FaEvernote } from 'react-icons/fa6';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Notes = () => {
  const baseUrl = "http://localhost:8080"
  const [data, setdata] = useState([])


  const getdatafromdb = () => {
    axios.get(`${baseUrl}/note/getnotes`, {
      withCredentials: true
    })
      .then((res) => {
        setdata(res.data.notesdata)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const handleDelete = (id) => {
    axios.delete(`${baseUrl}/note/delete/${id}`, {
      withCredentials: true
    }).then((res) => {
      toast(res.data?.message)
      getdatafromdb()
    })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(()=>{
    getdatafromdb()
  },[])

  return (

    <div className="notes-container">
      <div className="notes-header">
        <div><FaEvernote className="logo" /></div>
        <h2>Your Notes</h2>
        <p>Here are your saved thoughts and ideas.</p>
      </div>

      <div className="notes-list">
        {data.length > 0 ? (
          data.map(note => (
            <div className="note-card" key={note._id}>
              <img src={note.image} alt="" height={200} width={200} />
              <h2 className="note-title">{note.title}</h2>
              <p className="note-content">{note.body}</p>
              <div className="note-actions">
                <button className="note-btn edit" style={{ backgroundColor: "rgb(30, 199, 30)", border: "1px solid black" }}><Link to={`/update/${note._id}`} style={{ color: "white",textDecoration:"none"}}>Edit</Link></button>
                <button className="note-btn delete" style={{ backgroundColor: "white", color: "black", border: "1px solid black" }} onClick={() => handleDelete(note._id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-notes">No notes found please create notes !</p>
        )}
      </div>
    </div>

  )
}

export default Notes
