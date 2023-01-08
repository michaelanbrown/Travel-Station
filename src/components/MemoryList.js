import React from 'react';
import './App.css';

function MemoryList({ memories, memory, setMemories, passActive }) {

    //delete a memory from the memories by filtering the memory array based on id
    //set the memory array to the newly updated array
    function deleteMemory(deletedMemory) {
        const updatedMemory = memories.filter((mem) => mem.id !== deletedMemory.id);
        setMemories(updatedMemory)
    }

    //handle the deletion of the memory from the json based on the id
    //use the deleteMemory funtion to set the array and display the new array of memories on the page
    function handleMemoryDelete() {
        fetch(`https://travel-station-data.onrender.com/memories/${memory.id}`, {
        method: "DELETE",
        })
        .then(r => r.json())
        .then(() => deleteMemory(memory))
    }
    
    //if password is not correct, then disabled all forms and buttons
    //if password is correct, enable all forms and buttons
    return (
            <div>
                <button disabled={!passActive} onClick={handleMemoryDelete} className="delete"><span role="img" aria-label="delete">🗑️</span></button>
                <br></br>
                <h1>{memory.city}</h1>
                <h2>{memory.state}</h2>
                <h3>{memory.date}</h3>
                <p>Memories:</p>
                {memory.memories}
                <br></br>
                <br></br>
            </div>

    )
}

export default MemoryList;