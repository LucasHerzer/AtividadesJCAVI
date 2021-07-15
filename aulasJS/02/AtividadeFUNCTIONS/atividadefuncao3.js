// 3. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem
// ser somado os dois, caso contrário multiplique A por B ao final do cálculo ao final do
// cálculo atribuir o valor para uma variável C. 


// let A = Number(prompt('Insira o primeiro valor: '))
// let B = Number(prompt('Insira o segundo valor: '))

// if (A == B)
//     console.log(A+B)


// else{
//     let C = 0
//     console.log(C=A*B)
// }



let A = 10
let B = 10


let calculo = function (A, B) {
    let C = 0;
    if (A == B)
        C = A + B;
    else {
        C = A * B;
        
    }
    return C;
}


console.log(calculo(A, B))