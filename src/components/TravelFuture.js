import React, { useState } from "react";
import './App.css';
import FutureCard from "./FutureCard";
import TravelPlanForm from "./TravelPlanForm";
import Password from "./Password";

function TravelFuture({ handleCompleteAdd, setLastTravel, passActive, setPassActive, handlePasswordChange, setPasswordData, passwordData, password, future, setFuture, formData, setFormData, travels, setTravels, completeData, setCompleteData}) {
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
            <FutureCard passActive={passActive} handleCompleteAdd={handleCompleteAdd} setLastTravel={setLastTravel} completeData={completeData} setCompleteData={setCompleteData} travels={travels} setTravels={setTravels} futureEvent={futureEvent} future={future} setFuture={setFuture} key={futureEvent.id} />
        )
    })

    //if password is not correct, then disabled all forms and buttons
    //if password is correct, enable all forms and buttons
    return (
        <div className="Want">
            <Password passActive={passActive} setPassActive={setPassActive} handlePasswordChange={handlePasswordChange} setPasswordData={setPasswordData} passwordData={passwordData} password={password} />
            <button disabled={!passActive} onClick={handleWantClick}>{wantValue}</button>
            <TravelPlanForm future={future} setFuture={setFuture} formData={formData} setFormData={setFormData} want={want}/>
            {futureRender}
        </div>
    )
}

export default TravelFuture;