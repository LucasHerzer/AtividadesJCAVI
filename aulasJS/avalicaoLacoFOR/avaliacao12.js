// 12 -  Crie um programa que apresente quais são e 
// quantos são os números pares entre 0 e 500.



let pares = [];


for (let index = 0; index <= 500; index++) {
    if(index%2 == 0)
        pares.push(index)
}


console.log(pares.join("/"))