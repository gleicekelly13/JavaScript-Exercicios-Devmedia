let numeros = [10, 5, 7, 8, 9, 6, 12, 4]; // Array de notas

let total_impares = 0;
let total_pares = 0;

let contador = 0;

while(contador < numeros.length) { //A cada execução do bloco será incrementado o total de números ímpares ou pares
    
    if(numeros[contador] % 2 == 0) {
        total_pares++;
    } else {
        total_impares++;
    }

    contador++;
}

console.log("O total de números ímpares é: " + total_impares);
console.log("O total de números pares é: " + total_pares);
