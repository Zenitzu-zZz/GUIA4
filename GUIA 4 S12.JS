// Funciones a implementar
// 1. Contar el número total de palabras
// o Regla: una palabra termina cuando hay un espacio " " o un salto de línea.
// o Ejemplo entrada: "Hola mundo desde Quito"
// o Salida: "Número de palabras: 4"

function contarpalabras(){

let cantidad1 = Number ( prompt ( 'ingresa la cantidad de frases: ' ) ) 

for ( let i = 0 ; i < cantidad1 ; i++ ) {
    
    let contador1 = 1

     let frase1 = String ( prompt ( 'ingresa la frase: ' ) )

     for ( let c = 0 ; c < frase1.length ; c++ ) {

        if ( frase1[c] === " " || frase1[c] === "\n" ) {

            contador1++
            
        }

     }
console.log("Número de palabras:"+ contador1);

}

}

contarpalabras()

// 2. Contar los signos de puntuación
// o Contar: .,;:!?¿¡"
// o Ejemplo entrada: "Hola, ¿cómo estás?"
// o Salida: "Signos de puntuación: 3

function contarsignos(){

let cantidad2 = Number ( prompt ( 'ingresa la cantidad de frases: ' ) ) 

let signos2 = ['.', ',', ':', ';', '!', '?', '¿', '¡']

for ( let i = 0 ; i < cantidad2 ; i++ ) {
    
    let suma2 = 0

    let frases2 = String ( prompt ( 'ingresa texto: ' ) )

    for ( let c = 0 ; c < frases2.length ; c++ ) {
        
        for ( let a = 0 ; a < signos2.length ; a++ ) {
            
            if ( frases2[c] === signos2[a] ) {
                
                suma2 += signos2[a].length
            }
        }
        
    }
    
    alert( 'Signos de puntuación: ' + suma2 )

}
}
contarsignos()

// 3. Contar las vocales
// o Vocales: a, e, i, o, u (mayúsculas y minúsculas).
// o Ejemplo entrada: "Educación"
// o Salida: "Cantidad de vocales: 5"

function contarvocales(){

let cantidad3 = Number ( prompt ( 'ingresa la cantidad de frases: ' ) ) 

let letras3 = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

for ( let i = 0 ; i < cantidad3 ; i++ ) {

    let vocales3  = 0

    let palabras3 = String ( prompt ( 'ingrersa la frase: ' ) )

    for ( a = 0 ; a < palabras3.length ; a++ ) {

        for ( let d = 0 ; d < letras3.length ; d++ ) {

            if ( palabras3[a] === letras3[d] ) {

                vocales3 += letras3[d].length
                
            }

        }

    }

    console.log( `las palabras ${palabras3} tiene "${vocales3}"  vocales.` )

}

}
contarvocales()

// 4. Contar los consonantes
// o Letras alfabéticas que no sean vocales.
// o Ejemplo entrada: "Hola"
// o Salida: "Cantidad de consonantes: 2"

function contarconsonantes(){

let cantidad4 = Number( prompt('Ingresa la cantidad de frases: ') )

let letras4 = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

for ( let i = 0 ; i < cantidad4 ; i++ ) {

    let consonantes4 = 0
    
    let palabras4 = String( prompt('Ingresa la frase: ') )

    for ( let a = 0 ; a < palabras4.length ; a++ ) {
        
        let esVocal4 = false

        for ( let d = 0 ; d < letras4.length ; d++ ) {
            
            if ( palabras4[a] === letras4[d] ) {
                
                esVocal4 = true
                
            }
            
        }
        
        if ( (palabras4[a] >= 'A' && palabras4[a] <= 'Z') || (palabras4[a] >= 'a' && palabras4[a] <= 'z') ) {
            
            if (!esVocal4) {
                
                consonantes4 += 1
            }
            
        }
        
    }

    console.log(`La frase "${palabras4}" tiene "${consonantes4}" consonantes.`)

}

}

contarconsonantes()



// 5. Contar los dígitos
// o Caracteres numéricos 0–9.
// o Ejemplo entrada: "Mi clave es 1234"
// o Salida: "Cantidad de dígitos: 4"

