/*let ddd = 21;

switch(ddd){
    case 11:
        console.log("São Paulo");
    break;
    
    case 21:
        console.log("Rio de Janeiro");
    break;
}
*/
//-----------------------------------------

/*let plataforma = 'xbox';
let jogo = " ";

switch(plataforma) {
    case 'xbox':
        jogo = 'Speed Racer';
    break;

    default:
        jogo = 'Não temos jogos para seu console';
    break
}
console.log(jogo); */

//----------------------------------------------
//Switch Tradicional

/*let produto = "Smartphone";

switch(produto) {
    case "Smartphone":
        console.log("Produto: Smartphone");
    break;

    case "TV":
        console.log("Produto: TV");
    break;

    default:
        console.log("Produto inválido");
    break 
} */

//---------------------------------------------------
//Múltiplas cláusulas case ao mesmo tempo

let produto = "Smartphone";

switch(produto) {
    case "Smartphone":
    case "Celular":
    case "Telefone":
        console.log("Produto: Smartphone");
        break;
    
    case "TV":
        console.log("Produto: TV");
        break;

    default:
        console.log("Produto inválido");
        break;
}
