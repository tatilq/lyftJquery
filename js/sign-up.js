/*****************************FUNCION QUE SOLO ME RESTRINGE NUMEROS PARA MI INPUT DEL TELEFONO********************/
function checkInput_nombre(evt)
{
  if(window.event.keyCode >='48' && window.event.keyCode<='57' || window.event.keyCode =='8')
      return true;
  else
      evt.preventDefault();
}
/*****************************FUNCION QUE VALIDA LA LONGITUD MAX 9 CARACTERES DEL TELEFONO***********************/
function validaLongitud()
{
	var isValid=false;
	var numero=document.getElementById("numero");
	
	var long=numero.value.length;
	if(long==9)
	{
		salida.innerHTML="<span style='color:green;'>Numero Valido ";
		isValid=true;
	}
	else if(long>9)
	{
		salida.innerHTML=" <span style='color:red;'>Sobran Datos, Max 9 Caracteres";
		isValid=false;
	}
	else
	{
		salida.innerHTML=" <span style='color:red;'>Faltan Llenar Datos, 9 Caracteres";
		isValid=false;
	}
	return isValid;

}
/***********FUNCION QUE SE EJECUTA AL CARGAR LA PAGINA Y ACTUALIZA LA BANDERA Y CODIGO QUE SELECCIONE*************/
function init()
{
	var imgPaises=document.getElementById("imgPais");
	var code=document.getElementById("code");
	var srcLocal=localStorage.getItem('srcImgPais');
	var codeLocal=localStorage.getItem('codigo');
	imgPaises.src=srcLocal;
	code.textContent=codeLocal;
}
/******************************************FUNCION RAMDOOM PARA NUMEROS DE 3 CIFRAS*******************************/
function getGeneraRandom(a,b) 
{
    return Math.random() *((a-b) + b);
}
/***********************FUNCION QUE SOLO GENERA EL CODIGO ALEATORIO SI EL TELEFONO ES CORRECTO*****************/
function  generaRandom()
{
	if(validaLongitud()==true)
	{
		btn_log.setAttribute("disabled","false");
		var laboratoria= "LAB-";
		var randomNum= getGeneraRandom(999,100);
		var codigo= laboratoria+Math.floor(randomNum);
		localStorage.setItem('codigoLab',codigo);
	    alert("su codigo es: "+codigo);
	    ref.href="sign-up2.html";
	}
	
}
/***************************************************FIN**********************************************************/
