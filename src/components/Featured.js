import React from "react";
import './App.css';
import TravelCard from "./TravelCard";

function Featured({ travels }) {
  const lastTravelRender = travels.map (travel => {
    return (
        <TravelCard travelClass="TravelCard" travel={travel} key={travel.id}/>
    )
})

    return (
        <div className="Featured">
          <h1>Curious about my most recent trip?</h1>
          <p>Please see below!</p>
          {lastTravelRender}
        </div>
  );
}

export default Featured;