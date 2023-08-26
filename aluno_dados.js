let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25};

for(let dados in aluno) {
    console.log(aluno[dados]);
}

/*A estrutura for...in percorre os atributos do abjeto aluno.
Todos os atributos são impressos.*/
