import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import Text from '../components/Text';
import InputField from '../components/InputField';
import FileInput from '../components/FileInput';

function UserEditPage() {

  const inputBenutzername = useRef(null);
  const inputEmail = useRef(null);
  const inputPasswort = useRef(null);
  const inputPasswortWiederholen = useRef(null);
  const inputKontaktinfos = useRef(null);

  const [image, setImage] = useState(0);    
  const [imageData, setImageData] = useState(0);    //Hier muss als default noch das bisherige Bild aus der Datenbank eingefügt werden

  const onAcceptChanges = () => {
    // TODO: Daten an Datenbank weitergeben
    console.log(`${inputBenutzername.current.state?.value}`);
    console.log(`${inputEmail.current.state?.value}`);
    console.log(`${inputPasswort.current.state?.value}`);
    console.log(`${inputPasswortWiederholen.current.state?.value}`);
    console.log(`${inputKontaktinfos.current.state?.value}`);
    console.log(image);

    alert("Änderungen wurden übernommen!")
  }

  const fileSelectedHandler = event => {
    if(event.target.files[0])
    {
      setImage(event.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageData(reader.result);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  return (
    <div className="userEditPage">
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
                <Text id="benutzerdaten"
                value="Bearbeite deine Benutzerdaten">
                </Text>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="benutzernamefield" 
                placeholder="Benutzername"
                ref={inputBenutzername}>
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="emailfield"
                  type="email"
                  placeholder="Email"
                  ref={inputEmail}>
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="passwordfield"
                  type="password" 
                  placeholder="Passwort"
                  ref={inputPasswort}>
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="passwordfield2" 
                  type="password"
                  placeholder="Passwort wiederholen"
                  ref={inputPasswortWiederholen}>
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="kontaktinfofield" 
                  placeholder="Kontaktinfos"
                  ref={inputKontaktinfos}>
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <Picture 
                  id="picture-preview" 
                  src={imageData}
                  alt="Bildersatz">
                </Picture>
                <FileInput
                  inputId="fileInputProfilbildEdit"
                  labelValue="Profilbild auswählen"
                  inputOnChange={fileSelectedHandler.bind(this)}>  
                </FileInput>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <Button 
                  className="orangeBackground" 
                  id="button-acceptChanges"
                  href="/map"
                  onClick={onAcceptChanges.bind(this)} 
                  value="Änderungen übernehmen">
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="my-auto pt-5 pt-md-0">
            <Row>
              <Col md={12} className="text-center">
                <Button 
                  className="orangeBackground" 
                  id="button-deleteUserAccount"
                  href="/"
                  onClick={() => alert("Sie haben Ihr Benutzerkonto gelöscht!")} 
                  value="Benutzerkonto löschen">
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserEditPage;
