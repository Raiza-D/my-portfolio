import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import gardnrScreenshot from "../assets/projects/gardnr-weatherwarning.png";
import jungleRailsScreenshot from "../assets/projects/jungle-rails-home.png";
import schedulerScreenshot from "../assets/projects/jungle-rails-home.png";
import findersSneakersScreenshot from "../assets/projects/finderssneakers-index-loggedin.png";


export default function Projects() {
  return (
    <div id="projects">
      <Container>
        <h3 className="pt-3">Projects</h3>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={gardnrScreenshot}
              alt="Gardnr screenshot"
            />
            <Carousel.Caption>
              <h5>Gardnr</h5>
              <p>A React application integrated with a weather API allowing users to manage their garden plants' unique watering schedules.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jungleRailsScreenshot}
              alt="Jungle Rails screenshot"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=e5e5e5"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}