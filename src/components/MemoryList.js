import React from 'react';
import './App.css';

function MemoryList({ memory }) {
    const remembered = memory.memories
    const memoryLis = remembered.map (remember => {
        return (
            <li key={remember} className="Lis">{remember}</li>
        )
    }
    )
    
    return (
            <div>
                <br></br>
                <h1>{memory.city}</h1>
                <h2>{memory.state}</h2>
                <h3>{memory.date}</h3>
                <p>Memories:</p>
                {memoryLis}
                <br></br>
            </div>

    )
}

export default MemoryList;