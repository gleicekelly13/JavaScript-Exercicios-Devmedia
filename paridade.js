const verifica_paridade = (numero) => {
    
    if(numero % 2 == 0) {
        console.log(`O número ${numero} é par`);
    } else {
        console.log(`O número ${numero} é ímpar`);
    }
}

verifica_paridade(10);

