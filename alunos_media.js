let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José",  media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10}  
];

let contador = 0;

while(contador < alunos.length) {

    let aluno = alunos[contador];
    contador++;

    if(aluno.media < 6) { //Se a média do aluno for menor que 6, a iteração atual será interrompida, e o próximo aluno será percorrido no loop.
        continue; //Encerra apenas a iteração atual e não o bloco while completo
    }

    console.log("Id: " + aluno.id); //Se a condição acima for verdadeira, essas linhas de código não serão executadas na iteração atual.(ou seja, quem tiver a media < 6 não será exibido)
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);

    console.log("\n");
}
