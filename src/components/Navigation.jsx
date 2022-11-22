import React from "react";
import logo from "../logo.svg";
import "../styles/Navigation.css";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {

  const categories = [
    {
      name: "Home",
      href: "#home",
      id: 1,
    },
    {
      name: "About",
      href: "#about",
      id: 2,
    },
    {
      name: "Skills",
      href: "#skills",
      id: 3,
    },
    {
      name: "Projects",
      href: "#projects",
      id: 4,
    },
    {
      name: "Contact",
      href: "#contact",
      id: 5,
    },
  ];


  return (
    <div className="menu">
      <Navbar>
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" />
          {/* Logo */}
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