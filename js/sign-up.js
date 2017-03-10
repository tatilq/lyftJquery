/*******************************FUNCION QUE SE EJECUTA AL CARGAR LA PAGINA**************************************/
$(document).ready(init);
//*---------------Funcion que asigna eventos y cambia lo datos si existen en el localstorage-------------------//
function init()
{
	$('#numero').keyup(validaLongitud);
	$('#btnNext').click(getCodigo);
	$("#iconPrev").click(regresar); 
	$('#numero').focus();
	if(validaLocalStorageCode() || validaLocalStorageImage())
	{
		$('#imgPais').attr({'src': 'img/peru.png'});
		$('#code').text('+51');
	}
	else
	{
		$('#imgPais').attr({'src': localStorage.getItem('srcImgPais')});
		$('#code').text(localStorage.getItem('codigo'));
	}
}
//-----------------------------------------FUNCION PARA REGRESAR A INICIO----------------------------------------//
function regresar()
{
  window.location="index.html";
}
/****************************Funcion que valida que el  Codigo exista en mi LocalStorage***************************/
function  validaLocalStorageCode()
{
	return (localStorage.getItem('codigo') == null);
}
/****************************Funcion que el 'SRC' de la imagen exista en mi LocalStorage***************************/
function  validaLocalStorageImage()
{
	return(localStorage.getItem('srcImgPais') == null);
}
/*****************************FUNCION QUE VALIDA EXPRESION REGULAR DE SOLO NUMEROS------***********************/
function isNumberPhone(number)
{
	return(/^([0-9])*$/.test(number));
}
/*****************************FUNCION QUE VALIDA LA LONGITUD MAX 9 CARACTERES DEL TELEFONO***********************/
function validaLongitud()
{
	var salida=$('#salida');
	var numero=$('#numero').val();
	var isValid=false;
	if(isNumberPhone(numero))
	{	
		if(numero.length<9 || numero.length>9  )
			salida.html("<span style='color:red; font-style:italic;'>Max 9 numeros</span>");
		else
		{
			salida.html("<span style='color:green; font-style:italic;'>Numero Valido</span>"); 
			isValid=true;
		}
	}
	else
		salida.html("<span style='color:red; font-style:italic;'>Incorrecto, solo numeros</span>");
	
	return isValid;
}
/***********************FUNCION QUE SOLO GENERA EL CODIGO ALEATORIO SI EL TELEFONO ES CORRECTO*****************/
function  getCodigo()
{
	if(validaLongitud())
	{
		var codigo= "LAB-"+Math.floor(Math.random()*(999));
		localStorage.setItem('codigoLab',codigo);
	    swal({
	      title: "¡Se generó tu código exitosamente!",
	      text: "Tú código de usuario es:" + codigo,
	      imageUrl: "img/likes.png"
	    },function(isConfirm){
	      	if (isConfirm)
	      	{
	        	setTimeout(function(){window.location="sign-up2.html";}, 50);
	        } 
	    });
	}
	else
	{
		swal({
		  title: "¡Numero Invalido!",
		  text: "Escribe un numero de telefono valido según tu país",
		  imageUrl: "img/deslikes.png"
		});
		$('#numero').focus();
		$('#numero').val('');
	}	
}
/*****************************************************FIN********************************************/

