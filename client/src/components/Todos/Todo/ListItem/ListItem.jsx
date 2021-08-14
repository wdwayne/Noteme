import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CgRemoveR } from 'react-icons/cg';

import { deleteItem } from '../../../../actions/listActions';
import './style.css'

function ListItem({ item, listId }) {

    const dispatch = useDispatch()

    

    return (
        <li className='chckItem'>
            {item.name}
            <button onClick={() => dispatch(deleteItem(listId, item._id))}><CgRemoveR /></button>
        </li>
    )
}

export default ListItem;
