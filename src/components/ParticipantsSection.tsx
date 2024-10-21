import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import leftArrow from '../assets/LeftSliderArrow.png'; // Update with the actual path
import rightArrow from '../assets/PlayIcon2.png'; // Update with the actual path
import participant1 from '../assets/ParticipantFull2.png'; // Update with actual participant images
import participant2 from '../assets/Participant Full 3.png';
import participant3 from '../assets/Participant Full 4.png';
import participant4 from '../assets/Participant Full 3.png';


const ParticipantsSection: React.FC = () => {
  return (
    <div className="participants-section">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={1} className="arrow-col">
            <img src={leftArrow} alt="Left Arrow" className="arrow" />
          </Col>
          <Col xs={10} className="participants-col">
            <Row className="participants-row">
              <Col xs={6} md={3} className="participant-col">
                <img src={participant1} alt="Participant 1" className="participant-image" />
              </Col>
              <Col xs={6} md={3} className="participant-col">
                <img src={participant2} alt="Participant 2" className="participant-image" />
              </Col>
              <Col xs={6} md={3} className="participant-col">
                <img src={participant3} alt="Participant 3" className="participant-image" />
              </Col>
              <Col xs={6} md={3} className="participant-col">
                <img src={participant4} alt="Participant 4" className="participant-image" />
              </Col>
            </Row>
          </Col>
          <Col xs={1} className="arrow-col">
            <img src={rightArrow} alt="Right Arrow" className="arrow" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ParticipantsSection;
