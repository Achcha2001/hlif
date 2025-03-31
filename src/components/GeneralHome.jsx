// src/components/GeneralHome.jsx
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import GeneralLayout from './GeneralLayout';
import Footer from './Footer';
import './GeneralFoundation.css';

function GeneralHome() {
  return (
    <GeneralLayout>
      {/* Hero Section */}
      <Container className='heroSection1' fluid >
        <div >
          <h1 className="title1">Welcome to the Help Island Lanka Foundation</h1>
          <p className="subtitle1">
            Providing hope, support, and opportunities to those in need.
          </p>
        </div>
      </Container>

      {/* Mission Section: Two-Column Layout */}
      <div className="missionSection1">
        <Container fluid className="twoColumnContainer1">
          <Row>
            {/* Left Column: Slideshow */}
            <Col md={4} className="leftSection1">
              <Carousel indicators interval={3000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/highlight1.jpg"
                    alt="Healthcare Initiatives"
                  />
                  <Carousel.Caption>
                    <h3>Healthcare Initiatives</h3>
                    <p>Providing essential medical services and health camps.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/highlight2.jpg"
                    alt="Educational Programs"
                  />
                  <Carousel.Caption>
                    <h3>Educational Programs</h3>
                    <p>Empowering youth with scholarships and training.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/highlight3.jpg"
                    alt="Community Development"
                  />
                  <Carousel.Caption>
                    <h3>Community Development</h3>
                    <p>Building infrastructure for a sustainable future.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>

            {/* Right Column: Mission & Content */}
            <Col md={8} className="rightSection1">
              <h2>Our Mission</h2>
              <p>
                At Help Island Lanka Foundation, our mission is to uplift underprivileged communities across Sri Lanka through quality education, accessible healthcare, and sustainable development initiatives.
              </p>

              <h2>Our Vision</h2>
              <p>
                We envision a society where every individual has the opportunity to lead a fulfilling and prosperous life, breaking the cycle of poverty through empowerment and community support.
              </p>

              <h2>What We Do</h2>
              <ul>
                <li>
                  <strong>Healthcare Initiatives:</strong> Organizing medical camps and providing essential health services.
                </li>
                <li>
                  <strong>Educational Programs:</strong> Offering scholarships, vocational training, and school support.
                </li>
                <li>
                  <strong>Community Development:</strong> Building infrastructure and enhancing local opportunities.
                </li>
                <li>
                  <strong>Disaster Relief:</strong> Providing immediate assistance during emergencies and helping communities rebuild.
                </li>
              </ul>

              <h2>Get Involved</h2>
              <p>
                Join us in our mission to create a better future. Whether you volunteer, donate, or simply spread the word, your support makes a significant difference.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Additional Content Section */}
      <Container className="contentSection1">
        {/* Additional centered content can go here */}
      </Container>

      {/* Footer */}
      <Footer />
    </GeneralLayout>
  );
}

export default GeneralHome;
