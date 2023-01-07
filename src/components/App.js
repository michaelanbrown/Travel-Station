import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header"
import TravelPast from "./TravelPast"
import TravelFuture from "./TravelFuture"
import Memories from "./Memories"
import Featured from "./Featured"

function App() {
    const password = "Phase2ProjectMichaelaTravels"
    const [travels, setTravels] = useState([])
    const [lastTravel, setLastTravel] = useState({})
    const [future, setFuture] = useState([])
    const [memories, setMemories] = useState([])
    const [memoryPassActive, setMemoryPassActive] = useState(false)
    const [futurePassActive, setFuturePassActive] = useState(false)
    const [passwordData, setPasswordData] = useState("")
    const [passActive, setPassActive] = useState(false)
    const [formData, setFormData] = useState({
        city: "",
        state: "",
        date: "",
        reason: "",
        photo: ""
    });
    const [completeData, setCompleteData] = useState({
        city: "",
        state: "",
        date: "",
        photo: ""
    })
    const [formDataMemory, setFormDataMemory] = useState({
        city: "",
        state: "",
        date: "",
        memories: ""
    });
    const [selectedCategory, setSelectedCategory] = useState("");

    function handleStateFilter(event) {
        setSelectedCategory(event.target.value);
    }

    const visibleTravels = travels.filter((travel) => {
        if (selectedCategory === "") return true;
        return travel.state === selectedCategory
    })

    const visibleMemories = memories.filter((memory) => {
        if (selectedCategory === "") return true;
        return memory.state === selectedCategory
    })


    useEffect(() => {
        fetch("https://travel-station-data.onrender.com/travels")
        .then(r => r.json())
        .then(data => {
            setTravels(data);
            setLastTravel(data[data.length-1])
        })
    },[])

    useEffect(() => {
        fetch("https://travel-station-data.onrender.com/future")
        .then(r => r.json())
        .then(data => {
            setFuture(data);
        })
    },[])

    useEffect(() => {
        fetch("https://travel-station-data.onrender.com/memories")
        .then(r => r.json())
        .then(data => {
            setMemories(data);
        })
    },[])

    function handlePasswordChange(e) {
        setPasswordData(e.target.value);
        if(e.target.value !== password) {
            setPassActive(false)
        } else {
            setPassActive(true)
        }
    }

    function handleCompleteAdd(futureEvent) {
        fetch("https://travel-station-data.onrender.com/travels", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            city: futureEvent.city,
            state: futureEvent.state,
            date: futureEvent.date,
            photo: futureEvent.photo
        }),
        })
        .then(r => r.json())
        .then(data => {
            setTravels([...travels, data]);
            setLastTravel(data)
        })
    }


  return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/">
                <Featured travels={lastTravel}/>
            </Route>
            <Route exact path="/past">
                <TravelPast travels={visibleTravels} handleStateFilter={handleStateFilter}/>
            </Route>
            <Route exact path="/plans">
                <TravelFuture handleCompleteAdd={handleCompleteAdd} setLastTravel={setLastTravel} passActive={passActive} setPassActive={setPassActive} handlePasswordChange={handlePasswordChange} setPasswordData={setPasswordData} passwordData={passwordData} futurePassActive={futurePassActive} setFuturePassActive={setFuturePassActive} password={password} completeData={completeData} setCompleteData={setCompleteData} travels={travels} setTravels={setTravels} future={future} setFuture={setFuture} formData={formData} setFormData={setFormData}/>
            </Route>
            <Route exact path="/memories">
                <Memories passActive={passActive} setPassActive={setPassActive} handlePasswordChange={handlePasswordChange} setPasswordData={setPasswordData} passwordData={passwordData} memoryPassActive={memoryPassActive} setMemoryPassActive={setMemoryPassActive} password={password} handleStateFilter={handleStateFilter} memories={visibleMemories} setMemories={setMemories} formDataMemory={formDataMemory} setFormDataMemory={setFormDataMemory}/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;