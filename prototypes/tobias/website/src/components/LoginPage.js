import React from 'react';
import LandingPage from '../components/LandingPage.js';
import MapPage from '../components/MapPage.js';

import {Route, Link, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LoginPage() {
  return (
    <div className="loginPage">
      <Container fluid>
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
                <a href = "/map"><button type="button" className="btn btn-light">
                  Einloggen
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
                    <li><Link to="/map">Map</Link></li>

                  </ul>

                  <div className="debugcontent">
                  <Route exact path="/" component={LandingPage} />
                  <Route path="/map" component={MapPage} />

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

export default LoginPage;
