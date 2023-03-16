var wms_layers = [];


    var projection_Light_27700_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Light_27700_0 = projection_Light_27700_0.getExtent();
    var size_Light_27700_0 = ol.extent.getWidth(projectionExtent_Light_27700_0) / 256;
    var resolutions_Light_27700_0 = new Array(14);
    var matrixIds_Light_27700_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Light_27700_0[z] = size_Light_27700_0 / Math.pow(2, z);
        matrixIds_Light_27700_0[z] = z;
    }
    var lyr_Light_27700_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://api.os.uk/maps/raster/v1/wmts?key=0s8BGXBtOWorcD8GVcRrhtMUPgZEIbBM",
    attributions: ' ',
                                "layer": "Light_27700",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Light_27700_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Light_27700_0),
                resolutions: resolutions_Light_27700_0,
                matrixIds: matrixIds_Light_27700_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Light_27700",
                            opacity: 1.0,
                            
                            
                          });
var lyr_BlindLane25022023orthophoto_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Blind-Lane-25-02-2023-orthophoto",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BlindLane25022023orthophoto_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [41974.837674, 6728475.602612, 42304.497370, 6728786.984053]
                            })
                        });
var format_PointsTest_2 = new ol.format.GeoJSON();
var features_PointsTest_2 = format_PointsTest_2.readFeatures(json_PointsTest_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointsTest_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointsTest_2.addFeatures(features_PointsTest_2);
var lyr_PointsTest_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PointsTest_2, 
                style: style_PointsTest_2,
                interactive: true,
    title: 'PointsTest<br />\
    <img src="styles/legend/PointsTest_2_0.png" /> <br />\
    <img src="styles/legend/PointsTest_2_1.png" /> Airplane<br />\
    <img src="styles/legend/PointsTest_2_2.png" /> Car<br />\
    <img src="styles/legend/PointsTest_2_3.png" /> Helicopter<br />'
        });

lyr_Light_27700_0.setVisible(true);lyr_BlindLane25022023orthophoto_1.setVisible(true);lyr_PointsTest_2.setVisible(true);
var layersList = [lyr_Light_27700_0,lyr_BlindLane25022023orthophoto_1,lyr_PointsTest_2];
lyr_PointsTest_2.set('fieldAliases', {'fid': 'fid', 'Feature': 'Feature', 'Descriptio': 'Descriptio', 'Date': 'Date', 'Type': 'Type', });
lyr_PointsTest_2.set('fieldImages', {'fid': 'TextEdit', 'Feature': 'TextEdit', 'Descriptio': 'TextEdit', 'Date': 'TextEdit', 'Type': 'TextEdit', });
lyr_PointsTest_2.set('fieldLabels', {'fid': 'no label', 'Feature': 'no label', 'Descriptio': 'no label', 'Date': 'no label', 'Type': 'no label', });
lyr_PointsTest_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});