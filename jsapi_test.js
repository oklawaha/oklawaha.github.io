require(["esri/Map", "esri/views/MapView"], function (Map, MapView) {
  const map = new Map({
    basemap: "gray-vector",
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
  });
});
