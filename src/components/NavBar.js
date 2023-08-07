import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Resume from '../assets/resume/sample.pdf';
// import Toggle from "./Toggle";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
// import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

const logoStyle = {
  color: "white",
}

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
    {/*Navbar start*/}
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} >
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo} alt="Logo" /> */}
            <h4 style={logoStyle}>Your Logo</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/"><LinkedIn className="icon" /></a>
                <a href="https://www.facebook.com/"><Facebook className="icon" /></a>
                <a href="https://www.instagram.com/"><Instagram className="icon" /></a>
              </div>
              {/* <Toggle /> */}
              {/* Alternate Let's connect Button */}
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink> */}
              {/* Resume View button */}
              <button className="vvd" onClick={() => window.open(Resume)} ><span>View Resume</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>{/*Navbar End*/}
    </Router>
  )
}
