let notas_trimestrais = [7, 8, 6, 8]; //Array com as notas trimestrais
/*
let soma_notas = 0;
const quantidade_notas = 4;

for(let contador = 0; contador < quantidade_notas; contador++) { //O array será percorrido para obter a soma das notas, que é necessária para calcular a média.

    soma_notas = soma_notas + notas_trimestrais[contador];

}

let media = soma_notas / quantidade_notas;

if(media >= 6 ) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
} */

//O código percorre o array de notas para obter o somatório delas

//---------------------------------------------------
//FOR...OF
let total_notas = notas_trimestrais.length;
let soma_notas = 0;

for(let nota of notas_trimestrais) { //Percorrendo o array de notas

    soma_notas = soma_notas + nota;

}

let media = soma_notas / total_notas;

console.log("Média: " + media);

if( media >= 7 ) {
    console.log("Aprovado");

} else if ( media >6 && media < 7 ){
    console.log("Recuperação");

} else {
    console.log("Reprovado");
}
