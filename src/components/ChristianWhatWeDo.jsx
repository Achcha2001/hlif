import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import GeneralLayout from './GeneralLayout';
import Footer from './Footer';
import './ChristianWhatWeDo.css';

function ChristianWhatWeDo() {
  const [activeTab, setActiveTab] = useState('introduction');
  const [date, setDate] = useState(new Date());

  // Render dynamic content for each tab
  const renderTabContent = () => {
    if (activeTab === 'introduction') {
      return (
        <div className="christian-tab-content">
          <h2>Introduction</h2>
          <p>
            As the first step, we have chosen the Nuwara Eliya and Badulla Districts of Sri Lanka to work with those who are 
            suffering from abject poverty and to assist them in safeguarding their food, health, livelihood, and education interests.
          </p>
          <p>
            We strive to ensure that all families in the estate sector enjoy three healthy meals per day, significantly reducing 
            child and female malnutrition. Additionally, we provision adequate healthcare through a series of medical camps, support quality 
            education, and offer vocational training for sustainable livelihoods.
          </p>
        </div>
      );
    } else if (activeTab === 'currentMinistries') {
      return (
        <div className="christian-tab-content">
          <h2>Current Ministries</h2>
          <div className="christian-current-projects-details">
            <h3>Supporting Elderly Homes</h3>
            <ul>
              <li>Providing breakfast, lunch, and dinner support to elder homes.</li>
              <li>Supplying hygiene products such as detergents, toilet cleaners, and personal care essentials.</li>
              <li>Organizing medical aid campaigns to address urgent healthcare needs.</li>
              <li>Donating clothes to ensure elderly comfort and dignity.</li>
              <li>Delivering dry rations to ensure basic nutrition.</li>
            </ul>
            <h3>Supporting Children's Homes</h3>
            <ul>
              <li>Delivering dry rations to ensure basic nutrition.</li>
              <li>Providing school supplies—including bags, shoes, and stationery—to support education.</li>
              <li>Distributing pampers and essential toiletries for young children and women.</li>
              <li>Covering breakfast, lunch, and dinner to alleviate food insecurity.</li>
              <li>Running medical assistance programs for children in need.</li>
            </ul>
            <h3>Mobility Assistance for the Differently-Abled</h3>
            <ul>
              <li>Supplying wheelchairs, crutches, and walking frames for those with mobility challenges.</li>
              <li>Conducting free medical camps offering basic supplies and consultations.</li>
              <li>Organizing specialized eye and dental clinics to enhance overall well-being.</li>
            </ul>
            <div className="christian-see-more-btn-container">
              <Link to="/projects" className="christian-see-more-btn">
                See More
              </Link>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'ourCalendar') {
      return (
        <div className="christian-tab-content">
          <h2>Our Calendar</h2>
          <p>
            Check out our upcoming church services, events, and special programs. Use the calendar below to select a date and view our scheduled initiatives.
          </p>
          <Calendar onChange={setDate} value={date} />
          <div className="christian-calendar-projects">
            <div className="christian-project-item">
              <h3>December Project – School Children</h3>
              <p>
                We are donating 5,000 school bags, uniforms, and school books to underprivileged children in the Nuwara Eliya district.
              </p>
            </div>
            <div className="christian-project-item">
              <h3>January Project – Free Medical Camp Month</h3>
              <p>
                We plan to hold free medical camps in Nuwara Eliya, Bandarawela, and Badulla, offering care to elderly, children, and pregnant mothers.
              </p>
            </div>
            <div className="christian-project-item">
              <h3>February Project – Supplying Pure Drinking Water</h3>
              <p>
                We plan to supply 1,000-liter tanks to needy schools, enabling them to store and distribute pure drinking water.
              </p>
            </div>
            <div className="christian-project-item">
              <h3>March Project – Sanitation Month</h3>
              <p>
                We are planning to build new toilet facilities and repair existing toilets in hill country schools.
              </p>
            </div>
            <div className="christian-project-item">
              <h3>April Project – Literature Month</h3>
              <p>
                We plan to supply a wide range of educational books to school libraries and help establish new libraries in schools that don’t have one.
              </p>
            </div>
            <div className="christian-project-item">
              <h3>May Project – Housing</h3>
              <p>
                We plan to construct 100 housing units for impoverished families, each featuring a living room, two bedrooms, a kitchen, and a bathroom.
              </p>
            </div>
            <div className="christian-project-item">
              <h3>June Project – Holy Month</h3>
              <p>
                In this month, we give thanks and pray to our Lord Jesus for His blessings and evaluate our projects from the past six months, organizing praise and worship services across communities.
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <GeneralLayout>
      <div className="christian-whatwedo-page">
        {/* Hero Section */}
        <div className="christian-whatwedo-hero">
          {/* Background image is set via CSS */}
          <div className="christian-hero-overlay">
            <h1>What We Do</h1>
          </div>
        </div>

        {/* Main Content with Watermark */}
        <div className="christian-main-content">
          {/* Cross Watermark Behind Content */}
          <div className="christian-desc-watermark"></div>
          <div className="christian-content-wrapper">
            {/* Two-Column Layout */}
            <div className="christian-whatwedo-content">
              {/* Left Static Card */}
              <div className="christian-static-card">
                <h2>What We Do</h2>
                <p>
                  As the first step, we have chosen the Nuwara Eliya and Badulla Districts of Sri Lanka to work with those suffering from abject poverty, safeguarding their food, health, livelihood, and education interests.
                </p>
                <p>
                  We strive to ensure that all families in the estate sector enjoy three healthy meals per day, significantly reducing child and female malnutrition.
                </p>
                <p>
                  Additionally, we provision adequate healthcare through a series of medical camps, support quality education, and offer vocational training for sustainable livelihoods.
                </p>
              </div>
              {/* Right Tabs Section */}
              <div className="christian-tabs-section">
                {/* Tabs Navigation */}
                <div className="christian-tabs-container">
                  <div 
                    className={`christian-tab ${activeTab === 'introduction' ? 'active' : ''}`}
                    onClick={() => setActiveTab('introduction')}
                  >
                    Introduction
                  </div>
                  <div 
                    className={`christian-tab ${activeTab === 'currentMinistries' ? 'active' : ''}`}
                    onClick={() => setActiveTab('currentMinistries')}
                  >
                    Current Ministries
                  </div>
                  <div 
                    className={`christian-tab ${activeTab === 'ourCalendar' ? 'active' : ''}`}
                    onClick={() => setActiveTab('ourCalendar')}
                  >
                    Our Calendar
                  </div>
                </div>
                {/* Tab Content */}
                <div className="christian-tab-content-container">
                  {renderTabContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </GeneralLayout>
  );
}

export default ChristianWhatWeDo;
