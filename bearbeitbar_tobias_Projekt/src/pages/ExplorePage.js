import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';

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
            <Button 
              className="button-home" 
              href="/" 
              value="HOME">
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center md-pb-5 titel">
            Du bist Student an der FH-Bochum?
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center md-pb-5 titel">
            Gut... dann stellen wir dir jetzt die optimale Handelsplattform zur Verfügung.
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center md-pb-5 titel">
            Innerhalb weniger Klicks, kannst du hier kaufen und verkaufen was auch immer du möchtest.
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center md-pb-5 titel">
            Und das Beste ist, es ist auch während Corona möglich.
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
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
