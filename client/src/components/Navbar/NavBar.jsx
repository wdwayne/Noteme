import { BsCardChecklist } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg'

import "./style.css"

function NavBar() {
    return (
        <nav>
            <ul className="nav-ul">
                <li className="slide"></li>
                <li><a href="#" className="is-active"><BsCardChecklist /> Todos</a></li>
                <li><a href="#"> <CgNotes /> Notes</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
