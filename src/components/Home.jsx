import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <>
      <style>{`
        /* Main container: full viewport */
        .fancy-home-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

        /* Fullscreen Carousel */
        .fancy-carousel {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
         
        }
        /* Each Carousel Slide must fill the viewport */
        .fancy-carousel .carousel-item {
          height: 100vh;
        }
        .fancy-carousel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity:0.6;
        }
        /* Dark gradient overlay over the carousel */
        .fancy-carousel::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(79,54,79,0.6));
        }

        /* Header section: logo, title, subtitle */
        .fancy-header {
          position: relative;
          z-index: 2;
          margin: 0;
        }
        .fancy-logo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .fancy-logo {
          width: 150px;
          height: 160px;
          animation: glow 2s infinite alternate;
        }
        @keyframes glow {
          0% { filter: drop-shadow(0 0 5px rgba(255,255,255,0.5)); }
          100% { filter: drop-shadow(0 0 15px rgba(255,255,255,1)); }
        }
        .fancy-title {
          font-size: 2.8rem;
          color:white;
          font-weight: bold;
          margin-top: 10px;
        }
        .fancy-subtitle {
          font-size: 1.3rem;
          margin: 10px 0 20px;
          color: #d1b3ff;
        }

        /* Button container below header */
        .fancy-button-container {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }
        .fancy-selection-button {
          width: 300px;
          height: 180px;
          background: linear-gradient(to bottom, rgba(128,0,128,0.75), rgba(255,255,255,0.25));
          backdrop-filter: blur(10px);
          border-radius: 15px;
          text-align: center;
          border: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          transition: transform 0.3s ease-in-out, background 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 1.6rem;
          font-weight: bold;
          text-decoration: none;
          color: white;
        }
        .fancy-selection-button:hover {
          transform: translateY(-5px);
          background: linear-gradient(to bottom, rgba(153,0,153,0.9), rgba(255,255,255,0.35));
        }
        .fancy-button-logo {
          width: 70px;
          height: 100px;
          margin-bottom: 10px;
        }

        /* Responsive Mobile Styles */
        @media (max-width: 768px) {
          .fancy-home-container { padding: 10px; }
          .fancy-title { font-size: 2rem; }
          .fancy-subtitle { font-size: 1rem; margin-bottom: 15px; }
          .fancy-button-container {
            flex-direction: column;
            gap: 15px;
            margin-top: 20px;
          }
          .fancy-selection-button {
            width: 90%;
            height: auto;
            padding: 15px;
            font-size: 1.4rem;
          }
          .fancy-carousel { height: 100vh; }
          .fancy-carousel .carousel-item, .fancy-carousel img { height: 100vh; }
          .fancy-logo { width: 120px; height: 130px; }
        }
      `}</style>

      <div className="fancy-home-container">
        {/* Header: Logo, Title, Subtitle */}
        <div className="fancy-header">
          <div className="fancy-logo-wrapper">
            <img 
              src="/images/logo-gif.gif" 
              alt="Help Island Lanka Logo" 
              className="fancy-logo" 
            />
          </div>
          <h1 className="fancy-title">Welcome to Help Island Lanka</h1>
          <p className="fancy-subtitle">Select the version you want to explore</p>
        </div>

        {/* Background Slideshow */}
        <Carousel className="fancy-carousel" indicators={false} fade={true} interval={3000}>
          <Carousel.Item>
            <img src="/images/chil4.webp" alt="Highlight 1" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/poorr.jpg" alt="Highlight 2" className="d-block w-100" />
          </Carousel.Item>
        </Carousel>

        {/* Button Selection */}
        <div className="fancy-button-container">
          <Link to="/general" className="fancy-selection-button">
            <img src="/images/logo-help.png" alt="Foundation Logo" className="fancy-button-logo" />
            General Foundation
          </Link>
          <Link to="/christian" className="fancy-selection-button">
            <img src="/images/logo-help.png" alt="Foundation Logo" className="fancy-button-logo" />
            Christian Foundation
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
