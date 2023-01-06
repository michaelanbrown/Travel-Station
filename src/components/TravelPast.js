import './App.css';
import React from 'react';
import TravelCard from './TravelCard';
import FilterState from "./FilterState";

function TravelPast({ travels, handleStateFilter }) {
    const travelRender = travels.map (travel => {
        return (
            <TravelCard travelClass="TravelCard" travel={travel} key={travel.id}/>
        )
    })

    return (
        <div>
            <FilterState handleStateFilter={handleStateFilter}/>
            <br></br>
            {travelRender}
        </div>
    )
}

export default TravelPast;