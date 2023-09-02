let noticias = [
    {id: 1, titulo: "Nubank levanta US$ 400 milhões em nova rodada de investimento", status: 1},
    {id: 2, titulo: "Procon-SP notifica Serasa pedindo explicações sobre vazamento de dados", status: 1},
    {id: 3, titulo: "Login no Whatsapp Web terá autenticação por biometria", status: 0},
    {id: 4, titulo: "Lucro da Microsoft cresce 32% no 4º trimestre de 2020", status: 1}
];

for(let noticia of noticias) {

    let id_noticia = noticia.id;
    let nome_noticia = noticia.titulo;
    let status_noticia = noticia.status;

    if( status_noticia == 0) {
        continue // O continue é usado para pular a iteração atual do loop e passar para a próxima iteração.
    } 

    console.log("Id da notícia: " + id_noticia);
    console.log("Nome da notícia: " + nome_noticia);
    console.log("Status da notícia: " + status_noticia);

    console.log("\n");
}
