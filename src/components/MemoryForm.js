import React, { useState } from "react";
import './App.css';

function MemoryForm({ password, passwordData, memories, setMemories, wantMemory }) {
    const [formDataMemory, setFormDataMemory] = useState({
        city: "",
        state: "",
        date: "",
        memories: ""
    });

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
            memories: ""
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
                <input type="text" id="memories" value={formDataMemory.memories} onChange={handleMemoryChange} placeholder="Memories"/>
                <br></br>
                <button disabled={!(password === passwordData)}>Submit</button>
            </form>
        </div>) : null

    )
}

export default MemoryForm;