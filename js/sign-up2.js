
var nombre;
//-------------------------------FUNCION PRINCIPAL LLAMA A LAS DEMAS FUNCIONES---------------------//
//-----------------------NO SE PUEDE MANDAR EL FORMULARIO SI TODOS LOS CAMPOS NO SON CORRECTOS----------//
function validateForm(){    
  var salida_enviar=document.getElementById("salida_enviar");
  var btn_enviar=document.getElementById("btn_enviar");
  var salida =document.getElementById("salida");

  var isNotExist=true;
  validaName();
  validaLastname(); 
  validaEmail(); 
  chequear();
  if(validaName() == true && validaLastname()==true && validaEmail()==true && chequear())
  {
      var enviarForm=document.getElementById("enviarForm");
      enviarForm.href="app.html";
      //SI LOS DATOS SON CORRECTOS LOS GUARDAMOS LOCALEMNTE
      localStorage.setItem('LastName',lastname.value);
      localStorage.setItem('Name',nombre);
      localStorage.setItem('Email',email.value);
  }
  else
  {
    alert("Todos los campos son Obligatorios");
  }
}
//----------------------------------------CONVIERTE LA PRIMERA LETRA EN MAYUSCULA---------------------------------//
function primMayuscula(id){
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
      else
          primeraMayus+=nombreArray[i];
      if(nombreArray[i] == " ")
          cortePalabra = true;
    }
  return primeraMayus;
} 
//-------------------------------------------VALIDA NOMBRE SEGUN FORMATO VALIDO----------------------------------//
function validaName() 
{
  var name = document.getElementById("name"); 
  var isValid=false;
  if(name.value.length >0 && name.value.length <=30 && name.value.match(/^[a-zA-Z\s]*$/)){
    var palabra=primMayuscula(name.value);
    name.value = palabra;  
    container.innerHTML="<small style='color:green;'>Campo correctamente llenado ✔</small>";
    name.style.backgroundColor="white";
    nombre=name.value;
    isValid=true;
    
  }
  else{ 
    container.innerHTML="<small style='color:red;'>Debes escribir solo letras , max 30 caracteres</small>";
    name.style.backgroundColor="#FFDDE5";
    isValid=false;
  }
  return isValid;
}
//------------------------------------------VALIDA EL APELLIDO SEGUN FORMATO DADO----------------------------------//
function validaLastname() 
{
  var lastname = document.getElementById("lastname");    
  var isValid=false;
  if(lastname.value.length >0 && lastname.value.length <=30 && lastname.value.match(/^[a-zA-Z\s]*$/)){
    var palabra=primMayuscula(lastname.value);
    document.getElementById("lastname").value = palabra;  
    container.innerHTML="<small style='color:green;'>Campo correctamente llenado ✔</small>";
    lastname.style.backgroundColor="white";
    isValid=true;
  }
  else{ 
    container.innerHTML="<small style='color:red;'>Debes escribir solo letras , max 30 caracteres</small>";
    lastname.style.backgroundColor="#FFDDE5";
    isValid=false;
  }
  return isValid;
}
//-------------------------------------------VALIDA EMAIL SEGUN FORMATO DADO----------------------------------------//
function validaEmail() 
{ 
  var email = document.getElementById("email");
  var isValid=false;
 if(email.value.length >0 && email.value.length <=50 && email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){  
    containerEmail.innerHTML="<small style='color:green;'>Formato valido ✔</small>";
    email.style.backgroundColor="white";
    isValid=true;
  }
  else{
    containerEmail.innerHTML="<small style='color:red;'>Invalido Ejm: name@domain.com, max 50 caracteres</small>";
    email.style.backgroundColor="#FFDDE5";
    isValid=false;
  }
  return isValid;
}
//---------------------------VALIDA QUE EL CHECKBOX ESTE CHEADO EN TERMINOS Y CONDICIONES---------------------------//
function chequear()
{
  var isValid=false;

  var check=document.getElementById("check");
  if(check.checked)
  {
    isValid=true;
  }
  else
  {
    isValid=false;
  }
  return isValid;
}
//----------------------------------------------------------FIN----------------------------------------------------//