const feriadosNacionais = [ //Array contendo os feriados e as suas datas
    { nome: 'Confraternização universal',   data: '01/01'}, //As datas são armazenadas no formato americano(mês/dia).
    { nome: 'Tiradentes',   data: '04/21'},
    { nome: 'Dia do trabalho',   data: '05/01'},
    { nome: 'São João',   data: '07/24'},
    { nome: 'Independência do Brasil',   data: '09/07'},
    { nome: 'Dia das crianças',   data: '10/12'},
    { nome: 'Proclamação da República',   data: '11/15'},
    { nome: 'Natal',   data: '12/25'}
];

export default feriadosNacionais;


/*
- 1° Passo da aplicação
-Este é o primeiro arquivo consumido pela camada de serviço feriados.
-O JS utiliza o formato americano quando precisamos fazer cálculos e comparações envolvendo datas.
-As datas não possuem ano, para que a aplicação funcione sempre, independente no ano.

*/
