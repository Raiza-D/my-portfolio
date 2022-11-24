import React from "react";
import homeBg from "../assets/programming-wp.jpg";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home d-flex justify-content-center">
      <div>
        <p className="p-square-brack">[ ]</p>
      </div>
      <div>
        <p className="p-my-name">Raiza De Guzman_</p>
        <p className="p-my-title">Full-Stack Web Developer</p>
      </div>
      {/* <img src={homeBg} alt="orange-black-wp" className="w-100"/> */}
    </div>
  );
}
