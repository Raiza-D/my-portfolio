import React from "react";
import myLogo from "../assets/rdg-logo-transparent.png";
import "../styles/Navigation.css";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {

  return (
    <div className="menu">
      <Navbar>
        <Navbar.Brand>
          <img src={myLogo} width="100px" height="40px" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="about-me">About Me</Nav.Link>
          <Nav.Link href="skills">Skills</Nav.Link>
          <Nav.Link href="projects">Projects</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}