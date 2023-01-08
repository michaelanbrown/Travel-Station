import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';

export default function NavBar ()  {

    //nav link to each page
    return (
        <nav className="NavBar">
            <NavLink exact to="/" activeStyle={{color: 'blue'}} style={{color: 'black'}}>Featured Travels</NavLink>
            <br></br>
            <NavLink exact to="/past" activeStyle={{color: 'blue'}} style={{color: 'black'}}>Past Travels</NavLink>
            <br></br>
            <NavLink exact to="/plans" activeStyle={{color: 'blue'}} style={{color: 'black'}}>Future Travels</NavLink>
            <br></br>
            <NavLink exact to="/memories" activeStyle={{color: 'blue'}} style={{color: 'black'}}>Memories</NavLink>
        </nav>
    )
}