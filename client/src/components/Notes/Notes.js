import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm'

import empty from "../../assets/empty.jpg"

import './style.css'

function Notes() {

    const [items, setItems] = useState([
        {id: uuid(), title: 'list item 1', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur error assumenda sequi itaque facilis?'},
        {id: uuid(), title: 'list item 2', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur error assumenda sequi itaque facilis?'},
        {id: uuid(), title: 'list item 3', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur error assumenda sequi itaque facilis?'},
        {id: uuid(), title: 'list item 1', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur error assumenda sequi itaque facilis?'},
        {id: uuid(), title: 'list item 2', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur error assumenda sequi itaque facilis?'},
        {id: uuid(), title: 'list item 3', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur error assumenda sequi itaque facilis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum incidunt optio ab a, doloremque minus perspiciatis neque placeat,'}
    ])

    const onAdd = (note) => {
        setItems( prevItems => (
            [...prevItems, note]
        ))
    }

    const onDelete = (id) => {
        setItems(prevItems => (
            prevItems.filter(item => item.id !== id)
        ))
    }

    return (
        <div className="NotesPage">
            <NoteForm  onAdd={onAdd} />
            <h1>All Notes</h1>
            {items ? (
                <div className="grid">
                    {items.map(item => (
                        <Note key={item.id} item={ item } onDelete={onDelete} />
                    ))}
                </div>
            ):
                <div className="center">
                    <div className="emptyImg">
                        <img src={empty} alt="" />
                        <h2>Ooops Looks a little empty in here</h2>
                    </div>
                </div>
            }
        </div>
    )
}

export default Notes;
