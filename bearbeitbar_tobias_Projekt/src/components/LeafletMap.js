import React from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import './LeafletMap.css'
import markerIcon from '../temp/marker.png'

// Koordinaten wurden zum testen aus Google Maps kopiert
var latLngHsBochum = [51.44791892028939, 7.270757727589923];
var ads = [
    {
        id: 0,
        title: "Laptop",
        price: "200",
        picture: "https://i.imgur.com/Um9Oibd.jpg",
        latLng: [51.45239101208025, 7.262910997134508]
    },
    {
        id: 1,
        title: "Tablet",
        price: "50",
        picture: "https://i.imgur.com/uKTW3Z7.jpg",
        latLng: [51.451248895848934, 7.261168763806634]
    },
    {
      id: 2,
      title: "Desktop PC",
      price: "600",
      picture: "https://i.imgur.com/3XmZRU7.jpg",
      latLng:  [51.44922427794989, 7.258648379933391],
      radius: 50
  },
  {
      id: 3,
      title: "Smartphone",
      price: "70",
      picture: "https://i.imgur.com/WbEqy8d.jpg",
      latLng:[51.44892189700104, 7.254645487136491],
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
  }
  
  initMap() {
    this.map = L.map('map-container', {
      center: latLngHsBochum,
      zoom: 15
    });
    
    // TODO: Marker besser direkt auf den Canvas zeichnen, ein Bild zu nutzen ist eher nur zum testen gedacht
    this.marker = L.icon({
      iconUrl: markerIcon,
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
    ads.forEach(ad => {      
      var customMarker;
      if (!ad.radius) {
          customMarker = L.marker(ad.latLng, {icon: this.marker})         
      } else {
          customMarker = L.circle(ad.latLng, ad.radius, {
              color: '#F48C06',
              fillColor: '#F48C06',
              fillOpacity: 0.5,
          })
      }
      customMarker.addTo(this.map)
          .on('click', this.onClickMarker.bind(this, ad));
  });
  }
  
  onClickMarker(ad) {
    var content = this.htmlToElement(`<div class="v36_51">
        <div class="v36_52"></div>
        <div class="v36_59">
           <div class="v36_60"></div>
           <span class="v36_61">${ad.price}€</span>
        </div>
        <div class="v36_62">
           <div class="v36_63"></div>
           <span class="v36_64">${ad.title}</span>
        </div>
        <div class="v36_65">
           <img class="v36_66" src="${ad.picture}"></img>
        </div>
        <div class="v36_68">
           <div class="v36_69"></div>
        </div>
     </div>`)
    
    content.addEventListener('click', this.onClickPopup.bind(this, ad))
    
    this.customPopup.setLatLng(ad.latLng)
      .setContent(content)
      .openOn(this.map);
  }
  
  onClickPopup(ad) {
    // TODO: nur ein Workaround, später schön machen
    document.getElementById("popup-allInformations").style.display = "block"
    
    //alert(`Popup der Anzeige mit der ID ${ad.id} wurde angeklickt. Bald werden in diesem Fall die Details zu der Anzeige angezeigt.`);
  }

  htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }
}

export default LeafletMap;