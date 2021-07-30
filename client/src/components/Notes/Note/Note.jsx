import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

import './style.css'

function Note( { item, onDelete }) {
    return (

            <div className="box">
                <h3>{ item.title }</h3>
                <div className="para">
                    <p>{ item.body }</p>
                </div>
                <div className="center">
                    <div className="noteBtns">
                        <button><FiEdit /></button>
                        <button onClick={() => onDelete(item.id)} ><RiDeleteBin6Line /></button>
                    </div>
                </div>
            </div>
    )
}

export default Note;
