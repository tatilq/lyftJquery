
var paises='[{"nombre":"Australia","codigo": "61"},{"nombre":"Canada","codigo": "1"},'+
    '{"nombre":"China","codigo": "86"},{"nombre":"Francia","codigo": "33"},'+
    '{"nombre":"India","codigo": "91"},{"nombre":"Japon","codigo": "81"},'+
    '{"nombre":"Mexico","codigo": "52"},{"nombre":"Puerto Rico","codigo": "1"},'+
    '{"nombre":"Peru","codigo": "51"}]';

  var p =JSON.parse(paises);
  console.log(p[1].nombre);
  console.log(p[1].codigo);
  for(var i=0;i<p.length;i++)
  {
    localStorage.setItem('srcImgPais',srcPais);
  }
 /*
  {
    "name": "Afghanistan",
    "phone_code": "93"
  },
  {
    "nombre": "Antártida",
    "phone_code": "672"
  },
  {
    "nombre": "Arabia Saudita",
    "phone_code": "966"
  },
  {
    "nombre": "Argentina",
    "phone_code": "54"
  },
  {
    "nombre": "Aruba",
    "phone_code": "297"
  },
  {
    "nombre": "Australia",
    "phone_code": "61"
  },
  {
    "nombre": "Austria",
    "phone_code": "43"
  },
  {
    "nombre": "Bélgica",
    "phone_code": "32"
  },
  {
    "nombre": "Bolivia",
    "phone_code": "591"
  },
  {
    "nombre": "Brasil",
    "phone_code": "55"
  },
  {
    "nombre": "Bulgaria",
    "phone_code": "359"
  },
  {
    "nombre": "Cabo Verde",
    "phone_code": "238"
  },
  {
    "nombre": "Camboya",
    "phone_code": "855"
  },
  {
    "nombre": "Camerún",
    "phone_code": "237"
  },
  {
    "nombre": "Canadá",
    "phone_code": "1"
  },
  {
    "nombre": "Chile",
    "phone_code": "56"
  },
  {
    "nombre": "China",
    "phone_code": "86"
  },
  {
    "nombre": "Colombia",
    "phone_code": "57"
  },
  {
    "nombre": "Corea del Norte",
    "phone_code": "850"
  },
  {
    "nombre": "Corea del Sur",
    "phone_code": "82"
  },
  {
    "nombre": "Costa Rica",
    "phone_code": "506"
  },
  {
    "nombre": "Croacia",
    "phone_code": "385"
  },
  {
    "nombre": "Cuba",
    "phone_code": "53"
  },
  {
    "nombre": "Dinamarca",
    "phone_code": "45"
  },
  {
    "nombre": "Ecuador",
    "phone_code": "593"
  },
  {
    "nombre": "Egipto",
    "phone_code": "20"
  },
  {
    "nombre": "El Salvador",
    "phone_code": "503"
  },
  {
    "nombre": "Eslovaquia",
    "phone_code": "421"
  },
  {
    "nombre": "Eslovenia",
    "phone_code": "386"
  },
  {
    "nombre": "España",
    "phone_code": "34"
  },
  {
    "nombre": "Estados Unidos de América",
    "phone_code": "1"
  },
  {
    "nombre": "Etiopía",
    "phone_code": "251"
  },
  {
    "nombre": "Filipinas",
    "phone_code": "63"
  },
  {
    "nombre": "Finlandia",
    "phone_code": "358"
  },
  {
    "nombre": "Francia",
    "phone_code": "33"
  },
  {
    "nombre": "Georgia",
    "phone_code": "995"
  },
  {
    "nombre": "Ghana",
    "phone_code": "233"
  },
  {
    "nombre": "Grecia",
    "phone_code": "30"
  },
  {
    "nombre": "Guatemala",
    "phone_code": "502"
  },
  {
    "nombre": "Guayana Francesa",
    "phone_code": ""
  },
  {
    "nombre": "Honduras",
    "phone_code": "504"
  },
  {
    "nombre": "Hong kong",
    "phone_code": "852"
  },
  {
    "nombre": "Hungría",
    "phone_code": "36"
  },
  {
    "nombre": "India",
    "phone_code": "91"
  },
  {
    "nombre": "Indonesia",
    "phone_code": "62"
  },
  {
    "nombre": "Irán",
    "phone_code": "98"
  },
  {
    "nombre": "Irak",
    "phone_code": "964"
  },
  {
    "nombre": "Irlanda",
    "phone_code": "353"
  },
 
  {
    "nombre": "Islandia",
    "phone_code": "354"
  },
  
  {
    "nombre": "Israel",
    "phone_code": "972"
  },
  {
    "nombre": "Italia",
    "phone_code": "39"
  },
  {
    "nombre": "Jamaica",
    "phone_code": "1 876"
  },
  {
    "nombre": "Japón",
    "phone_code": "81"
  },
  
  {
    "nombre": "Luxemburgo",
    "phone_code": "352"
  },
  {
    "nombre": "México",
    "phone_code": "52"
  },
  {
    "nombre": "Mónaco",
    "phone_code": "377"
  },
  {
    "nombre": "Macao",
    "phone_code": "853"
  },
  {
    "nombre": "Madagascar",
    "phone_code": "261"
  },
  
  {
    "nombre": "Nicaragua",
    "phone_code": "505"
  },
  {
    "nombre": "Nigeria",
    "phone_code": "234"
  },
  {
    "nombre": "Noruega",
    "phone_code": "47"
  },
  {
    "nombre": "Nueva Zelanda",
    "phone_code": "64"
  },
  {
    "nombre": "Pakistán",
    "phone_code": "92"
  },
  {
    "nombre": "Panamá",
    "phone_code": "507"
  },
  {
    "nombre": "Paraguay",
    "phone_code": "595"
  },
  {
    "nombre": "Perú",
    "phone_code": "51"
  },
  {
    "nombre": "Polonia",
    "phone_code": "48"
  },
  {
    "nombre": "Portugal",
    "phone_code": "351"
  },
  {
    "nombre": "Puerto Rico",
    "phone_code": "1"
  },
  {
    "nombre": "Reino Unido",
    "phone_code": "44"
  },
  
  {
    "nombre": "Rusia",
    "phone_code": "7"
  },
  
  {
    "nombre": "Singapur",
    "phone_code": "65"
  },
  
  {
    "nombre": "Suiza",
    "phone_code": "41"
  },
  
  {
    "nombre": "Tailandia",
    "phone_code": "66"
  },
  {
    "nombre": "Taiwán",
    "phone_code": "886"
  },
  {
    "nombre": "Tanzania",
    "phone_code": "255"
  },
  {
    "name": "Uruguay",
    "phone_code": "598"
  },
  {
    "name": "Venezuela",
    "phone_code": "58"
  }
  */
 