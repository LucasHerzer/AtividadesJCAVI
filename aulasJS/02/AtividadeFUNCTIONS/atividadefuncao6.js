// . Tem-se um conjunto de dados contendo a altura  de 15 pessoas. Faça um programa que calcule e escreva:
// a maior e a menor altura do grupo;
// a média de altura;
// o número de pessoas com mais de 1.81 de altura.


let alturas = [1.60, 1.90, 2.00, 1.48, 1.10, 1.93, 1.60, 1.84, 1.49, 1.75, 1.77, 1.55, 1.46, 1.63, 1.76]

let total = 0


for (let i = 0; i < alturas.length; i++) {
    total += alturas[i];
}

mediaAlturas = total / alturas.length
console.log(mediaAlturas.toFixed(2)) //media

//encontra maior numero do array

function encontraMaior(altura) {
    return Math.max(...altura);
}

console.log(encontraMaior(alturas));

//encontrar menor numero do array
function encontraMenor(altura) {
    return Math.min(...altura);
}

console.log(encontraMenor(alturas));

// maiores q 1.81

qtdAltos = alturas => {
    for (let i = 0; i < alturas.length; i++) {
        totalAltos = alturas[i];
    }
    if (totalAltos > 1.81) {
        totalAltos++
    }
    return totalAltos
}

    console.log(qtdAltos(alturas))