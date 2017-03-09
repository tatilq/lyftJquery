/**********************************************Variable Map Global************************************/
var map;
/*********************************************FUNCION INICIA EL MAPA***********************************/
function initMap() {

  map= new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.457389199999998, lng: -71.5315308},
    zoom: 16
  });

  var input = document.getElementById('pac-input');
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({map: map});
  marker.addListener('click', function() {infowindow.open(map, marker);});

  autocomplete.addListener('place_changed', function() 
  {
    infowindow.close();
    var place = autocomplete.getPlace();
    if (!place.geometry) {return;}
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(16);
    }
    //'Place ID: ' + place.place_id 
    marker.setPlace({placeId: place.place_id, location: place.geometry.location});
    marker.setVisible(true);
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + '<br>' +
      place.formatted_address);
    infowindow.open(map, marker);
    storageDirection(place.formatted_address);
  });
  
}
/********************FUNCION GUARDA LA DIRECCION DE DESTINO LOCALEMNTE*********************************/
function storageDirection(direccion)
{
  localStorage.setItem('direccion',direccion);
  var direccion=localStorage.getItem('direccion');
  $('#direccion').text(direccion);
}
/********************FUNCION QUE ACTUALIZA TU DIRECCION ACTUAL*********************************/
function geocodeLatLng(geocoder, position, id) {

  var latlng = position;
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[0]) {
        $('#'+id).html(results[0].formatted_address);
        miubicacion= results[0].formatted_address;
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}
/*********************************************FUNCION QUE CENTRA EL MAPA***********************************/
function success(position){
    map.setZoom(16);
    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    var currentMarker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: map,
        title:"¡ Aqui estoy !",
        icon: "img/persona.png"
    });
     var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude+0.002, position.coords.longitude),
        map: map,
        title:"auto1",
        icon: "img/car.png"
    });
     var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude+0.005, position.coords.longitude),
        map: map,
        title:"auto2",
        icon: "img/car.png"
    });
      var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude+0.005),
        map: map,
        title:"auto3",
        icon: "img/car.png"
    });

    var geocoder = new google.maps.Geocoder;
    geocodeLatLng(geocoder, currentMarker.position,'dirActual');
};
/**************************************************FIN*****************************************/