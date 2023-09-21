function formataDiaSemana(dataFeriado) { //O objetivo é retornar dia da semana em que o feriado vai cair, para isso é utilizado o getDay().
    let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    return diasDaSemana[dataFeriado.getDay()]; //Como o getDay() retorna um número de 0 a 6, utilizamos esse número como índice do array diasDaSemana para retornar o nome correto do dia.
}

function formataDataFeriado(dataFeriado) { //Formata a data que está no formato Date JS para o formato brasileiro
    const diaFeriado = dataFeriado.getDate();
    const mesFeriado = dataFeriado.getMonth() + 1;
    const anoFeriado = dataFeriado.getFullYear();

    const dataExibicao = diaFeriado + "/" + mesFeriado + "/" + anoFeriado;

    return dataExibicao;
}

export {formataDiaSemana, formataDataFeriado};


/*
-O objetivo dessas funções é formtatar o dia da semana e a data de forma legível para o usuário.
-Elas fazem parte de outra camada de apoio de serviços feriados.
-linhas 8 a 10: utilizam as funçoes nativas de data para retornar dia, mês e ano e organizá-lo em uma string no formato desejado.
-Os dados formatados são adicionados em um novo array contendo o nome, o dia da semana e a data formatada.

*/
