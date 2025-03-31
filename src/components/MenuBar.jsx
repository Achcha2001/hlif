// src/components/MenuBar.jsx
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './GeneralFoundation.css';

function MenuBar({ menuItems, donateLink, logoSrc }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`navbar ${scrolled ? "scrolled" : ""}`} variant="dark" sticky="top">
      <Container>
        {logoSrc && (
          <Navbar.Brand as={Link} to="/">
            <img src={logoSrc} alt="Logo" className="logo" />
          </Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item, index) => (
              <Nav.Link as={Link} to={item.link} key={index} className="navLink">
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
          {donateLink && (
  <Nav>
    <Nav.Link as={Link} to={donateLink.link} className="donateBtnText">
      {donateLink.label}
    </Nav.Link>
  </Nav>
)}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;
