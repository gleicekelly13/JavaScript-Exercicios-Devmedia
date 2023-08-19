let cursos_idiomas = [ //coleção de objetos
    { nome: "Inglês",   preco: 2500,   carga_horaria: 160 }, //objetos que representam cursos
    { nome: "Espanhol", preco: 1500,   carga_horaria: 110 }, //nome, preco e cara_horaria, são os atributos de cada objeto
    { nome: "Francês",  preco: 3600,   carga_horaria: 200 },
    { nome: "Chinês",   preco: 5500,   carga_horaria: 400 },
    { nome: "Alemão",   preco: 3800,   carga_horaria: 230 }
];

for (let curso of cursos_idiomas) { //Iterando a coleção de cursos ; A variável curso será usada para acessar os atributos de cada curso na estrutura for..of

    let nome_curso = curso.nome; //Cada uma das variáveis irá representar um atributo do curso
    let preco_curso = curso.preco;
    let carga_horaria_curso = curso.carga_horaria;

    let preco_hora_curso = preco_curso / carga_horaria_curso; // preco_hora_curso representa o valor da hora do curso

    console.log("Nome do curso: " + nome_curso); //Imprimindo os dados dos cursos
    console.log("Carga horária do curso: " + carga_horaria_curso + " horas");
    console.log("Preço do curso: " + preco_curso + ",00");

    if (preco_hora_curso >= 15) {
        console.log("Hora/aula superior ou igual a R$ 15,00"); //Uma mensagem será exibida de acordo com a condição da estrutura condicional
    } else {
        console.log("Hora/aula inferior a R$ 15,00");
    }

    console.log("\n")

}
