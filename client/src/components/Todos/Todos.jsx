import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Todo from './Todo/Todo';
import ListForm from './listForm/ListForm';
import { getLists } from '../../actions/listActions';
import empty from "../../assets/empty.jpg";

function Todos() {
    const lists = useSelector(state => state.lists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLists())
    }, [lists])


    return (
        <div className="listPage">
            <ListForm />
            {lists.length !== 0 ? (
                <div className="grid">
                    {lists.map( indevidualList => (
                        <Todo key={indevidualList._id} indevidualList={ indevidualList } />
                    ))}
                </div>
            ) : 
                <div className="center">
                    <div className="emptyImg">
                        <img src={empty} alt="" />
                        <h2>use the form above to add a new Todo List</h2>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Todos;
