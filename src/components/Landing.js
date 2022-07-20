import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Landing.css';
import  icons8facebook from '../assets/icons8facebook.svg';
import icons8instagram from '../assets/icons8instagram.svg';
import icons8linkedin from '../assets/icons8linkedin.svg';
import icons8twitter from '../assets/icons8twitter.svg';
import icons8github from '../assets/icons8github.svg'


const Landing = () => {
  return (
    <div>
        <Container className="cont">
         <Row>
            <Col className="real">
            <h6 >Hi There, I'm</h6>
              <h1>Eke Timothy</h1>
              <Col className="sample" sm={12}>
              <span> <p>WEB DEVELOPER</p></span>
              <span> <p>FRONT-END ENGINEER</p></span>
              <span> <p>SOFTWARE ENGINEER</p></span>
            </Col>
            <Col className="social-icons">
            <a href="www.facebook.com"> 
              <img src={ icons8facebook} alt="facebook" />
            </a>
            <a href="www.facebook.com"> 
              <img src={ icons8instagram} alt="instagram" />
            </a>
            <a href="www.facebook.com"> 
              <img src={ icons8linkedin} alt="linkedin" />
            </a>
            <a href="www.facebook.com"> 
              <img src={ icons8twitter} alt="twitter" />
            </a>
            <a href="www.github.com/mrtimy"> 
              <img src={ icons8github} alt="github" />
            </a>
            </Col>
            </Col>
            </Row>
        </Container>
      </div>
  )
}

export default Landing