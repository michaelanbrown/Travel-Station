import React from "react";
import './App.css';

function TravelPlanForm({ future, setFuture, formData, setFormData, want }) {

    function handleFutureChange(e) {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        });
    }

    function handleFutureSubmit(e) {
        e.preventDefault();
        fetch("https://travel-station-data.onrender.com/future", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData),
        })
        .then(r => r.json())
        .then(data => setFuture([...future, data]))
        .then(setFormData({
            city: "",
            state: "",
            date: "",
            reason: "",
            photo: ""
        }))
    }

    return (want ? (
        <div className="FutureForm">
            <form onSubmit={handleFutureSubmit}>
                Enter New Travel Plans Here:
                <br></br>
                <input type="text" id="city" value={formData.city} onChange={handleFutureChange} placeholder="City/Activity"/>
                <br></br>
                <input type="text" id="state" value={formData.state} onChange={handleFutureChange} placeholder="State"/>
                <br></br>
                <input type="text" id="date" value={formData.date} onChange={handleFutureChange} placeholder="Date"/>
                <br></br>
                <input type="text" id="reason" value={formData.reason} onChange={handleFutureChange} placeholder="Reason for the trip"/>
                <br></br>
                <input type="text" id="photo" value={formData.photo} onChange={handleFutureChange} placeholder="Image URL"/>
                <br></br>
                <button>Submit</button>
            </form>
        </div>) : null
    )
}

export default TravelPlanForm;