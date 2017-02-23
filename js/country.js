/*************************************************FUNCION QUE SE EJECUTA AL CARGAR LA PAGINA*************************************/
function init()
{
	var lista_paises=document.getElementById("lista_paises");
	//-----------------------------------------------LISTA D EPAISES JSON------------------------------------------//
	var paises='[{"nombre": "Afghanistan", "codigo": "+93","img":"img/BanderaDeAfganistan.png"},{"nombre": "Argentina","codigo": "+54","img":"img/argentina.jpg"},{"nombre":"Australia","codigo": "+61" , "img":"img/australia.png"},'+
	'{"nombre": "Bolivia", "codigo": "+591","img":"img/bolivia.png"},{"nombre": "Brasil","codigo": "+55","img":"img/brasil.jpg"},{"nombre":"Canada","codigo": "+1" ,"img":"img/canada.png"},'+
	'{"nombre":"China","codigo": "+86" , "img":"img/china.png"}, {"nombre": "Chile","codigo": "+56","img":"img/chile.png"},{"nombre":"Estados Unidos","codigo":"+1","img":"img/EeUu.gif"},{"nombre":"Francia","codigo": "+33" , "img":"img/francia.jpg"},'+
	    '{"nombre": "Honduras","codigo": "+504","img":"img/honduras.jpeg"},{"nombre":"India","codigo": "+91","img":"img/india.gif"},{"nombre": "Irlanda","codigo": "+353","img":"img/irlanda.jpg"},{"nombre":"Japon","codigo": "+81","img":"img/japan.gif"},'+
	    '{"nombre":"Mexico","codigo": "+52","img":"img/mexico.png"},{"nombre":"Puerto Rico","codigo": "+1","img":"img/puerto_rico.png"},'+
	    '{"nombre":"Peru","codigo": "+51","img":"img/peru.png"},{"nombre": "Polonia","codigo": "+48","img":"img/polonia.jpg"},{"nombre": "Rusia","codigo": "+7","img":"img/rusia.png"},'+
  		'{"nombre": "Singapur","codigo": "+65","img":"img/singapur.png"},{"nombre": "Suiza","codigo": "+41","img":"img/zuisa.jpg"},{"nombre": "Tailandia","codigo": "+66","img":"img/tailandia.gif"},{"nombre": "Taiwán","codigo": "+886","img":"img/taiwan.png"},'+
  		'{"nombre": "Venezuela", "codigo": "+58","img":"img/mexico.png"}]';

	var pais =JSON.parse(paises);
	var longi=pais.length;

  	for(var i=0;i<longi;i++)
  	{
  		var html='<a href="sign-up.html"><li class="lisPais"><img src='+pais[i].img + 
  		' class="img_responsive bandera"><span class="code"'+ 
  		' style="display:none;">'+pais[i].codigo+'</span>'+ pais[i].nombre+'</li></a>';

  		lista_paises.innerHTML+=html;
  	}
	var lis=document.getElementsByTagName('li');
	for(var i=0; i<lis.length; i++)
	{
		lis[i].addEventListener('click',onLinkClick);
	}
}
/****************************FUNCION QUE GUARDA LOCALMENTE LA SRC DE LA IMAGEN Y EL CODIGO DEL PAIS*******************/
function onLinkClick(evt)
{
	var srcPais=evt.currentTarget.getElementsByClassName('bandera')[0].src;
	var codePais=evt.currentTarget.getElementsByClassName('code')[0].textContent;
	console.log(codePais);
	localStorage.setItem('srcImgPais',srcPais);
	localStorage.setItem('codigo',codePais);
}
/*****************************************************BUSCA CHATS**************************************************/
function searchChat()
{
	var chatsList=document.getElementsByClassName("lisPais");
	var search = document.getElementById("search");//id del input
	var forEach = Array.prototype.forEach;
	search.addEventListener("keyup", function(e){
	    var choice = this.value;
	  
	    forEach.call(chatsList, function(f){
	        if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1 )
	            f.style.display = "none";        
	        else
	            f.style.display = "block";        
	    });
	}, false);
};
/****************************************************FIN**********************************************************/


