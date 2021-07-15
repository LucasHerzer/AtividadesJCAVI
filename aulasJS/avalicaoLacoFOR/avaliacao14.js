// 14 - Crie um programa que solicite dois números inteiros ao usuário: A e X. 
// Apresente todos os números pares de A até X.


let numA = 10
let numX = 40
let numerosPares = [];

for (let index = numA ; index <= numX; index++) {
    if(index%2 == 0)
    numerosPares.push(index)
}

console.log(numerosPares)