import './style.css'

function ListItem({ lItem }) {
    return (
        <li className="chckItem">
            <input type="checkbox" />
            {lItem.itemName}
        </li>
    )
}

export default ListItem;
