/******************************************Funcion que se ejecuta cuando el documento termine de cargar*************/
$(document).ready(init);
function init()
{
	var imgPaises=$('#imgPais');
	var code=$('#code');
	$('#numero').keydown(validaNumero);
	$('#numero').keyup(validaLongitud);
	$('#btn_log').click(getCodigo);

	if(validaCode() && validaImagen())
	{
		var srcLocal=localStorage.getItem('srcImgPais');
		var codeLocal=localStorage.getItem('codigo');
		imgPaises.attr({'src': srcLocal});
		code.text(codeLocal);
	}
}
/****************************Funcion que valida que el  Codigo exista en mi LocalStorage***************************/
function  validaCode()
{
	var exist=false;
	if(localStorage.getItem('codigo') != null){exist=true;}
	return exist;
}
/****************************Funcion que el SRC de la imagen exista en mi LocalStorage***************************/
function  validaImagen()
{
	var exist=false;
	if(localStorage.getItem('srcImgPais') != null){exist=true;}
	return exist;
}
/*****************************FUNCION QUE SOLO ME RESTRINGE NUMEROS PARA MI INPUT DEL TELEFONO********************/
function validaNumero(evt)
{
  if(window.event.keyCode >='48' && window.event.keyCode<='57' || window.event.keyCode =='8')
      return true;
  else
      evt.preventDefault();
}
/*****************************FUNCION QUE VALIDA LA LONGITUD MAX 9 CARACTERES DEL TELEFONO***********************/
function validaLongitud()
{

	var salida=$('#salida');
	var numero=$('#numero').val();
	var isValid=false;

	if(numero.length==9){salida.html("<span style='color:green;'>Numero Valido </span>"); isValid=true;}
	else if(numero.length>9){salida.html("<span style='color:red;'>Sobran Datos, Max 9 Caracteres</span>"); isValid=false;}
	else{salida.html("<span style='color:red;'>Faltan Llenar Datos, 9 Caracteres</span>");isValid=false;}
	
	return isValid;
}

/******************************************FUNCION RAMDOOM PARA NUMEROS DE 3 CIFRAS*******************************/
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
	    location.href="sign-up2.html";
	}
	else{
		$('#numero').focus();
		$('#numero').val('');
	}
	
}
/***************************************************FIN**********************************************************/
