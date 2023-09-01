let funcionarios = [
    "Bárbara",
    "Carlos",
    "Helena",
    "Maria",
    "Rogério",
    "Gleice"
];

console.log(funcionarios); //Imprimindo array antes da alteração

let novos_funcionarios = [
    "Guilherme",
    "Jéssica"
];

//Alteração dos valores do array funcionários
funcionarios[0] = novos_funcionarios[1];
funcionarios[4] = novos_funcionarios[0];

console.log(funcionarios); //Imprimindo array após a alteração

console.log(funcionarios.length);
