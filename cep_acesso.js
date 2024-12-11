let cep_acesso = "    29880-500     ";
let cep_cadastro = "29880-500";

if(cep_acesso.trim() == cep_cadastro.trim()) {
    console.log("Os ceps são iguais");
} else {
    console.log("Os ceps são diferentes");
}

//O método trim() removeu os espaços em branco desnecessários na comparação entre as strings
