function imprimeFeriados(feriadosFiltro) { //Recebe um array e imprime cada um dos seus itens
    
    feriadosFiltro.forEach(feriado => { //Immprime no console a lista com os próximos feriados retornados pelo array

        const nome = feriado.nome;
        const diaSemana = feriado.diaSemana;
        const dataFeriado = feriado.data;

        console.log(`${ nome } cairá em: ${ diaSemana }, ${ dataFeriado }`);
    });
}

export default imprimeFeriados;

/*4° Passo 
-3° e última fase da aplicação
-Exibe as informações na tela
-Camada de impressão dos feriados
*/
