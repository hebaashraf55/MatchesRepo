import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import leftArrow from '../assets/LeftSliderArrow.png'; // Update with the actual path
import rightArrow from '../assets/PlayIcon2.png'; // Update with the actual path
import participant1 from '../assets/ParticipantFull4.png'; // Update with actual participant images
import participant2 from '../assets/ParticipantFull4.png';

const ParticipantsSection: React.FC = () => {
  return (
    <section className="participants-section m-5 p-5 justify-content-between">
      <Container fluid>
        <Row className="align-items-center">
          {/* Left Arrow */}
          <Col xs={1} className="arrow-col">
            <img src={leftArrow} alt="Previous participants" className="arrow" />
          </Col>

          {/* Participant Images */}
          <Col xs={10} className="participants-col">
            <Row className="participants-row d-flex justify-content-between">
              <Col xs={6} md={2} className="participant-col">
                <img
                  src={participant1}
                  alt="Participant 1 - Full View"
                  className="participant-image"
                />
              </Col>
              <Col xs={6} md={2} className="participant-col">
                <img
                  src={participant1}
                  alt="Participant 3 - Full View"
                  className="participant-image"
                />
              </Col>
              <Col xs={6} md={2} className="participant-col">
                <img
                  src={participant2}
                  alt="Participant 4 - Full View"
                  className="participant-image"
                />
              </Col>
            </Row>
          </Col>

          {/* Right Arrow */}
          <Col xs={1} className="arrow-col">
            <img src={rightArrow} alt="Next participants" className="arrow" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ParticipantsSection;
