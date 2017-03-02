$(document).ready(init);
//--------------------------------------FUNCION QUE OBTIENE TU POSICION ACTUAL-----------------------------------//
function init()
{
  $('.dropdown-menu').css({"position":"absolute" , "bottom":"100%" , "top":"initial"});
  navigator.geolocation.watchPosition(mostrar, gestionarErrores);
}
//------------------------------ --------FUNCION QUE OBTINEN MI POSICION ACTUAL-----------------------------------//
function mostrar(posicion)
{
  var lati=posicion.coords.latitude;
  var longi=posicion.coords.longitude;
  initMap(lati,longi);
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
  var position1={lat: lati-0.004 , lng: longi+0.01};
  var position2={lat: lati+0.009 , lng: longi+0.001};
  var position3={lat: lati+0.003, lng: longi-0.01};
  var map = new google.maps.Map(document.getElementById('map'),{ center: positionActual, zoom: 14});

  var marker = new google.maps.Marker({//parametro recibe un objeto
    position: positionActual,
    map: map ,     
    title: 'Aqui Estoy¡',
    icon:'img/persona.png'
  });

  var marker1 = new google.maps.Marker({//parametro recibe un objeto
    position: position1,
    map: map ,     
    title: 'BatiMovil1',
    icon:'img/car.png'
  });
    
  var marker2 = new google.maps.Marker({//parametro recibe un objeto
    position: position2,
    map: map ,     
    title: 'BatiMovil2',
    icon:'img/car.png'
  });

  var marker3 = new google.maps.Marker({//parametro recibe un objeto
    position: position3,
    map: map ,     
    title: 'BatiMovil3',
    icon:'img/car.png'
  });
} 
//---------------------------------------------------FIN-------------------------------------------------//