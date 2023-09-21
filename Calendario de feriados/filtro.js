function filtraFeriados(feriados, numeroFeriados) { //Para conseguir filtrar os dados, a função precisa do array dos feriados e do número de feriados a ser retornado.
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    let proximosFeriados = [];
    let novaDataFeriado;


    feriados.forEach(feriado => { //Começa "varrendo" o array de feriados e adicionando o ano e as datas correspodentes

        novaDataFeriado = new Date(feriado.data + '/' + anoAtual); //Adiciona o ano atual em todas as datas de feriados, e comparando-as com a data atual

        if(dataAtual > novaDataFeriado) { // Se a data do feriado já tiver passado, colocamos ela para o próximo ano.
            novaDataFeriado.setFullYear(anoAtual + 1);
        } 

        proximosFeriados.push ({  //Um novo array é criado, mas com o mesmo conteúdo e com a data completa no formato Date do JS.
            nome: feriado.nome,
            data: novaDataFeriado
        });
    });

    proximosFeriados = proximosFeriados.sort((a, b) => a.data - b.data); //A função nativa é usada para ordenar o array por data.
    proximosFeriados = proximosFeriados.slice(0, numeroFeriados); //E depois retornamos dele apenas o número de feriados que queremos com o slice)

    return proximosFeriados;
}

export default filtraFeriados;


/* 2° Passo da aplicação
-Implementa a filtragem dos próximos feriados, pois ela é a lógica central da aplicação.
-Ela acessa os dados do array e retorna os próximos feriados
-Porém os dados são retornados crus, sem qualquer formatação ou tratamento.
-Esta é uma camada de apoio de serviço feriados.
-No código serão retornados apenas os 3 próximos feriados.
*/
