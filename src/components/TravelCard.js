import React from 'react';
import './App.css';

function TravelCard({ travel, travelClass }) {
    
    return (
        <div className={travelClass}>
            <img className="TravelCardImg" src={travel.photo} alt={travel.city} width="75%" height="75%"/>
            <p>{travel.city}<br></br>{travel.state}<br></br>{travel.date}</p>
            <br></br>
            <br></br>
        </div>
    )
}

export default TravelCard;