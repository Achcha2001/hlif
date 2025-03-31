import React from 'react';
import { Link } from 'react-router-dom';
import {  Carousel } from 'react-bootstrap';
import './home.css';

function Home() {
  return (
    <div className="fancy-home-container">
      {/* Header */}
      <div className="fancy-header">
        <div className="fancy-logo-wrapper">
          <img 
            src="/images/logo-gif.gif" 
            alt="Help Island Lanka Logo" 
            width="120" 
            height="120" 
            className="fancy-logo" 
          />
        </div>
        <h1 className="fancy-title">Welcome to Help Island Lanka</h1>
        <p className="fancy-subtitle">Select the version you want to explore</p>
      </div>

      {/* Background Slideshow */}
      <Carousel className="fancy-carousel" indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/charity1.jpg" alt="Highlight 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/charity2.jpg" alt="Highlight 2" />
        </Carousel.Item>
      </Carousel>

      {/* Button Selection Section */}
      <div className="fancy-button-container">
        <Link to="/general" className="fancy-selection-button">
          <img 
            src="/images/logo-help.png" 
            alt="Foundation Logo" 
            width="50" 
            height="50" 
            className="fancy-button-logo" 
          />
          General Foundation
        </Link>

        <Link to="/christian" className="fancy-selection-button">
          <img 
            src="/images/logo-help.png" 
            alt="Foundation Logo" 
            width="50" 
            height="50" 
            className="fancy-button-logo" 
          />
          Christian Foundation
        </Link>
      </div>
    </div>
  );
}

export default Home;
