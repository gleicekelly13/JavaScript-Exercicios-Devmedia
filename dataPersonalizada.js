const hoje = new Date();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: "numeric",
};

console.log(hoje.toLocaleString('en-US', options));

//('pt-BR)Formato brasileiro
