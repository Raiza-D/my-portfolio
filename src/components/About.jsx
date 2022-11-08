import React from "react";
import "../styles/About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <div className="about">
      <Container>
        <Row>About Me</Row>
        <Row></Row>
        <Row></Row>
      </Container>
    </div>
  );
}