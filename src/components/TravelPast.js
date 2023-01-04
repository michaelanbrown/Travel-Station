import './App.css';
import React from 'react';
import TravelCard from './TravelCard';

function TravelPast({ travels }) {
    const travelRender = travels.map (travel => {
        return (
            <TravelCard travelClass="TravelCard" travel={travel} key={travel.id}/>
        )
    })

    return (
        <div>
            {travelRender}
        </div>
    )
}

export default TravelPast;