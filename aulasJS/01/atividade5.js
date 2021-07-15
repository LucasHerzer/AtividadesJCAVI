// Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
// final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
// para aprovação é igual ou superior a 8.  

let nome = 'Joaozinho';
let notas = [8,7,9];
let disciplina = 'Quimica';
let total = 0;


for (let index = 0; index < notas.length; index++) {
    total += notas[index];
}

let mediaNotas = total /notas.length



if(mediaNotas >=8){
    console.log(`${nome} foi Aprovado, e sua média foi  ${mediaNotas}`);
}

else {
    console.log(`${nome} foi Reprovado, e sua média foi   ${mediaNotas})`);
}








