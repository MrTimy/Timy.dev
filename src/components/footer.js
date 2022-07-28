import React from 'react'
import './footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import  icons8facebook from '../assets/icons8facebook.svg';
import icons8instagram from '../assets/icons8instagram.svg';
import icons8linkedin from '../assets/icons8linkedin.svg';
import icons8twitter from '../assets/icons8twitter.svg';
import icons8github from '../assets/icons8github.svg'

const Footer = () => {
  return (
    <div>
        <Container fluid className="footer">
            <Row className='footer-row'>
                <Col md={6} className="footer-col">
                <a href="https://www.facebook.com/Timyslimz"> 
              <img src={ icons8facebook} alt="facebook" />
            </a>

            <a href="https://instagram.com/mr_teemy"> 
              <img src={ icons8instagram} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/in/eke-timothy-365a2a14b "> 
              <img src={ icons8linkedin} alt="linkedin" />
            </a>
            <a href="https://twitter.com/eketimothychiem "> 
              <img src={ icons8twitter} alt="twitter" />
            </a>
            <a href="www.github.com/mrtimy"> 
              <img src={ icons8github} alt="github" />
            </a>
                </Col>
                <Col md={6} className="colman">
                <p> 
                © 2022 copyright Powered By Timy 
                </p>
            </Col>
            </Row>
           
        </Container>
        
    </div>
  )
}

export default Footer