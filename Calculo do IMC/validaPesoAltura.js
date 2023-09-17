function validaPeso(peso) {
    let pesoValido = true;

    if(peso > 0) {
        pesoValido = true;
    }

    return pesoValido;
}

function validaAltura(altura) {
    let alturaValida = true;

    if(altura > 0) {
        alturaValida = true;
    }

    return alturaValida;
}

export {validaPeso, validaAltura};
