var map = new ol.Map({
  target: 'mapdiv',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-77.162814, 39.131416]),
    zoom: 10
  })
});

var albornozMarker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-77.083925, 39.017404])
  )
});
var jawandoMarker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-76.997179, 39.067922])
  )
});
var riemerMarker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-77.019519, 38.984281])
  )
});
var glassMarker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-77.012051, 39.012921])
  )
});
var friedsonMarker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-77.102903, 38.991416])
  )
});
var riceMarker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-77.286555, 39.156588])
  )
});
var katzMarker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-77.204284, 39.091885])
  )
});
var navarroMarker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-77.008131, 39.067631])
  )
});
var huckerMarker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-77.008779, 39.009014])
  )
});


var atLargeStyle = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 0.0],
    anchorOrigin: "bottom-left",
    anchorXUnits: 'fraction',
    anchorYUnits: 'fraction',
    scale: 0.05,
    src: 'data/atlarge.png'
  })
});

var districtStyle = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 0.0],
    anchorOrigin: "bottom-left",
    anchorXUnits: 'fraction',
    anchorYUnits: 'fraction',
    scale: 0.05,
    src: 'data/district.png'
  })
});


var atlargeSource = new ol.source.Vector({
  features: [albornozMarker, jawandoMarker, riemerMarker, glassMarker]
});

var districtSource = new ol.source.Vector({
  features: [ friedsonMarker, riceMarker, katzMarker, navarroMarker, huckerMarker]
});


var markeratLargeLayer = new ol.layer.Vector({
  source: atlargeSource,
  style: atLargeStyle
});

var markerDistrictLayer = new ol.layer.Vector({
  source: districtSource,
  style: districtStyle
});

map.addLayer(markerDistrictLayer);
map.addLayer(markeratLargeLayer);
