import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './style.css';

function ListForm({ onAdd }) {

    const [item, setItem] = useState({
        name: '',
        listItems: []
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setItem(prevList => (
            {...prevList,
                id: uuid(),
                [name]: value}
        ))
    }

    const onSubmit = (e) => {

        e.preventDefault();

        onAdd(item)

        setItem({
            name: '',
            listItems: []
        })

    }

    return (
        <div className="center">
            <form className="listForm" onSubmit={onSubmit} autoComplete="off">
                <input type="text" name="name" 
                placeholder="Add another list...." 
                value={item.name} 
                onChange={handleChange}
                required/>

                <button type="submit">Add</button>
            </form> 
        </div>
    )
}

export default ListForm;
