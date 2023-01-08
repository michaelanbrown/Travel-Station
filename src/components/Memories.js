import React, { useState } from "react";
import './App.css';
import MemoryList from "./MemoryList";
import MemoryForm from "./MemoryForm";
import FilterState from "./FilterState";
import Password from "./Password";

function Memories({ passActive, setPassActive, handlePasswordChange, setPasswordData, passwordData, password, memories, setMemories, formDataMemory, setFormDataMemory, handleStateFilter }) {
    //wantMemory sets the contents of the button based on if the client wants to enter a new memory
    const [wantMemory, setWantMemory] = useState(false)
    //contents of the button
    const [wantMemoryValue, setWantMemoryValue] = useState("Want to submit a new memory?")
    //for each memory, render a card and gives it a key
    const memoryListRender = memories.map (memory => {
        return (
           <MemoryList passActive={passActive} setMemories={setMemories} memories={memories} memory={memory} key={memory.id} />
        )
    })

    //handle the change of the button context
    //if the button is pressed, change the contents of the button to true or false
    //if true, then display "Done submitting memories?" so that once done, the client can hide the form
    //if false, then display "Want to submit a new memory?" so that the client can show the form
    function handleWantMemoryClick() {
        setWantMemory(wantMemory => !wantMemory)
        if (wantMemory === true) {
            setWantMemoryValue("Want to submit a new memory?")
        } else if (wantMemory === false) {
            setWantMemoryValue("Done submitting memories?")
        }
    }

    //if password is not correct, then disabled all forms and buttons
    //if password is correct, enable all forms and buttons
    return (
        <div className="Want">
            <Password setPasswordData={setPasswordData} passwordData={passwordData} password={password} passActive={passActive} setPassActive={setPassActive} handlePasswordChange={handlePasswordChange} />
            <button disabled={!passActive} onClick={handleWantMemoryClick}>{wantMemoryValue}</button>
            <MemoryForm passActive={passActive} memories={memories} setMemories={setMemories} formDataMemory={formDataMemory} setFormDataMemory={setFormDataMemory} wantMemory={wantMemory}/>
            <br></br>
            <br></br>
            <FilterState handleStateFilter={handleStateFilter}/>
            {memoryListRender}
        </div>
    )
}

export default Memories;