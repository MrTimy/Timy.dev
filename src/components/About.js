import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import timydev from "../assets/timydev.jpg";

const About = () => {
  return (
    <div style={{ width: "100%" }}>
      <Container fluid className="section">
        <Row className="contain">
          <Col className="left-row">
            <Col className="left">
              <img src={timydev} alt="Display" />
            </Col>
          </Col>
          <Col className="right-row">
            <Container className="about-row">
              <Col className="about-me">
                <h3> Eke Timothy</h3>
                <h5>
                  A Lead
                  <span className="coloring"> Web Developer </span>
                  based in
                  <span className="coloring"> Nigeria</span>
                </h5>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores. My passion is to design digital
                  user experiences through the bold interface and meaningful
                  interactions. Check out my Portfolio
                </p>
                <Row className="about-list">
                  <Col md={6} className="details-left">
                    <div className="media">
                      <label>Birth date</label>
                      <p>10th October 1995</p>
                    </div>
                    <div className="media">
                      <label>Age</label>
                      <p>26Yr</p>
                    </div>
                    <div className="media">
                      <label>Residence</label>
                      <p>Nigeria</p>
                    </div>
                    <div className="media">
                      <label>Address</label>
                      <p>FCT, Abuja</p>
                    </div>
                  </Col>
                  <Col md={6} className="details-left">
                    <div className="media">
                      <label>Email</label>
                      <p>eketimothy84@gmail.com</p>
                    </div>
                    <div className="media">
                      <label>Phone</label>
                      <p>08104410083</p>
                    </div>
                    <div className="media">
                      <label>Freelance</label>
                      <p>available</p>
                    </div>
                    <div className="media">
                      <label>Github</label>
                      <p>github.com/mrtimy</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
