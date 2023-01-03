import React from "react";
import "../styles/Home.css";

import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div id="home" className="home-section d-flex justify-content-center ps-3 pe-3">
      <div>
        <p className="p-square-brack">[ ]</p>
      </div>
      <div>
        <p className="p-my-name">Raiza De Guzman</p>
        <p className="p-my-title">Full-Stack Web Developer_</p>
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
