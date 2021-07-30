import { GoPlus } from 'react-icons/go';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './style.css'

function ListInput({ onAdd }) {

    const [itemName, setItemName] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        const newItem = {id: uuid(), itemName: itemName}

        onAdd(newItem);
        setItemName('');
    }

    return (
        <form className="itemForm" onSubmit={handleSubmit} autoComplete="off">
                <input type="text" name="item" 
                placeholder="Add item...." 
                value={itemName} 
                onChange={(e) => {setItemName(e.target.value)}}
                required/> 

                <button type="submit"><GoPlus /></button>
            </form>
    )
}

export default ListInput;
