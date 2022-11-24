import React from "react";
import "../styles/About.css";
import Container from "react-bootstrap/Container";
import myPic from "../assets/rdg6426-cropped.png";

export default function About() {
  return (
    <div className="about">
      <Container className="pt-3 pb-3">
        <h3 className="pb-3">About Me</h3>
        <div>
          <img src={myPic} alt="raiza-headshot" />
          <div>
            <p>
              Hello there, Visitor! I'm Raiza, nice to e-meet you. I turned my love of resolving inventory variances into solving coding challenges when I re-discovered coding in 2021 and decided to pursue it as a career.
            </p>
            <p>
              I have over eight years of experience working in a team-focused and client-oriented environment, working closely with people from different departments and across varying reporting levels within an organization. I'm excited to launch my new career in tech and utilize my invaluable experiences in a Web Development capacity. My preference is the Front-End, as I love the visuals, but I'm equally eager to apply my skills and continue learning in a Full-Stack role.
            </p>
            <p>
              When I'm not indoors crafting code, I can be found hiking in nature and happily standing on top of a long-awaited mountain peak beaming my signature, exceptionally-friendly smile.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}