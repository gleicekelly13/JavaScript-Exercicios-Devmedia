const colecaoNomes = ["Gleice", "Kelly", "Erick", "Mariana"];

for( let i = 0; i < colecaoNomes.length; i++) {
    const nomeMaiusculo = colecaoNomes[i].toUpperCase();
    colecaoNomes[i] = nomeMaiusculo;
}

console.log(colecaoNomes);

/*
`colecaoNomes` é o nome da variável que armazena o array completo;

`colecaoNomes[i]` representa cada nome individual dentro do array enquanto o loop está sendo executado;

Quando você escreve colecaoNomes[i].toUpperCase(), você está acessando um nome específico no array (o nome na posição i) 
e aplicando o método toUpperCase() para converter esse nome para letras maiúsculas. 
Em seguida, você atribui o resultado de volta a colecaoNomes[i], 
atualizando o elemento original no array com a versão em letras maiúsculas do nome. 
Isso é feito em cada iteração do loop, tornando todos os nomes do array maiúsculo
*/
