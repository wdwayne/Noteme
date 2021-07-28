import Note from './Note/Note';
import AddNote from '../AddNote/AddNote';
import NavBar from '../Navbar/NavBar'

import './style.css'

function Notes() {

    const items = [
        {id: 1, title: 'list item 1', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur error assumenda sequi itaque facilis?'},
        {id: 2, title: 'list item 2', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur error assumenda sequi itaque facilis?'},
        {id: 3, title: 'list item 3', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur error assumenda sequi itaque facilis?'},
        {id: 4, title: 'list item 1', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur error assumenda sequi itaque facilis?'},
        {id: 5, title: 'list item 2', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur error assumenda sequi itaque facilis?'},
        {id: 6, title: 'list item 3', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur error assumenda sequi itaque facilis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum incidunt optio ab a, doloremque minus perspiciatis neque placeat,'}
    ]

    const item = "Note"
    return (
        <div className="container NotesPage">
            <AddNote item={item} />
            <h1>All Notes</h1>
            <div className="noteGrid">
                {items.map(item => (
                    <Note key={item.id} item={ item } />
                ))}
            </div>
            <NavBar />
        </div>
    )
}

export default Notes;
