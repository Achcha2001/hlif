import React from 'react';
import GeneralLayout from './GeneralLayout';
import './About.css';

const About = () => {
  return (
    <GeneralLayout>
      <div className="about-page">
        {/* Hero Section */}
        <div className="about-hero-section">
          <img 
            src="./images/about.jpg" 
            alt="Welcome to Help Island Lanka" 
            className="about-hero-img"
          />
          <div className="hero-overlay">
            <h1>Let's Get to Know Us!</h1>
          </div>
        </div>

        {/* Main Content with Watermark */}
        <div className="about-main-content">
          {/* Cross watermark behind content */}
          <div className="desc-watermark" />
          <div className="content-wrapper">
            {/* About Overview */}
            <section className="about-overview">
              <h2>About Us</h2>
              <p>
                At Help Island Lanka, our mission is to transform lives by providing hope, support, and opportunities to underprivileged communities across Sri Lanka. We are dedicated to offering quality education, accessible healthcare, and sustainable community development programs.
              </p>
              <p>
                Every donation and volunteer effort helps us reach more people and make a significant impact. Our projects span from health camps and educational scholarships to comprehensive community development initiatives.
              </p>
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision">
              <h2>Our Mission & Vision</h2>
              <p>
                We envision a society where every individual has the opportunity to lead a fulfilling and prosperous life. By empowering communities and nurturing local talent, we work together to break the cycle of poverty and build a brighter future for all.
              </p>
            </section>

            {/* Impact */}
            <section className="impact">
              <h2>Our Impact</h2>
              <p>
                Since our inception, we have reached thousands of lives through our various initiatives. We take pride in the trust of the communities we serve and continuously strive for excellence in service, compassion, and sustainability.
              </p>
            </section>

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
        </div>
      </div>
    </GeneralLayout>
  );
};

export default About;
