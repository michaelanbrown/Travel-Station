import React, { useState } from "react"
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header"
import TravelPast from "./TravelPast"
import TravelFuture from "./TravelFuture"
import Memories from "./Memories"

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/">
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