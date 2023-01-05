import React from "react";
import './App.css';

function TravelPlanForm({ formData, setFormData, want }) {

    function handleFutureChange(e) {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        });
    }

    function handleFutureSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/future", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData),
        });
    }

    return (want ? (
        <div className="FutureForm">
            <form onSubmit={handleFutureSubmit}>
                Enter New Travel Plans Here:
                <br></br>
                <input type="text" id="city" value={formData.city} onChange={handleFutureChange} placeholder="City/Activity"/>
                <br></br>
                <input type="text" id="state" value={formData.state} onChange={handleFutureChange} />
                <br></br>
                <input type="text" id="date" value={formData.date} onChange={handleFutureChange} />
                <br></br>
                <input type="text" id="reason" value={formData.reason} onChange={handleFutureChange} />
                <br></br>
                <input type="text" id="photo" value={formData.photo} onChange={handleFutureChange} />
                <br></br>
                <button>Submit</button>
            </form>
        </div>) : null
    )
}

export default TravelPlanForm;