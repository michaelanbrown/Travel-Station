import React, { useState } from "react";
import './App.css';
import MemoryList from "./MemoryList";
import MemoryForm from "./MemoryForm";
import FilterState from "./FilterState";
import Password from "./Password";

function Memories({ passActive, setPassActive, handlePasswordChange, memoryPassActive, setMemoryPassActive, setPasswordData, passwordData, password, memories, setMemories, formDataMemory, setFormDataMemory, handleStateFilter }) {
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

    // function handleMemoryPasswordChange(e) {
    //     setPasswordData(e.target.value);
    //     if(e.target.value !== password) {
    //         setMemoryPassActive(false)
    //     } else {
    //         setMemoryPassActive(true)
    //     }
    // }

    return (
        <div className="Want">
            <Password setPasswordData={setPasswordData} passwordData={passwordData} password={password} passActive={passActive} setPassActive={setPassActive} handlePasswordChange={handlePasswordChange} />
            <button disabled={!passActive} onClick={handleWantMemoryClick}>{wantMemoryValue}</button>
            <MemoryForm memories={memories} setMemories={setMemories} formDataMemory={formDataMemory} setFormDataMemory={setFormDataMemory} wantMemory={wantMemory}/>
            <br></br>
            <br></br>
            <FilterState handleStateFilter={handleStateFilter}/>
            {memoryListRender}
        </div>
    )
}

export default Memories;