import retornaProximosFeriados from "./retornaFeriados.js";
import imprimeFeriados from "./imprimeFeriados.js"; //A camada de exibição consome a camada de serviço feriados e a de impressão dos feriados para alcançar seu objetivo

console.log('\nOs próximos feriados serão: \n')

let numeroFeriados = 3;

let proximosFeriados = retornaProximosFeriados(numeroFeriados); //O array formatado pela camada de serviço feriados é consumido pela camada de exibição através da função retornaProximosFeriados
imprimeFeriados(proximosFeriados); //E é impresso para o usuário

/*
-Camada de exibição
-É responsável por mostrar no console os próximos feriados
-Utiliza as funções de retorno e de impressão para mostrar os dados formatados na tela
-A camada de exibição mostra os próximos feriados, mas não precisa saber como eles foram retornados.
*/
