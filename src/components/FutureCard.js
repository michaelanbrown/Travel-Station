import React from 'react';
import './App.css';

function FutureCard({ handleCompleteAdd, futureEvent, future, setFuture, setCompleteData, passActive }) {

    function deletePlan(deletedPlan) {
        const updatedPlans = future.filter((plan) => plan.id !== deletedPlan.id);
        setFuture(updatedPlans)
    }

    function handleFutureDelete() {
        fetch(`https://travel-station-data.onrender.com/future/${futureEvent.id}`, {
        method: "DELETE",
        })
        .then(r => r.json())
        .then(() => deletePlan(futureEvent))
    }

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