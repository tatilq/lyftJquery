/*******************************FUNCION QUE SE EJECUTA AL CARGAR LA PAGINA**************************************/
$(document).ready(init);
//*---------------Funcion que asigna eventos y cambia lo datos si existen en el localstorage-------------------//
function init()
{
	$('#numero').keyup(validaLongitud);
	$('#btnNext').click(getCodigo);
	$("#iconPrev").click(regresar); 
	$('#numero').focus();
	if(validaLocalStorageCode() && validaLocalStorageImage())
	{
		var srcLocal=localStorage.getItem('srcImgPais');
		var codeLocal=localStorage.getItem('codigo');
		$('#imgPais').attr({'src': srcLocal});
		$('#code').text(codeLocal);
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
	var exist=false;
	if(localStorage.getItem('codigo') != null)
		exist=true;
	return exist;
}
/****************************Funcion que el 'SRC' de la imagen exista en mi LocalStorage***************************/
function  validaLocalStorageImage()
{
	var exist=false;
	if(localStorage.getItem('srcImgPais') != null)
		exist=true;
	return exist;
}
/*****************************FUNCION QUE VALIDA EXPRESION REGULAR DE SOLO NUMEROS------***********************/
function isNumberPhone(number)
{
	var isValid=false;
	if (/^([0-9])*$/.test(number))
	    isValid= true;
	return isValid;
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
		{
			salida.html("<span style='color:red; font-style:italic;'>Max 9 numeros</span>"); 
		}
		else
		{
			salida.html("<span style='color:green; font-style:italic;'>Numero Valido</span>"); 
			isValid=true;
		}
	}
	else{
		salida.html("<span style='color:red; font-style:italic;'>Incorrecto, solo numeros</span>");
	}
	return isValid;
}
/****************************************FUNCION RAMDOOM PARA NUMEROS DE 3 CIFRAS*******************************/
function getRandom(a,b) 
{
    return Math.random() *((a-b) + b);
}
/***********************FUNCION QUE SOLO GENERA EL CODIGO ALEATORIO SI EL TELEFONO ES CORRECTO*****************/
function  getCodigo()
{
	if(validaLongitud())
	{
		var codigo= "LAB-"+Math.floor(getRandom(999,100));
		localStorage.setItem('codigoLab',codigo);
	    alert("su codigo es: "+codigo);
	    window.location="sign-up2.html";
	}
	else
	{
		$('#numero').focus();
		$('#numero').val('');
	}	
}
/***************************************************FIN*********************************************************/
