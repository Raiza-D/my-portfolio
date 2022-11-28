import React from "react";
import "../styles/About.css";
import Container from "react-bootstrap/Container";
import myPic from "../assets/rdg6426-cropped.png";

export default function About() {
  return (
    <div className="about">
      <Container className="pt-3 pb-3">
        <h3 className="pb-3">About Me</h3>
        <div className="d-flex">
          <img src={myPic} alt="raiza-headshot" width="219" height="213" className="pe-3"/>
          <div>
            <p>
              Hello there! I'm Raiza, nice to e-meet you. In 2021, I re-discovered coding and was reminded how exciting and rewarding it was to see a visual representation of a piece of code you have written. Since then, I turned my
              love of resolving inventory variances into solving coding
              challenges by pursuing a career in Web Development.
            </p>
            <p>
              I have over eight years of experience working in a team-focused
              and client-oriented environment, working closely with people from
              different departments and across varying reporting levels within
              an organization. I'm excited to launch my new career in tech and
              utilize my invaluable experiences in a Web Development capacity.
              My preference is the Front-End, as I love the visuals, but I'm
              equally eager to apply my skills and continue learning in a
              Full-Stack role.
            </p>
            <p>
              When I'm not indoors crafting code, I can be found hiking in
              nature and happily standing on top of a long-awaited mountain peak
              beaming my signature, exceptionally-friendly smile.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}