import { CgRemoveR } from 'react-icons/cg';
import { useState } from 'react';

import './style.css'

function ListItem({ lItem, onRemove }) {

    const [checked, setChecked] = useState(false)

    const handleCheck = (e) => {
        setChecked(e.target.checked)
    }

    return (
        <li className={`chckItem ${checked && 'checkedItem'}`}>
            <input type="checkbox" onChange={handleCheck} />
            {lItem.itemName}
            <button onClick={() => onRemove(lItem.id)}><CgRemoveR /></button>
        </li>
    )
}

export default ListItem;
