let produtos_array = [ //Array de produtos
    { id: 1, nome: "mouse", preco: 50},
    { id: 2, nome: "teclado", preco: 90},
    { id: 3, nome: "monitor", preco: 350},  
    { id: 4, nome: "nobreak", preco: 600}  
];

let percentual_desconto = 10;

for( let produto of produtos_array) { //Percorrendo o array para imprimir o novo preço dos produtos

    let nome = produto.nome; //Guardando o nome e o preço do produto nas variáveis nome e preço
    let preco = produto.preco;

    let valor_desconto = (preco * percentual_desconto) / 100; // Calculando o valor do desconto e o novo preço do produto
    let novo_preco = preco - valor_desconto;

    console.log("Novo valor do produto " + nome + ": R$" + novo_preco.toFixed(2));
}
