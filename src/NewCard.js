import React from 'react';

function NewCard(title,body) {
    return(
        <div className="card">
            <div className="card-body text-center">
                <div className="card-title">{title.name} </div>   
                <div className="card-text">{body.text}</div>
            </div>
        </div>
    )
}

export default NewCard;