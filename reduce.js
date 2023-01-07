

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]


const somaNiveis = personagens.reduce(function(valorAcumulado, somaNiveis ){

    return valorAcumulado + somaNiveis.nivel

},0)

console.log("niveis acumulados é de " + somaNiveis)


const racas = personagens.reduce(function(valorAcumulado, racas){

    if(valorAcumulado[racas.raca]){

        valorAcumulado[racas.raca].push(racas)

    }else{

        valorAcumulado[racas.raca] = [racas]

    }

    return valorAcumulado

}, {})

console.log(racas)