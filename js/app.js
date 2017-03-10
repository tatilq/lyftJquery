/**********************************Variable Global***********************************/
var select=false;
/**********************************FUNCION QUE SE EJECUTA CUANDO TERMINE DE CARGAR EL DOCUMENTO***********/
$(document).ready(init);
//--------------------------------------FUNCION QUE LLAMA A ASIGNA EVENTO-----------------------------------//
function init()
{	
    $('.dropdown-menu').css({"posistion":"absolute" , "bottom":"100%" , "top":"initial"});
    $('#btn').click(setPickup);
 	/******CREANDO CARRITOS DINAMICAMENTE******/
 	var carList = $('#list_cars');
    var carros = $.parseJSON(cars);
    $.each(carros, function() 
    {
      	var html= '<div class="row li" >'+
					    '<div class="col-md-3 col-sm-3 col-xs-3">'+
					    	'<img src="'+this['image']+'" class="logo">'+
					  	'</div>'+
					    '<div class="col-md-7 col-sm-7 col-xs-7">'+
					    	'<p class="name">'+this['nombre']+'</p ><span class="type">'+this['type']+'</span>'+
					    	'<small class="shared seats">'+this['description']+'</small>'+
					    '</div>'+
					    '<div class="col-md-2  col-sm-2 col-xs-2">'+
					    	'<p >'+this['time']+'</p>'+
					    	'<small class="shared">min</small>'+
					    '</div>'+
					'</div>';
    carList.append(html);
  	
  	});
   	asignaEventoClick();
}
function asignaEventoClick()
{
	var lis=$('.li');
	$.each(lis, function() {$(this).on('click',onLinkClick)});
}
/*******************FUNCION QUE GUARDA DATOS LOCALEMNTE CON UN CLICK*******************/
function onLinkClick(evt)
{
	select=true;
	var srcCar= $(evt.currentTarget).find('.logo').attr('src');
	var type= $(evt.currentTarget).find('.type').text();
	var name= $(evt.currentTarget).find('.name').text();
	var seats = $(evt.currentTarget).find('.seats').text();
	localStorage.setItem('srcImgCar',srcCar);
	localStorage.setItem('nameCar',name);
	localStorage.setItem('typeCar',type);
	localStorage.setItem('seat',seats);
}
/***************************FUNCION QUE VALIDA QUE SELCCIONES UN CARRO Y UN DESTINO*******************/
function setPickup()
{
	var dirInput=$('#pac-input').val();
	if(dirInput.length>0 && select)
	{
		swal({
		    title: "¡Se selecciono exitosamente!",
		    text: "Vehiculo destino: " + localStorage.getItem('nameCar').toUpperCase()+",  Destino: "+localStorage.getItem('direccion'),
		    imageUrl: "img/goods.png"
		},function(isConfirm){
	      	if (isConfirm)
	      	{
	        	setTimeout(function(){window.location="app_1.html";}, 50);
	        } 
		});
	}
	else
	{
		if(!select)
		{
			swal({
			  title: "¡Por favor, selecciona un vehículo!",
			  text: "No seleccionaste ningun vehiculo",
			  imageUrl: "img/bads.png"
			});
		}
		else
		{
			swal({ 
		  		title: "¡Por favor, selecciona un Destino!",
		  		text: "No seleccionaste ningun destino",
		  		imageUrl: "img/bads.png"
			});	
		}
	}

}
/*****************************************FIN***************************************************/
