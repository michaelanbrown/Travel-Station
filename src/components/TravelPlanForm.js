import React from "react";
import './App.css';

function TravelPlanForm({ formData, setFormData }) {

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

    return (
        <div>
            <form onSubmit={handleFutureSubmit}>
                <input type="text" id="city" value={formData.city} onChange={handleFutureChange} />
                <input type="text" id="state" value={formData.city} onChange={handleFutureChange} />
                <input type="text" id="date" value={formData.city} onChange={handleFutureChange} />
                <input type="text" id="reason" value={formData.city} onChange={handleFutureChange} />
                <input type="text" id="photo" value={formData.city} onChange={handleFutureChange} />
            </form>
        </div>
    )
}

export default TravelPlanForm;