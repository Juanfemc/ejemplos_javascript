/* 1) Programa una función que cuente el número de caracteres de una cadena de
      texto, pe. miFuncion("Hola Mundo") devolverá 10. */
function contarCaracteres(cadena =""){
    if(isNaN(cadena)){
        console.log(cadena.length);
    }else{
        console.error("El dato ingresado no es una cadena de texto.");  
    }
}
contarCaracteres("Hola Mundo");

/* 2) Programa una función que te devuelva el texto recortado según el número de
caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
function textoRecortado(cadena, num){
    if(isNaN(cadena) || !isNaN){
        console.log(cadena.slice(0, num));
    }else{
        console.error("Ingrese una cadena de texto y Límite");
    }
}
textoRecortado("hola mundo", 4);

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

function SepararporCaracter(cadena, caracter){
    if(isNaN(cadena)){
        console.log(cadena.split(caracter))
    }else{
        console.error("Ingrese una cadena de texto y caracter");
    }
}
SepararporCaracter("Hola mundo", " ");

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo. */

function repetirTexto(cadena, n){
    for(let i=0; i<n; i++){
        console.info(cadena);
    }
}
repetirTexto("Hola mundo", 7);