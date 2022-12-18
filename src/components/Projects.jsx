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
  return (
    <div id="projects" className="pb-5 projects-section">
      <Container>
        <h3 className="pt-3">Projects</h3>
      </Container>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={gardnrScreenshot} />
        <Card.Body>
          <Card.Title>Gardnr</Card.Title>
          <Card.Text>
            A multi-page React application integrated with a weather API allowing users to manage their garden plants' watering schedules.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}