import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import ListItem from "./ListItem/ListItem";
import ListInput from "./ListInput/ListInput";
import { deleteList } from '../../../actions/listActions';

import './style.css';

function Todo({ indevidualList }) {

    const dispatch = useDispatch();

    return (
        <div className="listBox">
            <h2>{ indevidualList.name }</h2>
            <ListInput id={indevidualList._id} />
            <ul className="chckList">
                {indevidualList.list.map(item => (
                    <ListItem key={item._id} item={ item } listId={indevidualList._id} />
                ))}
            </ul>
            <div className="listBtn"> 
                    <button onClick={() => dispatch(deleteList(indevidualList._id))}><RiDeleteBin6Line /></button>
            </div>
        </div>
    )
}

export default Todo;
