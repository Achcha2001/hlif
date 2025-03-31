import React from 'react';
import GeneralLayout from './GeneralLayout';
import './About.css';

const About = () => {
  return (
    <GeneralLayout>
      <div className="about-page">
        {/* Full-width Hero Image */}
        <div className="about-heroo">
          <img 
            src="./images/about.jpg" 
            alt="Welcome to Help Island Lanka" 
          />
          <div className="hero-overlayy">
            <h1>Let's get to know about US!</h1>
          </div>
        </div>

        {/* About Content */}
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At Help Island Lanka, our mission is to transform lives by providing hope, 
            support, and opportunities to underprivileged communities across Sri Lanka. 
            We are dedicated to offering quality education, accessible healthcare, 
            and sustainable community development programs.
          </p>
          <p>
            Every donation and volunteer effort helps us reach more people and make 
            a significant impact. Our projects span from health camps and educational 
            scholarships to comprehensive community development initiatives.
          </p>

          <h3>Our Vision</h3>
          <p>
            We envision a society where every individual has the opportunity to lead 
            a fulfilling and prosperous life. By empowering communities, we work 
            together to break the cycle of poverty and build a brighter future for all.
          </p>

          <h3>Our Impact</h3>
          <p>
            Since our inception, we have reached thousands of lives through our 
            various initiatives. We take pride in the community’s trust and continue 
            to strive for excellence in service, compassion, and sustainability.
          </p>
          <p>
            Join us on this journey to create lasting change. Your support, whether 
            through donations, volunteering, or spreading awareness, makes all the difference.
          </p>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default About;
