import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/Contact.css";
import linkedInLogo from "../assets/linkedin-original-wordmark.svg";
import gitHubLogo from "../assets/github-original-wordmark.svg";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <Container className="pt-3">
        <h3 className="pb-3">Contact</h3>
        <p>Connect with me on these platforms:</p>
        <img src={linkedInLogo} alt="LinkedIn logo"width="8%" />
        <img src={gitHubLogo} alt="LinkedIn logo" width="5%" />
      </Container>
    </div>
  );
}