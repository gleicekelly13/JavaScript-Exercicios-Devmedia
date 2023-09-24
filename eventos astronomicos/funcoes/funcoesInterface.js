import {inverteMesAno, retornaHemisferio, retornaIntensidade} from "./funcoesLogicas.js"

//Função que imprime a lista
function imprimeListaDeChuvas(lista) {  //Recebe uma lista de chuvas de meteoros como parâmetro
    console.log ('\nNOME DA CHUVA                -iNTENSIDADE - HEMISFÉRIO - PERÍODO');  /*Primeiro, deve imprimir o cabeçalho da lista, 
    identificando cada dado a ser impresso nela. */

    lista.forEach(imprimeChuva);  /*Utiliza a função nativa para percorrer cada elemento da lista de chuvas que foi recebida no parâmetro, 
    e chama a função que formata para imprimir cada item da lista */
}

//Função que imprime um item da lista
function imprimeChuva (chuva) {  /Recebe uma chuva como parâmetro, e imprime os datelhes da chuva de meteoros
    const nome = chuva.nome.padEnd(27, ' ');  //Contém o nome da chuva formatado
    let intensidade = retornaIntensidade(chuva.intensidade);  //Obtém a intensidade formatada da chuva
    let hemisferio = retornaHemisferio(chuva.declinacao);  //Obtém o hemisfério formatado com base na declinação da chuva de meteoros.

    intensidade = intensidade.padEnd(11, ' ');  /*Utilizando padEnd para ter uma determinada quantidade de caracteres, 
    preenchendo com espaços em branco. */
    hemisferio = hemisferio.padEnd(10, ' ');

    const inicioChuva = inverteMesAno(chuva.inicio); //`inverteMesAno` é chamada para inverter o mês e o dia da data de início da chuva.
    const fimChuva = inverteMesAno(chuva.fim);

    console.log(`${nome} - ${intensidade} - ${hemisferio} - ${inicioChuva} à ${fimChuva}`); //Imprime os dados formatados
}

export default imprimeListaDeChuvas;
