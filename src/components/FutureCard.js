import React from 'react';
import './App.css';

function FutureCard({ travels, setTravels, futureEvent, future, setFuture,  completeData, setCompleteData }) {

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

    function handleCompleteAdd(futureEvent) {
        fetch("https://travel-station-data.onrender.com/travels", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            city: futureEvent.city,
            state: futureEvent.state,
            date: futureEvent.date,
            photo: futureEvent.photo
        }),
        })
        .then(r => r.json())
        .then(data => setTravels([...travels, data]))
    }
    
    return (
            <div className="Future">
                <br></br>
                <button onClick={handleFutureDelete} className="delete">🗑️</button>
                <img className="FuturePhoto" src={futureEvent.photo} alt={futureEvent.city} width="75%" height="75%" />
                <p>{futureEvent.city}
                <br></br>
                {futureEvent.state}
                <br></br>
                {futureEvent.date}
                <br></br>
                {futureEvent.reason}
                </p>
                <button onClick={handleCompleteDelete} className="complete">Complete 🗸</button>
                <br></br>
                <br></br>
                <br></br>
            </div>

    )
}

export default FutureCard;