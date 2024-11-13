const remove_espacos = (texto) => {
    return texto.trim();
}

let frase = "       Estou aprendendo JavaScript   ";

let resultado = remove_espacos(frase);
console.log(resultado);
