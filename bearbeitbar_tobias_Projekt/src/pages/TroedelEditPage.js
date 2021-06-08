import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import ImageButton from '../components/ImageButton';
import Picture from '../components/Picture';
import FormControl from 'react-bootstrap/FormControl';
import BigInputField from '../components/BigInputField';
import InputField from '../components/InputField';
import Text from '../components/Text';


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
                <Text id="angebot"
                value="Diesen Trödel biete ich an">
                </Text>
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
                  <InputField id="produktnamefield" 
                  placeholder="Produktname">
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3}} className="text-center">
                  <InputField id="preisfield" 
                  placeholder="Preis (in Euro)">
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <BigInputField
                    id="EingabeEmail"
                    placeholder="Produktbeschreibung"
                    rows={4}
                  ></BigInputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField id="strassefield" 
                  placeholder="Straße">
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField id="hausnummerfield" 
                  placeholder="Hausnummer">
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField id="postleitzahlfield" 
                  placeholder="Postleitzahl">
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField id="ortfield" 
                  placeholder="Ort">
                  </InputField>
                </Col>
              </Row>
            </div>
            <Row>
              <Col md={{ span: 6, offset: 3}} className="text-center">
                <Text id="pagenr"
                value="1/1">
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TroedelEditPage;
