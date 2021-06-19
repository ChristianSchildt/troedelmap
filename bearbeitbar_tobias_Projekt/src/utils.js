export function callAjax(url, callback) {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

export function adressToLatLng(address, callback) {
    callAjax('https://nominatim.openstreetmap.org/search?format=json&q='+encodeURIComponent(address), function(data) {
        var parsedData = JSON.parse(data)
        // wir nehmen erst mal an, dass das Ergebnis eindeutig ist.
        callback([parseFloat(parsedData[0].lat), parseFloat(parsedData[0].lon)]);
    })
}
