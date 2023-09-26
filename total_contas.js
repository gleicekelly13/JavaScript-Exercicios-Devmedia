const contas = [
    {nome: 'Luz', valor: 250, vencimento: 1605279748399},
    {nome: 'Celular', valor: 100, vencimento: 1603119748399},
    {nome: 'Fatura Cartão', valor: 7600, vencimento: 1608390148399},
];

let totalAPagar = 0;
const hoje = new Date();
const timeHoje = hoje.getTime() / 1000;

for(let i = 0; i < contas.length; i++){
    const conta = contas[i];

    if(conta.vencimento >= timeHoje) {
        totalAPagar += conta.valor
    }
}

console.log(totalAPagar);


/*
*O método getTime compara o timestamp da data atual com o do vencimento e imprime o valor total de contas vencidas.
*/
