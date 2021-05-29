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


        <div className="menu">
          <Row>
            <Col md={12}>
              Menu:
              <Switch>
                <React.Fragment>
                  <ul id="menu">
                    <li><Link to="/">Landing</Link></li>
                    <li><Link to="/login">Login</Link></li>

                  </ul>

                  <div className="debugcontent">
                  <Route exact path="/" component={LandingPage} />
                  <Route path="/login" component={LoginPage} />

                  </div>
                </React.Fragment>
              </Switch>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default UserRegistrationPage;
