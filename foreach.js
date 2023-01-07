
// Dentro de uma função voce pode passar 2 parametros
//E ai pode utilizar uma função para esses 2 parametros, como somar nesse caso
/*
function somar ( a, b ){

    return a + b

} 

console.log(somar(10,5))*/


const listaWOW = ["humano", "orc", "elfo", "undead"]

function exibirElementos(raça, indice, array){

    console.log({raça, indice, array})

}

listaWOW.forEach(exibirElementos)


