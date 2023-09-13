import signos from "./dados/dados.js";
import retorna_signo from "./funcoes/funcoes.js";


let data_app = new Date(); //Data atual do sistema
   
const nome_signo = retorna_signo(signos, data_app);
   
console.log("O signo de hoje é: " + nome_signo);
