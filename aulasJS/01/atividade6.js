// . Tem-se um conjunto de dados contendo a altura  de 15 pessoas. Faça um programa que calcule e escreva:
// a maior e a menor altura do grupo;
// a média de altura;
// o número de pessoas com mais de 1.81 de altura.


let alturas = [1.60,1.90,2.00,1.48,1.10,1.93,1.60,1.84,1.49,1.75,1.77,1.55,1.46,1.63,1.76]

let media = 0
let maior = 0.00
let menor = alturas [0]
let qtdAltos = 0


for (let index = 0; index < alturas.length; index++) {
    media += alturas[index];
    if(alturas[index] > maior){
        maior = alturas[index]
    }
    else if (alturas[index] < menor){
        menor = alturas[index]
    }
    
    if(alturas[index] > 1.81){
        qtdAltos++
    
    }
}

mediaAlturas = media / alturas.length
console.log(mediaAlturas.toFixed(2)) //media


console.log('A maior altura é: '+maior)
console.log('A menor altura é: '+menor)
console.log('A quantidade de pessoas com mais de 1.81 altura é: '+qtdAltos)

