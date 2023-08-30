import React, { useState } from "react";
import './App.css';
import FutureCard from "./FutureCard";
import TravelPlanForm from "./TravelPlanForm";
import Password from "./Password";

function TravelFuture({ handleCompleteAdd, handlePasswordChange, setPasswordData, passwordData, password, future, setFuture, travels, setTravels }) {
  
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
            <FutureCard password={password} passwordData={passwordData} handleCompleteAdd={handleCompleteAdd} travels={travels} setTravels={setTravels} futureEvent={futureEvent} future={future} setFuture={setFuture} key={futureEvent.id} />
        )
    })

  
    return (
        <div className="Want">
            <button disabled={!(password === passwordData)} onClick={handleWantClick}>{wantValue}</button>
            <TravelPlanForm password={password} passwordData={passwordData} future={future} setFuture={setFuture} want={want}/>
            {futureRender}
            <Password handlePasswordChange={handlePasswordChange} setPasswordData={setPasswordData} passwordData={passwordData} password={password} />
        </div>
    )
}

export default TravelFuture;