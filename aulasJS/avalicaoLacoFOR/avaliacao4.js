// 4 - Crie um programa que apresente no console todos os números ímpares de 1 a 100, 
// um ao lado do outro na mesma linha. 



let numeros= [];

for (let i = 0 ; i <= 100; i++) {
    numeros.push(i);
}

//console.log(numeros);
let impares = [];

numeros.forEach((i) => {
    if (numeros[i] %2 != 0){
        impares.push(i)
    } 
});

console.log(impares.join("-"))