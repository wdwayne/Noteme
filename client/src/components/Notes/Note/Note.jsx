import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import { deleteNote } from '../../../actions/noteActions';

import './style.css';

function Note( { note, setCurrentId }) {

    const dispatch = useDispatch()

    return (

            <div className="box">
                <h3>{ note.title }</h3>
                <div className="para">
                    <p>{ note.body }</p>
                </div>
                <div className="center">
                    <div className="noteBtns">
                        <button onClick={() => setCurrentId(note._id)}><FiEdit /></button>
                        <button onClick={() => dispatch(deleteNote(note._id)) } ><RiDeleteBin6Line /></button>
                    </div>
                </div>
            </div>
    )
}

export default Note;
