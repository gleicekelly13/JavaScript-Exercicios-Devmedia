//Arrow function
/*const msg_boas_vindas = (nome) => {
    let msg = "Seja bem-vindo(a) " + nome + "!";
    return msg;
}

//Função sendo consumida
let msg_usuario = msg_boas_vindas("Gleice");
console.log(msg_usuario);
*/


//Fuction tradicional
function msg_boas_vindas (nome) {
    let msg = "Seja bem-vindo(a) " + nome + "!";
    return msg;
}

console.log(msg_boas_vindas("Gleice"));
