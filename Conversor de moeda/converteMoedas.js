function converteParaReal(dolar) {
    let taxa_conversao = 5.07;
    let real = dolar * taxa_conversao;
    
    return real;_
}

function converteParaEuro(dolar) {
    let taxa_conversao = 1.06;
    let euro = dolar * taxa_conversao;

    return euro;
}

export {converteParaReal, converteParaEuro};
