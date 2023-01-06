import React, { useState } from "react";
import './App.css';
import MemoryList from "./MemoryList";
import MemoryForm from "./MemoryForm";
import FilterState from "./FilterState";

function Memories({ memories, setMemories, formDataMemory, setFormDataMemory, handleStateFilter }) {
    const [wantMemory, setWantMemory] = useState(false)
    const [wantMemoryValue, setWantMemoryValue] = useState("Want to submit a new memory?")
    const memoryListRender = memories.map (memory => {
        return (
           <MemoryList setMemories={setMemories} memories={memories} memory={memory} key={memory.id} />
        )
    })

    function handleWantMemoryClick() {
        setWantMemory(wantMemory => !wantMemory)
        if (wantMemory === true) {
            setWantMemoryValue("Want to submit a new memory?")
        } else if (wantMemory === false) {
            setWantMemoryValue("Done submitting memories?")
        }
    }

    return (
        <div className="Want">
            <button onClick={handleWantMemoryClick}>{wantMemoryValue}</button>
            <MemoryForm memories={memories} setMemories={setMemories} formDataMemory={formDataMemory} setFormDataMemory={setFormDataMemory} wantMemory={wantMemory}/>
            <FilterState handleStateFilter={handleStateFilter}/>
            {memoryListRender}
        </div>
    )
}

export default Memories;