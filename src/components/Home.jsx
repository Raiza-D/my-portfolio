import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import computerIcon from "../assets/computer-icon.png";

export default function Home() {
  return (
    <div id="home" className="home-section d-flex justify-content-center ps-3 pe-3">
      <img src={computerIcon} alt="Computer icon" width="200" height="200" className="home-img" />
      <div>
        <p className="p-my-name">Raiza De Guzman</p>
        <p className="p-my-title">
          <Typewriter options={{
            strings: ["Full-Stack Web Developer", "Hello and welcome"],
            autoStart: true,
            loop: true,
            delay: 90,
            
          }}
          />
        </p>
          
      </div>
    </div>
  );
}
