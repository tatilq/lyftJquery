//---------------------------------------DECLARARCION DE VARIABLES GOBLALES---------------------------------------//
var map;
var lat;
var long;
//----------------------------------------FUNCION INIT LLAMA A LA FUNCION OBTENER--------------------------------//
function init()
{
  obtener();
}
//--------------------------------------FUNCION QUE OBTIENE TU POSICION ACTUAL-----------------------------------//
function obtener()
{
  navigator.geolocation.watchPosition(mostrar, gestionarErrores);
}
//------------------------------ --------FUNCION QUE OBTINEN MI POSICION ACTUAL-----------------------------------//
function mostrar(posicion)
{
  lati=posicion.coords.latitude;
  longi=posicion.coords.longitude;
  initMap(lati, longi);
}
//--------------------------------------FUNCION PARA GESTIONAR ALGUN TIPO DE ERROR------------------------------//
function gestionarErrores(error)
{
  alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+
  'a internet y habilite la opción permitir compartir ubicación física');
}
//-----------------FUNCION QU CARGA EL MAPA, CON LA LATITUD Y LONGITUD DE TU POSICION ACTUAL--------------------//
function initMap(lati, longi) 
{
  var positionActual={lat: lati, lng: longi};
  var position1={lat:  -16.4349299, lng: -71.5342893};
  var position2={lat:  -16.4459299, lng: -71.5299393};
  map = new google.maps.Map(document.getElementById('map'),{ center: positionActual, zoom: 14 });

  var marker = new google.maps.Marker({//parametro recibe un objeto
  position: positionActual,
  map: map ,     
  title: 'POSICION ACTUAL',
  icon:'img/persona.png'

  }
  );

  var marker1 = new google.maps.Marker({//parametro recibe un objeto
  position: position1,
  map: map ,     
  title: 'RUTA1',
  icon:'img/car.png'

  }
  );
    
  var marker2 = new google.maps.Marker({//parametro recibe un objeto
  position: position2,
  map: map ,     
  title: 'RUTA2',
  icon:'img/car.png'

  }
  );
} 
//---------------------------------------------------FIN-------------------------------------------------//