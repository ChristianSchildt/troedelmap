import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import ImageButton from '../components/ImageButton';


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
            {/* <a href = "/map"><button type="button" className="btn btn-light">
              Zurück zur Karte
            </button></a> kann weg*/}
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
              <Col md={12} className="text-center">
                Diesen Trödel biete ich an
              </Col>
            </Row>
            <div /*style={{backgroundColor: "orange", borderRadius: "1em"}}*/ id="popup-editTroedel">
              <Row>
                <Col md={12} className="text-center">
                  <Row>
                    <Col md={4} className="text-center">
                      <Button 
                        className="whiteBackground" 
                        id="button-delete"
                        onClick={() => alert("Sie haben Ihren Artikel gelöscht!")}
                        value="Löschen">
                      </Button>
                    </Col>
                    <Col md={4} className="text-center">
                      <Button 
                        className="whiteBackground" 
                        id="button-edit"
                        onClick={() => alert("Sie können nun Ihren Artikel bearbeiten.")} 
                        value="Bearbeiten">
                      </Button>
                    </Col>
                    <Col md={4} className="text-center">
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
                  Produktname
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3}} className="text-center">
                  Preis (in Euro)
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  Produktbeschreibung
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
            </div>
            <Row>
              <Col md={{ span: 6, offset: 3}} className="text-center">
                Nummer/Anzahl
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TroedelEditPage;
