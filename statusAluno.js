function retorna_status_aluno(nota_1, nota_2) {

    let media = (nota_1 + nota_2) / 3;
    let status;

    if(media >= 6) {
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }

    return status;
}

/*let resultado = retorna_status_aluno(4, 10);

console.log("Seu status é: " + resultado); */

console.log("Você está: " + retorna_status_aluno(10, 10));
