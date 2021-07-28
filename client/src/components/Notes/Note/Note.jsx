import './style.css'

function Note( { item }) {
    return (

            <div className="box">
                <h3>{ item.title }</h3>
                <div className="para">
                    <p>{ item.body }</p>
                </div>
            </div>
    )
}

export default Note;
