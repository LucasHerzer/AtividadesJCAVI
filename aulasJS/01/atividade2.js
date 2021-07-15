// 2. Faça um programa que entre com o nome e o salário de um funcionário e mostre seu
// novo salário, sabendo que o mesmo teve um aumento de 10%. 

let name = String (prompt('Seu nome é? '))
let salario = Number (prompt('Seu salario é? '))

let aumento = 0.1

let newsalario = salario*aumento+salario

console.log(`O novo salario do ${name} é ${newsalario}`)