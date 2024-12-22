const jogos = [
    {id: 1, nome:'Need for Speed', preco: 250},
    {id: 2, nome: 'Speed Racer', preco: 300},
    {id: 3, nome: 'Stronghold Warlords', preco: 280},
];

let total = 0;

for(let i = 0; i < jogos.length; i++){
    total += jogos[i].preco;  //total = total + jogos[i].preco;
   }

console.log(total);


/*
*A aplicação soma os valores dos produtos do array jogos e imprime na tela.
*A propriedade length conta quantos quantos elementos tem no array jogos.
*/
