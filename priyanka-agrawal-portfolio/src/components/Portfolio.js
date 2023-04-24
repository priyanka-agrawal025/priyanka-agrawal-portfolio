import React from "react";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import MainNav from "./Navbar";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import Footer from "./Footer";

function Portfolio() {
    return (
        <>
            <Router>
                <MainNav />
                <Routes>
                    <Route exact path='/home' element={<AboutMe />} />
                    <Route path='/about' element={<AboutMe />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/portfolio' element={<Projects />} />
                    <Route path='/resume' element={<Resume />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default Portfolio;