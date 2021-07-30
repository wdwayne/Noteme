import { v4 as uuid } from 'uuid';
import { useState } from 'react';

import Todo from './Todo/Todo';
import ListForm from './listForm/ListForm';

function Todos() {
    const [lists, setLists] = useState([
        { id: uuid(), name: 'shopping list', listItems: [{id: uuid(), itemName: 'rice'}] },
        { id: uuid(), name: 'to do list', listItems: [{id: uuid(), itemName: 'wash'}] },
        { id: uuid(), name: 'cooking list', listItems: [{id: uuid(), itemName: 'Butter'}] },
        
    ])

    const onAdd = (list) => {
        setLists(prevList => (
            [...prevList, list]
        ))
    }

    const onDelete = (id) => {
        setLists(prevLists => (
            prevLists.filter(item => item.id !== id)
        ))
    }


    return (
        <div className="listPage">
            <ListForm onAdd={onAdd} />
            <div className="grid">
                {lists.map( list => (
                    <Todo key={list.id} list={ list } onDelete={onDelete} />
                ))}
            </div>
        </div>
    )
}

export default Todos;
