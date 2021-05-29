import React from 'react';
import LandingPage from '../components/LandingPage.js';
import TroedelInsertPage from '../components/TroedelInsertPage.js';
import TroedelEditPage from '../components/TroedelEditPage.js';
import UserEditPage from '../components/UserEditPage.js';

import {Route, Link, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function MapPage() {
  return (
    <div className="mapPage">
      <Container fluid>
        <Row>
          <Col md={1}>
            <img id="logoicon" src="logo512.png" alt="Trödelmap"/>
          </Col>
          <Col md={{ span: 4, offset: 3}}>

            <InputGroup>
              <FormControl
                placeholder="Was suchst du?"
              />
              <Button variant="success" id="button-search">
                Go
              </Button>
            </InputGroup>
          </Col>
          <Col md={{ span: 1, offset: 2}}>
            <Row>
              <Col md={4}>
                <a href = "/troedelInsert"><button type="button" className="btn btn-light">
                  +
                </button></a>
              </Col>
              <Col md={4}>
                <a href = "/troedelEdit"><button type="button" className="btn btn-light">
                  ?
                </button></a>
              </Col>
            </Row>
          </Col>
          <Col md={1}>
            <Row>
              <Col md={4}>
                <a href = "/"><button type="button" className="btn btn-light">
                  ESC
                </button></a>
              </Col>
              <Col md={4}>
                <a href = "/userEdit"><button type="button" className="btn btn-light">
                  \o/
                </button></a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div style={{height: "90vh", backgroundColor: "LemonChiffon"}}>Das ist die Karte!</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MapPage;
