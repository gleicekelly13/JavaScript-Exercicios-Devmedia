let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false; //variável booleana para indicar se um funcionário habilitado foi encontrado

while(contador < funcionarios.length) {

    let funcionario = funcionarios[contador];

    //Se um funcionário tiver a propriedade 'habilitado' com valor true, o loop será interrompido pelo comando break.
    if(funcionario.habilitado == true) {
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break; //Caso seja executado, interrompe todo o laço de repetição.
    }

    contador++;
}
//Caso o valor da variável seja falso, a mensagem informará que nenhum usuário foi encontrado.
if(!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}
