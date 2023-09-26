const totalAcertos = 4;
const primeiroAcerto = new Date('2023-06-12');

let index = 0;

do {
    console.log(primeiroAcerto.toLocaleDateString());
    const dia = primeiroAcerto.getDate();
    primeiroAcerto.setDate(dia + 1);

    index++
}while(index < totalAcertos);


/*
*Aplicação imprime os dias consecutivos que o usuário acertou um exercício.
*Em cada iteração do loop, é adicionado um dia à data armazenada em `primeiroAcerto`
*/
