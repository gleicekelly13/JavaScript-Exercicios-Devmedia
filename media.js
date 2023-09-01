let notas_bimestre = [
    7, 6, 8, 5
];

let total_notas = notas_bimestre.length; //Obtendo o tamanho do array(sem precisar definir o total de itens manualmente)

let soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

let media_aluno = soma_notas/total_notas; // Cálculo da média

console.log("Média do aluno: " + media_aluno); //Exibição da média
