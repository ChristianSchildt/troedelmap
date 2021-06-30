import React, { useState, useRef, useEffect } from 'react';
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
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const map = useRef(null);
  const searchbar = useRef(null);
  
  const applyMapFilter = () => {
    map.current.setFilter(searchbar.current.state.value);
    setSelectedProduct(null);
  }
  
  
    // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("componentDidMount");
    fetch('http://localhost:8080/api/products')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })  
  });
  
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
                ref={searchbar}
                type="search" //not supported in some Browsers, e.g. Firefox
                placeholder="Was suchst du?"
                onKeyDown={(event) => {if (event.key === 'Enter') applyMapFilter();}}
                onsearch={() => {if (!searchbar.current.state.value) applyMapFilter();}} //not supported in some Browsers, e.g. Firefox. Event just used for clear via type="search" x-button 
                >
              </InputField>
              <ImageButton 
                id="button-search" 
                src="images/lupe.jpg" 
                onClick={applyMapFilter}>
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
            <LeafletMap ref={map} onSelectedProductChanged={product => setSelectedProduct(product)}/>
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
