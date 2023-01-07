import React from "react";
import NavBar from "./NavBar";
import './App.css';

function Header() {

  return (
    <div className="Header">
      <header>
        <h1>
        <span role="img" aria-label="plane">✈️</span> Come travel with us! <span role="img" aria-label="globe">🌍</span>
        <br/>
        </h1>
          <p><em>Remember all of the wonderful times you've experienced with Travel Station!</em></p>
        <div>
            <NavBar />
        </div>  
      </header>
    </div>
  );
}

export default Header;