import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import Picture from '../components/Picture';
import Text from '../components/Text';
import InputField from '../components/InputField';

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
                <Text id="benutzerdaten"
                value="Bearbeite deine Benutzerdaten">
                </Text>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="benutzernamefield" 
                placeholder="Benutzername">
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="emailfield"
                  type="email"
                  placeholder="Email">
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="passwordfield"
                  type="password" 
                  placeholder="Passwort">
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="passwordfield2" 
                  type="password"
                  placeholder="Passwort wiederholen">
                </InputField>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <InputField id="kontaktinfofield" 
                  placeholder="Kontaktinfos">
                </InputField>
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
