import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import FormControl from 'react-bootstrap/FormControl';


function TroedelInsertPage() {
  return (
    <div className="troedelInsertPage">
      <Container fluid>
        <Row>
          <Col md={3}>
            <Picture id="logoicon" src="troedelmap.svg"></Picture>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Button 
              className="button-backToMap"
              href="/map" 
              value="Zurück zur Karte">
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4}} className="text-center">
            <Row>
              <Col md={12} className="text-center titel">
                Trödel hinzufügen
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                
                <FormControl
                  placeholder="Produktname"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                
                <FormControl
                  placeholder="Produktbeschreibung"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                
                <FormControl
                  placeholder="Preis (in Euro)"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                
                <FormControl
                  placeholder="Straße"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                
                <FormControl
                  placeholder="Hausnummer"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                
                <FormControl
                  placeholder="Postleitzahl"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                
                <FormControl
                  placeholder="Ort"
                />
              </Col>
            </Row>
            <Row>
              <Col md={6} className="text-center">
                Produktbild auswählen
              </Col>
              <Col md={6}className="text-center">
                <Button 
                  className="whiteBackground" 
                  id="choose"
                  onClick={() => alert("Produktbild wurde ausgewählt.")} 
                  value="Auswählen">
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <Button 
                  className="orangeBackground" 
                  id="button-addMyTroedel"
                  href="/map"
                  onClick={() => alert("Trödel wurde hinzugefügt!")} 
                  value="Meinen Trödel hinzufügen">
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TroedelInsertPage;
