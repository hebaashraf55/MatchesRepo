import { Component } from "react";
import {
  Navbar,
  Nav,
  NavLink,
  Button,
  Container,
  Image,
  Dropdown,
} from "react-bootstrap";
import "./Navbar.css"; // Custom CSS for styling
import logo from "../assets/Logo.png";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar
        expand="lg"
        className="custom-navbar"
        variant="dark"
        fixed="top"
        bg="transparent"
      >
        <Container>
          <Navbar.Brand href="/">
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="d-inline-block align-top custom-logo"
            />
          </Navbar.Brand>

          {/* Navigation Links */}
          <Nav className="mx-auto">
            <NavLink href="/" className="nav-item active-link">
              Home
            </NavLink>
            <NavLink href="/about" className="nav-item">
              About
            </NavLink>
            <NavLink href="/life-in-jeddah" className="nav-item">
              Life in Jeddah
            </NavLink>
            <NavLink href="/media-center" className="nav-item">
              Media Center
            </NavLink>
            <NavLink href="/matches" className="nav-item">
              Matches
            </NavLink>
            <NavLink href="/contact-us" className="nav-item">
              Contact Us
            </NavLink>
          </Nav>

          {/* Translation Button */}
          <Button variant="outline-light" className="translation-button">
            en <span className="arrow">&#9662;</span>
          </Button>

          {/* Dropdown for small screens */}
          <Dropdown className="d-lg-none">
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Home</Dropdown.Item>
              <Dropdown.Item href="/about">About</Dropdown.Item>
              <Dropdown.Item href="/life-in-jeddah">
                Life in Jeddah
              </Dropdown.Item>
              <Dropdown.Item href="/media-center">Media Center</Dropdown.Item>
              <Dropdown.Item href="/matches">Matches</Dropdown.Item>
              <Dropdown.Item href="/contact-us">Contact Us</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    );
  }
}
