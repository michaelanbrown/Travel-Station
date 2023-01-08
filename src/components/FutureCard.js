import React from 'react';
import './App.css';

function FutureCard({ handleCompleteAdd, futureEvent, future, setFuture, setCompleteData, passActive }) {

    //delete a travel plan from future travels by filtering the future array based on id
    //set the future array to the newly updated array
    function deletePlan(deletedPlan) {
        const updatedPlans = future.filter((plan) => plan.id !== deletedPlan.id);
        setFuture(updatedPlans)
    }

    //handle the deletion of the travel plan from the json based on the id
    //use the deletePlan funtion to set the array and display the new array of plans on the page
    function handleFutureDelete() {
        fetch(`https://travel-station-data.onrender.com/future/${futureEvent.id}`, {
        method: "DELETE",
        })
        .then(r => r.json())
        .then(() => deletePlan(futureEvent))
    }

    //handle the deletion of the travel plan from the json based on the id
    //use the deletePlan funtion to set the array and display the new array of plans on the page
    //then handle the addition of the completed travel plan to the past travels
    function handleCompleteDelete() {
        fetch(`https://travel-station-data.onrender.com/future/${futureEvent.id}`, {
        method: "DELETE",
        })
        .then(r => r.json())
        .then(() => deletePlan(futureEvent))
        .then(setCompleteData({
            city:futureEvent.city,
            state:futureEvent.state,
            date:futureEvent.date,
            photo:futureEvent.photo
        }))
        .then(handleCompleteAdd(futureEvent))
    }
    
    //if password is not correct, then disabled all forms and buttons
    //if password is correct, enable all forms and buttons
    return (
            <div className="Future">
                <br></br>
                <button disabled={!passActive} onClick={handleFutureDelete} className="delete"><span role="img" aria-label="delete">🗑️</span></button>
                <img className="FuturePhoto" src={futureEvent.photo} alt={futureEvent.city} width="75%" height="75%" />
                <p>{futureEvent.city}
                <br></br>
                {futureEvent.state}
                <br></br>
                {futureEvent.date}
                <br></br>
                {futureEvent.reason}
                </p>
                <button disabled={!passActive} onClick={handleCompleteDelete} className="complete">Complete 🗸</button>
                <br></br>
                <br></br>
                <br></br>
            </div>

    )
}

export default FutureCard;