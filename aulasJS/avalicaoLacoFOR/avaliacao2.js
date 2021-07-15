// 2-  - Crie um programa que apresente no console todos os números pares 
// de 1 a 50, um ao lado do outro na mesma linha. Ex.: 2 – 4 – 6 – 8 – 10... 

// (utilizando 'for')


let pares = []
for (let i = 2; i <= 50; i++) {
    if (i % 2 == 0)
        pares.push(i)
}



console.log(pares.join("-"));