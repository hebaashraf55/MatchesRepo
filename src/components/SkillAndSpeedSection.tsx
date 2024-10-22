// SkillAndSpeedSection.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SkillAndSpeedSection.css'; // Import your custom CSS for this section
import photo from '../assets/Photo.png'



const SkillAndSpeedSection: React.FC = () => {
  return (
    <section className="skill-and-speed-section">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="text-section">
            <h1 className="section-title text-start">A Game of Skill and Speed</h1>
            <h4 className="section-description">Get your chance to watch these talented players</h4>
          </Col>
          <Col md={6} className="image-section">
            <img src={photo} alt="Talented Players" className="section-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillAndSpeedSection;
