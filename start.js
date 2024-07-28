let label_aluna = "Aluna";
let valor_aluna = "Gleice";

let label_nivel = "Nível da função";
let valor_nivel = "Programadora Pleno";

console.log(label_aluna.padStart(20, ".") + ": " + valor_aluna);

console.log(label_nivel.padStart(20, ".") + ": " + valor_nivel);

/*
O método padStart() preencheu o início das string com espaços em branco.
As strings originais foram mantidas e foram adicionados espaços até as strings terem 20 caracteres.
*/
