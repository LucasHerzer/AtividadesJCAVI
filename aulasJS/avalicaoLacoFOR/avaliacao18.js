// 17 - Crie um programa que solicite ao usuário um número inteiro qualquer e 
// apresente o somatório de 0 até esse número.

// forma 1

let numero = 10;
let total= 0;


for (let index = 0; index <= numero; index++) {
    total += index
}


console.log(total);

// forma 2

let numeros = [];
let numero1 = 10;
let total1= 0;


for (let index = 0; index <= numero1; index++) {
    numeros.push(index)
}

console.log(numeros)


for (let index = 0; index < numeros.length; index++) {
    total1 = total1 + numeros[index];
    
}

console.log(total1)