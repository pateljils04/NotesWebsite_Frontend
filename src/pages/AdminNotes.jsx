import React, { useEffect, useState } from 'react'
import "../style/Notes.css"
import { FaEvernote } from 'react-icons/fa6';
import axios from 'axios';

const AdminNotes = () => {
    const baseUrl = "http://localhost:8080"
    const [data, setdata] = useState([])
    const [err, seterr] = useState(false)

    const getdatafromdb = () => {

        axios.get(`${baseUrl}/note/getallnotes`, {
            withCredentials: true
        })
            .then((res) => {
                setdata(res.data.notesdata)
            })
            .catch((err) => {
                seterr(true)
                console.log(err);
            })
    }

    useEffect(() => {
        getdatafromdb()
    }, [])

    return err ? <h1 style={{ textAlign: "center", marginTop: "20px", color: "red",margin:"60px 0px" }}>you are not authorised to access this routes !</h1> : (
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
                        </div>
                    ))
                ) : (
                    <p className="no-notes">No notes found !</p>
                )}
            </div>
        </div>

    )
}

export default AdminNotes;
