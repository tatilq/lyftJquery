var select=false;
$(document).ready(init);
//--------------------------------------FUNCION QUE OBTIENE TU POSICION ACTUAL-----------------------------------//
function init()
{	
    $('.dropdown-menu').css({"posistion":"absolute" , "bottom":"100%" , "top":"initial"});
    $('#btn').click(setPickup);
 	asignaEventoClick();
}
function asignaEventoClick()
{
	var lis=$('.li');
	$.each(lis, function() {$(this).on('click',onLinkClick)});
}
/****************************FUNCION QUE GUARDA LOCALMENTE LA 'SRC' DE LA IMAGEN Y EL 'CODIGO' DEL PAIS*******************/
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
function setPickup()
{
	if(select)
	{
		swal({
		    title: "¡Se selecciono exitosamente!",
		    text: "Tú vehiculo de destino es:" + localStorage.getItem('nameCar').toUpperCase(),
		    imageUrl: "img/likes.png"
		},function(isConfirm){
	      	if (isConfirm)
	      	{
	        	setTimeout(function(){window.location="app_1.html";}, 50);
	        } 
		});
	}
	else
	{
		swal({
		  title: "¡Selecciona el Vehiculo de destino!",
		  text: "No deleccionaste ningun vehiculo",
		  imageUrl: "img/deslikes.png"
		});
	}

}
/*****************************************FIN***************************************************/
