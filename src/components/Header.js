import React from "react";
import NavBar from "./NavBar";

function Header() {

  return (
    <>
    <div>
      <header>
        <h1>
        ✈️ Come travel with us! 🌍
        <br/>
        </h1>
          <p><em>Remember all of the wonderful times you've experienced with Travel Station!</em></p>
        <div>
            <br></br>
            <NavBar />
        </div>  
      </header>
    </div>
    </>
  );
}

export default Header;