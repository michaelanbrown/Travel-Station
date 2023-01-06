import React, { useState } from "react";
import './App.css';
import MemoryList from "./MemoryList";
import MemoryForm from "./MemoryForm";

function Memories({ memories, setMemories, formDataMemory, setFormDataMemory }) {
    const [wantMemory, setWantMemory] = useState(false)
    const [wantMemoryValue, setWantMemoryValue] = useState("Want to submit a new memory?")
    const memoryListRender = memories.map (memory => {
        return (
           <MemoryList memory={memory} key={memory.id} />
        )
    })

    function handleWantMemoryClick() {
        setWantMemory(wantMemory => !wantMemory)
        if (wantMemory === true) {
            setWantMemory("Want to submit a new memory?")
        } else if (wantMemory === false) {
            setWantMemory("Done submitting memories?")
        }
    }

    return (
        <div className="Want">
            <button onClick={handleWantMemoryClick}>{wantMemoryValue}</button>
            <MemoryForm memories={memories} setMemories={setMemories} formDataMemory={formDataMemory} setFormDataMemory={setFormDataMemory} wantMemory={wantMemory}/>
            {memoryListRender}
        </div>
    )
}

export default Memories;