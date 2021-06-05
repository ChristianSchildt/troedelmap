import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import FormControl from 'react-bootstrap/FormControl';

function UserRegistrationPage() {
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
                Registrier dich jetzt
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                
                <FormControl
                  placeholder="Benutzername"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                
                <FormControl
                  placeholder="Email"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                
                <FormControl
                  placeholder="Password"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                
                <FormControl
                  placeholder="Password wiederholen"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                
                <FormControl
                  placeholder="Kontaktinfos"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                {/* Profilbild */}
                <Button 
                  className="whiteBackground" 
                  id="button-chooseUserPicture" 
                  onClick={() => alert("Profilbild wurde ausgewählt!")} 
                  value="Profilbild auswählen (optional)">
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                {/* <a href = "/login"><button type="button" className="btn btn-light">
                  Registrieren
                </button></a> */}
                <Button 
                  className="orangeBackground" 
                  id="button-registration" 
                  href="/login" 
                  onClick={() => alert("Sie haben sich registriert.")} 
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
