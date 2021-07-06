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
      imageData: 0,
      products: {},
      currentProductIndex: 0
    };
  
    this.inputProduktname = React.createRef(null);
    this.inputProduktpreis = React.createRef(null);
    this.inputProduktbeschreibung = React.createRef(null);
    this.inputStraße = React.createRef(null);
    this.inputHausnummer = React.createRef(null);
    this.inputPostleitzahl = React.createRef(null);
    this.inputOrt = React.createRef(null);
  }

  componentDidMount() {
    // TODO später nur die Daten des aktuellen Nutzers abfragen
    fetch('http://localhost:8080/api/products')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({products: data, currentProductIndex: data.length - 1});
    })
  }
  
  onFinishButtonClick() {   
    let product = {
      produkt_id: this.state.products[this.state.currentProductIndex].produkt_id,
      pname: this.inputProduktname.current.getValue(),
      beschreibung: this.inputProduktbeschreibung.current.getValue(),
      preis: this.inputProduktpreis.current.getValue(),
      strasse: this.inputStraße.current.getValue(),
      hausnr: this.inputHausnummer.current.getValue(),
      plz: this.inputPostleitzahl.current.getValue(),
      ort: this.inputOrt.current.getValue(),
      bild: this.state.imageData,
      uID: 1
    }
    
    const productId = this.state.products[this.state.currentProductIndex].produkt_id;
    
    fetch(`http://localhost:8080/api/product/`+ productId, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(product) })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      alert("Ihr Artikel wurde aktualisiert!");
    });
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

  deleteProduct(){
    const productId = this.state.products[this.state.currentProductIndex].produkt_id;

    fetch('http://localhost:8080/api/product/' + productId, { method: 'DELETE' })
        .then(res => res.json())
        .then((result) => {
          console.log(result)
          alert("Ihr Artikel wurde gelöscht!");

          //Reload Products
          fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => {
              console.log(data);
              this.setState({products: data, currentProductIndex: data.length - 1});
            })
        });
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
                      onClick={this.deleteProduct.bind(this)} 
                      value="Löschen">
                    </Button>
                  </Col>
                  <Col xs={{ span: 4, offset: 3}} className="text-center">
                    <Button 
                      className="whiteBackground" 
                      id="button-finish"
                      onClick={this.onFinishButtonClick.bind(this)} 
                      value="Überarbeiten">
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <Picture 
                      id="picture-preview" 
                      src={this.state.imageData || this.state.products[this.state.currentProductIndex]?.bild}
                      alt="Bildersatz">
                    </Picture>
                  </Col>
                </Row>
                  <FileInput
                    inputId="fileInputProduktbildEdit"
                    labelValue="Produktbild auswählen"
                    inputOnChange={this.fileSelectedHandler.bind(this)}>  
                  </FileInput>
                <Row>
                  <Col md={12} className="text-center">
                    <InputField id="produktnamefield" 
                      placeholder="Produktname"
                      defaultValue={this.state.products[this.state.currentProductIndex]?.pname}
                      ref={this.inputProduktname}>
                    </InputField>
                  </Col>
                </Row>
                <Row>
                  <Col md={{ span: 6, offset: 3}} className="text-center">
                    <InputField id="preisfield" 
                      placeholder="Preis (in Euro)"
                      defaultValue={this.state.products[this.state.currentProductIndex]?.preis}
                      ref={this.inputProduktpreis}>
                    </InputField>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <BigInputField
                      id="EingabeEmail"
                      placeholder="Produktbeschreibung"
                      defaultValue={this.state.products[this.state.currentProductIndex]?.beschreibung}
                      ref={this.inputProduktbeschreibung}
                      rows={4}>
                    </BigInputField>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <InputField id="strassefield" 
                      placeholder="Straße"
                      defaultValue={this.state.products[this.state.currentProductIndex]?.strasse}
                      ref={this.inputStraße}>
                    </InputField>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <InputField id="hausnummerfield" 
                      placeholder="Hausnummer"
                      defaultValue={this.state.products[this.state.currentProductIndex]?.hausnr}
                      ref={this.inputHausnummer}>
                    </InputField>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <InputField id="postleitzahlfield" 
                      placeholder="Postleitzahl"
                      defaultValue={this.state.products[this.state.currentProductIndex]?.plz}
                      ref={this.inputPostleitzahl}>
                    </InputField>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="text-center">
                    <InputField id="ortfield" 
                      placeholder="Ort"
                      defaultValue={this.state.products[this.state.currentProductIndex]?.ort}
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
