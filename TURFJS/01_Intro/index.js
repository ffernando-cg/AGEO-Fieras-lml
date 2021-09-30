var mymap = L.map("mapid").setView(
  [21.152364203854884, -101.71115227036523],
  1
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 9,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

var geojson = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-101.6824940171719, 21.12574244951028],
    },
    properties: {
      name: "León",
      title: "León, Guanajuato",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-101.1748887669979, 21.486437422597927],
    },
    properties: {
      name: "SFTM",
      title: "SFTM, GTO",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-100.92287185016805, 21.159840284922293],
    },
    properties: {
      name: "DH",
      title: "DH, GTO",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-101.858956, 21.041405],
    },
    properties: {
      name: "DH",
      title: "DH, GTO",
    },
  },
];

coords = [];

var puntos = L.geoJSON(geojson, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng);
  },
  onEachFeature: function (feature, layer) {
    coords.push(feature.geometry.coordinates);
  },
});

var puntosUSA = L.geoJSON(statesData, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng);
  },
  onEachFeature: function (feature, layer) {
    coords.push(feature.geometry.coordinates);
  },
  color:'purple'
});

mymap.addLayer(puntos);
mymap.addLayer(puntosUSA);

var pt1 = turf.point(coords[0]);
var pt2 = turf.point(coords[1]);
var pt3 = turf.point(coords[2]);
// console.log(pt1);

var options = {units:"kilometers"};

var distance = turf.distance(pt1, pt3, options);

console.log(distance);

distance = Math.round(distance);
document.write(`The total distance is ${distance} kilometers`);

//Linea recta entre dos puntos
var line = turf.lineString([coords[0], coords[1]]);
L.geoJSON(line, {color:"blue"}).addTo(mymap)

var paralela = turf.lineOffset(line,2,{ units:'miles' });
L.geoJSON(paralela, { color: 'red' }).addTo(mymap);

//Aleatorios
var points = turf.randomPoint(5, { 
  bbox: [-78.881836,-4.302591,-67.324219,12.511665]
});
var geoJsonLayer = L.geoJSON().addTo(mymap);
geoJsonLayer.addData(points)

// var line = turf.lineString([coords[0], coords[2]]);
// L.geoJSON(line, {color:"red"}).addTo(mymap)

// var line = turf.lineString([coords[1], coords[2]]);
// L.geoJSON(line, {color:"green"}).addTo(mymap)

// var features = turf.points(coords);

// var center = turf.center(features);
// L.geoJSON(center).addTo(mymap)


// const polygon = turf.polygon([[...coords, coords[0]]]);
// var centroid = turf.centroid(polygon);
// L.geoJSON(polygon, {color: 'purple'}).addTo(mymap)
