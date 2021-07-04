import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import Text from '../components/Text';
import InputField from '../components/InputField';
import BigInputField from '../components/BigInputField';


class TroedelInsertPage extends React.Component {
  
  constructor(props) {      //Konstruktor nicht löschen, enthält wichtige Dinge für die Refs
      super(props)
      this.inputName = React.createRef();
      this.inputBeschreibung = React.createRef();
      this.inputPreis = React.createRef();
      this.inputStrasse = React.createRef(); 
      this.inputHausnummer = React.createRef();
      this.inputPlz = React.createRef(); 
      this.inputOrt = React.createRef();
      this.state = { ////////SQL Beispielcode///////
        todos: [], ////////SQL Beispielcode///////
        input: "" ////////SQL Beispielcode///////
      } ////////SQL Beispielcode///////
      this.onAddButtonClick = this.onAddButtonClick.bind(this) ////////SQL Beispielcode///////
    }                   
  
  onAddButtonClick = () => { 
    /*let product = {
      pname: this.inputName.current.state?.value,
      beschreibung: this.inputBeschreibung.current.state?.value,
      preis: this.inputPreis.current.state?.value,
      strasse: this.inputStrasse.current.state?.value,
      hausnr: this.inputHausnummer.current.state?.value,
      plz: this.inputPlz.current.state?.value,
      ort: this.inputOrt.current.state?.value,
      bild: null, //TODO: bild einfügen
      id_benutzer: 1 //TODO: soll später der tatsächliche Nutzer sein
    }*/
    
    fetch('http://localhost:8080/api/products/add', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({"descr" : this.state.input}) })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      alert("Trödel wurde hinzugefügt!");
    });
  };
  
  render() {
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
                    ref={this.inputName}
                    placeholder="Produktname">
                    </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                    <BigInputField
                      id="EingabeEmail"
                      ref={this.inputBeschreibung}
                      placeholder="Produktbeschreibung"
                      rows={4}
                    ></BigInputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField id="preisfield" 
                    ref={this.inputPreis}
                    placeholder="Preis (in Euro)">
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField id="strassefield" 
                    ref={this.inputStrasse}
                    placeholder="Straße">
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField id="hausnummerfield" 
                    ref={this.inputHausnummer}
                    placeholder="Hausnummer">
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField id="postleitzahlfield" 
                    ref={this.inputPlz}
                    placeholder="Postleitzahl">
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField id="ortfield" 
                    ref={this.inputOrt}
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
                    //href="/map" //Zum SQL testen auskommentiert
                    onClick={this.onAddButtonClick.bind(this)}
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
}

export default TroedelInsertPage;
