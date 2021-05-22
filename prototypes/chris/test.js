// Koordinaten wurden zum testen aus Google Maps kopiert
var latLngHsBochum = [51.44791892028939, 7.270757727589923];
var ads = [
    {
        id: 0,
        titel: "Laptop",
        preis: "100",
        bild: "images/v36_66.png",
        latLng: [51.45239101208025, 7.262910997134508]
    },
    {
        id: 1,
        titel: "Tablet",
        preis: "110",
        latLng: [51.451248895848934, 7.261168763806634]
    },
    {
        id: 2,
        titel: "Smartphone",
        preis: "120",
        latLng: [51.44922427794989, 7.258648379933391],
        radius: 50
    },
    {
        id: 3,
        titel: "Desktop PC",
        preis: "130",
        latLng: [51.44892189700104, 7.254645487136491]
    }
];

var map = L.map('map-container', {
    center: latLngHsBochum,
    zoom: 15
});

// TODO: Marker besser direkt auf den Canvas zeichnen, ein Bild zu nutzen ist eher nur zum testen gedacht
var marker = L.icon({
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
}).addTo(map);

var customPopup = L.popup();


// muss etwas später aufgerufen werden, da die React Components bis dahin noch nicht initialisiert ist
setTimeout(function() {  
    ads.forEach(ad => {      
        var customMarker;
        if (!ad.radius) {
            customMarker = L.marker(ad.latLng, {icon: marker})         
        } else {
            customMarker = L.circle(ad.latLng, ad.radius, {
                color: '#F48C06',
                fillColor: '#F48C06',
                fillOpacity: 0.5,
            })
        }
        customMarker.addTo(map)
            .on('click', function(e) { onClickMarker(ad) });
    });
}, 0);

function onClickMarker(ad) {
    var content = htmlToElement(`<div class="v36_51" onclick="onClickPopup(${ad.id})">
        <div class="v36_52"></div>
        <div class="v36_59">
           <div class="v36_60"></div>
           <span class="v36_61">${ad.preis}</span><span class="v45_0">€</span>
        </div>
        <div class="v36_62">
           <div class="v36_63"></div>
           <span class="v36_64">${ad.titel}</span>
        </div>
        <div class="v36_65">
           <div class="v36_66" background="${ad.bild}"></div>
        </div>
        <div class="v36_68">
           <div class="v36_69"></div>
           <div class="name"></div>
           <div class="name"></div>
        </div>
     </div>`)
    
    customPopup.setLatLng(ad.latLng)
        .setContent(content)
        .openOn(map);
}

function onClickPopup(id) {
    alert(`Popup der Anzeige mit der ID ${id} wurde angeklickt. Bald werden in diesem Fall die Details zu der Anzeige angezeigt.`);
}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}


//ReactDOM.render(<HeaderComponent id="header" />, document.getElementById("root"));

/*L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map).bindPopup("I am a polygon.");


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);*/
