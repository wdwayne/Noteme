import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createList } from '../../../actions/listActions';
import './style.css';

function ListForm() {

    const dispatch = useDispatch();
    const [item, setItem] = useState({
        name: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setItem(prevList => (
            {...prevList,
                [name]: value}
        ));
    };

    const onSubmit = (e) => {

        e.preventDefault();
        dispatch(createList(item));
        setItem({
            name: ''
        });

    };

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