function contardigitos(){


let cantidad5 = Number ( prompt ( 'ingresa la cantidad de frases: ' ) ) 

let numero5 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

for ( let i = 0 ; i < cantidad5 ; i++ ) {

    let total5  = 0

    let palabras5 = String ( prompt ( 'ingrersa la frase: ' ) )

    for ( a = 0 ; a < palabras5.length ; a++ ) {

        for ( let d = 0 ; d < numero5.length ; d++ ) {

            if ( palabras5[a] === numero5[d] ) {

                total5 += numero5[d].length
                
            }

        }

    }

    console.log( `las palabras ${palabras5} tiene "${total5}"  digitos.` )

}

}

contardigitos()

// 6. Contar palabras que empiezan en mayúscula
// o Detectar la primera letra de cada palabra.
// o Ejemplo entrada: "Hola mundo Bonito"
// o Salida: "Palabras con mayúscula inicial: 2"

function contariniciales(){

let cantidad6 = Number( prompt('Ingresa la cantidad de frases: ') )

for ( let i = 0 ; i < cantidad6 ; i++ ) {

    let mayusculas6 = 0
    
    let frase6 = String( prompt('Ingresa la frase: ') )

    let palabra6 = ""
    
    let primeraLetra6 = ""
    
    let dentroDePalabra6 = false

    for ( let a = 0 ; a < frase6.length ; a++ ) {
        
        let caracter6 = frase6[a]

        if (caracter6 !== " ") {
            
            if (!dentroDePalabra6) {
                
                primeraLetra6 = caracter6
                
                dentroDePalabra6 = true

                if (primeraLetra6 >= 'a' && primeraLetra6 <= 'z') {
                    
                    mayusculas6 += 1
                    
                } else if (primeraLetra6 >= 'A' && primeraLetra6 <= 'Z') {
                    
                } else {
                   
                }
                
            }
            
            palabra6 += caracter6
            
        } else {
            
            palabra6 = ""
            
            dentroDePalabra6 = false
            
        }
        
    }

    console.log(`La frase "${frase6}" tiene "${mayusculas6}" palabras con mayúscula inicial.`)

}
}
contariniciales()




// 7. Contar palabras que empiezan en minúscula
// o Igual que el anterior, pero verificando minúscula.
// o Ejemplo entrada: "hola Mundo bonito"
// o Salida: "Palabras con minúscula inicial: 2"


function contarinicialesminusculas(){

let cantidad7 = Number( prompt('Ingresa la cantidad de frases: ') )

for ( let i = 0 ; i < cantidad7 ; i++ ) {

    let mayusculas7 = 0
    
    let frase7 = String( prompt('Ingresa la frase: ') )

    let palabra7 = ""
    
    let primeraLetra7 = ""
    
    let dentroDePalabra7 = false

    for ( let a = 0 ; a < frase7.length ; a++ ) {
        
        let caracter7 = frase7[a]

        if (caracter7 !== " ") {
            
            if (!dentroDePalabra7) {
                
                primeraLetra7 = caracter7
                
                dentroDePalabra7 = true

                if (primeraLetra7 >= 'a' && primeraLetra7 <= 'z') {
                    
                    mayusculas7 += 1
                    
                } else if (primeraLetra7 >= 'A' && primeraLetra7 <= 'Z') {
                    
                } else {
                   
                }
                
            }
            
            palabra7 += caracter7
            
        } else {
            
            palabra7 = ""
            
            dentroDePalabra7 = false
            
        }
        
    }

    console.log(`La frase "${frase7}" tiene "${mayusculas7}" palabras con minusculas inicial.`)

}

}

contarinicialesminusculas()




/*8. Contar párrafos
o Un párrafo termina con salto de línea \n.
o Ejemplo entrada:
o Hola mundo
o Esto es un segundo párrafo
o Salida: "Número de párrafos: 2"*/
function contarparrafos(){

    let texto = String( prompt('Ingresa la frase: ') )

    let contador = 1

    for(let i = 0 ; i < texto.length; i++){

        let z = texto[i]

        if(z  === '\n'){

            contador++

        }

    }

    console.log('Numero de parrafos : ' + contador)

}

contarparrafos()

/*9. Invertir el texto completo
o Construir un nuevo texto recorriendo la cadena desde el final hasta el inicio.
o Ejemplo entrada: "Hola"
o Salida: "aloH"
*/
function Invertir(){

    let texto = String( prompt('Ingresa la frase: ') )

    let invertirtex = ''

    for(let i = texto.length-1; i >= 0; i--){

        invertirtex += texto[i]

    }

    console.log(invertirtex)

}

Invertir()

