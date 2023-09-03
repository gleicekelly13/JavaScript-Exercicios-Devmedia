let capital_emprestado = 3000;
let taxa_juros = 0.02; // 2%

let contador = 1;
let parcelas_totais = 5; //Calcula os juros para a quantidade de parcelas escolhida(no caso, foram 5 parcelas)

while(contador <= parcelas_totais) { //condição
     
    let numero_parcela = contador; //Variável que recebe o valor do contador, o que ajuda a acompanhar em qual parcela estamos no momento.
    
    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcela; //Cálculo dos juros do empréstimo

    console.log("A taxa de juros no período de " + numero_parcela + " mes(es) é de R$ " + juros_emprestimo + ",00");
    contador++;
}

//O código calcula e mostra os juros para cada uma das 5 parcelas do empréstimo, um mês de cada vez.
