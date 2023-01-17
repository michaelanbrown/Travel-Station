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
    const [future, setFuture] = useState([])
    const [memories, setMemories] = useState([])
    const [passwordData, setPasswordData] = useState("")

    useEffect(() => {
        fetch("https://travel-station-data.onrender.com/travels")
        .then(r => r.json())
        .then(data => {
            setTravels(data);
        })
        fetch("https://travel-station-data.onrender.com/future")
        .then(r => r.json())
        .then(data => {
            setFuture(data);
        })
        fetch("https://travel-station-data.onrender.com/memories")
        .then(r => r.json())
        .then(data => {
            setMemories(data);
        })
    },[])

   
    function handlePasswordChange(e) {
        setPasswordData(e.target.value)
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
        })
    }


  return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/">
                <Featured travel={travels[travels.length-1]}/>
            </Route>
            <Route exact path="/past">
                <TravelPast travels={travels}/>
            </Route>
            <Route exact path="/plans">
                <TravelFuture handleCompleteAdd={handleCompleteAdd} handlePasswordChange={handlePasswordChange} setPasswordData={setPasswordData} passwordData={passwordData} password={password} travels={travels} setTravels={setTravels} future={future} setFuture={setFuture} />
            </Route>
            <Route exact path="/memories">
                <Memories handlePasswordChange={handlePasswordChange} setPasswordData={setPasswordData} passwordData={passwordData} password={password} memories={memories} setMemories={setMemories} />
            </Route>
        </Switch>
    </div>
  );
}

export default App;