const hoje = new Date();
const vencimento = new Date('2022-10-23');

let mensagem = "";

if(hoje.getTime() > vencimento.getTime()) { 
    mensagem = "Esta conta já venceu.";
} else {
    mensagem = "Ufa, ainda não venceu.";
}

console.log(mensagem);

/*O getTime() utiliza o timestamp das datas para fazer a comparação 
se a data atual é maior que a data de vencimento. */
