/*var aprovado = true;

var resultado = aprovado && "Parabéns!";

console.log(resultado); 

/*
Aprovado é a condição booleana;
O console.log("Parabéns") executa se a condição for atendida(true)
Curto circuito não possui um equivalente ao else, por isso, o valor false é retornado sempre que a condição não é atendida.

//----------------------------------------------

/*
//Declaração da constante nome
const nome = 'Gleice';

//Aqui é verificado se o nome possui ao menos um caractere
//Retorna true se possuir e false caso contrário
const nomeValido = nome.length > 0;

//Imprime o nome no console se for diferente de vazio
nomeValido && console.log(nome); */

//----------------------------------------------------------

/*const maior_idade = true;

let resultado = maior_idade && "pode beber";

console.log(resultado); */

//-------------------------------------------------

/*let valor = 1000;
let limite = 1500;

if(limite >= valor) {
    console.log("Compra aprovada");
} else {
    console.log("Compra negada"); 
} */

//-------------------------------------------------------

/*let encontrado = true;

if(encontrado) {
    retorno = "Item encontrado";
} else {
    retorno = "Não encontrado";
}

console.log(retorno); */

// Transformando if normal em curto-circuito

/*let encontrado = true;

let retorno = encontrado && "Item encontrado";

console.log(retorno); */

//------------------------------------------------

/*let status = true;

status && console.log("Compra aprovada"); */

//Transformando curto-circuito em if tradicional
let status = true;

if(status == true) {
    console.log("Compra aprovada");
} else {
    console.log("Compra Negada");
}


