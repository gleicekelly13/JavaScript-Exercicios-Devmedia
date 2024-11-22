const alunosAv1 = [
    { nome: 'Ana', nota: 7},
    { nome: 'Maria Eduarda', nota: 2},
    { nome: 'Tiago', nota: 8},
    { nome: 'Yuri', nota: 3}
];

const qntAlunos = alunosAv1.length; // Recebe a quantidade de elementos do array alunosAv1.
let somaNotas = 0;

for(const aluno of alunosAv1) {
    somaNotas += aluno.nota;
}

const media = somaNotas / qntAlunos; //resultado da divisão da soma pela quantidade de alunos

console.log(media);
