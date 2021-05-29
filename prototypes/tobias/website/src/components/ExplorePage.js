import React from 'react';
import LandingPage from '../components/LandingPage.js';
import UserRegistrationPage from '../components/UserRegistrationPage.js';

import {Route, Link, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ExplorePage() {
  return (

    <div className="explorePage">
      <Container fluid>
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
            <a href = "/userRegistration"><button type="button" className="btn btn-light">
              Werde jetzt Teil der Community
            </button></a>
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
                    <li><Link to="/userRegistration">UserRegistration</Link></li>

                  </ul>

                  <div className="debugcontent">
                  <Route exact path="/" component={LandingPage} />
                  <Route path="/userRegistration" component={UserRegistrationPage} />

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

export default ExplorePage;
