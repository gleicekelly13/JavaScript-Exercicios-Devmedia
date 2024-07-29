const hoje = new Date();

const ano = hoje.getFullYear();

if(ano % 4 == 0){ //Verifica se o ano é bissexto
    console.log('Ano Bissexto');
} else {
    console.log('O ano não é bissexto');
}
