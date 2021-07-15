// Cada espectador de um cinema respondeu a um questionário no qual 
// constava sua idade e a sua opinião em relação ao filme: 
// ótimo: 3
//  bom: 2 
// regular: 1
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let idades = [39, 19, 27, 09, 24, 18, 39, 62, 41, 13, 54, 21, 15, 83, 33];
let opinioes = [3, 3, 2, 1, 1, 1, 3, 2, 1, 2, 1, 3, 1, 2, 1];
let idadesOtimo = 0
let idadesBom = 0
let idadesRegular = 0
let otimo = 0
let bom = 0
let regular = 0
let qtd = 0



for (let i = 0; i < opinioes.length; i++) {
    qtd++;

    if (opinioes[i] == 3) {
otimo++;
idadesOtimo = idades[i] + idadesOtimo;
}


    else if (opinioes[i] == 2) {
bom++;
idadesBom = idades[i]+ idadesBom;}


    else {
regular++;
idadesRegular = idades[i]+ idadesRegular;
    }


}

//media de pessoas q responderam otimo
let mediaOtimo = idadesOtimo / otimo
console.log (`A média de pessoas que responderam OTIMO é: ${mediaOtimo}`)

//qtd pessoas q responderam regular
console.log(`O total de pessoas que responderam REGULAR é: ${regular}`)

//porcentagem das pessoas que opinaram BOM

let porcentagemBom = (bom / qtd)* 100
console.log(`A porcentagem de pessoas que responderam bom foi de ${porcentagemBom.toFixed(2)}`+"%")


