$(document).ready(init);
//--------------------------------------FUNCION QUE OBTIENE TU POSICION ACTUAL-----------------------------------//
function init()
{
    $('.dropdown-menu').css({"posistion":"absolute" , "bottom":"100%" , "top":"initial"});
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
	var srcCar= $(evt.currentTarget).find('.logo').attr('src');//  $('.bandera').eq(0).attr('src');
	var type= $(evt.currentTarget).find('.type').text();
	var name= $(evt.currentTarget).find('.name').text();
	localStorage.setItem('srcImgCar',srcCar);
	localStorage.setItem('nameCar',name);
	localStorage.setItem('typeCar',type);
	
}