import entregaDados from 'readline-sync';

console.log("Conversor de Celsius para Kelvin: \n");

let c = entregaDados.question("Informe o valor em Celsius: "); //Pedimos que o usuário informe o valor em Celsius para o conversor, é nessa linha que o input será implementado. Este valor informado é armazenado na variável c...

let k = Number(c) + 273.15; //...e é utilizado no cálculo da conversão. A variável c é tratada pela função Number, pois se trata de uma soma.(sem essa função, os valores seriam concatenados e não somados).

console.log(c + "ºC equvale a: " + k + "k"); //Após o cálculo, o valor convertido é armazenado na variável k, que é utilizada na exibição do resultado.
