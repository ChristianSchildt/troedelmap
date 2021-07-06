import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import Text from '../components/Text';
import InputField from '../components/InputField';
import BigInputField from '../components/BigInputField';
import FileInput from '../components/FileInput';


function TroedelInsertPage() {
  const inputName = useRef(null);
  const inputBeschreibung = useRef(null);
  const inputPreis = useRef(null);
  const inputStrasse = useRef(null);
  const inputHausnummer = useRef(null);
  const inputPlz = useRef(null);
  const inputOrt = useRef(null);

  const [image, setImage] = useState(0);
  const [imageData, setImageData] = useState(0);
  
  const onAddButtonClick = () => {
    
    
    
    let product = {
      pname: inputName.current.state?.value,
      beschreibung: inputBeschreibung.current.state?.value,
      preis: inputPreis.current.state?.value,
      strasse: inputStrasse.current.state?.value,
      hausnr: inputHausnummer.current.state?.value,
      plz: inputPlz.current.state?.value,
      ort: inputOrt.current.state?.value,
      bild: imageData,
      uID: 1 //TODO: soll später der tatsächliche Nutzer sein
    }
    
    fetch('http://localhost:8080/api/products', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(product) })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      alert("Trödel wurde hinzugefügt!");
      window.location.href = "/map";
    })
    console.log(product);


  };

  const fileSelectedHandler = event => {
    if(event.target.files[0])
    {
      setImage(event.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageData(reader.result);
        console.log(reader.result)
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  
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
              <FileInput
                inputId="fileInputProduktbildInsert"
                labelValue="Produktbild auswählen"
                inputOnChange={fileSelectedHandler.bind(this)}>  
              </FileInput>
            <Row>
              <Col md={12} className="text-center">
                <Button 
                  className="orangeBackground" 
                  id="button-addMyTroedel"
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
