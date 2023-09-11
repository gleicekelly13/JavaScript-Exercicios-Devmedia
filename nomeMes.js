function retorna_mes (mes) {

    let nome;

    switch(mes) {
        case 1:
            nome = 'Janeiro';
            break;
        case 2:
            nome = 'Fevereiro';
            break;
        case 3:
            nome = 'Março';
            break;
        case 4:
            nome = 'Abril';
            break;
        case 5:
            nome = 'Maio';
            break;
        case 6:
            nome = 'Junho';
            break;
        case 7:
            nome = 'Julho';
            break;
        case 8:
            nome = 'Agosto';
            break;
        case 9:
            nome = 'Setembro';
            break;
        case 10:
            nome = 'Outubro';
            break;
        case 11:
            nome = 'Novembro';
            break;
        case 12:
            nome = 'Dezembro';
            break;
    }

    return nome;
}

let mes = 1;

console.log(retorna_mes(mes));
