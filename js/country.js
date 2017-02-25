/*******************************FUNCION QUE SE EJECUTA AL CARGAR LA PAGINA**************************************/
$(document).ready(init);
/************FUNCION INIT, PARSEA DE MI JSON PAISES Y GENERA UNA LISTA CON MIS DATOS YA PARSEADOS**************/
function init()
{
	$('#search').keyup(searchChat);

	var lista_paises=$('#lista_paises');
	var pais = $.parseJSON(paises);
	$.each(pais, function() 
	{
		var htmlList='<a href="sign-up.html"><li class="lisPais"><img src='+ this['img'] + 
		' class="img_responsive bandera"><span class="code"'+ 
		' style="display:none;">'+this['codigo']+'</span>'+ this['nombre']+'</li></a>';
		lista_paises.append(htmlList);
	});
	asignaEventoClick();
}	
/*********************************FUNCION QUE ASIGNA EL EVENTO CLICK A CADA 'LI' DE MI 'UL'****************************/
function asignaEventoClick()
{
	var lis=$('li');
	$.each(lis, function() {$(this).on('click',onLinkClick)});
}
/****************************FUNCION QUE GUARDA LOCALMENTE LA 'SRC' DE LA IMAGEN Y EL 'CODIGO' DEL PAIS*******************/
function onLinkClick(evt)
{
	var srcPais= $(evt.currentTarget).find('.bandera').attr('src');//  $('.bandera').eq(0).attr('src');
	var codePais= $(evt.currentTarget).find('.code').text();
	localStorage.setItem('srcImgPais',srcPais);
	localStorage.setItem('codigo',codePais);
}
/****************************FUNCION QUE PERMITE BUSCAR PAISES EN LISTA X EL ALFABETO*******************/
function searchChat()
{
	(function ($) {
	    $('#search').keyup(function () {

	        var rex = new RegExp($(this).val(), 'i');
	        $('li').hide();
	        $('li').filter(function () {
	            return rex.test($(this).text());
	        }).show();
	    })
	}(jQuery));
}
/*****************************************************FIN********************************************/

