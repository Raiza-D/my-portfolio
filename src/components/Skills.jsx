import React from "react";
import "../styles/Skills.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import HTML from "../assets/skills/html.png";

export default function Skills() {
  return (
    <div className="skills pb-3">
      <Container>
        <h3 className="pt-3 pb-3">Skills</h3>
        <Card bg="dark" style={{ width: "10rem" }} className="card">
          {/* <Card.Img variant="top" src="../assets/skills/html.png" /> */}
          <Card.Body className="text-center">
            <img src={HTML} width="40" alt="html-logo"/>
            <Card.Title className="text-center">HTML</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}