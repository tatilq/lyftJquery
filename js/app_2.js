$(document).ready(init);
//--------------------------------------FUNCION QUE OBTIENE TU POSICION ACTUAL-----------------------------------//
function init()
{
  solicitarEstimado();
}

function solicitarEstimado()
{
  $.ajax({
    url:'https://clientes.geekadvice.pe/api/carrera',
    data: {tipo:'2'}
    }).done(function(_data)
    {
      console.log(_data);
      update(_data);
    });
}
function update(_info)
{
  $('#face').attr({'src': _info.conductor.url});
  $('#name').text( _info.conductor.name);

  //$('#precioFinal').text( _info.conductor.name);
}
