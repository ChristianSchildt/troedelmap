import React from 'react';
import LandingPage from '../components/LandingPage.js';
import LoginPage from '../components/LoginPage.js';

import {Route, Link, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserRegistrationPage() {
  return (
    <div className="userRegistrationPage">
      <Container fluid>
        <Row>
          <Col md={3}>
            <img id="logoicon" src="logo512.png" alt="Trödelmap"/>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <a href = "/"><button type="button" className="btn btn-light">
              Home
            </button></a>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4}} className="text-center">
            <Row>
              <Col md={12} className="text-center">
                Registrier dich jetzt
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Benutzername
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Email
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Password
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Password wiederholen
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Kontaktinfos
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Profilbild
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <a href = "/login"><button type="button" className="btn btn-light">
                  Registrieren
                </button></a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserRegistrationPage;
