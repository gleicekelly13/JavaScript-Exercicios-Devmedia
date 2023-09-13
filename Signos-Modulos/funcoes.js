const verifica_data_range = (data, data_inicio_signo, data_fim_signo, tipo_comparacao) => { /* Verifica se uma data está dentro 
do range de duas datas; `tipo_comparacao` representa a forma como será essa comparação. */

    if(tipo_comparacao == "and") {
        return (data >= data_inicio_signo && data <= data_fim_signo); //Verifica se a data está 'completamente dentro' do range
    } else if(tipo_comparacao == "or") {
        return (data >= data_inicio_signo || data <= data_fim_signo); //Verifica se a data está 'parcialmente dentro' do range
    }
}

const retorna_signo = (signos, data) => { //Retorna o nome de um signo de acordo com a data informada
   
    let ano = data.getFullYear();
   
    for(const signo of signos) {
        let data_inicio_signo = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00"); /*DataInicio acessa cada informação 
        do signo dentro do laço de repetição através de signo.*/
        let data_fim_signo = new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";
   
        if(verifica_data_range (data, data_inicio_signo, data_fim_signo, tipo_comparacao )){ /*Verifica se a data informada está
        no range da data inicial e da data final do signo.*/
        return signo["Nome"];
        }
    }
   
}

export default retorna_signo;
