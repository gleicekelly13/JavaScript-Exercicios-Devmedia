const dataUltimoAcesso = new Date('2023/09/05 20:00:00'); //String com a data do último acesso do usuário como parâmetro para criar o objeto do tipo Date
const dataAtual = new Date(); //A data atual do sistema está sendo armazenada na variável dataAtual.

const hora = dataAtual.getHours(); //O método getHours armazena a hora atual na variável hora.

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso; //Cálculo da diferença (em milissegundos) entre a data atual e a data do último acesso.

const milissegundosHora = 1000 * 60 * 60; //Cálculo da quantidade de milissegundos que uma hora possui e armazena na variável.
const milissegundosDia = milissegundosHora * 24; // Mesmo cálculo para armazenar os milissegundos de um dia.

const milissegundosSemanas = milissegundosDia * 7;

let msg = "";
//1
if( hora < 6 || hora >= 18 ) {
    msg += 'Boa noite\n';
} else if( hora >= 6 && hora < 12 ) {
    msg += 'Bom dia\n';
} else {
    msg += 'Boa tarde\n';
}
//2
if (diferencaTime > milissegundosSemanas) {
    msg += "Você está ausente há semanas!!!";
} else if ( diferencaTime > milissegundosDia ) { // Verifica se o tempo que passou é maior que um dia
    msg += "Você está ausente há dias!!!"; //Concatenação à variável msg.
} else if (diferencaTime > milissegundosHora) { //Verifica se a diferença é maior que uma hora
    msg += "Você está ausente há horas!!!";
} else {
    msg += "Que bom que ainda está aqui!";
}

console.log(msg); // Impressão da variável msg para o usuário

/* A msg exibida para o usuário possui um texto que foi atribuído à variável msg baseado em duas verificações:
1- O horário atual para saber se é dia, tarde ou noite.
2-Quanto tempo se passou desde o último acesso.

O método getTime armazena os valores timestamp das datas.
*/
