const chuvaDeMeteoros = [
    { nome: 'Alfa Centaurídeos',     declinacao:  -59 },
   { nome: 'Gama Normídeos',         declinacao:  -50 },
   { nome: 'Pi Pupídeos',            declinacao:  -45 },
   { nome: 'Líridas',                declinacao:   34 },
   { nome: 'Eta Aquáridas',          declinacao:  -1  },
   { nome: 'Eta Líridas',            declinacao:   44 },
   { nome: 'Bootídeos de Junho',     declinacao:   48 },
   { nome: 'Alfa Capricornídeos',    declinacao:  -10 },
   { nome: 'Delta Aquáridas do Sul', declinacao:  -16 },
   { nome: 'Piscis Austrinídeos',    declinacao:  -30 },
   { nome: 'Perseidas',              declinacao:   58 } 
];

const chuvasNoNorte = chuvaDeMeteoros.filter( //Cria um novo array com as chuvas que ocorrem no hemisfério norte
    (chuva) => chuva.declinacao >= 0 //arrow function que verifica se a chuva acontece no hemisfério norte
);

const chuvasNoSul = chuvaDeMeteoros.filter(
    (chuva) => chuva.declinacao < 0
);

const imprimirChuva = function(chuva) {
    console.log(chuva); //Imprime as propriedades do objeto chuva
};

console.log("\nChuvas no hemisfério Norte: ");
chuvasNoNorte.forEach(imprimirChuva); 

console.log("\nChuvas no hemisfério Sul: ");
chuvasNoSul.forEach(imprimirChuva); // O for.Each é utilizado para percorrer os novos arrays e executar a função imprimirChuva
