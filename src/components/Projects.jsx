import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import gardnrScreenshot from "../assets/projects/gardnr-weatherwarning.png";
import jungleRailsScreenshot from "../assets/projects/jungle-rails-home.png";
import schedulerScreenshot from "../assets/projects/scheduler-newappt.png";
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
              <p>
                A React application integrated with a weather API allowing users
                to manage their garden plants' unique watering schedules.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jungleRailsScreenshot}
              alt="Jungle Rails screenshot"
            />
            <Carousel.Caption>
              <h5>Jungle Rails</h5>
              <p>An e-commerce plant app built with Ruby on Rails.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={schedulerScreenshot}
              alt="Scheduler screenshot"
            />
            <Carousel.Caption>
              <h5>Scheduler</h5>
              <p>
                A single-page React app allowing users to book, edit, and cancel
                interviews.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={findersSneakersScreenshot}
              alt="FindersSneakers screenshot"
            />
            <Carousel.Caption>
              <h5>FindersSneakers</h5>
              <p>A multi-page buy/sell app for sneaker lovers!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}