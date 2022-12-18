import React from "react";
import Container from "react-bootstrap/Container";
import gardnrScreenshot from "../assets/projects/gardnr-weatherwarning.png";
import jungleRailsScreenshot from "../assets/projects/jungle-rails-home.png";
import schedulerScreenshot from "../assets/projects/scheduler-newappt.png";
import findersSneakersScreenshot from "../assets/projects/finderssneakers-index-loggedin.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/Projects.css";


export default function Projects() {

  const projects = [
    {
      id: 1,
      name: "Gardnr",
      photo: gardnrScreenshot,
      link: "https://github.com/Raiza-D/GARDNR-Final-Project",
      description:
        "A multi-page React app integrated with a weather API allowing users to manage their garden plants' watering schedules.",
    },
    {
      id: 2,
      name: "Jungle Rails",
      photo: jungleRailsScreenshot,
      link: "https://github.com/Raiza-D/jungle-rails",
      description:
        "An e-commerce Rails app built for learniing Rails through example.",
    },
    {
      id: 3,
      name: "Scheduler",
      photo: schedulerScreenshot,
      link: "https://github.com/Raiza-D/scheduler",
      description:
        "A single-page React application allowing users to create, edit, and delete interview appointments.",
    },
    {
      id: 4,
      name: "FindersSneakers",
      photo: findersSneakersScreenshot,
      link: "https://github.com/Raiza-D/Midterm-Finders-Sneakers",
      description: "A multi-page buy/sell listing application for sneaker lovers!"
    },
  ];



  return (
    <div id="projects" className="pb-5">
      <Container>
        <h3 className="pt-3">Projects</h3>
        <div className="d-flex justify-content-evenly">
          {projects.map(project => {
            return (
              <Card
                bg="light"
                text="dark"
                style={{ width: "18rem" }}
                className="text-center"
              >
                <Card.Img variant="top" src={project.photo} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <Button variant="primary">Learn more</Button>
                  </a>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}