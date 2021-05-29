import React from 'react';
import MapPage from '../components/MapPage.js';
import {Route, Link, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TroedelInsertPage() {
  return (
    <div className="troedelInsertPage">
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
                Trödel hinzufügen
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Produktname
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Produktbeschreibung
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Preis (in Euro)
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Straße
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Hausnummer
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Postleitzahl
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Ort
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Produktbild auswählen
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <a href = "/map"><button type="button" className="btn btn-light">
                  Mein Trödel hinzufügen
                </button></a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TroedelInsertPage;
