import entradaDados, { question } from 'readline-sync';

console.log("Área do triângulo: \n");
//Entrada de dados
let base = entradaDados.question("Informe a base: ");
let altura = entradaDados.question("Informe a altura: ");

let area = (base * altura) / 2; //Processamento de dados(Cálculo da área é feito)

console.log("A área do triângulo é: " + area);//Saída de dados(Resultado é exibido)
