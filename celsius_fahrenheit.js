const celsius_fahrenheit = (temperatura_celsius) => { //Os parênteses indicam que esta função aceita um parâmetro chamado temperatura_celsius.
    let temperatura_fahrenheit = temperatura_celsius * 1.8 + 32;

    return temperatura_fahrenheit;
}

let temperatura_celsius = 12;
let temperatura_fahrenheit = celsius_fahrenheit(temperatura_celsius);

console.log(temperatura_celsius + "°C equivalem a " + temperatura_fahrenheit +"°F");

/*O valor da variável `temperatura_celsius`, no caso 12, é passado como argumento 
para a função quando a chamamos `celsius_fahrenheit(temperatura_celsius)`, esse valor é recebido
pelo parâmetro `temperatura_celsius` dentro da função, e será usado para realizar o cálculo.
Resumindo, o papel do parâmetro temperatura_celsius neste código é permitir que você passe um valor 
de temperatura em graus Celsius para a função celsius_fahrenheit.
*/
