import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import FormControl from 'react-bootstrap/FormControl';
import Text from '../components/Text';
import InputField from '../components/InputField';
import BigInputField from '../components/BigInputField';


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
                <Text id="hinzufuegen"
                value="Trödel hinzufügen">
                </Text>
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
                <InputField id="preisfield" 
                  placeholder="Preis (in Euro)">
                </InputField>
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
            <Row>
              <Col md={6} className="text-center">
                <Text id="produktbildwahl"
                  value="Produktbild auswählen">
                </Text>
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
