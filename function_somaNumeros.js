let lista_numeros = [1, 3, 5, 10 ];

const retona_soma = (numeros) => { //a function recebe um array de numeros como argumento `numeros`.
    
    let soma = 0; //variável inicializada

    for(const numero of numeros) { //Estrutura que percorre cada elemento do array
        soma = numero + soma;
    }

    return soma; //A function retorna o valor final da variável `soma`, que é a soma de todos os números na lista
}

let resultado = retona_soma(lista_numeros); //Chamando a function `retorna_soma` passando `lista_numeros` como argumento e armazenando o resultado na variável `resultado`.

console.log("A soma dos resultados é igual a: " + resultado);

/*
A função percorre todos os números da lista e retorna o somatório deles;

Não faz diferença usar o nome do array `lista_numeros` no lugar de `numeros`
*/
