ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([4111204.286280, 7462229.313984, 4263290.122140, 7549978.015991]);
var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'type':'base',
            'opacity': 0.300000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });
var format_point_Level_1 = new ol.format.GeoJSON();
var features_point_Level_1 = format_point_Level_1.readFeatures(json_point_Level_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_Level_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_Level_1.addFeatures(features_point_Level_1);
var lyr_point_Level_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_Level_1, 
                style: style_point_Level_1,
                popuplayertitle: 'point_Level Войковская',
                interactive: true,
                title: '<img src="styles/legend/point_Level_1.png" /> point_Level Войковская'
            });

lyr_2gisMap_0.setVisible(true);lyr_point_Level_1.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr_point_Level_1];
lyr_point_Level_1.set('fieldAliases', {'id': 'id', 'zk_name': 'zk_name', 'website': 'website', 'pdf link': 'pdf link', 'photo link': 'photo link', 'info': 'info', 'pdf html': 'pdf html', 'photo html': 'photo html', });
lyr_point_Level_1.set('fieldImages', {'id': 'TextEdit', 'zk_name': 'TextEdit', 'website': 'TextEdit', 'pdf link': 'TextEdit', 'photo link': 'TextEdit', 'info': 'TextEdit', 'pdf html': '', 'photo html': '', });
lyr_point_Level_1.set('fieldLabels', {'id': 'hidden field', 'zk_name': 'no label', 'website': 'no label', 'pdf link': 'no label', 'photo link': 'no label', 'info': 'no label', 'pdf html': 'no label', 'photo html': 'no label', });
lyr_point_Level_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});