import './App.css';
import React, { useState } from 'react';
import TravelCard from './TravelCard';
import FilterState from "./FilterState";

function TravelPast({ travels }) {
    const [selectedPastCategory, setSelectedPastCategory] = useState("");
    const visibleTravels = travels.filter((travel) => {
        if (selectedPastCategory === "") return true;
        return travel.state === selectedPastCategory
    })

    function handlePastStateFilter(event) {
        setSelectedPastCategory(event.target.value);
    }

    const travelRender = visibleTravels.map (travel => {
        return (
            <TravelCard travelClass="TravelCard" travel={travel} key={travel.id}/>
        )
    })

    return (
        <div>
            <FilterState handleStateFilter={handlePastStateFilter}/>
            <br></br>
            {travelRender}
        </div>
    )
}

export default TravelPast;