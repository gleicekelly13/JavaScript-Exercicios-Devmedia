import retornaDiaSemana from "./diaSemana.js"; //A camada do dia da semana está sendo consumida pela camada de serviço, isso a torna uma subcamada.

let listaSeries = ['Smallville', 'WandaVision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC Legends'];

function retornaNomesSerie(dia) {
    
    return listaSeries[dia];
}

function retornaSerieDia() {

    let diaSemana = retornaDiaSemana(); //Retorna o dia da semana
    let serie = retornaNomesSerie(diaSemana);

    return serie;
}

export default retornaSerieDia;

//A função retornSerieDia não se preocupa em saber como o dia da semana ou nome da série são retornados, ela apenas os retorna.
