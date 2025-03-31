import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GeneralLayout from './GeneralLayout';
import Footer from './Footer';
import './ForHealing.css';

function ForHealing() {
  return (
    <GeneralLayout>
      <div className="for-healing-section">
        {/* Hero Section without watermark */}
        <div className="healing-hero">
          <div className="healing-hero-content">
            <h1 className="healing-hero-title">For Healing</h1>
            <p className="healing-hero-subtitle">
              Restoring health, hope, and wholeness to our community.
            </p>
          </div>
        </div>

        {/* Main Content with Description Watermark */}
        <Container fluid className="healing-main-content">
          {/* Watermark placed behind description content */}
          <div className="healing-desc-watermark" />
          <div className="healing-content-wrapper">
            {/* Content Block 1 */}
            <Row className="healing-content-block">
              <Col md={6} className="healing-text">
                <h2 className="healing-heading">Our Healing Mission</h2>
                <p>
                  At Help Island Lanka Foundation, our For Healing initiative is dedicated to providing comprehensive care to those in need.
                  We focus on delivering quality healthcare, emotional support, and spiritual guidance to help individuals overcome adversity and embrace a new beginning.
                </p>
                <p>
                  Through our medical camps, counseling services, and community outreach programs, we strive to bring healing and hope to every corner of our society.
                  We believe that every life deserves care and compassion.
                </p>
              </Col>
              <Col md={6} className="healing-image">
                <img src="/images/healing1.jpg" alt="Healing Care" className="healing-img" />
              </Col>
            </Row>

            {/* Content Block 2 (Reversed Layout) */}
            <Row className="healing-content-block reverse">
              <Col md={6} className="healing-image">
                <img src="/images/healing2.jpg" alt="Community Healing" className="healing-img" />
              </Col>
              <Col md={6} className="healing-text">
                <h2 className="healing-heading">Comprehensive Healing Programs</h2>
                <p>
                  Our programs encompass a wide range of services, including free medical check-ups, access to essential medicines, and psychological counseling.
                  We are committed to ensuring that every community member receives the support they need to heal physically, emotionally, and spiritually.
                </p>
                <p>
                  Join us in our mission to restore well-being and create a healthier, happier future for all. Your support – through volunteering, donating, or spreading the word – makes a real difference.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    </GeneralLayout>
  );
}

export default ForHealing;
