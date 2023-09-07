let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome:  "macarronada", preco: 25 },
    { id: 3, nome:  "lasanha", preco: 45 },
    { id: 4, nome:  "nhoque",  preco: 30}
];

let desconto = 5;

for(let contador = 0; contador < produtos.length; contador++) { //Percorre todos os elementos do array, contador é uma variável usada como índice.
    
    let produto = produtos[contador]; //Acessa o produto atual

    for(let propriedade in produto) { //itera sobre as propriedades do objeto produto.
        
        if (propriedade == "preco") { //Verifica se a propriedade atual é igual a "preco". Permite idente identificar a propriedade que representa o preço do produto
            
            let preco = propriedade; //Extrai o valor do preço

            let novo_preco = produto[preco] - desconto; //Cálculo do novo preço com desconto

            console.log("Preço atualizado: R$" + novo_preco + ",00");
        
        } else {
            console.log(propriedade + ": " + produto[propriedade]);
        }
    }
    console.log("\n");
}

/*
-id, nome e preco são propriedades.
-A variável propriedade armazena o nome de cada propriedade à medida que o loop itera.
-Resumindo, o código pretende percorrer a matriz produtos, 
aplicar um desconto de 5 unidades ao preço de cada produto e exibir os detalhes de cada produto, 
incluindo o preço atualizado.
*/
