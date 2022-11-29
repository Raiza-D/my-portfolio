import React from "react";
import "../styles/Skills.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function Skills() {
  return (
    <div className="skills pb-3">
      <Container>
        <h3 className="pt-3 pb-3">Skills</h3>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}