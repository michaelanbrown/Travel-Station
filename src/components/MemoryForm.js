import React from "react";
import './App.css';

function MemoryForm({ passActive, memories, setMemories, formDataMemory, setFormDataMemory, wantMemory }) {

    //set the form inputs as the user types
    function handleMemoryChange(e) {
        setFormDataMemory({
            ...formDataMemory,
            [e.target.id] : e.target.value
        });
    }

    //when new memory is submitted, prevent default
    //make a POST request to the json
    //set the new memories array to include the new memory
    //reset the form data to be blank
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

    //if password is not correct, then disabled all forms and buttons
    //if password is correct, enable all forms and buttons
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
                <button disabled={!passActive}>Submit</button>
            </form>
        </div>) : null

    )
}

export default MemoryForm;