import React, { useState } from "react";
import './App.css';
import MemoryList from "./MemoryList";
import MemoryForm from "./MemoryForm";
import FilterState from "./FilterState";
import Password from "./Password";

function Memories({ handlePasswordChange, setPasswordData, passwordData, password, memories, setMemories }) {
  
    const [wantMemory, setWantMemory] = useState(false)
   
    const [wantMemoryValue, setWantMemoryValue] = useState("Want to submit a new memory?")
    const [selectedMemoryCategory, setselectedMemoryCategory] = useState("");
    const visibleMemories = memories.filter((memory) => {
        if (selectedMemoryCategory === "") return true;
        return memory.state === selectedMemoryCategory
    })
    const memoryListRender = visibleMemories.map (memory => {
        return (
           <MemoryList password={password} passwordData={passwordData} setMemories={setMemories} memories={visibleMemories} memory={memory} key={memory.id} />
        )
    })

    function handleMemoryStateFilter(event) {
        setselectedMemoryCategory(event.target.value);
    }
    
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
            <button disabled={!(password === passwordData)} onClick={handleWantMemoryClick}>{wantMemoryValue}</button>
            <MemoryForm password={password} passwordData={passwordData} memories={memories} setMemories={setMemories} wantMemory={wantMemory}/>
            <br></br>
            <br></br>
            <FilterState handleStateFilter={handleMemoryStateFilter}/>
            {memoryListRender}
            <Password setPasswordData={setPasswordData} passwordData={passwordData} password={password} handlePasswordChange={handlePasswordChange} />
        </div>
    )
}

export default Memories;