// 3 - Crie um programa que apresente no console todos os números de 300 a 100. 

// (utilizando 'forEach')

//USANDO FOR

let numeros = [];

for (let i = 300; i >= 100; i -=1) {
    numeros.push(i)
}

//console.log(numeros)


console.log(numeros.join("-"));


// USANDO FOREACH (N SEI SE ESTA CORRETO)

let numeros2 = [];

for (let i = 100; i <= 300; i++) {
    numeros2.push(i)
}

//console.log(numeros2)


numeros2.forEach((a, b) => {
    (numeros2.sort((a, b) => b - a))
});

console.log(numeros2)