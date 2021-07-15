// 13 - Crie um programa que solicite um inteiro X ao usuário (exemplo let numero = 33). 
// Apresente todos os números inteiros pares de 0 a X.


let numero = 33
let numeros = [];

for (let index = 0; index <= numero; index++) {
    if(index%2 == 0){
    numeros.push(index)
}}

console.log(numeros.join("/"))


