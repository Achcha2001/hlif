import React, { useState } from 'react';
import GeneralLayout from './GeneralLayout';
import './donation.css';

const Donation = () => {
  const [joinFormData, setJoinFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleJoinChange = (e) => {
    setJoinFormData({ ...joinFormData, [e.target.name]: e.target.value });
  };

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = joinFormData;
    const subject = encodeURIComponent(`Join Us Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:helpislandlanka@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <GeneralLayout>
      <div className="donation-page">
        {/* Full-Width Hero Section */}
        <div className="donation-hero">
          <img 
            src="/images/donate.jpg" 
            alt="Donate" 
            className="donation-hero-img" 
          />
          <div className="donation-hero-overlay">
            <h1 className="hero-heading">Donate &amp; Join Us</h1>
            <p className="hero-subheading">
              Your generosity brings hope and transforms lives. Every donation creates a ripple of change.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="donation-content">
          {/* Donation Account Details */}
          <section className="acc-details">
            <h2 className="section-title">Donation Account Details</h2>
            <p className="section-subtitle">
              Please use the following account details to make your donation:
            </p>
            <ul className="account-info">
              <li><strong>Account Name:</strong> Help Island Lanka Foundation</li>
              <li><strong>Bank Name:</strong> People's Bank</li>
              <li><strong>Account Number:</strong> 1234567890</li>
              <li><strong>Branch:</strong> Colombo, Sri Lanka</li>
              <li><strong>SWIFT/BIC:</strong> PLYPSLKL</li>
            </ul>
          </section>

          {/* Join Us Section */}
          <section className="join-us">
            <h2 className="section-title">Join Us</h2>
            <p className="section-subtitle">
              If you’d like to volunteer or partner with us, please fill out the form below. Your support makes a huge difference!
            </p>
            <form className="join-us-form" onSubmit={handleJoinSubmit}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Full Name" 
                value={joinFormData.name} 
                onChange={handleJoinChange} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={joinFormData.email} 
                onChange={handleJoinChange} 
                required 
              />
              <textarea 
                name="message" 
                placeholder="How would you like to help?" 
                rows="4" 
                value={joinFormData.message} 
                onChange={handleJoinChange} 
                required 
              />
              <button type="submit" className="join-button">Join Us</button>
            </form>
          </section>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Donation;
