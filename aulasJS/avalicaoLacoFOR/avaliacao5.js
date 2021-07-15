// 5 - Crie um programa que apresente no console todos os números múltiplos de três de 1 a 100, um ao lado do outro. Ao final, na linha seguinte, apresente a quantidade de números apresentados. 

// (utilizando 'for')


let multiplos3 = [];

for (let i = 0; i <= 100; i++){
    if (i%3==0)
    multiplos3.push(i)
}

console.log(multiplos3)

