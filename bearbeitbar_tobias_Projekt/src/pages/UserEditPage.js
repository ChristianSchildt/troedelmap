import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';


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
            {/* <a href = "/map"><button type="button" className="btn btn-light">
              Zurück zur Karte
            </button></a> kann weg*/}
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
              <Col md={12} className="text-center">
                Bearbeite deine Benutzerdaten
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Benutzername
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Email
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Password
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Password wiederholen
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                Kontaktinfos
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
                {/* <a href = "/login"><button type="button" className="btn btn-light">
                  Änderungen übernehmen
                </button></a> kann weg */}
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
              {/* <a href = "/"><button type="button" className="btn btn-light">
                Benutzerkonto löschen
              </button></a> */}
              <Button 
                className="orangeBackground" 
                id="button-deleteUserAccount"
                href="/"
                onClick={() => alert("Sie haben Ihr Benutzerkonto gelöscht!")} 
                value="Benutzerkonto löschen!">
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserEditPage;
