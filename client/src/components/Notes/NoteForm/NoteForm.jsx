import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createNote, editNote } from '../../../actions/noteActions';
import './style.css'

function NoteForm({ currentId, setCurrentId }) {
    const [newNote, setNewNote] = useState({title: "",body: ""});
    const note = useSelector(state => currentId && state.notes.find(note => note._id === currentId));
    const dispatch = useDispatch();

    useEffect(() => {
        if(note) setNewNote({...note});
    }, [note])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewNote( prevNote => (
            {...prevNote,
            [name]: value}
        ))
    }

    const clear = () => {
        setNewNote({
            title: "",
            body: ""
        });
        setCurrentId(null);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(editNote(newNote));
        }else {
            dispatch(createNote(newNote));
        }
        clear();
    }

    return (
        <div className="center">
            <form className="noteForm" onSubmit={onSubmit} autoComplete="off">
                <input type="text" name="title" 
                placeholder="Title...." 
                value={newNote.title} 
                onChange={handleChange}
                required/>

                <textarea name="body" cols="20" rows="3" 
                placeholder="Place Note here....." 
                onChange={handleChange} 
                value={newNote.body}
                required></textarea>

                <button type="submit">Add</button>
            </form> 
        </div>
    )
}

export default NoteForm
