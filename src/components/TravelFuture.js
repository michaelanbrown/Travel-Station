import React, { useState } from "react";
import './App.css';
import FutureCard from "./FutureCard";
import TravelPlanForm from "./TravelPlanForm";
import Password from "./Password";

function TravelFuture({ handleCompleteAdd, setLastTravel, passActive, setPassActive, handlePasswordChange, setPasswordData, passwordData, password, future, setFuture, formData, setFormData, travels, setTravels, completeData, setCompleteData}) {
    //want sets the contents of the button based on if the client wants to enter a new travel plan
    const [want, setWant] = useState(false)
    //contents of the button
    const [wantValue, setWantValue] = useState("Want to submit a new travel plan?")

    //handle the change of the button context
    //if the button is pressed, change the contents of the button to true or false
    //if true, then display "Done submitting plans?" so that once done, the client can hide the form
    //if false, then display "Want to submit a new travel plan?" so that the client can show the form
    function handleWantClick() {
        setWant(want => !want)
        if (want === true) {
            setWantValue("Want to submit a new travel plan?")
        } else if (want === false) {
            setWantValue("Done submitting plans?")
        }
    }

    //renders a card for each element in the array of future travel plans and gives it a key
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