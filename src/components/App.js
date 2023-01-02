import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header"
import TravelPast from "./TravelPast"
import TravelFuture from "./TravelFuture"
import Memories from "./Memories"
import Featured from "./Featured"

function App() {
    // const [travels, setTravels] = useState([])

    // useEffect(() => {
    //     fetch()
    // })

  return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/">
                <Featured />
            </Route>
            <Route exact path="/past">
                <TravelPast />
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