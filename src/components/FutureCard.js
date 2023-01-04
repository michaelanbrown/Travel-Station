import React from 'react';
import './App.css';

function FutureCard({ futureEvent }) {
    
    return (
            <div className="Future">
                <br></br>
                <img className="FuturePhoto" src={futureEvent.photo} alt={futureEvent.city} width="75%" height="75%" />
                <p>{futureEvent.city}<br></br>{futureEvent.state}<br></br>{futureEvent.date}<br></br>{futureEvent.reason}</p>
                <br></br>
                <br></br>
                <br></br>
            </div>

    )
}

export default FutureCard;