import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavBar ()  {
    return (
        <nav>
            <NavLink exact to="/">Past Travels</NavLink>
            <NavLink excact to="/plans">Future Travels</NavLink>
            <NavLink exact to="/memories">Memories</NavLink>
        </nav>
    )
}