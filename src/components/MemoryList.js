import React from 'react';
import './App.css';

function MemoryList({ memories, memory, setMemories }) {

    function deleteMemory(deletedMemory) {
        const updatedMemory = memories.filter((mem) => mem.id !== deletedMemory.id);
        setMemories(updatedMemory)
    }

    function handleMemoryDelete() {
        fetch(`https://travel-station-data.onrender.com/memories/${memory.id}`, {
        method: "DELETE",
        })
        .then(r => r.json())
        .then(() => deleteMemory(memory))
    }
    
    return (
            <div>
                <button onClick={handleMemoryDelete} className="delete">🗑️</button>
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