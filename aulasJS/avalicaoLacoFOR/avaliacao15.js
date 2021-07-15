// 15 - Crie um programa que apresente a soma dos 
// números pares e dos ímpares de 0 a 50.



let numeros = [];
let pares = [];
let impares = [];


for (let index = 0; index <= 50; index++) {
    if (index%2 == 0)
    pares.push(index)
    else impares.push(index)
}


console.log(pares);
console.log(impares);

let somaPares = 0

for (let index = 0; index < pares.length; index++) {
    somaPares += pares[index];

}

console.log(somaPares)


let somaImpares = 0

for (let index = 0; index < impares.length; index++) {
    somaImpares += impares[index];

}

console.log(somaImpares)