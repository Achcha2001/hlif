import React, { useState } from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap';
import GeneralLayout from './GeneralLayout';
import Footer from './Footer';
import './Gallery.css';

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Project 01 - Donating School Bags At Ragala Church",
      location: "Ragala, Central Province, Sri Lanka",
      count: "150 Children",
      images: [
       "/images/ragala01.jpg",
       "/images/ragala02.jpg",
       "/images/ragala03.jpg",
       "/images/ragala04.jpg",
       "/images/ragala05.jpg",
       "/images/ragala06.jpg",
       "/images/ragala07.jpg",
      ]
    },
    {
      id: 2,
      title: "Project 02 - Donating School Bags At High Forest Estate Division",
      location: "High Forest Estate Division, Central Province, Sri Lanka",
      count: "150 Children",
      images: [
       "/images/forest1.jpg",
       "/images/forest2.jpg",
       "/images/forest3.jpg",
       "/images/forest4.jpg",
       "/images/forest5.jpg",
       "/images/forest5.jpg",
      ]
    },
    {
      id: 3,
      title: "Project 03 - Donating School Bags At Alma Estate",
      location: "Alma Estate, Central Province, Sri Lanka",
      count: "100 Children",
      images: [
        "/images/Alma01.jpg",
        "/images/Alma02.jpg",
        "/images/Alma03.jpg",
        "/images/Alma04.jpg",
        "/images/Alma05.jpg"
      ]
    },
    {
      id: 4,
      title: "Project 04 - A New Bell was Donated to the Ragala Church",
      location: "Ragala, Central Province, Sri Lanka",
      count: "",
      images: [
        "/images/bell01.jpg",
        "/images/bell02.jpg",
        "/images/bell03.jpg",
        "/images/bell04.jpg",
        "/images/bell05.jpg",
        "/images/bell06.jpg"
      ]
    }
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setCurrentProject(null);
  };

  return (
    <GeneralLayout>
      <div className="gallery-page">
        <div className="gallery-header">
          <h1>Gallery</h1>
          <p>Explore our projects and see how we are making a difference.</p>
        </div>

        <div className="gallery-grid">
          {projects.map(project => (
            <div className="gallery-card" key={project.id}>
              <div className="card-carousel-wrapper" onClick={() => openModal(project)}>
                <Carousel controls={false} indicators={false} interval={3000} className="gallery-card-carousel">
                  {project.images.slice(0, 5).map((img, idx) => (
                    <Carousel.Item key={idx}>
                      <img
                        className="d-block w-100"
                        src={img}
                        alt={`${project.title} ${idx + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="gallery-card-content">
                <h2>{project.title}</h2>
                <p><strong>Location:</strong> {project.location}</p>
                {project.count && <p><strong>Count:</strong> {project.count}</p>}
                <Button variant="primary" onClick={() => openModal(project)}>
                  View All Photos
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{currentProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentProject && (
            <Carousel>
              {currentProject.images.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt={`${currentProject.title} ${idx + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </GeneralLayout>
  );
}

export default Gallery;
