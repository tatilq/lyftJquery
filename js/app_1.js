$(document).ready(init);
//-------------------------------------------------------------------------//
function init()
{
  solicitarEstimado();
}

function solicitarEstimado()
{
  $.ajax({
    url:'https://clientes.geekadvice.pe/api/estimado',
    data: {tipo:'2'}
    }).done(function(_data){
        update(_data);
    });
}
function update(_info)
{
    $('#priceEstimate').text(_info.estimado.moneda+_info.estimado.min+'-'+_info.estimado.max);
}
