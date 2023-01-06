import React from 'react';
import './App.css';

function MemoryList({ memory }) {
    
    return (
            <div>
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