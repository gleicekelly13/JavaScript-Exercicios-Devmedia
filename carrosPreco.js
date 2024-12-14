let carros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 45000, createdAt: 1534506085621},
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 120000, createdAt: 1534506085621}
];

let total = 0;

for( let i = 0; i < carros.length; i++) {
    total += carros[i].preco; // é a mesma coisa de `total = total + carros[i].preco;`
}

console.log("O valor total do preço dos carros é: " + total);
