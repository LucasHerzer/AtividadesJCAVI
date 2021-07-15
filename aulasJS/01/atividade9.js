
let numeros = [1,2,3,4,5,6,7,8,9,10];
let pares = [];
let primos= [];

//i == 0

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 == 0){
        pares.push(numeros[i])
    }


//divisivel 2
// numeros[i] == 9

let divisores = 0;
for (let y = 0; y <= numeros[i]; y++){
    if(numeros[i] % y ==0 ){
        divisores++;
    }
}
if(divisores ==2) {
    primos.push(numeros[i])
}
}

console.log(primos);
console.log(pares);