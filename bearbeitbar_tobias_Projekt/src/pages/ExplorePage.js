import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button'; 

function ExplorePage() {
  return (
    <div className="explorePage">
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
          <Col md={12} className="text-center">
            Du bist Student an der FH-Bochum?
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            Gut... dann stellen wir dir jetzt die optimale Handelsplattform zur Verfügung.
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            Innerhalb weniger Klicks, kannst du hier kaufen und verkaufen was auch immer du möchtest.
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            Und das Beste ist, es ist auch während Corona möglich.
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            {/* <a href = "/userRegistration"><button type="button" className="btn btn-light">
              Werde jetzt Teil der Community
            </button></a> kann weg*/}
          <Button 
            className="orangeBackground" 
            id="bePartOfTheCommunity" 
            href="/userRegistration" 
            value="Werde jetzt Teil der Community">
          </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ExplorePage;
