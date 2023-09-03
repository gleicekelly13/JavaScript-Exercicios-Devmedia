let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

let percentual_desconto = 5;

for (let propriedade in carro) {
    
    if(propriedade == "preco") { //Condição que verifica se a propriedade do carro é igual a "preco"
        
        let preco = propriedade; //Se for igual, calcula e exibe o novo preço do carro.

        let desconto = (carro[preco] * percentual_desconto) / 100; //carro[preco] == valor da propriedade "preco"

        let novo_preco = carro[preco] - desconto;

        console.log("novo preço: R$" + novo_preco + ",00");

    } else { //Se não for igual, exibe a propriedade do carro
        console.log(propriedade + ": " + carro[propriedade]); //carro[propriedade] == valor da propriedade
    }
}

//"propriedade" é Propriedade; "carro" é Objeto.
