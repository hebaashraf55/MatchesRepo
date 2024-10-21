// HeroSection.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HeroSection.css'; // Import your custom CSS for additional styles
import  pool from '../assets/Pool.png' 

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="hero-image-col">
            <img src={pool} alt="Pool Game" className="hero-image" />
          </Col>
          <Col md={6} className="text-section">
            <h3 className="hero-subtitle">Experience the Best</h3>
            <h1 className="hero-title">Pool Game Over</h1>
            <h5 className="hero-location">Taking place in Jeddah, Saudi Arabia 3 - 8 June 2024</h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
