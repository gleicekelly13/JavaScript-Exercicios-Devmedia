import chuvas_meteoros from "./data/chuva_de_meteoros.js";
import imprimeListaDeChuvas from "./funcoes/funcoesInterface.js";
import { verificaChuvaHoje, verificaChuvasFuturas } from "./funcoes/funcoesLogicas.js";

const data_atual = new Date(); // Forma correta de declarar a data manualmente no JS, é usando o padrão americano e entre aspas: '2023-03-25'(ano-mês-dia).

const chuvasVisiveisHoje = chuvas_meteoros.filter((chuva) => verificaChuvaHoje(chuva, data_atual));

const chuvaVisiveisProximos2Meses = chuvas_meteoros.filter((chuva) => verificaChuvasFuturas(chuva, data_atual));

console.log('Chuva de Meteoros');


if(chuvasVisiveisHoje.length > 0) {
    let msg = "\nEncontramos ";
    msg += chuvasVisiveisHoje.length == 1 ? 'chuva de meteoros que podem ser vista hoje' : chuvasVisiveisHoje.length + ' chuvas de meteoros que podem ser vistas hoje';

    console.log(msg)

    imprimeListaDeChuvas(chuvasVisiveisHoje);

} else {
    console.log('\nNão há chuvas passando hoje');
} 

console.log('\n\nNão perca as próximas chuvas de meteoros: ');
imprimeListaDeChuvas(chuvaVisiveisProximos2Meses);  


/*
*A aplicação contém todos os dados das chuvas de meteoros, para que possa gerar as listas.
*A aplicação exibe uma lista com as chuvas que podem ser vistas hoje.
*Caso não tenha chuvas para serem vistas hoje, uma mensagem definida pelo cliente é impressa.
*A aplicação exibe outra lista com as chuvas que poderão ser vistas nos próximos 2 meses.
*Os dados exibidos em cada lista são: nome, intensidade, hemisfério e período em que ela vai passar.
*/
