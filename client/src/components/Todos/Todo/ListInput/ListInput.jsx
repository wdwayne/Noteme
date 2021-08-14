import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoPlus } from 'react-icons/go';

import { createItem } from '../../../../actions/listActions';
import './style.css'

function ListInput({ id }) {
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        const newItem = {name: itemName};
        dispatch(createItem(id, newItem));
        setItemName('');
    }

    return (
        <form className="itemForm" onSubmit={handleSubmit} autoComplete="off">
                <input type="text" name="name" 
                placeholder="Add item...." 
                value={itemName} 
                onChange={(e) => {setItemName(e.target.value)}}
                required/> 

                <button type="submit"><GoPlus /></button>
            </form>
    )
}

export default ListInput;
