const soma_numeros = (num_1, num_2) => { //A flecha indica que estou criando uma arrow function
    return num_1 + num_2; //Entre as chaves, está o código que a função deve executar, onde fica o corpo da função
}

let soma = soma_numeros(10, 10); /*Para a arrow function funcionar , devemos chamá-la pelo nome que demos a ele e fornecer os argumentos necessários para os parâmetros da função. 
                                  O valor da função pode ser usado diretamente em expressões ou atribuir a uma expressão, como está em `soma`.*/
console.log(soma);
