import { Link } from "react-router-dom";

import note from "../../assets/note.png";
import todo from "../../assets/todo.png"

import './style.css'

function Home() {
    return (
        <div className="home center">
            <div className="content-box">
                <h1>Where to?</h1>
                <div className="boxes">
                    <Link to='todos' className="box-link">
                        <img src={todo} alt="Notes" className="box-link-img" />
                        <h3>To Do List</h3>
                    </Link>
                    <Link to='notes' className="box-link">
                        <img src={note} alt="Notes" className="box-link-img" />
                        <h3>Notes</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
