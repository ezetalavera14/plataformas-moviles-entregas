var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

/**
 * 01 - ordenarPorApellido
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * 
 * Retorna: 
 * - el mismo listado, ordenado alfabéticamente por el apellido de la persona 
 */
function ordenarPorApellido(listaDePersonas) {
    return listaDePersonas.sort((a,b) => {
        return a.apellido.localeCompare(b.apellido)
    });
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * 02 - soloNombres
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista de strings, con sólo los nombres de las personas
 */
function soloNombres(listaDePersonas) {
    let listaNombres = []
    
    for(let i = 0; i < listaDePersonas.length; i++){
        listaNombres.push(listaDePersonas[i].edad)
    }

    return listaNombres
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

/**
 * 03 - promedioEdades
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - un numero, con el cálculo del promedio de las edades
 */
function promedioEdades(listaDePersonas) {
    
    let promEdad = 0;

    for(let i = 0 ; i < listaDePersonas.length ; i++){
        promEdad = promEdad + listaDePersonas[i].edad
    }
    promEdad = promEdad/listaDePersonas.length

    return promEdad
    
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * 04 - cumplirAños
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una nueva lista, donde la edad de cada persona se incrementa en 1.
 */
function cumplirAños(listaDePersonas) {
    let edadMasUno = [0,0,0,0];

    for(let i = 0 ; i < listaDePersonas.length ; i++){
        edadMasUno[i] = (listaDePersonas[i].edad + 1)
    }

    return edadMasUno

}
console.log("cumplirAños()", cumplirAños(listaPersonasEjemplo));

/**
 * 05 - soloMayoresDeEdad
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista, array, conteniendo solamente las personas con más de 18 años
 */
function soloMayoresDeEdad(listaDePersonas) {
    let mayores = []

    for(let i = 0; i < listaDePersonas.length; i++){
        if(listaDePersonas[i].edad > 18){
            mayores.push(listaDePersonas[i])
        }
    }

    return mayores
}

console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 06 - laPersonaMayor
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una objeto con la persona de mayor edad en todo el listado. En caso de que hayan 2 personas con la misma edad, se puede retornar la primera que aparezca en el listado.
 */
function laPersonaMayor(listaDePersonas) {
    
    let personinaMayor = listaDePersonas[0].edad;

    for(let i = 1 ; i < listaDePersonas.length ; i++){
        if(listaDePersonas[i].edad > personinaMayor){
            personinaMayor = listaDePersonas[i]
        }
    }
    return personinaMayor
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));

/**
 * 07 - agregarHeladoFavorito
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * - `listaDeHelados`: una lista, array, con strings para gustos de helado.
 * 
 * Retorna: 
 * - una nueva lista, donde a cada persona se le agrega un campo `heladoFavorito` tomado de la lista de listaDeHelados. Si no hay más helados disponibles, se asigna "vainilla" por defecto.
 */
function agregarHeladoFavorito(listaDePersonas, listaDeHelados) {
    let vainilla = ["vainilla"]
    let listaDePersonasYHelados = {}
    listaDePersonasYHelados = listaDePersonas

    for(let i = 0 ; i < listaDePersonas.length ; i++){
    
        if(listaDeHelados[i] != undefined){
            listaDePersonasYHelados[i].Helado = listaDeHelados[i]
        }else{
            listaDePersonasYHelados[i].Helado = "vainilla"
        }

    }

    return listaDePersonasYHelados
}
console.log("agregarHeladoFavorito()", agregarHeladoFavorito(listaPersonasEjemplo, ["chocolate", "limon", "frutilla"]));
