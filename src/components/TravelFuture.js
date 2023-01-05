import React from "react";
import './App.css';
import FutureCard from "./FutureCard";
import TravelPlanForm from "./TravelPlanForm";

function TravelFuture({ future, formData, setFormData }) {
    const futureRender = future.map(futureEvent => {
        return (
            <FutureCard futureEvent={futureEvent} key={futureEvent.id} />
        )
    })

    return (
        <div>
            <TravelPlanForm formData={formData} setFormData={setFormData} />
            <br></br>
            {futureRender}
        </div>
    )
}

export default TravelFuture;