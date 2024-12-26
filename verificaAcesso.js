function verificaAcesso (tipoUsuario) {
    let podeAcessar = true;

    switch(tipoUsuario) {
        case 1:
        case 2:
        case 3:
            podeAcessar = true;
            break;

        default:
            podeAcessar = false;
            break;
    }
    return podeAcessar;
}

const usuario = {
    nome: "Gleice",
    cargo: "Programadora",
    tipoUsuario: 2
}

if(verificaAcesso(usuario.tipoUsuario)) {
    console.log("Seja bem vindo(a)");
} else {
    console.log("Acesso não permitido");
}
