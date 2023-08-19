let frases_do_dia = [
    "Sorte é o resultado de muito esforço, trabalho e dedicação",
    "Imagine uma nova história para sua vida e acredite nela",
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo",
    "Se existe uma forma de fazer melhor, descubra-a",
    "Seja a mudança que você deseja ver no mundo.",
    "Um objetivo nada mais é do que um sonho com limite de tempo",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer",
    "A persistência é o caminho do êxito.",
    "Concentre-se naquilo que você é bom, delegue todo o resto",
    "A amizade duplica as alegrias e divide as tristezas",
    "O que quer que você lute, você fortalece, e o que você resiste, persiste",
    "Lembre-se: sua verdadeira força, vem de dentro",
    "Nada acontece a menos que sonhemos antes",
    "Para quem ama, qualquer sacrifício é alegria",
    "A paz é a única forma de nos sentirmos realmente humanos",
    "Não existe um caminho para a felicidade. A felicidade é o caminho",
    "O amor é a alegria acompanhada da ideia de uma causa exterior",
    "A criatividade é ilimitada, pois a arte só precisa de motivação",
    "Fé, duas letras que podem mudar sua vida, acredite",
    "Que a vontade de vencer seja minha maior motivação",
    "Nunca subestime o poder de sua visão para mudar o seu mundo",
    "Não coloque limites em seus sonhos. Coloque fé",
    "Tenho certeza de que se eu sorrisse menos teria menos amigos",
    "Não espere por uma crise para descobrir o que é importante em sua vida",
    "Quem sorri sem parar não é alegre, é falso",
    "A alegria de fazer o bem é a única felicidade verdadeira",
    "A alegria evita mil males e prolonga a vida",
    "Coloque fé onde falta coragem",
    "Levanta, sacode a poeira e dá a volta por cima",
    "O que vale a pena possuir, vale a pena esperar",
    "A esperança é o sonho do homem acordado"
];

let data_atual = new Date(); //Essa variável recebe o valor da data atual
let numero_escolhido = data_atual.getDate(); // Essa variável recebe o dia do mês de data_atual; getDate permite obter o dia do mês de uma data.

console.log("Numero sorteado: " + numero_escolhido);
numero_escolhido--;

let frase_do_dia = frases_do_dia[numero_escolhido]; //Recebe o valor de uma das frases do array no índice definido.

console.log("Frase do dia");
console.log("Mensagem: " + frase_do_dia);

/* A variável numero_escolhido está sendo decrementada porque será usada como índice no array frases_do_dia(lembrar que o primeiro índice de um array sempre será o 0);A primeira frase do array está no índice 0, como o primeiro dia de um mês sempre será 1, fazemos o decremento para corresponder os com os índices do array. */
