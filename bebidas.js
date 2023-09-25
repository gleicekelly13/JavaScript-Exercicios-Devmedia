const convidados = [
    {nome: 'Thor', cerveja: true},
    {nome: 'Steven', cerveja: false},
    {nome: 'Tony', cerveja: true},
    {nome: 'Bruce', cerveja: false},
    {nome: 'Tunner', cerveja: false},
];

let totalConvidados = convidados.length;
let bebemrefrigerante = 0;
let bebemCerveja = 0;

for(const convidado of convidados) {
    if(convidado.cerveja == true) {
        bebemCerveja++;
    } else {
        bebemrefrigerante++;
    }
}


console.log('Convidados: ' + totalConvidados);
console.log('Bebem cerveja: ' + bebemCerveja);
console.log('Bebem refrigerante: ' + bebemrefrigerante); 


/*Imprime a quantidade de convidados, incluindo
a quantidade que bebe ou não cerveja.
*/
