import React from "react";
import Container from "react-bootstrap/Container";
import gardnrScreenshot from "../assets/projects/gardnr-weatherwarning.png";
import jungleRailsScreenshot from "../assets/projects/jungle-rails-home.png";
import schedulerScreenshot from "../assets/projects/scheduler-newappt.png";
import findersSneakersScreenshot from "../assets/projects/finderssneakers-index-loggedin.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default function Projects() {
  return (
    <div id="projects" className="pb-5">
      <Container>
        <h3 className="pt-3">Projects</h3>
      </Container>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={gardnrScreenshot} />
        <Card.Body>
          <Card.Title>Gardnr</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}