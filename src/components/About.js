import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import timydev from "../assets/timydev.jpg";

const About = () => {
  const myData = [
    {
      name: "Birth Date",
      text: "10th October 1997",
    },
    {
      name: "Age",
      text: "26Yr",
    },
    {
      name: "Residence",
      text: "Nigeria",
    },
    {
      name: "Email",
      text: "eketimothy84@gmail.com",
    },
    {
      name: "Phone",
      text: "08104410083",
    },
    
    {
      name: "github",
      text: "github.com/mrTimy",
    },
   
    {
      name: "Address",
      text: "Gwarinpa, Abuja",
    },
    {
      name: "FreeLance",
      text: "Available",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <Container fluid className="section" id="about">
        <Row className="contain">
          <Col className="left-row">
            <Col className="left">
              <img src={ timydev } alt="Display" />
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
                  {myData.map((item, index) => (
                      <Col md={6} className="details-left" key={index}>
                      <div className="media">
                        <label>{item.name}</label>
                        <p>{item.text}</p>
                      </div>
                    </Col>
                  )
                  )}
                </Row>
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
// })

// return <div> { renderData }</div>
};

export default About;
