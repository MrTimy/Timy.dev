import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup, ProgressBar } from "react-bootstrap";
import "./Portfolio.css";

const Porfolio = () => {
  const skillSet = [
    {
      year: "2016-2021",
      study: "Computer Science",
      where: "University Of Nigeria",
    },
    {
      year: "2019-2020",
      study: "Intern",
      where: "HNG Internship",
    },
    {
      year: "2010-2012",
      study: "Front End Developer",
      where: "Compumetrics Solution Limited",
    },
  ];
  const Experience = [
    {
      year: "2010-2012",
      job: "Front End Engineering",
      where: "Digital Dreams Academy",
    },
    {
      year: "2022-2023",
      job: "SE Intern",
      where: "Alx Software Engineering",
    },
    {
      year: "2022-2023",
      job: "Front End Developer",
      where: "Compumetrics Solution Limited",
    },
  ];
  const stacks = [
    {
      Lang: " HTML 5",
      rating: "92",
    },
    {
      Lang: "Bootstrap",
      rating: "89",
    },
    {
      Lang: " CSS3",
      rating: "70",
    },
    {
      Lang: " JavaScript",
      rating: "50",
    },
    {
      Lang: " React Js",
      rating: "40",
    },
  ]
  return (
    <div>
      <Container fluid className="section-skill">
        <Row className="skill-section">
          <Col lg="4" className="education">
            <div className="header-1">
              <h4>Education</h4>
            </div>

            <ListGroup as="ul" id="greek">
              {skillSet.map((item, index) => (
                <ListGroup.Item as="li" key={index}>
                  <span className="dark-date">{item.year}</span>
                  <h6>{item.study}</h6>
                  <p>{item.where}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col lg="4" className="education">
            <div className="header-1">
              <h4>Experience</h4>
            </div>

            <ListGroup  as="ul" id="greek">
              {Experience.map((item, index) => (
                <ListGroup.Item id="back-drop" as="li" key={index}>
                  <span className="dark-date"> {item.year} </span>
                  <h6> {item.job} </h6>
                  <p> {item.where} </p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col lg="4" className="education">
            {" "}
            <div className="header-1">
              <h4>My Skills</h4>
            </div>
            <ListGroup as="ul" id="theme">
              {stacks.map((item, index) => (
                <Col  className="details-left" key={index}>
                   <div>
                   <h6 className="stack"> { item.Lang } </h6>
                 </div>
                
                 <ProgressBar
                   now={item.rating}
                   label={`${item.rating}%`}
                 />
                 </Col>
              )
              )}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Porfolio;
