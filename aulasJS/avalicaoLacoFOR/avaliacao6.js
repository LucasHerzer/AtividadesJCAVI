// 6 - Crie um programa que solicite ao usuário um número inteiro entre 0 e 100 
// (exemplo let numero = 33) (o programa não deve prosseguir se o número não estiver 
// nesse intervalo). Após, gere 10 números randômicos entre 0 e 100 e 
// apresente quantos randômicos 
// são maiores ou iguais ao número do usuário.


let numero = 33 
let maioresOuIguais = [];

if (numero <= 100 && numero >= 0){
    for (let index = 0; index <= 9; index++) {
        let numeroAleatorio = Math.round(Math.random()*100) 
        //console.log(numero)
        if (numeroAleatorio >= numero){
            maioresOuIguais.push(numeroAleatorio)
        }
    }
}
else {
    console.log("Introduza um número válido")
}

console.log(maioresOuIguais.join("/"))
