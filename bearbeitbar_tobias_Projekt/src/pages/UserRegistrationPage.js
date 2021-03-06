import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import TextHeading from '../components/TextHeading';
import InputField from '../components/InputField';
import FileInput from '../components/FileInput';


function UserRegistrationPage() {

  const inputBenutzername = useRef(null);
  const inputEmail = useRef(null);
  const inputPasswort = useRef(null);
  const inputPasswortWiederholen = useRef(null);
  const inputKontaktinfos = useRef(null);

  const [image, setImage] = useState(0);

  const onRegistrationButtonClick = () => {

    let user ={
      bname: inputBenutzername.current.getValue(),
      email: inputEmail.current.getValue(),
      passwort: inputPasswort.current.getValue(),
      passwortWiederholen: inputPasswortWiederholen.current.getValue(),
      inputKontaktinfos: inputKontaktinfos.current.getValue(),
    }

    if(user.passwort === user.passwortWiederholen)
    {
      fetch('http://localhost:8080/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) })
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        alert("Sie haben sich registriert.");
        window.location.href = "/login";
      })

      console.log(`${inputBenutzername.current.state?.value}`);
      console.log(`${inputEmail.current.state?.value}`);
      console.log(`${inputPasswort.current.state?.value}`);
      console.log(`${inputPasswortWiederholen.current.state?.value}`);
      console.log(`${inputKontaktinfos.current.state?.value}`);
      console.log(image);
    }
    else
    {
      alert("Passwörter stimmen nicht überein.");
    }
    
  };

  const fileSelectedHandler = event => {
    setImage(event.target.files[0]);
  }


  return (
    <div className="userRegistrationPage">
      <Container fluid>
        <Row>
          <Col md={3}>
            <Picture id="logoicon" src="troedelmap.svg"></Picture>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Button 
              className="button-home" 
              href="/" 
              value="HOME">
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4}} className="text-center">
            <Row>
              <Col md={12} className="text-center titel">
                <TextHeading id = "register"
                value="Registriere dich jetzt">
                </TextHeading>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="benutzernamefield"
                  ref={inputBenutzername}
                  placeholder="Benutzername">
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="emailfield"
                  type="email" 
                  ref={inputEmail}
                  placeholder="Email">
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="passwordfield"
                  type="password" 
                  ref={inputPasswort}
                  placeholder="Passwort">
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="passwordfield2" 
                  type="password"
                  ref={inputPasswortWiederholen}
                  placeholder="Passwort wiederholen">
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="kontaktinfofield"
                  ref={inputKontaktinfos}
                  placeholder="Kontaktinfos">
                </InputField>
              </Col>
            </Row>
              <FileInput
                inputId="fileInputProfilbildRegistration"
                labelValue="Profilbild auswählen (optional)"
                inputOnChange={fileSelectedHandler.bind(this)}>  
              </FileInput>
            <Row>
              <Col md={12} className="text-center">
                <Button 
                  className="orangeBackground" 
                  id="button-registration" 
                  onClick={onRegistrationButtonClick.bind(this)} 
                  value="Registrieren">
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserRegistrationPage;
