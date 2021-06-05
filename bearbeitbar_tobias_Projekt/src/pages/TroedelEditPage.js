import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormControl } from "react-bootstrap"
import Button from '../components/Button';
import ImageButton from '../components/ImageButton';
import Picture from '../components/Picture';
import FormControl from 'react-bootstrap/FormControl';


function TroedelEditPage() {
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
                Diesen Trödel biete ich an
              </Col>
            </Row>
            <div id="popup-editTroedel">
              <Row>
                <Col md={12} className="text-center">
                  <Row>
                    <Col xs={4}  className="text-center">
                      <Button 
                        className="whiteBackground" 
                        id="button-delete"
                        onClick={() => alert("Sie haben Ihren Artikel gelöscht!")}
                        value="Löschen">
                      </Button>
                    </Col>
                    <Col xs={4} className="text-center">
                      <Button 
                        className="whiteBackground" 
                        id="button-edit"
                        onClick={() => alert("Sie können nun Ihren Artikel bearbeiten.")} 
                        value="Bearbeiten">
                      </Button>
                    </Col>
                    <Col xs={4} className="text-center">
                      <Button 
                        className="whiteBackground" 
                        id="button-finish"
                        onClick={() => alert("Ihr Artikel wurde aktualisiert!")} 
                        value="Fertig">
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
              <Col md={12} className="text-center">
                {/* Produktbild
                Zum Ändern anklicken */}
                <ImageButton 
                  id="picture-laptop-big" 
                  src="images/laptop.jpg"
                  onClick={() => alert("Ihr Bild wurde aktualisiert.")}>
                </ImageButton>
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
                <Col md={{ span: 6, offset: 3}} className="text-center">
                  
                  <FormControl
                    placeholder="Preis (in Euro)"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <FormControl as="textarea" rows={4} placeholder="Produktbeschreibung"/>
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
            </div>
            <Row>
              <Col md={{ span: 6, offset: 3}} className="text-center">
                1/1
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TroedelEditPage;
