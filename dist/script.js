require([
  "esri/views/MapView",
  "esri/WebMap",
  "esri/widgets/Search",
  "esri/widgets/Legend"
], function(MapView, WebMap, Search, Legend) {
 
  const webmap = new WebMap({
    portalItem: {
      id: "4605b07b2ab44e57a5614a8225692775"
    }
  });
 
  const view = new MapView({
    container: "viewDiv",
    map: webmap
  });
 
  const searchWidget = new Search({
    view: view,
    container: "searchContainer"
  });
 
  const legend = new Legend({
    view: view
  });
 
  view.ui.add(searchWidget, "top-left");
  view.ui.add(legend, "top-right");
 
});