import React from "react";
import './App.css';
import TravelCard from "./TravelCard";

function Featured({ travels }) {

  //generate a card for the last trip that is in the travels array (the travels prop is passed in
  //as a single object from the App component)
  const lastTravelRender = <TravelCard travelClass="TravelCard" travel={travels} />

    return (
        <div className="Featured">
          <h1>Curious about my most recent trip?</h1>
          <p>Please see below!</p>
          {lastTravelRender}
        </div>
  );
}

export default Featured;