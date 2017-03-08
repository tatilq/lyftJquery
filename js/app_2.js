$(document).ready(init);
//-----------------------FUNCION QUE OBTIENE TU POSICION ACTUAL------------------//
function init()
{
  solicitarEstimado();
}
//----------------Funcion que solicita el estimado segun el min y max-----------------//
function solicitarEstimado()
{
  var min=localStorage.getItem('min');
  var max=localStorage.getItem('max');
  var url='https://clientes.geekadvice.pe/api/carrera';
  $.ajax({
    url:url,
    data:{"min":min,"max":max}
  }).done(function(_data)
  {
    update(_data);
  }).fail(function(){
    alert("Algo fallo")
  });
}
/**************************FUNCION PARA ACTUALIZAR LA IMAGEN DEL CONDUCTOR SEGUN EL TIPO**************/
function update(_info)
{

  $('#face').attr({'src': _info.conductor.url});
  $('#name').text( _info.conductor.name);
  $('#precioFinal').text(_info.estimado.moneda+_info.final);
}
/**********************************************FIN*****************************+******************/
