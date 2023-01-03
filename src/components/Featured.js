import React from "react";
import './App.css';
import TravelCard from "./TravelCard";

function Featured({ travels }) {
    const lastTravel = [travels[travels.length-1]]

    return (
        <div className="Featured">
          <h1>Curious about my most recent trip?</h1>
          <p>Please see below!</p>
          {/* <TravelCard travels={lastTravel} /> */}
        </div>
  );
}

export default Featured;