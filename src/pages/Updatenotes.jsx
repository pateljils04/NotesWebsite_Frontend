import React, { useState, useEffect } from 'react';
import '../style/UpdateNotes.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaEvernote } from 'react-icons/fa6';
import { toast } from 'react-toastify';


export default function Updatenotes() {
    const { noteId } = useParams()
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    // const [image,setImage]=useState("");
    const navigate=useNavigate()



    const handelSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8080/note/update/${noteId}`, { title, body }, {
            withCredentials: true
        }).then((res) => {
            toast(res.data.message)
            navigate("/getnotes")
            setTitle('');
            setBody('');
            
        }).catch((err) => {
            console.log(err)
        })
    }

    const handelCancel = () => {
        setTitle('');
        setBody('');
    };
    return (
        <div className="edit-note-container">
            <div className="edit-header">
                  <div><FaEvernote className="logo" /></div>
                <h2>Edit Note</h2>
                <p>Make changes to your note below.</p>
            </div>

            <form className="edit-form" onSubmit={handelSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="edit-input"
                    // required
                />

                <label>Body</label>
                <textarea
                    name="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="edit-textarea"
                    // required
                ></textarea>


                {/* <div className="image-preview">
                    <label>Current Image:</label>
                    <img src={image} alt="note" />
                </div> */}


                <div className="edit-buttons">
                    <button type="submit" className="edit-btn save">Save</button>
                    <button type="button" className="edit-btn cancel" onClick={handelCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}
