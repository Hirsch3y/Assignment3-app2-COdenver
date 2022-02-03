require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "dojo/domReady!"
      ], function (Map, MapView, FeatureLayer) {
  
  const featureLayer_1 = new FeatureLayer({
  url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Denver_Crime_Aggregated_AH_view/FeatureServer"
});
 
      var map = new Map({
          basemap: "streets"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
		  extent: {
			xmin: -11700787.9702,
			ymin: 4810052.3401,
			xmax: -11643967.3535,
			ymax: 4853483.2206,
            spatialReference: 102100
          }
          
        });
      
	  map.add(featureLayer_1);
	  
    });
