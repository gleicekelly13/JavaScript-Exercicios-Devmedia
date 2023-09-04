let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto"];

for(let contador = 0; contador < meses.length; contador++) {
    console.log(meses[contador]); //Expressão usada para acessar os meses da matriz um por um, permitindo que os imprima sequencialmente durante as iterações do loop.

    if(meses[contador] == "Abril") {
        break; 
    }
}

//Código que imprime os meses de Janeiro a Abril.

