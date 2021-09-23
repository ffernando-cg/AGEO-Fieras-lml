var mymap = L.map("mapid").setView(
  [21.15223412617155, -101.7113883047542],
  4
);

L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(mymap);
var salle = L.marker([21.15223412617155, -101.7113883047542]).addTo(
  mymap
);
/*var TSM = L.marker([25.651632583733686, -100.28894991685226]).addTo(
  mymap
);

var ECIJG = L.marker([4.782822211312334, -74.0414846752721]).addTo(mymap);

L.polygon([
  [21.15223412617155, -101.711388304752],
  [28.067169188445153, -80.62348334271738],
  [4.782822211312334, -74.0414846752721],
]).addTo(mymap).bindPopup("Triangulo de las bermudas xdd");

var circulo = L.circle([21.15223412617155, -101.7113883047542], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 100000
}).addTo(mymap).bindPopup("Lugar de las Fieras");
*/

$("#btnAdd").on('click', function () {
  var Lat = $('#Lat').val();
  var Long = $('#Long').val();

  let newVal = L.marker([Lat, Long]).addTo(mymap).bindPopup("Arriba las Fieras");
});

function onEachFeature(feature, layer) {
  var popupContent = `Soy un ${feature.geometry.type} en la salle :D`;

  if (feature.properties && feature.properties.popupContent) {
    popupContent += feature.properties.popupContent;
  }
  if (feature.properties.style) {
    layer.setStyle(feature.properties.style)
  }

  layer.bindPopup(popupContent);
}

L.geoJSON(lasalle, {
  filter: function (feature, layer) {
    if (feature.properties) {
      return true
    }
  },
  onEachFeature: onEachFeature,
}).addTo(mymap);

// function onMapClick(e) {
//   alert(`Haz dado click en : ${e.latlng}`);
// }



// function onMapClick(e) {
//   L.popup().setLatLng(e.latlng).setContent(`Haz dado click en ${e.latlng.toString()}`).openOn(mymap)
// }

mymap.clicked = 0;
var previousData = '', firstpolyline = null;
function onMapClick(e) {
  if (mymap.clicked == 0) {
      if(firstpolyline !== null){
          mymap.removeLayer(firstpolyline)
      }
    L.marker(e.latlng).addTo(mymap);
    previousData = e.latlng;
    mymap.clicked += 1;
  } else if (mymap.clicked == 1) {
    L.marker(e.latlng).addTo(mymap);

    var pointList = [previousData, e.latlng];

      firstpolyline = new L.Polyline(pointList, {
          color: 'green',
          weight: 3,
          opacity: 0.5,
          smoothFactor: 1
      });
    firstpolyline.addTo(mymap)
    mymap.clicked = 0;
    previousData = e.latlng
  }
  
}


mymap.on('click', onMapClick);