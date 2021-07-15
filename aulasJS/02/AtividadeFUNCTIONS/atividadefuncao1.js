
// Faça um programa que entre com três números, faça a média aritmética e mostre o
// resultado. 


//let numbers = [22, 56, 66];
// let total = 0;

// for (let i = 0; i < numeros.length; i++) {
//     total += numeros[i];

// }

// let media = total / numeros.lenght 


let numeros = [22,56,66];

function calcMedia (numeros) {
    let total = 0;
    for (let index = 0; index < numeros.length; index++) {
        total += numeros[index];
    }
    let media = total / numeros.length;
    return media;
}

///let numbersMedia = calcMedia([2,5,8]);

console.log(calcMedia(numeros))
