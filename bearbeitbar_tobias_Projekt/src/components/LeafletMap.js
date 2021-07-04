import React from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import './LeafletMap.css'
import { adressToLatLng } from '../utils'

// Koordinaten wurden zum testen aus Google Maps kopiert
var latLngHsBochum = [51.44791892028939, 7.270757727589923];

// der Einfachheit halber heißt die Klasse nicht "Map", da es bereits einen Typ mit diesem Namen gibt
class LeafletMap extends React.Component {
   
  /**
   * "public" methods
   */
  
  setFilter(filter) {
    this.filter = filter ? filter.toLowerCase() : filter;
    this.updateMap();
  }
  
  
  /**
   * "private" methods
   */
  
  render() {
    return (
      <div id="map-container"></div>
    )
  }
  
  componentDidMount() {
    this.initMap();
    this.updatePosition();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products !== this.props.products) {
      this.updateMap();
    }
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
    //first clear map
    this.layerGroupMarkers.clearLayers();
    this.map.closePopup();
    
    for (var i = 0; i < this.props.products.length; i++) {
      let p = this.props.products[i];
      
      // check filter
      if (this.filter && !(p.pname.toLowerCase().includes(this.filter) || p.beschreibung.toLowerCase().includes(this.filter))) {
        continue;
      }
      
      //--- convert address to position on map
      if (p.latLng === undefined) {
        const addr = `${p.strasse} + ${p.hausnr}, ${p.plz} ${p.ort}, Germany`;
        adressToLatLng(addr, (function(latLng) {
          p.latLng = latLng;
          this.updateMap();
        }).bind(this));
        continue;
      }
      
      if (p.latLng !== null) {
        // create marker
        let customMarker;
        if (!p.radius) {
            customMarker = L.marker(p.latLng, {icon: this.marker})         
        } else {
            customMarker = L.circle(p.latLng, p.radius, {
                color: '#F48C06',
                fillColor: '#F48C06',
                fillOpacity: 0.5,
            })
        }
        customMarker.addTo(this.layerGroupMarkers)
            .on('click', this.onClickMarker.bind(this, p));
      } else {
        console.log(`Position für Produkt mit der ID ${p.produkt_id} konnte nicht ermittelt werden.`);
      }
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
           <span class="popup-text">${product?.preis}€</span>
        </div>
        <div class="popup-title-background">
           <span class="popup-text">${product?.pname}</span>
        </div>
        <img class="popup-picture" src="${product?.bild}"></img>
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