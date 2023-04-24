import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import Vilca from "../assets/vilca.png";
import WeatherApp from "../assets/weather-app.png"
import Movie from "../assets/random-movie.png"

function Projects() {

    return (
        <Carousel className="m-4 rounded" variant="dark">
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={Vilca} rounded fluid
                    alt="First slide"
                />
            <Carousel.Caption>
                <h3>Vilca Events</h3>
                <p>A full stack application created as a solution to hundreds of flyers being taped up around the city.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={WeatherApp} rounded fluid
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={Movie} rounded fluid
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Projects;