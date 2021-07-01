import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import BigInputField from '../components/BigInputField';
import InputField from '../components/InputField';
import Text from '../components/Text';
import FileInput from '../components/FileInput';


class TroedelEditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 0,
      imageData: 0
    };
  
    this.inputProduktname = React.createRef(null);
    this.inputProduktpreis = React.createRef(null);
    this.inputProduktbeschreibung = React.createRef(null);
    this.inputStraße = React.createRef(null);
    this.inputHausnummer = React.createRef(null);
    this.inputPostleitzahl = React.createRef(null);
    this.inputOrt = React.createRef(null);
  }

  onFinishButtonClick() {
    // TODO: Daten an Datenbank weitergeben
    console.log(`${this.inputProduktname.current.state?.value}`);
    console.log(`${this.inputProduktpreis.current.state?.value}`);
    console.log(`${this.inputProduktbeschreibung.current.state?.value}`);
    console.log(`${this.inputStraße.current.state?.value}`);
    console.log(`${this.inputHausnummer.current.state?.value}`);
    console.log(`${this.inputPostleitzahl.current.state?.value}`);
    console.log(`${this.inputOrt.current.state?.value}`);
    console.log(this.image);
    
    alert("Ihr Artikel wurde aktualisiert!");
  };

  fileSelectedHandler(event) {
    if(event.target.files[0])
    {
      this.setState({image: event.target.files[0]});
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.setState({imageData: reader.result});
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  
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
                  <Text id="angebot"
                  value="Diesen Trödel biete ich an">
                  </Text>
                </Col>
              </Row>
              <div id="popup-editTroedel">
                <Row className="mb-3">
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
                      onClick={this.onFinishButtonClick.bind(this)} 
                      value="Fertig">
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <Picture 
                      id="picture-laptop-big" 
                      src={this.state.imageData}
                      alt="Bildersatz">
                    </Picture>
                    <FileInput
                      inputId="fileInputProduktbild"
                      labelValue="Produktbild auswählen"
                      inputOnChange={this.fileSelectedHandler.bind(this)}>  
                    </FileInput>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <InputField id="produktnamefield" 
                      placeholder="Produktname"
                      ref={this.inputProduktname}>
                    </InputField>
                  </Col>
                </Row>
                <Row>
                  <Col md={{ span: 6, offset: 3}} className="text-center">
                    <InputField id="preisfield" 
                      placeholder="Preis (in Euro)"
                      ref={this.inputProduktpreis}>
                    </InputField>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <BigInputField
                      id="EingabeEmail"
                      placeholder="Produktbeschreibung"
                      ref={this.inputProduktbeschreibung}
                      rows={4}>
                    </BigInputField>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <InputField id="strassefield" 
                      placeholder="Straße"
                      ref={this.inputStraße}>
                    </InputField>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <InputField id="hausnummerfield" 
                      placeholder="Hausnummer"
                      ref={this.inputHausnummer}>
                    </InputField>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <InputField id="postleitzahlfield" 
                      placeholder="Postleitzahl"
                      ref={this.inputPostleitzahl}>
                    </InputField>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <InputField id="ortfield" 
                      placeholder="Ort"
                      ref={this.inputOrt}>
                    </InputField>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col md={{ span: 6, offset: 3}} className="text-center">
                  <Text id="pagenr"
                    value="0/0">
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TroedelEditPage;
