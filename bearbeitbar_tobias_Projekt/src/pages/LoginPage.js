import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button'; 

function LoginPage() {
  return (
    <div className="loginPage">
      <Container fluid>
        <Row>
          <Col md={3}>
            <Picture id="logoicon" src="troedelmap.svg"></Picture>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            {/* <a href = "/"><button type="button" className="btn btn-light">
              Home
            </button></a> kann weg*/}
            <Button 
              className="button-home" 
              href="/" 
              value="HOME">
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4}} className="text-center">
            <Row>
              <Col md={12} className="text-center">
                Log dich ein
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Password
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Email
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                {/* <a href = "/map"><button type="button" className="btn btn-light">
                  Einloggen
                </button></a> */}
                <Button 
                  className="orangeBackground" 
                  id="button-login"
                  href="/map" 
                  value="Einloggen">
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
