import note from "../../assets/note.png";
import todo from "../../assets/todo.png"

import './style.css'

function Home() {
    return (
        <div className="home">
            <div className="content-box">
                <h1>Where to?</h1>
                <div className="boxes">
                <div className="box-link">
                        <img src={todo} alt="Notes" className="box-link-img" />
                        <h3>To Do List</h3>
                    </div>
                    <div className="box-link">
                        <img src={note} alt="Notes" className="box-link-img" />
                        <h3>Notes</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
