import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return(
        <>
        <footer className="footer bg-dark">
        <div className="container container-fluid p-5 bg-light">
        <FontAwesomeIcon icon={faEnvelope} />
        </div>
        </footer>
        </>
        );
}

export default Footer;