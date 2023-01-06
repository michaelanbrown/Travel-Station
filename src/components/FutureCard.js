import React from 'react';
import './App.css';

function FutureCard({ futureEvent, future, setFuture }) {

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
                <br></br>
                <br></br>
                <br></br>
            </div>

    )
}

export default FutureCard;