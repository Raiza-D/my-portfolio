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
import cypressLogo from "../assets/skills/cypress.svg";
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
          <img src={myPic} alt="raiza-headshot" width="219" height="213" className="about-img pe-3"/>
          <div>
            <p>
              Hello, I'm Raiza. Nice to e-meet you! In 2022, I re-discovered coding and was reminded how rewarding it is to see a graphic representation of the code you have written. Since then, I decided to pursue a career in Web Development.
            </p>
            <p>
              I'm excited to work in tech and
              utilize my invaluable experiences and skills in a Web Development capacity.
              My preference is the Front-End, as I love the visuals, but I'm
              equally eager to apply my skills and continue learning in a
              Full-Stack role.
            </p>
            <p>
              When I'm not indoors crafting code, I can be found hiking in
              nature, happily standing on top of a long-awaited mountain peak and thinking about which mountain top to summit next.
            </p>
          </div>
        </div>
        <hr />
        <p>These are some technologies I have worked with:</p>
        <br />
        <div className="text-center">
          {skills.map(skill => {
            return (
              <a
                href={skill.link}
                target="_blank"
                rel="noreferrer"
                key={skill.id}
              >
                <img src={skill.img} alt={skill.alt} width="110" height="80" className="skills-img pe-4" />
              </a>
            );
          })}
        </div>

      </Container>
    </div>
  );
}