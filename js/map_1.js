/**********************************************Variable Map Global************************************/
var map;
/*********************************************FUNCION INICIA EL MAPA***********************************/
function initMap() {

  map= new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.457389199999998, lng: -71.5315308},
    zoom: 16
  });
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
    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    var currentMarker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: map,
        title:"¡ Aqui estoy !",
        icon: "img/persona.png"
    });
     var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude+0.001, position.coords.longitude),
        map: map,
        title:"auto1",
        icon: "img/car.png"
    });
     var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude+0.004, position.coords.longitude),
        map: map,
        title:"auto2",
        icon: "img/car.png"
    });
      var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude+0.004),
        map: map,
        title:"auto3",
        icon: "img/car.png"
    });

    var geocoder = new google.maps.Geocoder;
    geocodeLatLng(geocoder, currentMarker.position,'dirActual');
};
/**************************************************FIN*****************************************/