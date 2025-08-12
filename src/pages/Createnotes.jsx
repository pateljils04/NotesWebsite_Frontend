import React, { useState } from 'react';
import '../style/CreateNote.css';
import { FaEvernote } from 'react-icons/fa6';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Createnotes() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/note/create", { title, body }, {
      withCredentials: true
    }).then((res) => {
      toast(res.data.message);
      navigate("/getnotes")
      setTitle('');
      setBody('');
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleReset = () => {
    setTitle('');
    setBody('');
  };

  return (
    <div className="note-container">
      <div className="note-header">
        <div><FaEvernote className="logo-icon" /></div>
        <h2>Create a New Note</h2>
        <p>Write down your thoughts and stay organized.</p>
      </div>

      <form onSubmit={handleSubmit} className="note-form">
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="note-input"
          required
        />
        <textarea
          placeholder="Write your note here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="note-textarea"
          required
        ></textarea>

        <div className="note-actions">
          <button type="submit" className="note-btn submit">Save Note</button>
          <button type="button" onClick={handleReset} className="note-btn reset">Reset</button>
        </div>
      </form>
    </div>
  );
}
