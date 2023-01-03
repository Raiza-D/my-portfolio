import React from "react";
import myLogo from "../assets/rdg-logo-transparent.png";
import "../styles/Navigation.css";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {

  return (
    <div className="fw-bold">
      <Navbar
        className="d-flex justify-content-between ps-3 pe-3" bg="myOrange"
        fixed="top">
        <Navbar.Brand>
          <Nav.Link href="#home">
            <img src={myLogo} alt="rdg" width="100px" height="40px" />
          </Nav.Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}