var mymap = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWpheXN1bmFydGhpIiwiYSI6ImNpcDZjeHUzbzAwOHN0Y25yODR1bmY2dzcifQ.VUM51H3wMfXWclIgQIGOvQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'ajaysunarthi.0bel3enh',
    accessToken: 'pk.eyJ1IjoiYWpheXN1bmFydGhpIiwiYSI6ImNpcDZjeHUzbzAwOHN0Y25yODR1bmY2dzcifQ.VUM51H3wMfXWclIgQIGOvQ'
}).addTo(mymap);

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
    redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});

L.marker([51.5, -0.09], {icon: greenIcon}).addTo(mymap).bindPopup("I am a green leaf.");
L.marker([51.495, -0.083], {icon: redIcon}).addTo(mymap).bindPopup("I am a red leaf.");
L.marker([51.49, -0.1], {icon: orangeIcon}).addTo(mymap).bindPopup("I am an orange leaf.");