//*-------------------------------------Funcion que  se ejecuta cuando cargue el documento------------------------//
$(document).ready(init);
//*----------------------------------------------Funcion que asigna eventos----------------------------------------//
function init()
{
  $("#name").keyup(validaName); 
  $("#lastname").keyup(validaLastname); 
  $("#email").keyup(validaEmail); 
  $("#btn_enviar").click(validateForm); 
  $("#check").change(chequear); 
}
//-----------------------------------------FUNCION PRINCIPAL LLAMA A LAS DEMAS FUNCIONES--------------------------//
function validateForm()
{ 
  var name=$("#name").val();
  var lastname=$("#lastname").val();
  var email=$("#email").val();
  validaName();
  validaLastname(); 
  validaEmail(); 

  if(validaName() && validaLastname() && validaEmail() && chequear())
  {
    localStorage.setItem('LastName',lastname);
    localStorage.setItem('Name',name);
    localStorage.setItem('Email',email);
    location.href="app.html";
  }
  else
  {
    alert("Todos los campos son Obligatorios");
  }
}
//------------------------------------FUNCION QUE CONVIERTE LA PRIMERA LETRA EN MAYUSCULA-------------------------//
function primMayuscula(id)
{
  var nombreArray = id.split("");
  var primeraLetra = nombreArray[0];
  var primeraMayus = primeraLetra.toUpperCase();
  var cortePalabra = false;
  for(var i=1;i<nombreArray.length;i++)
  {
    if(cortePalabra)
    {    
      primeraMayus += nombreArray[i].toUpperCase();
      cortePalabra = false;
    }
    if(nombreArray[i] == " ")
      cortePalabra = true;
    else
      primeraMayus+=nombreArray[i];    
  }
  
  return primeraMayus;
}  
//-------------------------------------------VALIDA NOMBRE SEGUN FORMATO VALIDO----------------------------------//
function validaName() 
{
  var container=$("#container");
  var name=$("#name");
  var isValid=false;
  if(name.val().length >0 && name.val().length <=30 && name.val().match(/^[a-zA-Z\s]*$/))
  {
    name.val(primMayuscula(name.val()));  
    container.html("<small style='color:green;'>Campo correctamente llenado ✔</small>");
    name.css('backgroundColor',"white");
    isValid=true;
  }
  else{ 
    container.html("<small style='color:red;'>Debes escribir solo letras , max 30 caracteres</small>");
    name.css('backgroundColor',"#FFDDE5");
    isValid=false;
  }
  return isValid;
}
//------------------------------------------VALIDA EL APELLIDO SEGUN FORMATO DADO----------------------------------//
function validaLastname() 
{
  var container=$("#container");
  var lastname=$("#lastname"); 
  var isValid=false;
  if(lastname.val().length >0 && lastname.val().length <=30 && lastname.val().match(/^[a-zA-Z\s]*$/))
  {    
    lastname.val(primMayuscula(lastname.val()));
    container.html("<small style='color:green;'>Campo correctamente llenado ✔</small>");
    lastname.css('backgroundColor',"white");
    isValid=true;
  }
  else{ 
    container.html("<small style='color:red;'>Debes escribir solo letras , max 30 caracteres</small>");
    lastname.css('backgroundColor',"#FFDDE5");
    isValid=false;
  }
  return isValid;
}
//-------------------------------------------VALIDA EMAIL SEGUN FORMATO DADO--------------------------------------//
function validaEmail() 
{ 
  var containerEmail=$("#containerEmail");
  var email=$("#email"); 
  var isValid=false;
  if(email.val().length >0 && email.val().length <=50 && email.val().match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
  {  
    containerEmail.html("<small style='color:green;'>Formato valido ✔</small>");
    email.css('backgroundColor',"white");
    isValid=true;
  }
  else
  {
    containerEmail.html("<small style='color:red;'>Invalido Ejm: name@domain.com, max 50 caracteres</small>");
    email.css('backgroundColor',"#FFDDE5");
    isValid=false;
  }
  return isValid;
}
//---------------------------VALIDA QUE EL CHECKBOX ESTE CHEADO EN TERMINOS Y CONDICIONES---------------------------//
function chequear()
{
  var marcado = $("#check").prop("checked") ? true : false;

  if(marcado){isValid=true;}
  if(!marcado){isValid=false;}
  
  return isValid;
}
//----------------------------------------------------------FIN----------------------------------------------------//