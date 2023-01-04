import React from "react";
import './App.css';
import FutureCard from "./FutureCard";

function TravelFuture({ future }) {
    const futureRender = future.map(futureEvent => {
        return (
            <FutureCard futureEvent={futureEvent} key={futureEvent.id} />
        )
    })

    return (
        <div>
            {futureRender}
        </div>
    )
}

export default TravelFuture;