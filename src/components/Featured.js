import React from "react";
import './App.css';
import TravelCard from "./TravelCard";

function Featured({ travel }) {

  const lastTravelRender = travel ? <TravelCard travelClass="TravelCard" travel={travel} /> : null

    return (
        <div className="Featured">
          <h1>Curious about my most recent trip?</h1>
          <p>Please see below!</p>
          {lastTravelRender}
        </div>
  );
}

export default Featured;