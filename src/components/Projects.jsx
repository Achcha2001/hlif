import React from 'react';
import GeneralLayout from './GeneralLayout';
import './Projects.css';

// Dynamic data for projects – update or add new projects as needed.
const projectsData = [
  {
    id: 1,
    title: "Healthcare Initiatives",
    description: "Providing essential medical services and health camps to underprivileged communities.",
    image: "/images/highlight1.jpg",
    details: {
      aim: "We aim to provide medical camps, basic healthcare, and health education to improve community wellness.",
      why: "Access to healthcare is crucial for a healthy, thriving community. Your support can help save lives.",
      how: "Support us through monetary donations, volunteering, or corporate partnerships to expand our healthcare programs."
    }
  },
  {
    id: 2,
    title: "Educational Programs",
    description: "Empowering youth with scholarships and vocational training to shape their future.",
    image: "/images/highlight2.jpg",
    details: {
      aim: "We provide scholarships, training, and educational resources to empower the next generation.",
      why: "Education is the key to breaking the cycle of poverty and creating brighter futures.",
      how: "Contribute financially or donate educational materials to help make learning accessible to all."
    }
  },
  {
    id: 3,
    title: "Community Development",
    description: "Building infrastructure and enhancing local opportunities for sustainable growth.",
    image: "/images/highlight3.jpg",
    details: {
      aim: "We develop local infrastructure and create community spaces to foster growth.",
      why: "Improved infrastructure and community spaces drive economic development and empowerment.",
      how: "Volunteer, donate building materials, or sponsor community projects to help us transform neighborhoods."
    }
  },
  {
    id: 4,
    title: "Disaster Relief",
    description: "Providing immediate assistance during emergencies and helping communities rebuild.",
    image: "/images/disaster_relief.jpg",
    details: {
      aim: "We provide emergency supplies and long-term support for disaster recovery.",
      why: "Quick response and sustained aid are crucial for saving lives and restoring normalcy after disasters.",
      how: "Donate funds, supplies, or your time to support our disaster relief initiatives."
    }
  }
];

const Projects = () => {
  return (
    <GeneralLayout>
      <div className="projects-page">
        {/* Full-width Hero Section */}
        <div className="projects-hero">
          <div className="hero-overlay">
            <h1>Our Projects</h1>
            <p>Explore our transformative work bringing hope and progress to communities in need.</p>
          </div>
        </div>

        {/* Introductory Text */}
        <div className="projects-intro">
          <p>
            At Help Island Lanka, our projects are the cornerstone of our mission to uplift communities.
            From healthcare and education to community development and disaster relief, each initiative
            is designed to create lasting change. Click on any project for more details.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-container">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Project Information Section */}
        <div className="project-details-section">
          <h2>Detailed Project Information</h2>
          {projectsData.map((project, index) => (
            <div key={project.id} className="project-detail">
              <h3>Project {index + 1}: {project.title}</h3>
              <div className="detail-block">
                <h4>What We Aim to Provide:</h4>
                <p>{project.details.aim}</p>
              </div>
              <div className="detail-block">
                <h4>Why This Matters:</h4>
                <p>{project.details.why}</p>
              </div>
              <div className="detail-block">
                <h4>How You Can Help:</h4>
                <p>{project.details.how}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Proposals Section */}
        <div className="proposals-section">
          <h2>Our Proposals</h2>
          <div className="proposal-buttons">
            <a 
              href="https://drive.google.com/file/d/1tA-F99qfqPnkZ-0Ip5yk0GurIMFd8tOQ/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="proposal-button"
            >
              Little Worriors - Cancer 
            </a>
            <a 
              href="https://drive.google.com/file/d/1q1MrXPZ37r7Q-VYtuQfdxNHWpq2CmHSo/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="proposal-button"
            >
              Empowering Smiles - Children
            </a>
            <a 
              href="https://drive.google.com/file/d/14grMVBV7quBstw0VezeR89HoAPn6aXI4/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="proposal-button"
            >
              Eyes for Elders
            </a>
            <a 
              href="https://drive.google.com/file/d/1Z0ohbYaDFjm9-dXgHk7uB0aMhO64sxe_/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="proposal-button"
            >
              Pure Water
            </a>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Projects;
