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

    useEffect(() => {
        fetch("http://localhost:3000/travels")
        .then(r => r.json())
        .then(data => {
            setTravels(data);
            setLastTravel([data[data.length-1]])
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
                <TravelFuture />
            </Route>
            <Route exact path="/memories">
                <Memories />
            </Route>
        </Switch>
    </div>
  );
}

export default App;