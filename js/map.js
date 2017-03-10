/*********************************************FUNCION INICIA EL MAPA***********************************/
function initMap() {

  navigator.geolocation.getCurrentPosition(mapa,error);
}
/*********************************************FUNCION SE EJECUTA DE HABER ERRORES EN EL MAPA***********************************/
function error(errorC)
{
  alert('Error: '+errorC.code+' '+error.message+ '\n\Please prove if are connected '+
  'or permit your location');
    
}
/*********************************************FUNCION INICIA EL MAPA***********************************/
function mapa(position) {

  var container= document.getElementById('map');
  var latitud= position.coords.latitude;
  var longitud= position.coords.longitude;
  var mapita = new google.maps.LatLng(latitud,longitud);
  var centerZoom={center: mapita,zoom: 16,mapTypeControl:false,};
  var map = new google.maps.Map(container,centerZoom);

  var currentMarker = new google.maps.Marker({
      position: new google.maps.LatLng(latitud,longitud),
      map: map,
      title:"¡ Aqui estoy !",
      icon: "img/persona.png"
    });
  var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(latitud+0.001, longitud),
      map: map,
      title:"auto1",
      icon: "img/car.png"
    });
  var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(latitud+0.004, longitud),
      map: map,
      title:"auto2",
      icon: "img/car.png"
    });
  var marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(latitud, longitud+0.004),
      map: map,
      title:"auto3",
      icon: "img/car.png"
    });

  /********************AUTOOMPLETE DE LOS LUGARES POR LA API DE PLACES**********************/
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

/**************************************************FIN*****************************************/