/*10. Contar todos los caracteres
o Contar absolutamente todo: letras, números, signos, espacios.
o Ejemplo entrada: "Hola 123!"
o Salida: "Total de caracteres: 9"
*/
function caracteres(){

    let texto = String( prompt('Ingresa la frase: ') )

    let contador = 0

    for(let i = 0; i < texto.length; i++ ){

        let z = texto[i]

        if(z !== ' '){

            contador++

        }

    }

    console.log('total de caracteres : ' + contador)

}

caracteres()

/*11. Buscar una palabra en el texto
o Entrada: el alumno ya tiene un texto en el textarea.
o Debe pedir una palabra a buscar.
o Salida: mostrar si la palabra existe o no en el texto.
o Ejemplo:
1. Texto: "Me gusta programar en JavaScript"
2. Palabra: "programar"
3. Salida: "La palabra 'programar' sí se encuentra en el texto."
*/
function buscarpalabras() {

    let texto =  String( prompt('Ingresa la frase: ') )

    let palabra =  String( prompt('Ingresa la palabra: ') )

    let encontrada = false

    for (let i = 0; i < texto.length; i++) {

        for (let j = 0; j < palabra.length; j++) {

            if (texto[i + j] !== palabra[j]) {

                break  

            }

        }

        
        if (j === palabra.length) {

            encontrada = true

            break

        }

    }

    if (encontrada) {

        console.log("La palabra '" + palabra + "' SÍ está en el texto")

    } else {

        console.log("La palabra '" + palabra + "' NO está en el texto")

    }

}

buscarpalabras()

/*12. Contar un carácter en el texto
o Entrada: texto del textarea + un carácter a contar.
o Salida: número de veces que aparece.
o Ejemplo:
1. Texto: "Hola mundo"
2. Carácter: "o"
3. Salida: "El carácter 'o' aparece 2 veces."*/
function contarcaracter(){

    let texto = String( prompt('Ingresa la frase: ') )

    let caracter = 'o'

    let contador = 0

    for (let i = 0; i < texto.length; i++){

        if(caracter.includes(texto[i])){

            contador++

        }

    }

    console.log('El caracter ' + caracter + ' aparece ' + contador + ' veces')

}

contarcaracter()

/*13. Contar caracteres en posiciones pares
o Entrada: texto del textarea.
o Recorrer la cadena y contar caracteres en índices pares (0, 2, 4, …).
o Ejemplo:
1. Texto: "Hola"
2. Índices: H(0), o(1), l(2), a(3)
3. Salida: "Caracteres en posiciones pares: 2"*/
function posisionpar(){

    let texto = String( prompt('Ingresa la frase: ') )

    let contador= 0

    for(let i = 0; i < texto.length; i++){

        if(i % 2 === 0){

            contador++

        }

    }

    console.log('Carateres en posiciones par : ' + contador)

}

posisionpar()

/*14. Contar caracteres en posiciones impares
o Entrada: texto del textarea.
o Recorrer la cadena y contar caracteres en índices impares (1, 3, 5, …).
o Ejemplo:
1. Texto: "Hola"
2. Índices: H(0), o(1), l(2), a(3)
3. Salida: "Caracteres en posiciones impares: 2"*/
function impares(){

    let texto = String( prompt('Ingresa la frase: ') )

    let contadorimpar = 0

    for (let i = 0; i < texto.length; i++){

        if(i % 2 != 0){

            contadorimpar++

        }

    }

    console.log('Caracteres en posisiones impares : ' + contadorimpar)

}

impares()

/*15. Añadir un texto al inicio o al final
o Entrada: texto del textarea + un nuevo fragmento.
o Salida: mostrar el texto original con el fragmento agregado al inicio y también
al final.
o Ejemplo:
1. Texto: "Aprender programación"
2. Fragmento: "Hoy"
3. Salida:
1. Al inicio: "Hoy Aprender programación"
2. Al final: "Aprender programación Hoy"*/
function añadirtexto(){
    let texto =   String( prompt('Ingresa la frase: ') )

    let palabra =  String( prompt('Ingresa la palabra: ') )

    let inicio = ''

    let final = ''

    for(let i = 0; i < palabra.length; i++){

        inicio += palabra[i]

    }

    inicio += ' '

    for(let i = 0; i < texto.length; i++){

        inicio += texto[i]

    }

    for(let i = 0; i < texto.length; i++){

        final += texto[i]

    }

    final += ' '

    for(let i = 0 ; i < palabra.length; i++){

        final += palabra[i]

    }
    console.log(inicio)

    console.log(final)

}

añadirtexto()