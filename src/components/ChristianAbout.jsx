import React from 'react';
import { Container } from 'react-bootstrap';
import ChristianLayout from './ChristianLayout';
import Footer from './Footer';
import './ChristianAbout.css';

function ChristianAbout() {
  return (
    <ChristianLayout>
      <div className="christian-about-extended">
        {/* Hero Section */}
        <div className="about-hero-section">
          <div className="about-hero-overlay">
            <h1 className="about-hero-title">Our Christian Path</h1>
            <p className="about-hero-subtitle">
              Walking in the light of Christ, transforming lives with love and grace.
            </p>
          </div>
        </div>

        {/* Main Content with Watermark */}
        <Container fluid className="about-main-content">
          {/* Cross watermark behind the text */}
          <div className="about-desc-watermark" />

          {/* Wrapper ensures text sits above watermark */}
          <div className="about-content-wrapper">
            {/* Vision & Mission */}
            <section className="vision-mission-section">
              <h2 className="section-heading">Our Vision &amp; Mission</h2>
              
              <div className="vision-mission-block">
                <h3 className="subheading">Vision</h3>
                <p className="section-text">
                  To be a leading catalyst for empowering marginalized communities in Sri Lanka to break away 
                  from the cycle of poverty and embrace sustainable, faith-driven growth.
                </p>
              </div>

              <div className="vision-mission-block">
                <h3 className="subheading">Mission</h3>
                <p className="section-text">
                  Help Island Lanka Christian Foundation is dedicated to ending instances of malnutrition, 
                  poor health conditions, and lack of spiritual guidance among families in need. 
                  Through community outreach and ministry, we aim to uplift both body and soul.
                </p>
              </div>
            </section>

            {/* Our People / Leaders */}
            <section className="our-people-section">
              <h2 className="section-heading">Our People</h2>
              <ul className="leaders-list">
                <li><strong>P.A.T. Gethanjalke</strong> – Chairman</li>
                <li><strong>J. Sewnaray</strong> – Secretary</li>
                <li><strong>H.B. Moses</strong> – Treasurer</li>
              </ul>
            </section>

            {/* Chairman's Message */}
            <section className="chairman-message-section">
              <h2 className="section-heading">Chairman’s Message</h2>
              <p className="section-text">
                “We at Help Island Lanka Christian Foundation are driven by the love of Christ and the calling 
                to serve His people. Our vision is to bring hope, restoration, and the message of salvation 
                to the hurting and the lost. I invite you to join us in this mission as we stand together 
                in faith, praying for healing, unity, and lasting transformation across our communities.”
              </p>
              <p className="chairman-signature">
                <em>— P.A.T. Gethanjalke, Chairman</em>
              </p>
            </section>
          </div>
        </Container>

        <Footer />
      </div>
    </ChristianLayout>
  );
}

export default ChristianAbout;
