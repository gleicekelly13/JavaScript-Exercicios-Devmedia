const tecnologias = [
    {materia: "JavaScript", concluido: true},
    {materia: "React Native", concluido: false},
    {materia: "React", concluido: true},
    {materia: "Vue.js", concluido: true},
    {materia: "Angular", concluido: false},
];

for(const i in tecnologias){ 
    if(tecnologias[i].concluido){
        console.log(tecnologias[i].materia); //Imprime as materias concluidas
    }
}
/*
for...in: Itera sobre as propriedades enumeráveis de um objeto, 
fornecendo acesso às chaves (índices) das propriedades, não aos valores diretos. 
Geralmente, é usado para objetos, não para arrays, 
embora tecnicamente seja possível usá-lo para iterar sobre os índices de um array
*/


//--------------------------------------
/*
const tecnologias = [
    {materia: "JavaScript", concluido: true},
    {materia: "React Native", concluido: false},
    {materia: "React", concluido: true},
    {materia: "Vue.js", concluido: true},
    {materia: "Angular", concluido: false},
];

for(const tecnologia of tecnologias){
    if(tecnologia.concluido){
        console.log(tecnologia.materia);
    }
}
*/

/*
Para iterar diretamente sobre os elementos de uma coleção, como um array,deve usar for...of, 
que fornece acesso direto aos valores dos elementos. 
Para percorrer os elementos de um array, o for...of é a escolha mais adequada e simples.
*/
