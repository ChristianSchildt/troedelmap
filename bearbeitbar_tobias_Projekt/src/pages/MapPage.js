import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import ImageButton from '../components/ImageButton';
import BigPopup from '../components/BigPopup';
import Picture from '../components/Picture';
import LeafletMap from '../components/LeafletMap'
import InputField from '../components/InputField'

function MapPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  return (
    <div className="mapPage">
      <Container fluid>
        <Row id="top-bar" className="align-items-center">
          <Col md={1}>
            <Picture id="logoicon" src="troedelmap.svg"></Picture>
          </Col>
          <Col md={{ span: 5, offset: 1}}>

            <InputGroup>
              <InputField id="searchbar"
                type="search"
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
            <LeafletMap onSelectedProductChanged={product => setSelectedProduct(product)}/>
          </Col>
        </Row>
        {selectedProduct &&
          <BigPopup id="popup-allInformations" 
            imgButtonClassName1="popup-close"
            imgButtonSrc1="/images/schließen.jpg"
            imgButtonOnClick1={() => setSelectedProduct(null)}
            pictureId1="picture-product"
            pictureSrc1={selectedProduct?.picture}
            inputFieldId1="text-center"
            inputFieldValue1={selectedProduct?.title}
            inputFieldId2="text-center2"
            inputFieldValue2={selectedProduct?.price + "€"}
            bigInputFieldId1="text-center3"
            bigInputFieldValue1={selectedProduct?.description}
            pictureId2="picture-seller"
            pictureSrc2="images/seller.jpg"
            inputFieldId3="anbietermail"
            inputFieldValue3="anbietermail@gmx.de"
            inputFieldId4="anbietertelefon"
            inputFieldValue4="01578 1623974345">
          </BigPopup>
        }
      </Container>
    </div>
  );
}

export default MapPage;
