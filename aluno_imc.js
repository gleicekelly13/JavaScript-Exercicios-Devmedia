//Criação do objeto para guardar dados de uma aluna da academia
let aluna_academia = {
    id: 10,
    nome: "Gleice Kelly",
    altura: 1.65,
    peso: 61
};
//Armazenando os dados da aluna em variáveis
let nome_aluna = aluna_academia.nome;
let peso_aluna = aluna_academia.peso;
let altura_aluna = aluna_academia.altura;
//Calculando o IMC e guardando o resultado em uma variável
let imc_aluna = (peso_aluna / (altura_aluna * altura_aluna)).toFixed(2); //Utilizando o método toFixed()...

console.log("O IMC da aluna é de: " + imc_aluna);
 if( imc_aluna < 18.5) {
    console.log("A aluna " + nome_aluna + "está abaixo do peso");
 } else if( imc_aluna >= 18.5 && imc_aluna <= 24.99) {
    console.log("A aluna " + nome_aluna + " está com o peso normal");
 } else {
    console.log("A aluna " + nome_aluna + " está acima do peso");
 }

//O IMC da aluna é de: 22.41 ... o método toFixed() deixa o número em um formato mais amigável
//A aluna Gleice Kelly está com o peso normal

 
