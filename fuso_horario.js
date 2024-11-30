const hoje = new Date(); //Armazena a data atual
const diferencaHoras = hoje.getTimezoneOffset() / 60; // A variável recebe em minutos a diferença de fuso horário da data armazenada na variável 'hoje' e divide por 60.
console.log('Diferença de horário: ' + diferencaHoras + ' horas'); //Imprime a quantidade de horas de diferença.

