import Note from './Note/Note';
import AddNote from '../AddNote/AddNote';
import NavBar from '../Navbar/NavBar'

import './style.css'

function Notes() {

    const item = "Note"
    return (
        <div className="NotesPage">
            <AddNote item={item} />
            <h1>All Notes</h1>
            <div className="noteGrid">
                
            </div>
            <NavBar />
        </div>
    )
}

export default Notes;
