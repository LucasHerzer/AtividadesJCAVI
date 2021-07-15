// . Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
// total de homens;
// total de mulheres;
// média das idades dos homens;
// média dos pesos das mulheres.



let idades = [13,26,12,17,53,34,19,21,37,34];
let pesos = [39,70,40,55,60,58,54,80,90,73];
let sexos = ['F','M','F','M','F','M','F','F','M','F'];

let totalHomens = 0;
let totalIdadeHomens = 0;
let mediaIdadeHomens = 0;

let totalMulheres = 0;
let totalPesoMulheres = 0;
let mediaPesoMulheres = 0;

for (let i = 0; i < idades.length; i++) {
    if (sexos[i] == "M") {
        totalHomens++;
        totalIdadeHomens = totalIdadeHomens + idades[i];


    } else {
        totalMulheres++;
        totalPesoMulheres = totalPesoMulheres + pesos[i];
        
    }
}

mediaIdadeHomens = totalIdadeHomens / totalHomens;
console.log(`O total de homens é:   ${totalHomens}`);
console.log(`A média de idade dos homens é:  ${mediaIdadeHomens}`);

mediaPesoMulheres = totalPesoMulheres / totalMulheres;
console.log(`O total de mulheres é:   ${totalMulheres}`);
console.log(`A média do peso das mulheres é:  ${mediaPesoMulheres.toFixed(2)}`);
