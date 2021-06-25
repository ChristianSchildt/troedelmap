import React from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import './LeafletMap.css'
import { adressToLatLng } from '../utils'

// Koordinaten wurden zum testen aus Google Maps kopiert
var latLngHsBochum = [51.44791892028939, 7.270757727589923];
var products = [
  {
    id: 0,
    title: "Laptop",
    description: "Nur 1 Jahr alt. Kann Gebrauchsspuren haben. Bitte anrufen oder eine Mail schreiben.",
    price: "200",
    picture: "https://i.imgur.com/Um9Oibd.jpg",
    latLng: [51.45239101208025, 7.262910997134508]
  },
  {
    id: 1,
    title: "Tablet",
    description: "Hier steht später eine Tablet-Beschreibung",
    price: "50",
    picture: "https://i.imgur.com/uKTW3Z7.jpg",
    latLng: [51.451248895848934, 7.261168763806634]
  },
  {
    id: 2,
    title: "Desktop PC",
    description: "Hier steht später eine DesktopPC-Beschreibung",
    price: "600",
    picture: "https://i.imgur.com/3XmZRU7.jpg",
    latLng:  [51.44922427794989, 7.258648379933391],
    radius: 50
  },
  {
    id: 3,
    title: "Smartphone",
    description: "Hier steht später eine Smartphone-Beschreibung",
    price: "70",
    picture: "https://i.imgur.com/WbEqy8d.jpg",
    latLng:[51.44892189700104, 7.254645487136491],
  },
  {
    id: 4,
    title: "Java ist auch eine Insel",
    description: "Hier steht später eine Buch-Beschreibung",
    price: "5",
    picture: "https://i.imgur.com/cJwW7BF.jpg",
    latLng: null,
    address: "Soldnerstraße 18, 44801 Bochum, Germany"
  }
];


// der Einfachheit halber heißt die Klasse nicht "Map", da es bereits einen Typ mit diesem Namen gibt
class LeafletMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleState: "test1", // weiß nicht, ob wir states hier überhaupt brauchen
    };
  }
  
  render() {
    return (
      <div id="map-container"></div>
    )
  }
  
  componentDidMount() {
    this.initMap();
    this.updateMap();
    this.updatePosition();
  }
  
  initMap() {  
    this.map = L.map('map-container', {
      center: latLngHsBochum,
      zoom: 15
    });
    
    this.layerGroupMarkers = L.layerGroup();
    this.layerGroupMarkers.addTo(this.map);
    
    // TODO: Marker besser direkt auf den Canvas zeichnen, ein Bild zu nutzen ist eher nur zum testen gedacht
    this.marker = L.icon({
      iconUrl: 'images/marker.png',
      iconSize:     [32, 32],
      iconAnchor:   [16, 16],
      popupAnchor:  [0, -18]
    });
    
    // TODO: evaluieren etwas anderes als Mapbox zu nutzen
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);
    
    this.customPopup = L.popup();
  }
  
  updateMap() {
    //first clear markers
    this.layerGroupMarkers.clearLayers();
    
    for (var i = 0; i < products.length; i++) {
      let product = products[i];
      
      //--- just testing converting address to position on map
      if (product.latLng === null) {
        adressToLatLng(product.address, (function(latLng) {
          product.latLng = latLng;
          this.updateMap();
        }).bind(this));
        continue;
      }
      //--- END just testing converting address to position on map
      
      let customMarker;
      if (!product.radius) {
          customMarker = L.marker(product.latLng, {icon: this.marker})         
      } else {
          customMarker = L.circle(product.latLng, product.radius, {
              color: '#F48C06',
              fillColor: '#F48C06',
              fillOpacity: 0.5,
          })
      }
      customMarker.addTo(this.layerGroupMarkers)
          .on('click', this.onClickMarker.bind(this, product));
    }
  }
  
  updatePosition() {
    navigator.geolocation.getCurrentPosition((function(pos) {
      this.map.setView(new L.LatLng(pos.coords.latitude, pos.coords.longitude));
    }).bind(this));
  }
  
  onClickMarker(product) {
    // es wird ein String genutzt, da Babel ein React Element erzeugen würde
    var content = this.htmlToElement(`<div class="popup-background">
        <div class="popup-price-background">
           <span class="popup-text">${product?.price}€</span>
        </div>
        <div class="popup-title-background">
           <span class="popup-text">${product?.title}</span>
        </div>
        <img class="popup-picture" src="${product?.picture}"></img>
        <input type="image" class="popup-close-button" src="images/schließen.jpg"></input>
     </div>`)
    
    content.addEventListener('click', this.onClickPopup.bind(this, product));
    content.children[3].addEventListener('click', (event) => {event.stopPropagation(); this.onClickPopupCloseButton();});
    
    this.customPopup.setLatLng(product.latLng)
      .setContent(content)
      .openOn(this.map);
  }
  
  onClickPopup(product) {  
    this.props.onSelectedProductChanged(product);
  }
  
  onClickPopupCloseButton() {  
    this.map.closePopup();
  }
  
  htmlToElement(html) {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }
}

export default LeafletMap;