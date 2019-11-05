/*Proj4js.Datum["potsdam"] = {towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7", ellipse: "bessel", datumName: "Potsdam Rauenberg 1950 DHDN"};
// Declare projection. Definition comes from http://epsg.io/31466/
Proj4js.defs["EPSG:31466"] = "+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs";
console.log(Proj4js.defs["EPSG:31466"]);
var proj_wgs84 = new ol.proj.Projection("EPSG:4326");
var proj_31466 = new ol.proj.Projection("EPSG:31466");
// Center for projection EPSG:31466

var point = new ol.geom.Point( ol.proj.fromLonLat([2769212.70, 5678724.61]));
//var point = new OpenLayers.LonLat(2769212.70, 5678724.61);
var new_point= point.clone().transform(proj_31466, proj_wgs84);
console.log(new_point);


Proj4js.defs["WGS84"] = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
Proj4js.defs["EPSG:27700"] = "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs";

var source = new Proj4js.Proj('WGS84');    
var dest = new Proj4js.Proj('EPSG:27700');

var testPt = new Proj4js.Point(1.3534606328125,52.25635981528);

Proj4js.transform(source, dest, testPt);

proj4.defs("EPSG:2285","+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs");


var southWestOld = new proj4.toPoint( 1258455.010582735529169, 473828.448958728462458 );   

var southWestNew = proj4.transform('EPSG:2285', 'EPSG:3857', southWestOld); 
console.log(southWestNew);


*/
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
    anchorOrigin: 'bottom-left',
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



/*var originalPoints  =new Array([ [ 1258455.010582735529169, 473828.448958728462458 ], [ 1258358.485917484387755, 473852.205146271851845 ], [ 1258146.181671458063647, 473928.224457839038223 ], [ 1258022.149809540249407, 473972.48569370910991 ], [ 1258455.010582735529169, 473828.448958728462458 ]]);

for (var i = 0; i< originalPoints.length; i++ ) {
  var onePoint = originalPoints[i];
  var d = onePoint[0];
  var s = onePoint[1];

} */

var countyBoundaryFeature = new ol.Feature({
 // geometry: new ol.geom.Polygon([[[-77.083925,39.017404], [-76.997179,39.067922], [-77.019519,38.984281],[-77.083925,39.017404]]])

 geometry: new ol.geom.Polygon([ [ [ 1258455.010582735529169, 473828.448958728462458 ], [ 1258358.485917484387755, 473852.205146271851845 ], [ 1258146.181671458063647, 473928.224457839038223 ], [ 1258022.149809540249407, 473972.48569370910991 ], [ 1258455.010582735529169, 473828.448958728462458 ]]] )
});

countyBoundaryFeature.getGeometry().transform('EPSG:4326', 'EPSG:3857');

var countyBoundarySource = new ol.source.Vector({
  features: [ countyBoundaryFeature]
});


/*var countyBoundaryFeature = new ol.Feature({
  geometry:  new ol.geom.LineString([[-77.083925,39.017404], [-76.997179,39.067922]])
});*/


/*var countyBoundaryFeature = new ol.Feature({
  geometry:  new ol.geom.Circle([-77.083925,39.017404],0.5)
});

countyBoundaryFeature.getGeometry().transform('EPSG:2285', 'EPSG:3857');

var countyBoundarySource = new ol.source.Vector({
  features: [ countyBoundaryFeature]
});*/



var countyBoundaryStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: 'rgba(0, 0, 255, 1)',
    width: 2.5
})
});

var countyBoundaryLayer = new ol.layer.Vector({
  source: countyBoundarySource,
  style: countyBoundaryStyle
});
map.addLayer(countyBoundaryLayer);
map.addLayer(markerDistrictLayer);
map.addLayer(markeratLargeLayer);