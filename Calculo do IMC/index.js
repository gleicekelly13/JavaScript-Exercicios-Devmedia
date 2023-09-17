import { validaPeso, validaAltura } from "./validaPesoAltura.js";
import { calculaIMC, retornaStatusIMC } from "./calculadoraIMC.js";

let peso = 62.65;
let altura = 1.63;

let verificaValidaPeso = validaPeso(peso);
let verificaValidaAltura = validaAltura(altura);

let mensagem;

if(verificaValidaPeso && verificaValidaAltura) {
    
    let imc = calculaIMC(peso, altura);//Retorna o valor armazenado pela função, seu único objetivo é exibir a informação

    mensagem = "Seu IMC é: " + imc;
    
} else {

    mensagem = "Peso e altura devem ser maiores que zero";
}

console.log(mensagem);
