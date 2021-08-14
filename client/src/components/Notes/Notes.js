import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import empty from "../../assets/empty.jpg";
import { getNotes } from '../../actions/noteActions';
import './style.css'

function Notes() {

    const [currentId, setCurrentId] = useState(null);
    
    const notes = useSelector(state => state.notes)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotes());
    }, [notes])

    return (
        <div className="NotesPage">
            <NoteForm currentId={currentId} setCurrentId={setCurrentId}/>
            {notes.length !== 0 ? (
                <>
                    <h1>All Notes</h1>
                    <div className="grid">
                        {notes.map(note => (
                            <Note key={note._id} note={ note } setCurrentId={setCurrentId}/>
                        ))}
                    </div>
                </>
            ):
                <div className="center">
                    <div className="emptyImg">
                        <img src={empty} alt="" />
                        <h2>Use the form above to add a new Note.</h2>
                    </div>
                </div>
            }
        </div>
    )
}

export default Notes;
