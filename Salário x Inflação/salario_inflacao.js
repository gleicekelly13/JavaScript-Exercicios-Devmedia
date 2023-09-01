import entradaDados from 'readline-sync';
//Implementação das coleções de dados
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

//Menu da aplicação
console.log("Escolha uma das alternativas: ");
console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");

let escolha = entradaDados.question('\nDigite o numero da sua escolha: '); //Esta mensagem ajuda a testar se o código está correspondendo a escolha feita.(input de escolha)

escolha = parseInt(escolha);
//Estrutura condicional
switch(escolha){
    case 1: //Listagem dos salários
        for(let salario_ano of salarioMinimo){ //Estrutura de repetição que acessa todos os dados do array.
            //Os dados do array são acessados e colocados em variáveis
            let ano = salario_ano.ano; //variável armazena ano
            let salario = salario_ano.salario; //variável armazena salário
            
            let label_ano = "\nAno: ";
            let label_salario = "Salário mínimo: ";
            //O console.log precisa estar dentro da estrutura de repetição para que todos os dados sejam exibidos
            console.log(label_ano.padEnd(26, '.') + ano); //Formatação e alinhamento da lista de salários
            console.log(label_salario.padEnd(25, '.') + "$ " + salario.toFixed(2).replace(".",","));
            
        }
    break;
    case 2: //Estrutura de repetição para acessar os dados do array, os mesmos passos usados no case 1.
        for(let inflacao of inflacao_ano) {
            
            let anoInflacao = inflacao.ano;
            let ipcaInflacao = inflacao.ipca;

            let label_anoInflacao = "\nAno: ";
            let labelIpca = "Inflação IPCA: ";

            console.log(label_anoInflacao.padEnd(26, ".") + anoInflacao);
            console.log(labelIpca.padEnd(25, ".") + ipcaInflacao.toFixed(2).replace(".",",") + "%");
        }
    break;
    case 3: //Código de listagem dos anos,salários e inflações
        for(let i = 1; i < salarioMinimo.length; i++) { //Estrutura de repetição que acessa todos os dados das duas coleções
            
            //Os dados são acessados e colocados em variáveis
            let anoSalario = salarioMinimo[i].ano;
            let salario_minimo = salarioMinimo[i].salario;
            let salarioIpca = inflacao_ano[i].ipca;
            let crescimento = 0;
            
            //Variáveis utilizadas para fazer a formatação dos textos
            let label_anoSalario = "\nAno: ";
            let label_salario_minimo = "Salário mínimo: ";
            let label_crescimento = "Crescimento Salarial: ";
            let label_salarioIpca = "Inflação IPCA: ";

            let iAnterior; //variável que recebe o i(contador) anterior

            if(i == 0) { //Quando a posição for 0...
                iAnterior = 0; //...A variável recebe 0

                console.log(label_anoSalario.padEnd(28, ".") + anoSalario);
                console.log(label_salario_minimo.padEnd(27, ".") + "$ " + salario_minimo.toFixed(2).replace(".",","));
                console.log(label_crescimento.padEnd(27, ".") + "-");
                console.log(label_salarioIpca.padEnd(27, ".") + salarioIpca.toString().replace(".",",") + "%");
            } else {
                iAnterior = i - 1; // ...senão, recebe sempre o i anterior

                //Utilizando os dados das variáveis para fazer o cálculo de crescimento salarial
                let salarioAnterior = salarioMinimo[iAnterior].salario;
                let diferenca = salario_minimo - salarioAnterior; // Diferença entre o salário e o salário do ano anterior
                let crescimento = (diferenca / salarioAnterior) * 100; //Cálculo do percentual de crescimento
                
                console.log(label_anoSalario.padEnd(28, ".") + anoSalario);
                console.log(label_salario_minimo.padEnd(27, ".") + "$ " + salario_minimo.toFixed(2).replace(".",","));
                console.log(label_crescimento.padEnd(27, ".") + crescimento.toFixed(2).replace(".",",") + "%");
                console.log(label_salarioIpca.padEnd(27, ".") + salarioIpca.toString().replace(".",",") + "%");
            }
            
        }
    break;
    default: //Validação de opções inválidas
        console.log("\nOpção Inválida");
}

