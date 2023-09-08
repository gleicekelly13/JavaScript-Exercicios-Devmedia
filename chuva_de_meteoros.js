const chuvas_meteoros = [ //Contém os dados que serão manipulados e exibidos no terminal
    { nome: "Alfa Centaurídeos",            pico: "Fev 8",      velocidade: "56 km/s" },
    { nome: "Gama Normídeos",               pico: "Mar 14",     velocidade: "56 km/s" },
    { nome: "Pi Pupídeos",                  pico: "Abr 23",     velocidade: "18 km/s" },
    { nome: "Eta Aquáridas",                pico: "Mai 5",      velocidade: "66 km/s" },
    { nome: "Alfa Capricornídeos",          pico: "Jul 30",     velocidade: "23 km/s" },
    { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",     velocidade: "41 km/s" },
    { nome: "Piscis Austrinídeos",          pico: "Jul 28",     velocidade: "35 km/s" },
    { nome: "Fenícidas",                    pico: "Dez 6",      velocidade: "18 km/s" },
    { nome: "Pupidas-Velidas",              pico: "Dez 12",     velocidade: "40 km/s" }
];
//Antes de iterar os elementos da lista, foi criado um título que será exibido com letras maiúsculas por meio do método toUpperCase()
let titulo = "=== chuvas de meteoros - hemisfério sul ===";
console.log(titulo.toUpperCase());
console.log("\n");

for ( const chuva of chuvas_meteoros ){ //iteração dos elementos da lista

    let nome_chuva = chuva.nome; //Obtendo o nome da chuva de meteoro
    let pico_chuva = chuva.pico; //Obtendo o pico da chuva de meteoro
    let velocidade_chuva = chuva.velocidade; //Obtendo a velocidade da chuva de meteoro

    let pico_mes_dia = pico_chuva.split(" "); //O método split() "quebra" a string pico_chuva com o caractere de espaço. Com isso será criado o array pico_mes_dia, que terá 2 índices.

    let pico_dia = pico_mes_dia[1]; //Atribuindo os valores do array para as variáveis pico_dia e pico_mes
    let pico_mes = pico_mes_dia[0];

    let pico_mes_nome = ""; //Variável que vai receber o nome do mês por extenso

    switch (pico_mes) { //O nome do mês será atribuído na variável pico_nome_mes de acordo com o valor da variável pico_mes

        case "Jan":     pico_mes_nome = "Janeiro";     break;
        case "Fev":     pico_mes_nome = "Fevereiro";     break;
        case "Mar":     pico_mes_nome = "Março";     break;
        case "Abr":     pico_mes_nome = "Abril";     break;
        case "Mai":     pico_mes_nome = "Maio";     break;
        case "Jun":     pico_mes_nome = "Junho";     break;
        case "Jul":     pico_mes_nome = "Julho";     break;
        case "Ago":     pico_mes_nome = "Agosto";     break;
        case "Set":     pico_mes_nome = "Setembro";     break;
        case "Out":     pico_mes_nome = "Outubro";     break;
        case "Nov":     pico_mes_nome = "Novembro";     break;
        case "Dez":     pico_mes_nome = "Dezembro";     break;

        default:        pico_mes_nome = "Mês inválido";    break;

    }

    let pico_data_chuva_formatada = pico_dia + " de " + pico_mes_nome; //Essa variável vai representar a data do pico da chuva de uma forma "amigável"

    let velocidade_formatada = velocidade_chuva.replace("km/s", "quilômetros por segundo"); //Esse método substitui a sigla que representa a velocidade da chuva pela sua descrição por extenso

    console.log("Nome: ".padEnd(30, ".") + nome_chuva); //Esse método ajuda a deixar a exibição das informações mais organizada
    console.log("Pico: ".padEnd(30, ".") + pico_data_chuva_formatada);
    console.log("Velocidade: ".padEnd(30, ".") + velocidade_formatada);
    console.log("\n");

}

/*
Para imprimir as informações de cada chuva de meteoro são necessários os seguintes passos:

Iterar a lista que contém as chuvas de meteoros
Obter as informações de cada chuva à cada iteração
Formatar as informações deixando-as amigáveis para o usuário final */
