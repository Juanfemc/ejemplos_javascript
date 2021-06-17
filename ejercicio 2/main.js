/* 5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */
const invertirPalabra = (texto="") =>
    (!texto)
     ? console.warn("Escriba una cadena de texto")
     :(!isNaN(texto))
      ?console.warn(`${texto}, no es una cadena de texto.`)
      :console.info(`El texto "${texto}", invertido es igual a => "${texto.split('').reverse().join('')}"`)
invertirPalabra("Hola Mundo")

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
 pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */

const repitePalabra = (texto="", textoFind="") => 
    (!texto || !textoFind)
     ? console.warn("Ingrese cadena de texto y la palabra a buscar")
     :(texto.split(textoFind).length-1===0)
      ?console.info("No Existen repeticiones")
      : console.info(`En el texto "${texto}", la palabra "${textoFind}" se repite ${texto.split(textoFind).length-1} veces.`)    

repitePalabra("hola mundo adios mundo", "mundo");

/* 7) Programa una función que valide si una palabra o frase dada, 
es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const palindromo = (texto="") =>{ 
    if(!texto) console.warn("Ingrese una cadena de texto")
    texto = texto.toLowerCase()
    if(texto===texto.split('').reverse().join('')){
        console.log(bool=true)
    }else console.log(bool=false)
}
palindromo("Salas");

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */
const eliminarCaracteres = (texto="", caracter="") => 
    (!texto || !caracter)
     ? console.warn("Ingrese un texto y caracter a eliminar")
     : console.info(texto.split(caracter).join(""));
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")