let expressao_proibida = "passaporte falso";

let comentario = "     venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLocaleLowerCase();

if(comentario.indexOf(expressao_proibida) > -1) {
    
    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {
    console.log("Seu coemntário foi aprovado");
} 

console.log(comentario);
/*
- Uso de indexOf para encontrar uma expressão dentro de um comentário;
- Quando uma substring não é encontrada, retorna -1, no caso da expressao > -1 significa que seria encontrada. */
