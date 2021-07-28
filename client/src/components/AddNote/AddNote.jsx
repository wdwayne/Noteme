import { MdAddToPhotos } from 'react-icons/md'
import './style.css'

function AddNote({ item }) {

    return (
        <div className="add">
            <div>
                <h2>Add {item}</h2>
                <button className='addBtn'><MdAddToPhotos /> </button>
            </div>
        </div>
    )
}

export default AddNote
