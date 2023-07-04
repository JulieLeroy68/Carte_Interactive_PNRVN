var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Commune_1 = new ol.format.GeoJSON();
var features_Commune_1 = format_Commune_1.readFeatures(json_Commune_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_1.addFeatures(features_Commune_1);
var lyr_Commune_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Commune_1, 
                style: style_Commune_1,
                interactive: false,
                title: '<img src="styles/legend/Commune_1.png" /> Commune'
            });
var format_Gosites_2 = new ol.format.GeoJSON();
var features_Gosites_2 = format_Gosites_2.readFeatures(json_Gosites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gosites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gosites_2.addFeatures(features_Gosites_2);
var lyr_Gosites_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gosites_2, 
                style: style_Gosites_2,
                interactive: true,
                title: '<img src="styles/legend/Gosites_2.png" /> Géosites'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_Commune_1.setVisible(true);lyr_Gosites_2.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_Commune_1,lyr_Gosites_2];
lyr_Commune_1.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'insee_2': 'insee_2', 'nom_2': 'nom_2', 'wikipedia_': 'wikipedia_', 'surf_ha_2': 'surf_ha_2', });
lyr_Gosites_2.set('fieldAliases', {'Nom': 'Nom', 'Commune': 'Commune', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Forme': 'Forme', 'Autres': 'Autres', 'V géotour': 'V géotour', 'Image': 'Image', });
lyr_Commune_1.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'insee_2': 'TextEdit', 'nom_2': 'TextEdit', 'wikipedia_': 'TextEdit', 'surf_ha_2': 'TextEdit', });
lyr_Gosites_2.set('fieldImages', {'Nom': 'TextEdit', 'Commune': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Forme': 'TextEdit', 'Autres': 'TextEdit', 'V géotour': '', 'Image': 'ExternalResource', });
lyr_Commune_1.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'insee_2': 'no label', 'nom_2': 'no label', 'wikipedia_': 'no label', 'surf_ha_2': 'no label', });
lyr_Gosites_2.set('fieldLabels', {'Nom': 'header label', 'Commune': 'header label', 'Latitude': 'no label', 'Longitude': 'no label', 'Forme': 'header label', 'Autres': 'header label', 'V géotour': 'header label', 'Image': 'header label', });
lyr_Gosites_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});