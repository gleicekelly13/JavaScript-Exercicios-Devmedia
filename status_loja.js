//Define a variável com o dia da semana(0 - Domingo, 1 - Segunda...)
let dia_semana = 0;

//Verifica a condição e define o resultado na variável 'status_loja'
let status_loja = (dia_semana == 0 || dia_semana == 6) ? "Funcionamos apenas de Segunda à Sexta" : "Loja aberta";

console.log(status_loja); // Imprime o resultado no console
