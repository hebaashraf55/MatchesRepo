/* eslint-disable @typescript-eslint/no-require-imports */
import { Component } from 'react';
import { Container, Row, Col, Image, Dropdown } from 'react-bootstrap';
import './Organizers.css'; // Custom CSS

// Array of organizer logos
// Import logos individually
import logo1 from '../assets/Organizers/Organizer1.png';
import logo2 from '../assets/Organizers/Organizer-2.png';
import logo3 from '../assets/Organizers/Organizer-3.png';
import logo4 from '../assets/Organizers/Organizer-4.png';
import logo5 from '../assets/Organizers/Organizer-5.png';
import logo6 from '../assets/Organizers/Organizer-6.png';
import logo7 from '../assets/Organizers/Organizer-7.png';
import logo8 from '../assets/Organizers/Organizer-8.png';
import logo9 from '../assets/Organizers/Organizer-9.png';
import logo10 from '../assets/Organizers/Organizer-10.png';
import logo11 from '../assets/Organizers/Organizer-11.png';
import logo12 from '../assets/Organizers/Organizer-12.png';

// Array of imported logos
const organizerLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo9, logo10, logo11, logo12,
];

export default class Organizers extends Component {
  render() {
    return (
      <div className="organizers-section">
        <Container fluid>
          {/* Title at the top */}
          <Row>
            <Col md={12} className="heading-part">
              <h3 className="organizers-heading">Organizers</h3>
            </Col>
          </Row>

          {/* Grid of Organizer Logos */}
          <Row>
            {organizerLogos.map((logo, index) => (
              <Col key={index} md={3} className="organizer-cell">
                <Image
                  src={logo}
                  alt={`Organizer ${index + 1}`}
                  className="organizer-logo"
                />
              </Col>
            ))}
          </Row>


                    {/* Dropdown for additional logos on smaller screens */}
                    <Row className="d-md-none"> {/* Hide on medium and larger screens */}
            <Col md={12}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  See More Organizers
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {organizerLogos.slice(3).map((logo, index) => (
                    <Dropdown.Item key={index}>
                      <Image
                        src={logo}
                        alt={`Organizer ${index + 4}`} // Adjusted index for proper alt text
                        className="dropdown-logo"
                      />
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
