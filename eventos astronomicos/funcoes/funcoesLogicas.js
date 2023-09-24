function verificaChuvaHoje(chuva, data_atual) { //Verifica se a chuva recebida por parâmetro está visível baseado na data recebida. Retorna true ou false

    const ano_atual = data_atual.getFullYear(); //Obtém o ano da data atual

    /*Essas linhas criam novas datas com base nas datas de início e fim da chuva passadas como parte do objeto `chuva` 
    e utilizando o ano atual obtido anteriormente*/
    const inicioChuva = new Date(chuva.inicio + '/' + ano_atual);
    const fimChuva = new Date(chuva.fim + '/' + ano_atual);

    if(inicioChuva.getMonth() + 1 > fimChuva.getMonth() + 1) { /*Verifica se o mês de início da chuva é maior do que o mês 
    de fim da chuva...*/
        const anoFinal = fimChuva.getFullYear(); //...Se isso acontecer, significa que a chuva ocorrerá no próximo ano.
        fimChuva.setFullYear(anoFinal + 1); //Aumenta o ano de `fimChuva` em 1.
    }

    return data_atual >= inicioChuva && data_atual <= fimChuva; /*return boolean; retorna `true` se a data estiver dentro 
    do intervalo entre `inicioChuva` e `fimChuva`. Verifica se a chuva está prevista para o dia atual.*/
};



function verificaChuvasFuturas(chuva, data) { //Verifica se a chuva recebida por parâmetro estará visível nos próximos 2 meses baseados na data recebida
    const data_atual = data; //Copia a data passada como parâmetro para `data_atual`
    const ano_atual = data_atual.getFullYear(); //Obtém o ano atual
    const inicioChuva = new Date(chuva.inicio + '/' + ano_atual);
    const fimChuva = new Date(data_atual);

    if(data_atual.getMonth() + 1 > inicioChuva.getMonth() +1) {  //Semelhante à primeira função
        const anoFinal = inicioChuva.getFullYear();
        inicioChuva.setFullYear(anoFinal + 1);
    }

    fimChuva.setMonth(fimChuva.getMonth() + 2); /*Aumenta o mês de `fimChuva` em 2, significa que verifica se a chuva 
    ocorrerá nos próximos 2 meses a partir da ``data_atual` */

    return( data_atual < inicioChuva && inicioChuva < fimChuva); /*retorna `true` se `data_atual` for menor do 
    que `inicioChuva` e `inicioChuva` for menor do que `fimChuva`, verifica se a chuva está prevista 
    para os próximos 2 mesesa partir da `data_atual` */
    
};

//Funções que formatam os dados das chuvas
function inverteMesAno (data) { //Inverte o mês e o dia de uma data que não possui ano definido
    const dataInvertida = data.split('/');  /*Para inverter a string recebida no parâmetro, primeiro deve dividí-la em duas partes, 
    utilizando `split`, e em seguida, trocar as posições dessas partes, invertendo-as. */

    return dataInvertida[1] + '/' + dataInvertida[0];  /*O retorno da função é a data invertida, o resultado final é 
    a data no formato "dia/mês". */
}

function retornaIntensidade (intensidade) { /*Formata a intensidade, recebe como parâmetro uma string 
que descreve a intensidade da chuva...  */
    let novaIntensidade = '1 (Fraca)';  //...e retorna a intensidade da chuva formatada

    //Verifica com qual termo o parâmetro recebido inicia. Dependendo de qual for, devemos definir o valor que será retornado pela função
    if(intensidade.indexOf('Forte') >= 0) {
        novaIntensidade = '3 (Forte)'; /*Se a string `intensidade` contém "Forte" em 
        algum lugar (indicado pelo `indexOf('Forte') >= 0`), a variável `novaIntensidade` é definida como "3 (Forte)". */
    } else if (intensidade.indexOf('Média') >= 0) {
        novaIntensidade = '2 (Média)';
    } else if ( intensidade.indexOf('Irregular') >= 0) {
        novaIntensidade = '(Irregular)';
    }

    return novaIntensidade; *a função retorna a intensidade da chuva formatada de acordo com os 
    critérios estabelecidos na estrutura condicional. */
}


const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul'; //Retorna o hemisferio baseado no valor da declinação (paramêtro: number)

export {verificaChuvaHoje, verificaChuvasFuturas, inverteMesAno, retornaIntensidade, retornaHemisferio};

