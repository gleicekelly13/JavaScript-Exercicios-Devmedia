const dataAtual = new Date();

const diaSemana = dataAtual.getDay();
const diaMes = dataAtual.getDate();

if(diaMes === 13 && diaMes ===13) {
    console.log("Cuidado! Hoje é sexta-feira 13");
} else if (diaSemana === 5 ){
    console.log("Sextou!!!");
}

/*Código verifica se a data atual do sistema é uma sexta-feira 13.
-O operador de igualdade estrita verifica se um valor é igual tanto em tipo quanto em valor.
*/
