import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Calendar from 'react-calendar';
import GeneralLayout from './GeneralLayout';
import Footer from './Footer';
import './WhatWeDo.css';

function WhatWeDo() {
  const [activeTab, setActiveTab] = useState('introduction');
  const [date, setDate] = useState(new Date());

  // Sample tasks mapped by date (in YYYY-MM-DD format)
  const sampleTasks = {
    "2023-05-01": ["Medical Camp in Nuwara Eliya", "Breakfast Distribution"],
    "2023-05-02": ["Educational Workshop", "Community Meeting"],
    // Add more events as required
  };

  // Format the selected date as YYYY-MM-DD
  const formattedDate = date.toISOString().split('T')[0];
  const events = sampleTasks[formattedDate] || ["No events scheduled for this date."];

  const renderTabContent = () => {
    if (activeTab === 'introduction') {
      return (
        <div className="tab-content">
          <h2>Introduction</h2>
          <p>
            As the first step, we have chosen the Nuwara Eliya and Badulla Districts of Sri Lanka to work with those 
            who are suffering from abject poverty and to assist them in safeguarding their food, health, livelihood, and 
            education interests.
          </p>
          <p>
            We will first strive to create a situation where all families in the estate sector of Nuwara Eliya District 
            enjoy three healthy meals per day, leading to a significant reduction in child and female malnutrition in the region.
          </p>
          <p>
            We will enhance the quality of life for those living in the estate sector of Nuwara Eliya by provisioning 
            adequate healthcare facilities through a series of medical camps catering to the everyday healthcare needs 
            of both the abled and the disabled. In addition, we support quality education for children and vocational training 
            for youth to promote sustainable livelihoods.
          </p>
        </div>
      );
    } else if (activeTab === 'currentProjects') {
      return (
        <div className="tab-content">
          <h2>Current Projects</h2>
          <div className="current-projects-details">
            <h3>Supporting Elderly Homes</h3>
            <ul>
              <li>Providing breakfast, lunch, and dinner support to elder homes.</li>
              <li>Supplying hygiene products such as detergents, toilet cleaners, and personal care essentials.</li>
              <li>Organizing medical aid campaigns to address urgent healthcare needs.</li>
              <li>Donating clothes to ensure comfort and dignity for elderly individuals.</li>
              <li>Delivering dry rations to elder homes to ensure basic nutrition.</li>
            </ul>
            <h3>Supporting Children's Homes</h3>
            <ul>
              <li>Delivering dry rations to ensure basic nutrition.</li>
              <li>Providing school supplies—bags, shoes, and stationery—to support education.</li>
              <li>Distributing pampers and essential toiletries for young children and women.</li>
              <li>Covering breakfast, lunch, and dinner to alleviate food insecurity.</li>
              <li>Running medical assistance programs for children in need.</li>
            </ul>
            <h3>Mobility Assistance for the Differently-Abled</h3>
            <ul>
              <li>Supplying wheelchairs, crutches, and walking frames for those with mobility challenges.</li>
              <li>Conducting free medical camps, offering basic supplies and consultations.</li>
              <li>Organizing specialized eye and dental clinics to enhance well-being.</li>
            </ul>
            <div className="see-more-btn-container">
              <Link to="/projects" className="see-more-btn">
                See More
              </Link>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'ourCalendar') {
      return (
        <div className="tab-content">
          <h2>Our Calendar</h2>
          <Calendar onChange={setDate} value={date} />
          <div className="calendar-events">
            <h3>Events on {formattedDate}</h3>
            <ul>
              {events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  };

  return (
    <GeneralLayout>
      <div className="what-we-do-page">
        {/* Hero Section */}
        <div className="what-we-do-hero">
          <div className="what-we-do-hero-overlay">
            <h1>What We Do</h1>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="what-we-do-content">
          {/* Left Static Card (approx. 25% width on desktop) */}
          <div className="static-card">
            <h2>What We Do</h2>
            <p>
              As the first step, we have chosen the Nuwara Eliya and Badulla Districts of Sri Lanka to work with those who are 
              suffering from abject poverty and to assist them in safeguarding their food, health, livelihood, and education interests.
            </p>
            <p>
              We will strive to ensure that all families in the estate sector of Nuwara Eliya District enjoy three healthy meals per day, 
              significantly reducing child and female malnutrition in the region.
            </p>
            <p>
              We will enhance the quality of life for those in these communities by provisioning adequate healthcare facilities 
              through a series of medical camps, as well as support quality education and vocational training for sustainable livelihoods.
            </p>
          </div>

          {/* Right Tabs Section */}
          <div className="tabs-section">
            {/* Tabs Navigation */}
            <div className="tabs-container">
              <div 
                className={`tab ${activeTab === 'introduction' ? 'active' : ''}`}
                onClick={() => setActiveTab('introduction')}
              >
                Introduction
              </div>
              <div 
                className={`tab ${activeTab === 'currentProjects' ? 'active' : ''}`}
                onClick={() => setActiveTab('currentProjects')}
              >
                Current Projects
              </div>
              <div 
                className={`tab ${activeTab === 'ourCalendar' ? 'active' : ''}`}
                onClick={() => setActiveTab('ourCalendar')}
              >
                Our Calendar
              </div>
            </div>
            {/* Tab Content */}
            <div className="tab-content-container">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </GeneralLayout>
  );
}

export default WhatWeDo;
