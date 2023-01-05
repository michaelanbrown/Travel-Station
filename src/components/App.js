import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header"
import TravelPast from "./TravelPast"
import TravelFuture from "./TravelFuture"
import Memories from "./Memories"
import Featured from "./Featured"

function App() {
    const [travels, setTravels] = useState([])
    const [lastTravel, setLastTravel] = useState([])
    const [future, setFuture] = useState([])
    const [memories, setMemories] = useState([])
    const [formData, setFormData] = useState({
        city: "",
        state: "",
        date: "",
        reason: "",
        photo: ""
    });

    useEffect(() => {
        fetch("http://localhost:3000/travels")
        .then(r => r.json())
        .then(data => {
            setTravels(data);
            setLastTravel([data[data.length-1]])
        })
    },[])

    useEffect(() => {
        fetch("http://localhost:3000/future")
        .then(r => r.json())
        .then(data => {
            setFuture(data);
        })
    },[])

    useEffect(() => {
        fetch("http://localhost:3000/memories")
        .then(r => r.json())
        .then(data => {
            setMemories(data);
        })
    },[])

  return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/">
                <Featured travels={lastTravel}/>
            </Route>
            <Route exact path="/past">
                <TravelPast travels={travels} />
            </Route>
            <Route exact path="/plans">
                <TravelFuture future={future} setFuture={setFuture} formData={formData} setFormData={setFormData}/>
            </Route>
            <Route exact path="/memories">
                <Memories memories={memories}/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;