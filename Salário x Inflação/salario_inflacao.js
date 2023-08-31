import entradaDados from 'readline-sync';

let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflacao_ano = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 6.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

console.log("Escolha uma das alternativas: ");
console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");

let escolha = entradaDados.question('\nDigite o numero da sua escolha: ');

escolha = parseInt(escolha);

switch(escolha){
    case 1:
        for(let salario_ano of salarioMinimo){

            let ano = salario_ano.ano;
            let salario = salario_ano.salario;
            
            let label_ano = "\nAno: ";
            let label_salario = "Salário mínimo: ";

            console.log(label_ano.padEnd(26, '.') + ano);
            console.log(label_salario.padEnd(25, '.') + "$ " + salario.toFixed(2).replace(".",","));
            
        }
    break;
    case 2:
        for(let inflacao of inflacao_ano) {
            
            let anoInflacao = inflacao.ano;
            let ipcaInflacao = inflacao.ipca;

            let label_anoInflacao = "\nAno: ";
            let labelIpca = "Inflação IPCA: ";

            console.log(label_anoInflacao.padEnd(26, ".") + anoInflacao);
            console.log(labelIpca.padEnd(25, ".") + ipcaInflacao.toFixed(2).replace(".",",") + "%");
        }
    break;
    case 3:
        for(let i = 1; i < salarioMinimo.length; i++) {

            let anoSalario = salarioMinimo[i].ano;
            let salario_minimo = salarioMinimo[i].salario;
            let salarioIpca = inflacao_ano[i].ipca;
            let crescimento = 0;

            let label_anoSalario = "\nAno: ";
            let label_salario_minimo = "Salário mínimo: ";
            let label_crescimento = "Crescimento Salarial: ";
            let label_salarioIpca = "Inflação IPCA: ";

            let iAnterior;

            
            let salarioAnterior = salarioMinimo[iAnterior].salario;
            let diferenca = salario_minimo - salarioAnterior;
            let crescimento = (diferenca / salarioAnterior) * 100;
                
            

            console.log("\nAno: " + anoSalario);
            console.log("Salário mínimo: " + salario_minimo);
            console.log("Crescimento Salarial: - " + crescimento.toFixed(2));
            console.log("Inflação IPCA: " + salarioIpca);
        }
    break;
    default:
        console.log("\nOpção Inválida");
}

