
// 8 - Crie um programa que apresente todos os anos 
//bissextos entre os anos de 2000 e 2030.


let anosBissextos = [];

for (let index = 2000; index <= 2030; index++) {
    if (index%4 == 0)
        anosBissextos.push(index)
}

console.log(anosBissextos);

