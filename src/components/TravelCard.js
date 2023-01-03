import React from 'react';
import './App.css';

function TravelCard({ travel }) {
    
    return (
        <div className='TravelCard'>
            <img  src={travel.photo} alt={travel.city} width="18%" height="18%"/>
            <p>{travel.city}<br></br>{travel.state}<br></br>{travel.date}</p>
            <br></br>
            <br></br>
        </div>
    )
}

export default TravelCard;