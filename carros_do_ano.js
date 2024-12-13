const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2024 },
];

const hoje = new Date();
const anoAtual = hoje.getFullYear();

const carrosDoAno = carros.filter( carro => carro.anoFabricacao == anoAtual);

carros.forEach (carro => {
    console.log(carrosDoAno);
})
