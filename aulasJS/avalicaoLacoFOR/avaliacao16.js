// 16 - Crie um programa que apresente o quadrado dos números de 0 a 20. Exemplo: 
// 0² = 0
// 1² = 1
// 2² = 4


let numerosPotencia = [];

for (let index = 0; index <= 20 ; index++) {
    numerosPotencia.push(index**2)
}

console.log(numerosPotencia.join("-"));
