// 7 - Crie um programa que apresente os 10 primeiros números da série de Fibonacci. 
// Ex.: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34



let fibonacci = [0, 1];

let v1 = 0
let v2 = 0
let v3 = 0

for (let index = 0; index <= 7; index++) {
    v1 = fibonacci[index]
    v2 = fibonacci[index + 1]
    v3 = v1 + v2
    fibonacci.push(v3)
}


console.log(fibonacci)