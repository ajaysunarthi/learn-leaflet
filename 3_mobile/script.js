var mymap = L.map('map');

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWpheXN1bmFydGhpIiwiYSI6ImNpcDZjeHUzbzAwOHN0Y25yODR1bmY2dzcifQ.VUM51H3wMfXWclIgQIGOvQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'ajaysunarthi.0bel3enh',
    accessToken: 'pk.eyJ1IjoiYWpheXN1bmFydGhpIiwiYSI6ImNpcDZjeHUzbzAwOHN0Y25yODR1bmY2dzcifQ.VUM51H3wMfXWclIgQIGOvQ'
}).addTo(mymap);

mymap.locate({setView: true});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationerror', onLocationError);