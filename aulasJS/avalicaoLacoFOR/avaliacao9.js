// 9 - Crie um programa que gere 10 números inteiros randômicos entre 1 e 100. 
// Apresente o maior e o menor deles. 
// (crie uma função para pegar o maior numero do array);


let numeros = [];


for (let index = 0; index <= 100; index++) {
    if (index%5 ==3)
    numeros.push(index)
}

console.log(numeros)

function encontraMaior(numero) {
    return Math.max(...numero);
}

console.log(encontraMaior(numeros));

function encontraMenor(numero) {
    return Math.min(...numero);
}

console.log(encontraMenor(numeros));
