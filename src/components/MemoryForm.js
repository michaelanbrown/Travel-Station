import React from "react";
import './App.css';

function MemoryForm({ memories, setMemories, formDataMemory, setFormDataMemory, wantMemory }) {

    function handleMemoryChange(e) {
        setFormDataMemory({
            ...formDataMemory,
            [e.target.id] : e.target.value
        });
    }

    function handleMemorySubmit(e) {
        e.preventDefault();
        fetch("https://travel-station-data.onrender.com/memories", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formDataMemory),
        })
        .then(r => r.json())
        .then(data => setMemories([...memories, data]))
        .then(setFormDataMemory({
            city: "",
            state: "",
            date: "",
            memory: ""
        }))
    }

    return (wantMemory ? (
        <div className="MemoryForm">
            <form onSubmit={handleMemorySubmit}>
                Enter New Memories Here:
                <br></br>
                <input type="text" id="city" value={formDataMemory.city} onChange={handleMemoryChange} placeholder="City/Activity"/>
                <br></br>
                <input type="text" id="state" value={formDataMemory.state} onChange={handleMemoryChange} placeholder="State"/>
                <br></br>
                <input type="text" id="date" value={formDataMemory.date} onChange={handleMemoryChange} placeholder="Date"/>
                <br></br>
                <input type="text" id="memory" value={formDataMemory.memory} onChange={handleMemoryChange} placeholder="Memories"/>
                <br></br>
                <button>Submit</button>
            </form>
        </div>) : null

    )
}

export default MemoryForm;