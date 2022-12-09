import React from "react";
import "../styles/About.css";
import Container from "react-bootstrap/Container";
import myPic from "../assets/rdg6426-cropped.png";
import htmlLogo from "../assets/skills/html5.svg";
import cssLogo from "../assets/skills/css3.svg";
import javascriptLogo from "../assets/skills/javascript.svg";
import rubyLogo from "../assets/skills/ruby.svg";
import reactLogo from "../assets/skills/reactjs.svg";
import bootstrapLogo from "../assets/skills/bootstrap.svg";
import sassLogo from "../assets/skills/sass.svg";
import expressLogo from "../assets/skills/express.svg";
import rubyOnRailsLogo from "../assets/skills/ruby-on-rails.svg";
import postgresqlLogo from "../assets/skills/postgresql.svg";
import cypressLogo from "../assets/skills/cypress.png";
import nodeLogo from "../assets/skills/nodejs.svg";
import npmLogo from "../assets/skills/npm.svg";
import gitLogo from "../assets/skills/git.svg";


export default function About() {

  const skills = [
    {
      id: 1,
      img: htmlLogo,
      alt: "HTML logo",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 2,
      img: cssLogo,
      alt: "CSS3 Logo",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
  ];



  return (
    <div className="about">
      <Container className="pt-3 pb-3">
        <h3 className="pb-3">About Me</h3>
        <div className="d-flex">
          <img src={myPic} alt="raiza-headshot" width="219" height="213" className="pe-3"/>
          <div>
            <p>
              Hello there! I'm Raiza, nice to e-meet you. In 2021, I re-discovered coding and was reminded how exciting and rewarding it was to see a visual representation of a piece of code you have written. Since then, I left my career in Inventory Management resolving inventory variances to pursue a career in Web Development solving coding challenges.
            </p>
            <p>
              I have over eight years of experience working in a team-focused
              and client-oriented environment, working closely with people from
              different departments and across varying reporting levels within
              an organization. I'm excited to launch a new career in tech and
              utilize my invaluable experiences in a Web Development capacity.
              My preference is the Front-End, as I love the visuals, but I'm
              equally eager to apply my skills and continue learning in a
              Full-Stack role.
            </p>
            <p>
              When I'm not indoors crafting code, I can be found hiking in
              nature, happily standing on top of a long-awaited mountain peak
              beaming my signature, exceptionally friendly smile and thinking about which mountain top to summit next.
            </p>
          </div>
        </div>
        <hr />
        <p>These are some technologies I know and have worked with.</p>
      </Container>
    </div>
  );
}