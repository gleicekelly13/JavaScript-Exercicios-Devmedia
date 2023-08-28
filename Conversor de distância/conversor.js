import entradaDados from 'readline-sync'; //Importação do plugin readline-sync, necessário para implementação do input.

console.log("Conversor de Milhas para Quilômetros: \n"); //Texto informativo para o usuário saber do que se trata a aplicação.

let mi = entradaDados.question("Informe o valor em Milhas: "); //É nessa linha que o input é implementado, pedimos ao usuário que informe o valor em minhas para o conversor. O valor informado pelo usuário é armazenado na variável mi...

let km = mi / 0.62137; //...que é utilizada no cálculo da conversão.

console.log(mi + "mi equivale a: " + km + "km"); //O valor convertido é armazenado na variável km, que é utilizada na exibição do resultado.
