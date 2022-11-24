import React from "react";
import "../styles/About.css";
import Container from "react-bootstrap/Container";

export default function About() {
  return (
    <div className="about">
      <Container>
        <h3>About Me</h3>
        <p>
          Donec at tempus lectus, vitae dictum augue. Sed rhoncus tellus sed
          facilisis fermentum. Duis cursus luctus sapien vitae tempor.
          Vestibulum tempor suscipit aliquet. Ut iaculis felis mauris, ut ornare
          risus rhoncus eu. Proin sem mauris, faucibus vitae lobortis ac, congue
          ac nibh. Maecenas eget iaculis sem.{" "}
        </p>
      </Container>
    </div>
  );
}