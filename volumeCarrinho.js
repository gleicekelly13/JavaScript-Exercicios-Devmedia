const itensCarrinho = [
   { id: 1, nome: 'Açúcar', qnt: 2, valor: 2.00 },
   { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95},
   { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
   { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 }
];

const totalVolume = itensCarrinho.reduce( (total, itemCarrinho) => {
    return  (total + itemCarrinho.qnt); //O uso de parênteses neste caso é opcional, porque a função de retorno possui uma única expressão, que é a soma da quantidade de itens no array.
}, 0);

console.log(totalVolume);
