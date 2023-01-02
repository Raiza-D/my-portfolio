import React from "react";
import { Container, Row } from "react-bootstrap";
// import gardnrScreenshot from "../assets/projects/gardnr-weatherwarning.png";
import jungleRailsScreenshot from "../assets/projects/jungle-rails-home.png";
import schedulerScreenshot from "../assets/projects/scheduler-newappt.png";
import findersSneakersScreenshot from "../assets/projects/finderssneakers-index-loggedin.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/Projects.css";
import tweeterGif from "../assets/projects/tweeter.gif";
import tinyAppGif from "../assets/projects/tinyapp.gif";
import gardnrGif from "../assets/projects/gardnr.gif";


export default function Projects() {

  const projects = [
    {
      id: 1,
      name: "Gardnr 🍃",
      photo: gardnrGif,
      link: "https://github.com/Raiza-D/GARDNR-Final-Project",
      description:
        "A React app integrated with Accuweather API. It allows users to manage their garden plants' watering schedules.",
      stack: "React, Bootstrap, Express, PostgreSQL",
    },
    {
      id: 2,
      name: "Jungle Rails 🪴",
      photo: jungleRailsScreenshot,
      link: "https://github.com/Raiza-D/jungle-rails",
      description:
        "An e-commerce Rails app built for learning Rails through example.",
      stack: "Ruby on Rails, Bootstrap, PostgreSQL, Stripe, Cypress",
    },
    {
      id: 3,
      name: "Scheduler 🗓️",
      photo: schedulerScreenshot,
      link: "https://github.com/Raiza-D/scheduler",
      description:
        "A single-page React application allowing users to create, edit, and delete interview appointments.",
      stack: "React, Storybook, Jest, Cypress",
    },
    {
      id: 4,
      name: "FindersSneakers 👟",
      photo: findersSneakersScreenshot,
      link: "https://github.com/Raiza-D/Midterm-Finders-Sneakers",
      description:
        "A multi-page buy/sell listing application for sneaker lovers!",
      stack: "HTML, CSS, SASS, JavaScript, jQuery, EJS, NodeJS, Express, PostgreSQL",
    },
    {
      id: 5,
      name: "Tweeter 💭",
      photo: tweeterGif,
      link: "https://github.com/Raiza-D/tweeter",
      description:
        "A simple Twitter clone allowing users to create short posts up to 140 characters and append them to the page.",
      stack: "HTML, CSS, JavaScript, jQuery, Express",
    },
    {
      id: 6,
      name: "TinyApp 📏",
      photo: tinyAppGif,
      link: "https://github.com/Raiza-D/tinyapp",
      description: "A full-stack web app to shorten URLs (à la bit.ly).",
      stack: "HTML, CSS, JavaScript, EJS, Express, NodeJS"
    },
  ];

  return (
    <div id="projects" className="projects-section pb-5">
      <Container>
        <h3 className="pt-3 pb-3">Projects</h3>
        <Row className="d-flex justify-content-between">
          {projects.map(project => {
            return (
              <Card
                bg="transparent"
                text="light"
                style={{
                  width: "20rem",
                  border: "2px solid rgb(255, 145, 0)",
                }}
                className="card-effects text-center ps-0 pe-0 ms-3 me-3 mb-5 rounded-0"
              >
                <Card.Img className="rounded-0" variant="top" src={project.photo} height="220" />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <hr className="hr-projects" />
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text>
                    <strong>Built with: </strong>{project.stack}
                  </Card.Text>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <Button className="rounded-0">Learn more</Button>
                  </a>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}