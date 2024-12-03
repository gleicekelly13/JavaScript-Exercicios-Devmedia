const dataAtual = new Date();
const dataFechamento = new Date(2024-10-30);

const tempoAtual = dataAtual.getTime();
const tempoFechamento = dataFechamento.getTime();

const diferencaTime = tempoAtual - tempoFechamento;

const millisegundosDia = 1000 * 60 * 60 * 24;

if(diferencaTime - millisegundosDia) {
    console.log("Sua fatura já foi fechada!!!");
} else {
    console.log("Ainda não fechamos a fatura do seu cartão");
}
