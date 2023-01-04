import React from "react";
import './App.css';
import MemoryList from "./MemoryList";

function Memories({ memories }) {
    const memoryListRender = memories.map (memory => {
        return (
           <MemoryList memory={memory} key={memory.id} />
        )
    })

    return (
        <div>
            {memoryListRender}
        </div>
    )
}

export default Memories;