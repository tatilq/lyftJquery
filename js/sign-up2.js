//*-------------------------------------Funcion que  se ejecuta cuando cargue el documento------------------------//
$(document).ready(init);
//*----------------------------------------------Funcion que asigna eventos----------------------------------------//
function init()
{
  $("#name").keyup(validaName); 
  $("#lastname").keyup(validaLastname); 
  $("#email").keyup(validaEmail); 
  $("#check").change(chequear); 
  $("#btnNext").click(validateForm); 
  $("#iconPrev").click(regresar); 
}
//-----------------------------------------FUNCION PARA REGRESAR A LA VISTA ANTERIOR------------------------------//
function regresar()
{
  window.location="sign-up.html";
}
//-----------------------------------------FUNCION PRINCIPAL LLAMA A LAS DEMAS FUNCIONES--------------------------//
function validateForm()
{ 
  var name=$("#name").val();
  var lastname=$("#lastname").val();
  var email=$("#email").val();
  validaName(),validaLastname(),validaEmail(); 

  if(validaName() && validaLastname() && validaEmail() && chequear())
  {
    localStorage.setItem('LastName',lastname);
    localStorage.setItem('Name',name);
    localStorage.setItem('Email',email);
    swal({
      title: "¡Formulario correctamente enviado!",
      imageUrl: "img/goods.png"
    },function(isConfirm)
    {
      if (isConfirm){setTimeout(function(){window.location="app.html";}, 50);
    } 
    });
  }
  else
  {
    swal({
      title: "¡Formulario Incompleto!",
      text:"LLenar todos los campos correctamente",
      imageUrl: "img/bads.png"
    });
  }
}
//-------------------------------------------VALIDA EXPRESION REGULAR DE SOLO LETRAS----------------------------------// 
function isAlphabetic(cadena)
{
  return(cadena.match(/^[a-zA-Z\s]*$/));
}
//-------------------------------------------VALIDA EXPRESION REGULAR DE EMAIL----------------------------------//
function isEmail(email) 
{
  return(email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/));
}
//-------------------------------------------VALIDA NOMBRE SEGUN FORMATO VALIDO----------------------------------//
function validaName() 
{
  var container=$("#container");
  var name=$("#name");
  var isValid=false;
  if(name.val().length >0 && name.val().length <=30 && isAlphabetic(name.val()))
  {  
    container.html("<small style='color:green;'>Campo correctamente llenado ✔</small>");
    name.css('backgroundColor',"white");
    isValid=true;
  }
  else{ 
    container.html("<small style='color:red;'>Debes escribir solo letras , max 30 caracteres</small>");
    name.css('backgroundColor',"#FFDDE5");
  }
  return isValid;
}
//------------------------------------------VALIDA EL APELLIDO SEGUN FORMATO DADO----------------------------------//
function validaLastname() 
{
  var container=$("#container");
  var lastname=$("#lastname"); 
  var isValid=false;
  if(lastname.val().length >0 && lastname.val().length <=30 && isAlphabetic(lastname.val()))
  {    
    container.html("<small style='color:green;'>Campo correctamente llenado ✔</small>");
    lastname.css('backgroundColor',"white");
    isValid=true;
  }
  else{ 
    container.html("<small style='color:red;'>Debes escribir solo letras , max 30 caracteres</small>");
    lastname.css('backgroundColor',"#FFDDE5");
  }
  return isValid;
}
//-------------------------------------------VALIDA EMAIL SEGUN FORMATO DADO--------------------------------------//
function validaEmail() 
{ 
  var containerEmail=$("#containerEmail");
  var email=$("#email"); 
  var isValid=false;
  if(email.length >0 && email.length <=50 && isEmail(email.val()))
  {  
    containerEmail.html("<small style='color:green;'>Formato valido ✔</small>");
    email.css('backgroundColor',"white");
    isValid=true;
  }
  else
  {
    containerEmail.html("<small style='color:red;'>Invalido Ejm: name@domain.com, max 50 caracteres</small>");
    email.css('backgroundColor',"#FFDDE5");
  }
  return isValid;
}
//---------------------------VALIDA QUE EL CHECKBOX ESTE CHEADO EN TERMINOS Y CONDICIONES---------------------------//
function chequear()
{
  return($("#check").prop("checked") ? true : false);
}
//----------------------------------------------------------FIN----------------------------------------------------//


