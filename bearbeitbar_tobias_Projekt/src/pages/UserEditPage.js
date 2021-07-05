import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import Text from '../components/Text';
import InputField from '../components/InputField';
import FileInput from '../components/FileInput';

class UserEditPage extends React.Component 
{

  constructor(props)
  {
    super(props);
    this.state = {
      image: 0,
      imageData: 0,             //Hier muss als default noch das bisherige Bild aus der Datenbank eingefügt werden
      user: {}
    };

    this.inputBenutzername = React.createRef(null);
    this.inputEmail = React.createRef(null);
    this.inputPasswort = React.createRef(null);
    this.inputPasswortWiederholen = React.createRef(null);
    this.inputKontaktinfos = React.createRef(null);
  }
  
  componentDidMount()
  {
    fetch('http://localhost:8080/api/user')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({user: data});
    })
  }

  onAcceptChanges = () => {
    //
    // if(this.inputPasswort == this.inputPasswortWiederholen)
    // {

    
      // TODO: Daten an Datenbank weitergeben
      let user = {
        bname: this.inputBenutzername.current.getValue(),  
        email: this.inputEmail.current.getValue(),
        passwort: this.inputPasswort.current.getValue()
      }

      fetch('http://localhost:8080/api/userUpdate/' + this.state.user[0].bk_id, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user)})
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        alert("Änderungen wurden übernommen!");
      });

      console.log(`${this.inputBenutzername.current.state?.value}`);
      console.log(`${this.inputEmail.current.state?.value}`);
      console.log(`${this.inputPasswort.current.state?.value}`);
      console.log(`${this.inputPasswortWiederholen.current.state?.value}`);
      console.log(`${this.inputKontaktinfos.current.state?.value}`);
      console.log(this.state.image);
    // }
  }

  onDeleteButtonClick()
  {
    const userId = this.state.user[0].bk_id;
    console.log("UserId= "+userId);

    fetch('http://localhost:8080/api/user/' + userId, { method: 'DELETE' })
      .then(res => res.json())
      .then((result) => {
        console.log(result)
        alert("Ihr Benutzerkonto wurde gelöscht!");
      });
  }

  fileSelectedHandler (event) {
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
                  defaultValue={this.state.user[0]?.bname}    //TODO: Index muss noch per Login-Identität gesetzt werden?
                  ref={this.inputBenutzername}>
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField id="emailfield"
                    type="email"
                    placeholder="Email"
                    defaultValue={this.state.user[0]?.email}   //TODO: Index muss noch per Login-Identität gesetzt werden?
                    ref={this.inputEmail}>
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField id="passwordfield"
                    type="password" 
                    placeholder="Passwort"
                    defaultValue=""                   //TODO: Passwort bleibt default leer?
                    ref={this.inputPasswort}>
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField id="passwordfield2" 
                    type="password"
                    placeholder="Passwort wiederholen"
                    defaultValue=""                   //TODO: PasswortWiederholen bleibt default leer?
                    ref={this.inputPasswortWiederholen}>
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <InputField id="kontaktinfofield" 
                    placeholder="Kontaktinfos"
                    defaultValue=""                  //TODO: Hier müssen noch die Kontaktinformationen hinzugefügt werden
                    ref={this.inputKontaktinfos}>
                  </InputField>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <Picture 
                    id="picture-preview" 
                    src={this.state.imageData}       //TODO: Hier muss noch ein default-Bild und das aktualisierte Bild hin 
                    alt="Bildersatz">
                  </Picture>
                  <FileInput
                    inputId="fileInputProfilbildEdit"
                    labelValue="Profilbild auswählen"
                    inputOnChange={this.fileSelectedHandler}>  
                  </FileInput>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-center">
                  <Button 
                    className="orangeBackground" 
                    id="button-acceptChanges"
                    // href="/map"
                    onClick={this.onAcceptChanges} 
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
                    // href="/"
                    onClick={this.onDeleteButtonClick.bind(this)} 
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
}

export default UserEditPage;
