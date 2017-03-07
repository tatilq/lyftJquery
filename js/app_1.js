$(document).ready(init);
//-------------------------------------------------------------------------//
function init()
{

  solicitarEstimado();
}

function solicitarEstimado()
{
	var type=localStorage.getItem('typeCar');
  $.ajax({
    url:'https://clientes.geekadvice.pe/api/estimado',
    data: {tipo:type}
    }).done(function(_data){
        update(_data);
    });
}
function update(_info)
{
	$('#car').attr({'src': localStorage.getItem('srcImgCar')});
	$('#nameCar').text(localStorage.getItem('nameCar'));
	
    $('#priceEstimate').text(_info.estimado.moneda+_info.estimado.min+'-'+_info.estimado.max);
}

