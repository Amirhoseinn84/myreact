import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <header className="card-header">
                <h2>{props.title}</h2>
            </header>
            <section className="card-body">
                <p>{props.body}</p>
                <button onClick={() => console.log(props.title)}>click</button>
            </section>
            <footer>
                <p style={ {backgroundColor : 'blue', padding : '10px 25px', borderRadius : '5px'}}>WEB Development</p>
            </footer>
        </div>
    )
}

export default Card;