import {inverteMesAno, retornaHemisferio, retornaIntensidade} from "./funcoesLogicas.js"

function imprimeListaDeChuvas(lista) {  //Imprime uma tabela com a lista de chuvas (paramêtro: array)
    console.log ('\nNOME DA CHUVA                -iNTENSIDADE - HEMISFÉRIO - PERÍODO');

    lista.forEach(imprimeChuva);
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
