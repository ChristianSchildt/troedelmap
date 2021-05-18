// Koordinaten wurden zum testen aus Google Maps kopiert
var latLngHsBochum = [51.44791892028939, 7.270757727589923];
var latLngAds = [
    [51.45239101208025, 7.262910997134508],
    [51.451248895848934, 7.261168763806634],
    [51.44892189700104, 7.254645487136491]
];
var latLngAdsBlurredLocation = [
    {
        latLng: [51.44922427794989, 7.258648379933391],
        radius: 50
    }
];

var map = L.map('map-container', {
    center: latLngHsBochum,
    zoom: 15
});

// TODO: Marker besser direkt auf den Canvas zeichnen, ein Bild zu nutzen ist eher nur zum testen gedacht
var marker = L.icon({
    iconUrl: 'marker.png',
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


latLngAds.forEach(latLngAd => {
    L.marker(latLngAd, {icon: marker})
    .addTo(map)
    .bindPopup("<b>Test</b><br/>Anstelle dieses Pop-ups soll hier<br>später eine React Component<br/>angezeigt werden.");
});

latLngAdsBlurredLocation.forEach(ad => {
    L.circle(ad.latLng, ad.radius, {
        color: '#F48C06',
        fillColor: '#F48C06',
        fillOpacity: 0.5,
    })
    .addTo(map)
    .bindPopup("<b>Test</b><br/>Anstelle dieses Pop-ups soll hier<br>später eine React Component<br/>angezeigt werden.")
});

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