import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import Text from '../components/Text';
import InputField from '../components/InputField';
import BigInputField from '../components/BigInputField';
import { on } from 'process';


function TroedelInsertPage() {
  const inputName = useRef(null);
  const inputBeschreibung = useRef(null);
  const inputPreis = useRef(null);
  const inputStrasse = useRef(null);
  const inputHausnummer = useRef(null);
  const inputPlz = useRef(null);
  const inputOrt = useRef(null);
  
  const onAddButtonClick = () => {
    // TODO: Daten an Datenbank weitergeben
    console.log(`${inputName.current.state?.value}`);
    console.log(`${inputBeschreibung.current.state?.value}`);
    console.log(`${inputPreis.current.state?.value}`);
    console.log(`${inputStrasse.current.state?.value}`);
    console.log(`${inputHausnummer.current.state?.value}`);
    console.log(`${inputPlz.current.state?.value}`);
    console.log(`${inputOrt.current.state?.value}`);

    alert("Trödel wurde hinzugefügt!")
  };
   
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
                  ref={inputName}
                  placeholder="Produktname">
                  </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                  <BigInputField
                    id="EingabeEmail"
                    ref={inputBeschreibung}
                    placeholder="Produktbeschreibung"
                    rows={4}
                  ></BigInputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="preisfield" 
                  ref={inputPreis}
                  placeholder="Preis (in Euro)">
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="strassefield" 
                  ref={inputStrasse}
                  placeholder="Straße">
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="hausnummerfield" 
                  ref={inputHausnummer}
                  placeholder="Hausnummer">
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="postleitzahlfield" 
                  ref={inputPlz}
                  placeholder="Postleitzahl">
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="ortfield" 
                  ref={inputOrt}
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
                  onClick={onAddButtonClick.bind(this)}
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
