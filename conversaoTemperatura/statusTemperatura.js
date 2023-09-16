function retornaStatusTemperaturaFahrenheit(fahrenheit) {

    let status;

    if(fahrenheit >= 99) {
        status = "Temperatura Alta";
    } else {
        status = "Temperatura Baixa";
    }

    return status;
}

export default retornaStatusTemperaturaFahrenheit;
