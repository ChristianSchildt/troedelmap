import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Picture from '../components/Picture';

function LandingPage() {
  return (
    <div className="landingPage">
      <Container fluid>
        <Row>
          <Col md={{ span: 3, offset: 1}} className="text-center">
            Entdecke unseren Service
            <Link to="/explore">Explore</Link>
          </Col>
          <Col md={{ span: 2, offset: 1}} className="text-center">
            <Picture id="logo" src="troedelmap.svg"></Picture>
          </Col>
          <Col md={{ span: 3, offset: 1}} className="text-center">
            Log dich ein
            <Link to="/login">Login</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;


