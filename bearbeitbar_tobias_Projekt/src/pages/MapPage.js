import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import ImageButton from '../components/ImageButton';
import PopupBackground from '../components/PopupBackground';
import Picture from '../components/Picture';
import LeafletMap from '../components/LeafletMap'
import InputField from '../components/InputField'
import BigInputField from '../components/BigInputField'
import Text from '../components/Text';

function MapPage() {
  return (
    <div className="mapPage">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={1}>
            <Picture id="logoicon" src="troedelmap.svg"></Picture>
          </Col>
          <Col md={{ span: 5, offset: 1}}>

            <InputGroup>
              <InputField id="searchbar"
              placeholder="Was suchst du?">
              </InputField>
              <ImageButton 
                id="button-search" 
                src="images/lupe.jpg" 
                onClick={() => alert("Suche wird gestartet!")}>
              </ImageButton>
            </InputGroup>
          </Col>
          <Col md={{ span: 2, offset: 1}} xs={6}>
            <Row className= "justify-content-center text-center">
              <Col md={4} xs={6}>
                <ImageButton 
                  id="button-addTroedel" 
                  src="images/plus.jpg"
                  href="/troedelInsert">
                </ImageButton>
              </Col>
              <Col md={4} xs={6}>
                <ImageButton 
                  id="button-editTroedel" 
                  src="images/uebersicht.jpg"
                  href="/troedelEdit">
                </ImageButton>
              </Col>
            </Row>
          </Col>
          <Col md={2} xs={6}>
            <Row className= "justify-content-center text-center">
              <Col md={4} xs={6}>
                <ImageButton 
                  id="button-logout"
                  src="images/ausloggen.jpg"
                  href="/"
                  onClick={() => alert("Sie haben sich ausgeloggt!")}>
                </ImageButton>
              </Col>
              <Col md={4} xs={6}>
                <ImageButton 
                  id="button-editUser" 
                  src="images/userBearbeiten.jpg"
                  href="/userEdit">
                </ImageButton>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12} id="LeafletMapWrapper">
            <LeafletMap></LeafletMap>
          </Col>
        </Row>
            <PopupBackground id="popup-allInformations">
              <Row>
                <Col md={12}>
                <ImageButton 
                  className="popup-close" 
                  src="/images/schließen.jpg"
                  onClick={() => document.getElementById("popup-allInformations").style.display="none"}>
                </ImageButton>
                </Col>
                <Col md={12} className="md-pb-2">
                  <Picture id="picture-laptop" src="images/laptop.jpg"></Picture>
                </Col>
                <Col md={12} className="md-pb-2">
                  <InputField id="text-center"
                  placeholder="Laptop">
                  </InputField>
                </Col>
                <Col md={{ span: 6, offset: 3}} className="text-center md-pb-2">
                  <InputField id="text-center2"
                  placeholder="200€">
                  </InputField>
                </Col>
                <Col md={12} className="md-pb-2">
                  <BigInputField id="text-center3" 
                  rows={8} 
                  placeholder="Nur 1 Jahr alt. 
                  Kann Gebrauchsspuren haben.
                  Bitte anrufen oder eine Mail schreiben.">
                  </BigInputField>
                </Col>
              </Row>
              <Row className="md-pb-2 text-center">
                <Col md={2}>
                  <Picture id="picture-seller" src="images/seller.jpg"></Picture>
                </Col>
                <Col md={10}>
                  <Row></Row>
                  <InputField id="anbietermail"
                  placeholder="anbietermail@gmx.de">
                  </InputField>
                  <InputField id="anbietertelefon"
                  placeholder="01578 1623974345">
                  </InputField>
                </Col>
              </Row>
            </PopupBackground>
      </Container>
    </div>
  );
}

export default MapPage;
