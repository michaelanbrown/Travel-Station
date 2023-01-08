import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header"
import TravelPast from "./TravelPast"
import TravelFuture from "./TravelFuture"
import Memories from "./Memories"
import Featured from "./Featured"

function App() {
    //password to edit
    const password = "Phase2ProjectMichaelaTravels"
    //array of places I have been to (past)
    const [travels, setTravels] = useState([])
    //last place I went to
    const [lastTravel, setLastTravel] = useState({})
    //future travel plans
    const [future, setFuture] = useState([])
    //memories from travels
    const [memories, setMemories] = useState([])
    //password input
    const [passwordData, setPasswordData] = useState("")
    //is the password correct to be able to edit
    const [passActive, setPassActive] = useState(false)
    //form data for future travel plans
    const [formData, setFormData] = useState({
        city: "",
        state: "",
        date: "",
        reason: "",
        photo: ""
    });
    //complete button data in future plans to translate it to travelpast
    const [completeData, setCompleteData] = useState({
        city: "",
        state: "",
        date: "",
        photo: ""
    })
    //memory form data to input new memories
    const [formDataMemory, setFormDataMemory] = useState({
        city: "",
        state: "",
        date: "",
        memories: ""
    });
    //filter functionality to filter by the selected state category for past travels
    const [selectedPastCategory, setSelectedPastCategory] = useState("");

    //filter functionality to filter by the selected state category for memories
    const [selectedMemoryCategory, setselectedMemoryCategory] = useState("");

    //sets the selected category to the input value
    function handlePastStateFilter(event) {
        setSelectedPastCategory(event.target.value);
    }
    
    //filters travels by the selected category
    const visibleTravels = travels.filter((travel) => {
        if (selectedPastCategory === "") return true;
        return travel.state === selectedPastCategory
    })

    //sets the selected category to the input value
    function handleMemoryStateFilter(event) {
        setselectedMemoryCategory(event.target.value);
    }

    //filters the memories by the selected category
    const visibleMemories = memories.filter((memory) => {
        if (selectedMemoryCategory === "") return true;
        return memory.state === selectedMemoryCategory
    })

    //generate the travel data and the last travel after rendering the page
    useEffect(() => {
        fetch("https://travel-station-data.onrender.com/travels")
        .then(r => r.json())
        .then(data => {
            setTravels(data);
            setLastTravel(data[data.length-1])
        })
    },[])

    //generate the future travel plan data after rendering the page
    useEffect(() => {
        fetch("https://travel-station-data.onrender.com/future")
        .then(r => r.json())
        .then(data => {
            setFuture(data);
        })
    },[])

    //generate the memory data after rendering the page
    useEffect(() => {
        fetch("https://travel-station-data.onrender.com/memories")
        .then(r => r.json())
        .then(data => {
            setMemories(data);
        })
    },[])

    //password functionality to add/edit memories is set based on the input value
    function handlePasswordChange(e) {
        setPasswordData(e.target.value);
        if(e.target.value !== password) {
            setPassActive(false)
        } else {
            setPassActive(true)
        }
    }

    // after marking a plan complete this will add the trip to the past travels array and
    // change the last travel data
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

  //Switch renders a boolean. It's a controlled component  that requires an onValueChange
  //callback that updates the value prop in order for the component to reflect user actions
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/">
                <Featured travels={lastTravel}/>
            </Route>
            <Route exact path="/past">
                <TravelPast travels={visibleTravels} handleStateFilter={handlePastStateFilter}/>
            </Route>
            <Route exact path="/plans">
                <TravelFuture handleCompleteAdd={handleCompleteAdd} setLastTravel={setLastTravel} passActive={passActive} setPassActive={setPassActive} handlePasswordChange={handlePasswordChange} setPasswordData={setPasswordData} passwordData={passwordData} password={password} completeData={completeData} setCompleteData={setCompleteData} travels={travels} setTravels={setTravels} future={future} setFuture={setFuture} formData={formData} setFormData={setFormData}/>
            </Route>
            <Route exact path="/memories">
                <Memories passActive={passActive} setPassActive={setPassActive} handlePasswordChange={handlePasswordChange} setPasswordData={setPasswordData} passwordData={passwordData} password={password} handleStateFilter={handleMemoryStateFilter} memories={visibleMemories} setMemories={setMemories} formDataMemory={formDataMemory} setFormDataMemory={setFormDataMemory}/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;