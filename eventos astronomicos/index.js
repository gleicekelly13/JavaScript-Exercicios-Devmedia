import chuvas_meteoros from "./data/chuva_de_meteoros.js";
import imprimeListaDeChuvas from "./funcoes/funcoesInterface.js";
import { verificaChuvaHoje, verificaChuvasFuturas } from "./funcoes/funcoesLogicas.js";

const data_atual = new Date(); /* Forma correta de declarar a data manualmente no JS, 
é usando o padrão americano e entre aspas: '2023-03-25'(ano-mês-dia). */

const chuvasVisiveisHoje = chuvas_meteoros.filter((chuva) => verificaChuvaHoje(chuva, data_atual));  /*2 informações importantes passadas 
como parâmetros: coleção de chuvas e data atual. O método itera sobre a lista `chuvas_meteoros` e 
verifica se cada chuva é visível hoje com a função `verificaChuvaHoje` */

const chuvaVisiveisProximos2Meses = chuvas_meteoros.filter((chuva) => verificaChuvasFuturas(chuva, data_atual));

console.log('Chuva de Meteoros');


if(chuvasVisiveisHoje.length > 0) {  //Condição para verificar se existem chuvas na lista
    let msg = "\nEncontramos ";  //Variável que armazena uma parte da mensagem que será exibida
    msg += chuvasVisiveisHoje.length == 1 ? 'chuva de meteoros que podem ser vista hoje' : chuvasVisiveisHoje.length + ' chuvas de meteoros que podem ser vistas hoje';
    // Adiciona à variável `msg` a parte da mensagem que depende da quantidade de chuvas de meteoros visíveis hoje.

    console.log(msg)

    imprimeListaDeChuvas(chuvasVisiveisHoje); // Utilizando a função para imprimir a lista de chuvas que podem ser vistas hoje.

} else {
    console.log('\nNão há chuvas passando hoje');
} 

console.log('\n\nNão perca as próximas chuvas de meteoros: ');
imprimeListaDeChuvas(chuvaVisiveisProximos2Meses);  //Utilizando a função para imprimir a lista de chuvas que podem ser vistas nos próximos 2 meses.


/*
*A aplicação contém todos os dados das chuvas de meteoros, para que possa gerar as listas.
*A aplicação exibe uma lista com as chuvas que podem ser vistas hoje.
*Caso não tenha chuvas para serem vistas hoje, uma mensagem definida pelo cliente é impressa.
*A aplicação exibe outra lista com as chuvas que poderão ser vistas nos próximos 2 meses.
*Os dados exibidos em cada lista são: nome, intensidade, hemisfério e período em que ela vai passar.
*Para cada um dos filtros é necessário percorrer a coleção de chuvas e utilizar uma função que verifica se a chuva iterada passa em um determinado período.
*As funções recebem a chuva que esta sendo iterada e a data atual para verificar se o evento vai ocorrer dentro do período especificado
*Cada lista criada é armazenada em sua respectiva variável.
*No filter passamos uma função nativa que verifica se as datas da chuva estão dentro do período determinado
*chuvasVisiveisHoje.length -> número de chuvas
*/
