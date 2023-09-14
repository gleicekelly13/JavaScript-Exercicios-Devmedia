const data_atual = new Date();

const diaSemana = data_atual.getDay();
const diaMes = data_atual.getDate();

if(diaSemana == 5 && diaMes == 13){
    console.log("Cuidado! Hoje é sexta-feira 13");
} else if(diaSemana == 5) {
    console.log("Sextou!!!");
} else {
    console.log("Hoje não é sexta-feira");
}
