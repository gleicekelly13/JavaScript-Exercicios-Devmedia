import {inverteMesAno, retornaHemisferio, retornaIntensidade} from "./funcoesLogicas.js"

//Função que imprime a lista
function imprimeListaDeChuvas(lista) {  //Recebe uma lista de chuvas de meteoros como parâmetro
    console.log ('\nNOME DA CHUVA                -iNTENSIDADE - HEMISFÉRIO - PERÍODO');  /*Primeiro, deve imprimir o cabeçalho da lista, 
    identificando cada dado a ser impresso nela. */

    lista.forEach(imprimeChuva);  /*Utiliza a função nativa para percorrer cada elemento da lista de chuvas que foi recebida no parâmetro, 
    e chama a função que formata para imprimir cada item da lista */
}


function imprimeChuva (chuva) {
    const nome = chuva.nome.padEnd(27, ' ');
    let intensidade = retornaIntensidade(chuva.intensidade);
    let hemisferio = retornaHemisferio(chuva.declinacao);

    intensidade = intensidade.padEnd(11, ' ');
    hemisferio = hemisferio.padEnd(10, ' ');

    const inicioChuva = inverteMesAno(chuva.inicio);
    const fimChuva = inverteMesAno(chuva.fim);

    console.log(`${nome} - ${intensidade} - ${hemisferio} - ${inicioChuva} à ${fimChuva}`);
}

export default imprimeListaDeChuvas;
