import React from "react";
import CardImg from "react-bootstrap/esm/CardImg";
import image from "../assets/resume.png"

function Resume() {
    return(
        <>
        <CardImg variant="top" src={image} />
        </>
    );
}

export default Resume;