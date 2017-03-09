$(document).ready(init);
//---------------------------------Funcion que se ejecuta apenas se cargue la pagina----------------------------------------//
function init()
{	
    navigator.geolocation.watchPosition(success);
    if(validaLocalStorageName()||validaLocalStorageImage()||validaLocalStorageSeat())
    {
    	$('#car').attr({'src': 'img/carLyft.png'});
		$('#nameCar').text('Lyft');
		$('#fastSeat').text('Fast ride, 4 seats');
    	$('#priceEstimate').text('$6-12');
    }
    else
    {
    	$('#car').attr({'src': localStorage.getItem('srcImgCar')});
		$('#nameCar').text(localStorage.getItem('nameCar'));
		$('#fastSeat').text(localStorage.getItem('seat'));
        $('#dirSelect').text(localStorage.getItem('direccion'));
		solicitarEstimado();
    }
}
//---------------------------------Funcion que solicita el estimado segun el tipo----------------------------------------//
function solicitarEstimado()
{
	var type=localStorage.getItem('typeCar');
    var url='https://clientes.geekadvice.pe/api/estimado';
	console.log(type);
  	$.ajax({
   		url:url,
        data:{"tipo":type}
    }).done(function(_data){
        updatePriceStimate(_data);
    });
}
//---------------------------------Funcion que Actualiza el estimado segun el tipo----------------------------------------//
function updatePriceStimate(_info)
{
    console.log(_info.final);
    localStorage.setItem('min',_info.estimado.min);
    localStorage.setItem('max',_info.estimado.max);

	return ($('#priceEstimate').text(_info.estimado.moneda+_info.estimado.min+'-'+_info.estimado.max));
}
/****************************Funcion que valida que el nameCar exista en mi LocalStorage***************************/
function  validaLocalStorageName()
{
	return (localStorage.getItem('nameCar') == null);
}
/****************************Funcion que el 'src' de la imagen exista en mi LocalStorage***************************/
function  validaLocalStorageImage()
{
	return(localStorage.getItem('srcImgCar') == null);
}
/****************************Funcion que el 'Seat' de carro exista en mi LocalStorage***************************/
function  validaLocalStorageSeat()
{
	return(localStorage.getItem('seat') == null);
}

