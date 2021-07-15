// 2. Faça um programa que entre com o nome e o salário de um funcionário e mostre seu
// novo salário, sabendo que o mesmo teve um aumento de 10%. 


let nome = 'Lucas Herzer';
let salario = 3000;
let aumento = 0.1;

let calcAumento = (salario, aumento=0.1) => {
    return salario + (salario * aumento) ;
}

console.log(`Olá ${nome} o valor do seu novo salário é: ${calcAumento(salario, aumento)}`)