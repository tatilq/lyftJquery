$(document).ready(init);
//--------------------------------------FUNCION QUE OBTIENE TU POSICION ACTUAL-----------------------------------//
function init()
{
  solicitarEstimado();
}
/**/
function solicitarEstimado()
{
  var type=localStorage.getItem('typeCar');
  $.ajax({
    url:'https://clientes.geekadvice.pe/api/carrera',
    data: {tipo: type }
    }).done(function(_data)
    {
      update(_data);
    }).fail(function(){
        //poner swit alert
    });
  //img/perfil.jpg
}
/**/
function update(_info)
{
  $('#face').attr({'src': _info.conductor.url});
  $('#name').text( _info.conductor.name);

  //$('#precioFinal').text( _info.conductor.name);
}
