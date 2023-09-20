function retornaDiaSemana() {

    let data = new Date();
    let dia = data.getDay();

    return dia;
}

export default retornaDiaSemana;

//Todo o contexto de data foi movido da camada de exibiçao para esta nova camada.
