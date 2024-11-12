const verifica_tipo_usuario = (tipo) => {

    switch(tipo) {
        case 1:
            return 'Comum';
            break;
        case 2:
            return 'Editor';
            break;
        case 3: 
            return 'Administrador';
            break;
        default:
            return 'Tipo desconhecido';
            break;
    }
}

/*let tipo_usuario = verifica_tipo_usuario(2);

console.log(tipo_usuario); */

console.log(verifica_tipo_usuario(4));
