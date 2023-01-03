import React from "react";
import './App.css';
import TravelCard from "./TravelCard";

function Featured({ travels }) {
    return (
        <div className="Featured">
          <h1>Curious about my most recent trip?</h1>
          <p>Please see below!</p>
          <TravelCard travels={travels} />
        </div>
  );
}

export default Featured;