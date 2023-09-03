let clientes_array = [
    {id: 1, nome: "Mônica", telefone: "99999-6565"},
    {id: 2, nome: "Tânia", telefone: "99999-0778"},
    {id: 3, nome: "Carlos", telefone: "99999-0551"},
];

for (let cliente of clientes_array) { //clientes_array será percorrido pelo laço for...of; Cada objeto do array será atribuido à variável cliente a cada iteração

    let nome = cliente.nome; //Guardando os valores das propriedades dos objetos em variáveis.
    let telefone = cliente.telefone;

    console.log("Nome: " + nome + " - Telefone: " + telefone);
}

