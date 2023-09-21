import feriadosNacionais from "./dataFeriados.js";
import filtraFeriados from "./filtro.js";
import { formataDiaSemana, formataDataFeriado } from "./formataDataFeriado.js";

function retornaProximosFeriados(numeroFeriados) { //Retorna os dados prontos para serem exibidos

    let feriadosFiltro = filtraFeriados (feriadosNacionais, numeroFeriados); //Quando precisa dos feriados filtrados, ela utiliza a função filtraFeriados
    let feriadosFiltrosFormatados = [];

    feriadosFiltro.forEach(feriado => {
        const dataFeriado = feriado.data;
        let diaSemana = formataDiaSemana (dataFeriado); //E para formatar os dados, chama as funções que formataram os dados.
        const dataFeriadoFormatada = formataDataFeriado(dataFeriado);

        feriadosFiltrosFormatados.push({ //Os dados formatados são adicionados em um novo array, contendo o nome, o dia da semana e a data formatada.
            nome: feriado.nome,
            diaSemana: diaSemana,
            data: dataFeriadoFormatada
        });
    });

    return feriadosFiltrosFormatados;
}

export default retornaProximosFeriados;


/*3° Passo 
-(fase 2)Fase da lógica central da aplicação
-Inicia a preparação de dados, que já passou por diversas etapas.
-Apesar dela ser responsável por retornar os próximos feriados, ela não se preocupa em como isso é feito
-A função retornaProximosFeriados faz parte da camada de serviço feriados e é responsável por retornar um array formatado com os próximos feriados.

*/
