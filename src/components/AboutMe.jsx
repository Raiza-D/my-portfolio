import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/AboutMe.css";
import myPic from "../assets/about-me/rdg6426-cropped.png";
import htmlLogo from "../assets/about-me/html5.svg";
import cssLogo from "../assets/about-me/css3.svg";
import javascriptLogo from "../assets/about-me/javascript.svg";
import rubyLogo from "../assets/about-me/ruby.svg";
import reactLogo from "../assets/about-me/reactjs.svg";
import bootstrapLogo from "../assets/about-me/bootstrap.svg";
import sassLogo from "../assets/about-me/sass.svg";
import expressLogo from "../assets/about-me/express.svg";
import rubyOnRailsLogo from "../assets/about-me/ruby-on-rails.svg";
import postgresqlLogo from "../assets/about-me/postgresql.svg";
import cypressLogo from "../assets/about-me/cypress.svg";
import nodeLogo from "../assets/about-me/nodejs.svg";
import npmLogo from "../assets/about-me/npm.svg";
import gitLogo from "../assets/about-me/git.svg";


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
    {
      id: 3,
      img: javascriptLogo,
      alt: "JavaScript Logo",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 4,
      img: rubyLogo,
      alt: "Ruby Logo",
      link: "https://www.ruby-lang.org/en/",
    },
    {
      id: 5,
      img: reactLogo,
      alt: "React.js Logo",
      link: "https://reactjs.org/",
    },
    {
      id: 6,
      img: bootstrapLogo,
      alt: "Bootstrap Logo",
      link: "https://getbootstrap.com/",
    },
    {
      id: 7,
      img: sassLogo,
      alt: "SASS Logo",
      link: "https://sass-lang.com/",
    },
    {
      id: 8,
      img: expressLogo,
      alt: "Express.js Logo",
      link: "https://expressjs.com/",
    },
    {
      id: 9,
      img: rubyOnRailsLogo,
      alt: "Ruby On Rails Logo",
      link: "https://rubyonrails.org/",
    },
    {
      id: 10,
      img: postgresqlLogo,
      alt: "PostgreSQL Logo",
      link: "https://www.postgresql.org/",
    },
    {
      id: 11,
      img: cypressLogo,
      alt: "Cypress.io Logo",
      link: "https://www.cypress.io/",
    },
    {
      id: 12,
      img: nodeLogo,
      alt: "Node.js Logo",
      link: "https://nodejs.org/en/",
    },
    {
      id: 13,
      img: npmLogo,
      alt: "npm Logo",
      link: "https://www.npmjs.com/",
    },
    {
      id: 14,
      img: gitLogo,
      alt: "git Logo",
      link: "https://git-scm.com/",
    },
  ];

  return (
    <div id="about-me" className="aboutme-section">
      <Container className="pt-3 pb-3 about-blur">
        <h3 className="pb-3">About Me</h3>
        <div className="d-flex">
          <img
            src={myPic}
            alt="raiza-headshot"
            width="219"
            height="213"
            className="about-img pe-3"
          />
          <div>
            <p>
              Hello, I'm Raiza. Nice to e-meet you! In 2022, I re-discovered
              coding and was reminded how rewarding it is to see a graphic
              representation of the code you have written. Since then, I decided
              to grow my skill proficiency in Web Development.
            </p>
            <p>
              I have a background in Inventory Management, having worked in a
              team-driven and client-focused environment for over eight years.
              The project management, analytical and problem-solving skills I
              employed as an inventory professional transfer well into web
              development.
            </p>
            <p>
              I'm thrilled to be able to call myself a coding nerd and create web applications using both my technical skills and invaluable experiences. My preference is the
              Front-End, as I love the visuals, but I'm equally eager to apply
              my talents and continue learning in a Full-Stack role.
            </p>
            <p>
              When I'm not indoors crafting code, I can be found hiking in
              nature, happily standing on top of a long-awaited mountain peak
              and thinking about which mountain top to summit next.
            </p>
          </div>
        </div>
        <hr />
        <p>These are some technologies I have worked with:</p>
        <div className="text-center skills-list">
          {skills.map((skill) => {
            return (
              <a
                href={skill.link}
                target="_blank"
                rel="noreferrer"
                key={skill.id}
              >
                <img
                  src={skill.img}
                  alt={skill.alt}
                  width="110"
                  height="80"
                  className="skills-img pt-3 pe-4"
                />
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
}