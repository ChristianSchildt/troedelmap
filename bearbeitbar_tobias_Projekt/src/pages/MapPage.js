import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import ImageButton from '../components/ImageButton';
import BigPopup from '../components/BigPopup';
import Picture from '../components/Picture';
import LeafletMap from '../components/LeafletMap'
import InputField from '../components/InputField'

class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      selectedProduct: null 
    };
    this.map = React.createRef();
    this.searchbar = React.createRef();
  }
  
  applyMapFilter() {
    this.map.current.setFilter(this.searchbar.current.state.value);
    this.setState({selectedProduct: null});
  }
  
  
  // Similar to componentDidMount and componentDidUpdate:
  componentDidMount() {
    fetch('http://localhost:8080/api/products')
    .then(response => response.json())
    .then(data => {
      this.setState({products: data});
    })
  }

  render() {
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
                  ref={this.searchbar}
                  type="search" //not supported in some Browsers, e.g. Firefox
                  placeholder="Was suchst du?"
                  onKeyDown={(event) => {if (event.key === 'Enter') this.applyMapFilter();}}
                  onsearch={() => {if (!this.searchbar.current.state.value) this.applyMapFilter();}} //not supported in some Browsers, e.g. Firefox. Event just used for clear via type="search" x-button 
                  >
                </InputField>
                <ImageButton 
                  id="button-search" 
                  src="images/lupe.jpg" 
                  onClick={this.applyMapFilter}>
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
              <LeafletMap ref={this.map}
              products={this.state.products}
              onSelectedProductChanged={product => this.setState({selectedProduct: product})}/>
            </Col>
          </Row>
          {this.state.selectedProduct &&
            <BigPopup id="popup-allInformations" 
              imgButtonClassName1="popup-close"
              imgButtonSrc1="/images/schließen.jpg"
              imgButtonOnClick1={() => this.setState({selectedProduct: null})}
              pictureId1="picture-product"
              pictureSrc1={this.state.selectedProduct?.bild}
              inputFieldId1="text-center"
              inputFieldValue1={this.state.selectedProduct?.pname}
              inputFieldId2="text-center2"
              inputFieldValue2={this.state.selectedProduct?.preis + "€"}
              bigInputFieldId1="text-center3"
              bigInputFieldValue1={this.state.selectedProduct?.beschreibung}
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
}

export default MapPage;
