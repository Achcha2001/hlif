import React, { useState } from 'react';
import GeneralLayout from './GeneralLayout';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:helpislandlanka@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <GeneralLayout>
      <div className="contact-container">
        {/* Top Hero Text */}
        <div className="contact-hero">
          <h1>Get In Touch</h1>
          <p>Your kindness can change lives. Reach out, connect, and support us today.</p>
        </div>

        {/* Two-Column Content */}
        <div className="contact-content">
          {/* Left Column: Description & Details */}
          <div className="contact-left">
            <h2>We are always here to listen</h2>
            <p className="contact-description">
              Feel free to reach out for any inquiries, feedback, or support. We value 
              your involvement and look forward to hearing from you.
            </p>
            <div className="contact-details">
              <h3>Our Contact Information</h3>
              <p><strong>Location:</strong> 123 Main Street, Colombo, Sri Lanka</p>
              <p><strong>Telephone:</strong> +94 11 2345678</p>
              <p><strong>Email:</strong> helpislandlanka@gmail.com</p>
              <p><strong>Office Hours:</strong> Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default ContactUs;
