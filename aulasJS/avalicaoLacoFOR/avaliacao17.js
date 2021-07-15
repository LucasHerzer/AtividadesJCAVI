// 16 - Crie um programa que solicite um número inteiro X. 
// Gere X números aleatórios entre 0 e 100. Após isso apresente o menor número, 
// o maior número e a média dos números gerados.

let numeros = [];

for (let index = 0; index <= 100; index++) {
    if (index%5 == 4)
    numeros.push(index)
}

console.log(numeros)


let total = 0
for (let index = 0; index < numeros.length; index++) {
    total += numeros[index];
    
}

let mediaNumeros = total/numeros.length
console.log(mediaNumeros)


function encontraMaior(numero) {
    return Math.max(...numero);
}

console.log(encontraMaior(numeros));

function encontraMenor(numero) {
    return Math.min(...numero);
}

console.log(encontraMenor(numeros));