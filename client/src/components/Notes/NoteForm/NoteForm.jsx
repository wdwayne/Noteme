import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './style.css'

function NoteForm({ onAdd }) {

    const [note, setNote] = useState({
        title: "",
        body: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNote( prevNote => (
            {...prevNote,
                id: uuid(),
            [name]: value}
        ))
    }

    const onSubmit = (e) => {
        e.preventDefault(); 
        
        onAdd(note);

        setNote({
            title: "",
            body: ""
        })
    }

    return (
        <div className="center">
            <form className="noteForm" onSubmit={onSubmit} autoComplete="off">
                <input type="text" name="title" 
                placeholder="Title...." 
                value={note.title} 
                onChange={handleChange}
                required/>

                <textarea name="body" cols="20" rows="3" 
                placeholder="Place Note here....." 
                onChange={handleChange} 
                value={note.body}
                required></textarea>

                <button type="submit">Add</button>
            </form> 
        </div>
    )
}

export default NoteForm
