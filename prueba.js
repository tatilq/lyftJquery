

//console.log("hola");
//readyState es el estado de peticion
/*
var xhr = new XMLHttpRequest();

//var url = 'http://coffeemaker.herokuapp.com/twitter.json?q=ceviche';
//var url = 'https://clientes.geekadvice.pe/api/carrera';
var url = 'http://coffeemaker.herokuapp.com/form';
xhr.open('POST', url, true);//1

xhr.addEventListener('error', function(e) {
  console.log('Un error ocurrió', e);
});
*/

//xhr.send();//2

/*
$.ajax({
        url:'https://clientes.geekadvice.pe/api/carrera',
        data: {tipo:'3'}
        }).success(function(_data){console.log(_data)}).fail(function(){alert("error")});

*/
//obtener respuesta("responseText")
/*
xhr.addEventListener('readystatechange',function(){
if(xhr.readyState===4){
	console.log(xhr.responseText);
}
});
*/
//para mandar se crea una instancia del formdata donde 
//agregan usando append
/*var form = document.querySelector('#formulario_comentario');
var data = new FormData(form);*/
/*
 var data = new FormData();
 data.append('nombre','valor');
 xhr.send(data);
*/
//form data adjunta texto y tbm archivos
//JSON permite enviar y recibir info de manera liviana, para lleerlo
//se usa json.parse

//de json a object JSON.parse
//de object a json JSON.stringify
/*
function xhr(options)
{
	var xhRequest=new XMLHttpRequest();
	xhRequest.open(options.method , options.url , true);
	//agregmos soporte
	xhRequest.addEventListener('error',options.onError);
	xhRequest.addEventListener('readystatechange',options.onReadyStateChange);
	
	xhRequest.send();
	return xhRequest;

}*/
//LLAMA  A LA FUNCION
/*var request=xhr({url:'http://coffeemaker.herokuapp.com/form' ,method:'GET',
	onError: function(e) {
    	console.log('Un error ocurrió', e);
    }, onReadyStateChange: function() {
    	console.log('xhr.readyState:', this.readyState);
    }  
});
*/

//PROMESAS (Objeto para trabajar sin necesidad desaber elvalor
 //el valor se conoce en el futuro, guarda callbackspara trabajar con el 
 //valor a futuro , los calbacks se ejecutan tanto si la promesa fue cumplida 
 //o rechazada  

 //Promesa:contenedor de una operacion que devuelve un valor a futuro
 //devuelve peticiones asincronas
 //s la peticion asicrona falla la promesa es rechazada
 //si la peticion asincrona devuelbve un valor la promesa se cumple
 //
//es un constructor "Promise"
 /*var promise=new Promise(function(resolve, reject)
 {
 	if (1 == '1') {
    resolve(1);
  }
  else {
    reject('Esta promesa nunca será rechazada');
  }

 });*/
 //cada instancia de la promesa tiene dos metodos(the y catch)
 /*then ---> dos valores (callback para promesa cumplida y otro para la promesa rechazada)*/

 //catch --> solo peromite guardar callbacks para promesa rechazada

 function xhr(options) {
  var xhRequest = new XMLHttpRequest();

  var url = options.url;

  xhRequest.open(options.method, url, true);

  var promise = new Promise(function(resolve, reject) {
    xhRequest.addEventListener('readystatechange', function() {
      if (xhRequest.readyState === 4) {
        resolve(xhRequest);
      }
    });

    xhRequest.addEventListener('error', function() {
      reject(xhRequest);
    });
  });

  xhRequest.send();

  return promise;
}

//ASI SE USA
var request = xhr({
  url: 'http://coffeemaker.herokuapp.com/twitter.json?q=ceviche',
  method: 'GET'
});

request.then(function(xhRequest) {
  console.log('Estado: ', xhRequest.status);
});

request.then(function(xhRequest) {
  console.log('Resultado: ', JSON.parse(xhRequest.responseText));
});