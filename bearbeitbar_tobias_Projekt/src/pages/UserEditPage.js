import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import FormControl from 'react-bootstrap/FormControl';


function UserEditPage() {
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
                Bearbeite deine Benutzerdaten
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
                  id="button-editUserPicture"
                  onClick={() => alert("Profilbild wurde aktualisiert.")} 
                  value="Profilbild bearbeiten">
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <Button 
                  className="orangeBackground" 
                  id="button-acceptChanges"
                  href="/map"
                  onClick={() => alert("Änderungen wurden übernommen!")} 
                  value="Änderungen übernehmen">
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="my-auto">
            <Col md={12} className="text-center">
              <Button 
                className="orangeBackground" 
                id="button-deleteUserAccount"
                href="/"
                onClick={() => alert("Sie haben Ihr Benutzerkonto gelöscht!")} 
                value="Benutzerkonto löschen">
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserEditPage;
