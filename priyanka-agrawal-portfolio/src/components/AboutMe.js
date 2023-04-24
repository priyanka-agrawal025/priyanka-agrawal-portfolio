import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/esm/Image";
import image from "../assets/aboutmepic.jpg";


function AboutMe() {
  return (
    <div className="justify-content-center">
    <Card style={{ width: '40rem' }} className="m-4">
      <Image variant="top" src={image} thumbnail />
      <Card.Body>
        <Card.Title>Junior Front-End Developer</Card.Title>
        <Card.Text>
          Hello! My name is Priyanka Agrawal, I am a Junior Developer looking to jumpstart my career in the tech industry. I am open to new work experiences. Navigate through this page to see my past works and reach out if you are interested!!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default AboutMe;