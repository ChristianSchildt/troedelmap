import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
import ImageButton from './ImageButton';
import PopupBackground from './PopupBackground';
import Picture from './Picture';

function MapPage() {
  return (
    <div className="mapPage">
      <Container fluid>
        <Row>
          <Col md={1}>
            <img id="logoicon" src="logo512.png" alt="Trödelmap"/>
          </Col>
          <Col md={{ span: 4, offset: 3}}>

            <InputGroup>
              <FormControl id="formcontrol"
                placeholder="Was suchst du?"
              />
              {/* <Button variant="success" id="button-search">
                Go
              </Button> kann weg */}
              <ImageButton 
                id="button-search" 
                src="images/lupe.jpg" 
                onClick={() => alert("Suche wird gestartet!")}>
              </ImageButton>
            </InputGroup>
          </Col>
          <Col md={{ span: 1, offset: 2}}>
            <Row>
              <Col md={4}>
                {/* <a href = "/troedelInsert"><button type="button" className="btn btn-light">
                  +
                </button></a> kann weg*/ }
                <ImageButton 
                  id="button-addTroedel" 
                  src="images/plus.jpg"
                  href="/troedelInsert">
                </ImageButton>
              </Col>
              <Col md={4}>
                {/* <a href = "/troedelEdit"><button type="button" className="btn btn-light">
                  ?
                </button></a> kann weg*/ }
                <ImageButton 
                  id="button-editTroedel" 
                  src="images/uebersicht.jpg"
                  href="/troedelEdit">
                </ImageButton>
              </Col>
            </Row>
          </Col>
          <Col md={1}>
            <Row>
              <Col md={4}>
                {/* <a href = "/"><button type="button" className="btn btn-light">
                  ESC
                </button></a> kann weg*/}
                <ImageButton 
                  id="button-logout"
                  src="images/ausloggen.jpg"
                  href="/"
                  onClick={() => alert("Sie haben sich ausgeloggt!")}>
                </ImageButton>
              </Col>
              <Col md={4}>
                {/* <a href = "/userEdit"><button type="button" className="btn btn-light">
                  \o/
                </button></a> kann weg*/}
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
            <div id="leafletMap">Das ist die Karte!</div>
            <PopupBackground id1="svgrect" id2="popup-allInformations"></PopupBackground>
            <ImageButton 
              className="popup-close" 
              src="/images/schließen.jpg"
              onClick={() => alert("Popup soll sich schließen!")}>
            </ImageButton>
            <Picture id="picture-laptop" src="images/laptop.jpg"></Picture>
            <Picture id="picture-seller" src="images/seller.jpg"></Picture>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MapPage;
