const dataAtual = new Date();

const hora = dataAtual.getHours();

let msg = "";

if(hora < 6 && hora > 18) {
    msg = "Boa noite\n";
} else if( hora >= 6 && hora < 12) {
    msg = "Bom dia\n";
} else {
    msg = "Boa tarde\n"
}

console.log(msg);

//Cumprimenta o usuário na hora atual
