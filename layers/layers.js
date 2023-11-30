var wms_layers = [];

var lyr_POTONGSRTMNGGALEK_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "POTONG SRTM NGGALEK",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/POTONGSRTMNGGALEK_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12399981.909912, -936651.676156, 12450772.733276, -880944.049229]
                            })
                        });
var format_kontur_1 = new ol.format.GeoJSON();
var features_kontur_1 = format_kontur_1.readFeatures(json_kontur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kontur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kontur_1.addFeatures(features_kontur_1);
var lyr_kontur_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kontur_1, 
                style: style_kontur_1,
                interactive: true,
    title: 'kontur<br />\
    <img src="styles/legend/kontur_1_0.png" /> 0<br />\
    <img src="styles/legend/kontur_1_1.png" /> 250,0000000000<br />\
    <img src="styles/legend/kontur_1_2.png" /> 500,0000000000<br />\
    <img src="styles/legend/kontur_1_3.png" /> 750,0000000000<br />\
    <img src="styles/legend/kontur_1_4.png" /> 1000,0000000000<br />\
    <img src="styles/legend/kontur_1_5.png" /> <br />'
        });
var format_reclassifyvektor_2 = new ol.format.GeoJSON();
var features_reclassifyvektor_2 = format_reclassifyvektor_2.readFeatures(json_reclassifyvektor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reclassifyvektor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reclassifyvektor_2.addFeatures(features_reclassifyvektor_2);
var lyr_reclassifyvektor_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reclassifyvektor_2, 
                style: style_reclassifyvektor_2,
                interactive: true,
    title: 'reclassify vektor<br />\
    <img src="styles/legend/reclassifyvektor_2_0.png" /> 1<br />\
    <img src="styles/legend/reclassifyvektor_2_1.png" /> 2<br />\
    <img src="styles/legend/reclassifyvektor_2_2.png" /> 3<br />\
    <img src="styles/legend/reclassifyvektor_2_3.png" /> 4<br />\
    <img src="styles/legend/reclassifyvektor_2_4.png" /> 5<br />\
    <img src="styles/legend/reclassifyvektor_2_5.png" /> <br />'
        });

lyr_POTONGSRTMNGGALEK_0.setVisible(true);lyr_kontur_1.setVisible(true);lyr_reclassifyvektor_2.setVisible(true);
var layersList = [lyr_POTONGSRTMNGGALEK_0,lyr_kontur_1,lyr_reclassifyvektor_2];
lyr_kontur_1.set('fieldAliases', {'ID': 'ID', 'Z': 'Z', });
lyr_reclassifyvektor_2.set('fieldAliases', {'DN': 'DN', });
lyr_kontur_1.set('fieldImages', {'ID': 'TextEdit', 'Z': 'TextEdit', });
lyr_reclassifyvektor_2.set('fieldImages', {'DN': 'Range', });
lyr_kontur_1.set('fieldLabels', {'ID': 'no label', 'Z': 'no label', });
lyr_reclassifyvektor_2.set('fieldLabels', {'DN': 'no label', });
lyr_reclassifyvektor_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});