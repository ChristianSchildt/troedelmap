import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import TextHeading from '../components/TextHeading';
import Text from '../components/Text';
import InputField from '../components/InputField';

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
              <Col md={12} className="text-center titel">
                <TextHeading
                  id="Titel"
                  value="Log dich ein">
                </TextHeading>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField
                  id="EingabeEmail"
                  placeholder="Email"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
              <InputField
                  id="EingabePassword"
                  placeholder="Password"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
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
