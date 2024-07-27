let label = "Nome: ";
let nome = "Gleice";

let label_profissao = "Profissão: ";
let valor_profissao = "Desenvolvedora de software"

let label_nivel = "Nível: ";
let valor_nivel = "Desenvolvedora Pleno";

console.log(label.padEnd(20, ".") + nome);
console.log(label_profissao.padEnd(20, ".") + valor_profissao);
console.log(label_nivel.padEnd(20, ".") + valor_nivel);

/* 
O método padEnd() preencheu a string label com espaços em branco até que a string tivesse 20 caracteres, e alinhou os dados.
*/
