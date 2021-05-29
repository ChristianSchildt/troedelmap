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


        <div className="menu">
          <Row>
            <Col md={12}>
              Menu:
              <Switch>
                <React.Fragment>
                  <ul id="menu">
                  <li><Link to="/map">Map</Link></li>
                  <li><Link to="/">Landing</Link></li>

                  </ul>

                  <div className="debugcontent">
                  <Route path="/map" component={MapPage} />
                  <Route exact path="/" component={LandingPage} />

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

export default UserEditPage;
