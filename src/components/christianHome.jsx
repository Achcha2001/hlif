import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChristianLayout from './ChristianLayout';
import Footer from './Footer';
import './ChristianFoundation.css';

function ChristianHome() {
  return (
    <ChristianLayout>
      <div className="custom-christian-home">
        {/* Hero Section without watermark */}
        <div className="custom-hero-section">
          <div className="custom-hero-content">
            <h1 className="custom-hero-title">
              Welcome to the Help Island Lanka Christian Foundation
            </h1>
            <p className="custom-hero-subtitle">
              Embracing faith, community, and service.
            </p>
          </div>
        </div>

        {/* Main Content with Description Watermark */}
        <Container fluid className="custom-main-content">
          {/* Watermark added behind description */}
          <div className="custom-desc-watermark" />
          <div className="custom-content-wrapper">
            {/* Block 1 */}
            <Row className="custom-content-block">
              <Col md={6} className="custom-text-block">
                <h2 className="custom-heading">Welcome to Help Island Lanka Foundation</h2>
                <p>
                  We at Help Island Lanka Foundation are driven by our faith in the Lord Jesus Christ.
                  We solemnly believe that every human being is precious, regardless of ethnicity,
                  caste, age, or geographic marginalization. We are determined to bring lasting
                  transformation to communities through acts of compassion, empowerment, and hope.
                </p>
                <p>
                  Our mission is to spread the Gospel truth among those who have not yet seen or heard
                  the good news of Christ. We aim to bring them from the darkness into the light, away
                  from forces of Evil.
                </p>
              </Col>
              <Col md={6} className="custom-image-block">
                <img
                  src="./images/church1r.jpg"
                  alt="Church Exterior"
                  className="custom-image"
                />
              </Col>
            </Row>

            {/* Block 2 (Reversed Layout) */}
            <Row className="custom-content-block custom-reverse-block">
              <Col md={6} className="custom-text-block">
                <h2 className="custom-heading">Dedicated to Our Lord Jesus Christ</h2>
                <p>
                  We vow to remain dedicated to the path set forth by our Lord Jesus Christ,
                  sharing His message among believers and those who have yet to believe.
                  Through faith, we strive to uplift the hopeless, provide guidance, and
                  nurture spiritual growth.
                </p>
                <p>
                  By working hand in hand with local communities, we aim to break barriers
                  and spread God’s truth, ensuring no one is left behind. Join us in
                  bringing hope, love, and transformation to those who need it most.
                </p>
              </Col>
              <Col md={6} className="custom-image-block">
                <img
                  src="./images/church3.jpg"
                  alt="Church Interior"
                  className="custom-image"
                />
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    </ChristianLayout>
  );
}

export default ChristianHome;
