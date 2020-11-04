import React from 'react';
import NewCard from './NewCard';

function Cards() {
    return(
        <div className="container mt-5">
            <h3>Cards Section</h3>
            <div className="card-deck">
                <NewCard name="Angular"text="Lorem ipsum is the "/>
                <div className="card">
                    <div className="card-body text-center">
                        <p className="card-text">Lorem ipsum, or lipsum as it is sometimes known</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                        <p className="card-text">Lorem ipsum, or lipsum as it is sometimes known</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                        <p className="card-text">Lorem ipsum, or lipsum as it is sometimes known</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Cards;