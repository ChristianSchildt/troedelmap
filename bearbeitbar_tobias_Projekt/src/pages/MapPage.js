import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ImageButton from '../components/ImageButton';
import PopupBackground from '../components/PopupBackground';
import Picture from '../components/Picture';
import LeafletMap from '../components/LeafletMap'

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
              <FormControl id="searchbar"
                placeholder="Was suchst du?"
              />
              <ImageButton 
                id="button-search" 
                src="images/lupe.jpg" 
                onClick={() => alert("Suche wird gestartet!")}>
              </ImageButton>
            </InputGroup>
          </Col>
          <Col md={{ span: 2, offset: 1}} xs={6}>
            <Row className= "justify-content-center">
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
          <Col md={2}  xs={6}>
            <Row className= "justify-content-center">
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
          <Col md={12}>
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
                <Col md={12} className="pb-2">
                  <Picture id="picture-laptop" src="images/laptop.jpg"></Picture>
                </Col>
                <Col md={12} className="pb-2">
                  <FormControl
                    placeholder="Laptop"
                  />
                </Col>
                <Col md={12} className="pb-2">
                  <FormControl
                    placeholder="100€"
                  />
                </Col>
                <Col md={12} className="pb-2">
                  <FormControl
                    placeholder="Nur 1 Jahr alt. Kann Gebrauchsspuren haben."
                  />
                </Col>
              </Row>
              <Row className="pb-2">
                <Col md={2}>
                  <Picture id="picture-seller" src="images/seller.jpg"></Picture>
                </Col>
                <Col md={10}>
                  <Row></Row>
                  <FormControl
                    placeholder="anbietermail@gmx.de"
                  />
                  <FormControl
                    placeholder="01578 1623974345"
                  />
                </Col>
              </Row>
            </PopupBackground>
      </Container>
    </div>
  );
}

export default MapPage;
