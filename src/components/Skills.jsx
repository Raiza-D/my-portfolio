import React from "react";
import "../styles/Skills.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "../assets/skills/html.png";

export default function Skills() {
  return (
    <div className="skills pb-3">
      <Container>
        <h3 className="pt-3 pb-3">Skills</h3>
        <Card style={{ width: "13rem" }} className="card">
          <Card.Img variant="top" src="../assets/skills/html.png" />
          <Card.Body>
            <Card.Title className="text-center">Card Title</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}