import retornaSerieDia from "./retornoSerie.js";

let data =new Date(); //Obtendo a data atual...
let diaSemana = data.getDay(); //...e retornando o dia da semana.

let serieDoDia = retornaSerieDia(diaSemana) //Através do dia da semana, o sistema retornará uma sugestão do array.

console.log("Série do dia: " + serieDoDia);

