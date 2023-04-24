import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from "react-bootstrap/esm/CardImg";
import image from "../assets/aboutmepic.jpg";


function AboutMe() {
  return (
    <Card style={{ width: '40rem' }}>
      <CardImg variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;