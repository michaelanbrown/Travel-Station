import React, { useState } from "react";
import './App.css';
import FutureCard from "./FutureCard";
import TravelPlanForm from "./TravelPlanForm";

function TravelFuture({ future, setFuture, formData, setFormData }) {
    const [want, setWant] = useState(false)
    const [wantValue, setWantValue] = useState("Want to submit a new travel plan?")

    function handleWantClick() {
        setWant(want => !want)
        if (want === true) {
            setWantValue("Want to submit a new travel plan?")
        } else if (want === false) {
            setWantValue("Done submitting plans?")
        }
    }

    const futureRender = future.map(futureEvent => {
        return (
            <FutureCard futureEvent={futureEvent} key={futureEvent.id} />
        )
    })

    return (
        <div className="Want">
            <button onClick={handleWantClick}>{wantValue}</button>
            <TravelPlanForm future={future} setFuture={setFuture} formData={formData} setFormData={setFormData} want={want}/>
            {futureRender}
        </div>
    )
}

export default TravelFuture;