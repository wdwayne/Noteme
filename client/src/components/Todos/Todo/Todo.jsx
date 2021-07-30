import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from 'react';

import ListItem from "./ListItem/ListItem";
import ListInput from "./ListInput/ListInput";

import './style.css';

function Todo({ list, onDelete }) {

    const [ltItem, setLtItem] = useState(list.listItems);

    const onAdd = (item) => {
        setLtItem(prevItems => (
            [...prevItems, item]
        ))
    }

    return (
        <div className="listBox">
            <h2>{ list.name }</h2>
            <ListInput onAdd={onAdd} />
            <ul className="chckList">
                {ltItem.map(lItem => (
                    <ListItem lItem={ lItem } />
                ))}
            </ul>
            <div className="listBtn">
                    
                    <button onClick={() => onDelete(list.id)}><RiDeleteBin6Line /></button>
            </div>
        </div>
    )
}

export default Todo;
