import React from "react";
import "../styles/About.css";
import Container from "react-bootstrap/Container";
import myPic from "../assets/rdg6426-cropped.png";

export default function About() {
  return (
    <div className="about">
      <Container className="pt-3 pb-3">
        <h3 className="pb-3">About Me</h3>
        <img src={myPic} alt="raiza-headshot" />
        <p>
          Donec at tempus lectus, vitae dictum augue. Sed rhoncus tellus sed
          facilisis fermentum. Duis cursus luctus sapien vitae tempor.
          Vestibulum tempor suscipit aliquet. Ut iaculis felis mauris, ut ornare
          risus rhoncus eu. Proin sem mauris, faucibus vitae lobortis ac, congue
          ac nibh. Maecenas eget iaculis sem.
        </p>
      </Container>
    </div>
  );
}