import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Picture from '../components/Picture';
import Text from '../components/Text';

function LandingPage() {
  return (
    <div className="landingPage">
      <Container fluid>
        <Row>
          <Col md={{ span: 10, order: 2}} className="text-center">
            <Row>
              <Col className="text-center">
                <Picture id="logounternehmen" src="logodigitalvision.png"></Picture>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Picture id="logo" src="troedelmap.svg"></Picture>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 1, order: 1}} className="text-center">
            
            <a href="/explore">
              <Text id="rectangle-explore"
              value ="Entdecke unseren Service">
              </Text>
            </a>

          </Col>
          <Col md={{ span: 1, order: 3}} className="text-center">
            <a href="/login">
              <Text id="rectangle-login"
              value="Log dich ein">
              </Text>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;


