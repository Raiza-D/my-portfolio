import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <Container className="pt-3">
        <h3 className="pb-3">Contact</h3>
        <p>Connect with me on these platforms:</p>
      </Container>
    </div>
  );
}