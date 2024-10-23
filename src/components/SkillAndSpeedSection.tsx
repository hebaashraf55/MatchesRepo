import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SkillAndSpeedSection.css'; // Import custom CSS
import photo from '../assets/MaskGroup10.png'


const SkillAndSpeedSection: React.FC = () => {
  return (
    <section className="skill-and-speed-section">
      <Container fluid className="h-100">
        <Row className="align-items-center flex-column-reverse flex-md-row">

          {/* Left Section: Text Content */}
          <Col xs={12} md={6} className="text-section d-flex justify-content-center align-items-center">
            <div className="text-content ">
              <h1 className="section-title text-start">A Game of Skill and Speed</h1>
              <h4 className="section-description text-start">
                Get your chance to watch these talented players
              </h4>
            </div>
          </Col>

          
          {/* Right Section: Background + Overlay Image */}
          <Col xs={12} md={6} className="image-section d-flex justify-content-center">
            <img 
              src={photo} 
              alt="Talented Players" 
              className="single-image" 
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default SkillAndSpeedSection;
