let valor_produto = 500;

for(let contador = 1; contador <= 10; contador++) { 

    let valor_parcela = valor_produto / contador; //Cáculo do valor da parcela
    console.log("Nº de parcelas: " + contador + " - Valor da parcela: " + valor_parcela.toFixed(2));
}

/*Contador será a quantidade de parcelas informado pelo usuário.
A estrutura de repetição vai iterar de acordo com o valor dessa variável. */
