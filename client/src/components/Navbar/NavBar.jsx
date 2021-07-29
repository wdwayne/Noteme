import { NavLink, useLocation } from 'react-router-dom';

import { BsCardChecklist } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg'

import "./style.css"

function NavBar() {

    const location = useLocation();

    return (
        <nav className={ location.pathname === '/' ? 'hidden' : undefined}>
            <ul className='nav-ul'>
                <li><NavLink exact activeClassName="is-active" NavLink to="todos"><BsCardChecklist /> Todos</NavLink></li>
                <li><NavLink exact activeClassName="is-active" to="notes"> <CgNotes /> Notes</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;
