import entradaDados from 'readline-sync';

console.log("Aplicação de Juros:\n")

let valor_divida = entradaDados.question("Informe o valor devido: "); //Entrada de dados
if(valor_divida > 0)
{
    let dias_atraso = entradaDados.question("Informe quantos dias atrasaram desde o vencimento do boleto: "); //Entrada de dados
    if(dias_atraso == 0)
    {
        console.log("\nVocê está em dias!");
    }

    else if(dias_atraso <= 15)
    {
        let juros = (valor_divida / 100) * 5;
        let valor_total_juros = Number(valor_divida) + Number(juros);

        console.log("\nValor original da dívida: " + valor_divida)
        console.log("Dias atrasados: " + dias_atraso);
        console.log("Taxa de juros: 5% ");
        console.log("Valor total com juros: R$ " + valor_total_juros);
    }
    
    else
    {
        let juros =(valor_divida / 100) * 10;
        let valor_total_juros = Number(valor_divida) + Number(juros);

        console.log("\nValor original da dívida: " + valor_divida);
        console.log("Dias atrasados: " + dias_atraso);
        console.log("Taxa de juros: 10% ");
        console.log("Valor total com juros: R$ " + valor_total_juros);
    }
}
else
{
    console.log("O valor da dívida deve ser maior que zero!")
}
