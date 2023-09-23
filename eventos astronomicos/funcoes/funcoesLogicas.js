function verificaChuvaHoje(chuva, data_atual) { //Verifica se a chuva recebida por parâmetro está visível baseado na data recebida. Retorna true ou false

    const ano_atual = data_atual.getFullYear(); //Obtém o ano da data atual

    /*Essas linhas criam novas datas com base nas datas de início e fim da chuva passadas como parte do objeto `chuva` 
    e utilizando o ano atual obtido anteriormente*/
    const inicioChuva = new Date(chuva.inicio + '/' + ano_atual);
    const fimChuva = new Date(chuva.fim + '/' + ano_atual);

    if(inicioChuva.getMonth() + 1 > fimChuva.getMonth() + 1) {
        const anoFinal = fimChuva.getFullYear();
        fimChuva.setFullYear(anoFinal + 1);
    }

    return data_atual >= inicioChuva && data_atual <= fimChuva; //return boolean
};



function verificaChuvasFuturas(chuva, data) { //Verifica se a chuva recebida por parâmetro estará visível nos próximos 2 meses baseados na data recebida
    const data_atual = data;
    const ano_atual = data_atual.getFullYear();
    const inicioChuva = new Date(chuva.inicio + '/' + ano_atual);
    const fimChuva = new Date(data_atual);

    if(data_atual.getMonth() + 1 > inicioChuva.getMonth() +1) {
        const anoFinal = inicioChuva.getFullYear();
        inicioChuva.setFullYear(anoFinal + 1);
    }

    fimChuva.setMonth(fimChuva.getMonth() + 2);

    return( data_atual < inicioChuva && inicioChuva < fimChuva);
    
};


function inverteMesAno (data) { //Inverte o mês e o dia de uma data que não possui ano definido
    const dataInvertida = data.split('/');

    return dataInvertida[1] + '/' + dataInvertida[0];
}

function retornaIntensidade (intensidade) {
    let novaIntensidade = '1 (Fraca)';

    if(intensidade.indexOf('Forte') >= 0) {
        novaIntensidade = '3 (Forte)';
    } else if (intensidade.indexOf('Média') >= 0) {
        novaIntensidade = '2 (Média)';
    } else if ( intensidade.indexOf('Irregular') >= 0) {
        novaIntensidade = '(Irregular)';
    }

    return novaIntensidade;
}


const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul'; //Retorna o hemisferio baseado no valor da declinação (paramêtro: number)

export {verificaChuvaHoje, verificaChuvasFuturas, inverteMesAno, retornaIntensidade, retornaHemisferio};

