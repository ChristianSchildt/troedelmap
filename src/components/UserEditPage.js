import React from 'react';
import MapPage from '../components/MapPage.js';
import LandingPage from '../components/LandingPage.js';
import {Route, Link, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserEditPage() {
  return (
    <div className="userEditPage">
      <Container fluid>
        <Row>
          <Col md={3}>
            <img id="logoicon" src="logo512.png" alt="Trödelmap"/>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <a href = "/map"><button type="button" className="btn btn-light">
              Zurück zur Karte
            </button></a>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4}} className="text-center">
            <Row>
              <Col md={12} className="text-center">
                Bearbeite deine Benutzerdaten
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
                  Änderungen übernehmen
                </button></a>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="my-auto">
            <Col md={12} className="text-center">
              <a href = "/"><button type="button" className="btn btn-light">
                Benutzerkonto löschen
              </button></a>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserEditPage;
