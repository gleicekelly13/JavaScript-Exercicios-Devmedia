const dataAtual = new Date();

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: '2-digit',
};

console.log(dataAtual.toLocaleDateString('en-US', options));
