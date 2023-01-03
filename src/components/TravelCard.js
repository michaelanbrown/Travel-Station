import React from 'react';
import './App.css';

function TravelCard({ travel }) {
    
    return (
        <div>
            <img src={travel.photo} alt={travel.city} />
        </div>
    )
}

export default TravelCard;