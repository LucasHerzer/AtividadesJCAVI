

/*

STRINGS



alert('Eita porra meu');
console.log(1);
console.log(2);
console.log(3);
console.log(4);

let age = Number (prompt("Qual sua idade?"));
document.write (age);



let age2 = 27;
let year = 2021;


console.log(age2 , year);


let email = "lucasfernandoherzer@gmail.com";

let firstName = "Lucas";
let LastName = "Herzer";

let fullName = firstName + " " + LastName;

console.log(fullName);

console.log(fullName.length);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

let index = email.indexOf("@")
let index = email.indexOf("r")
let index = email.LastindexOf("r")
console.log(index)



let result = email.replace("l", "###");


console.log(result)




--- INTEGER





let radius = 5;
let pi = 3.14;


//Operators+,-,/,**,%

//console.log(radius + pi)

let likes = 10
//likes = likes + 1
//likes++
likes += 2

console.log(likes)


// -------------------- Concatenando String 


let fullName = "Lucas";
let age = 27;
//template String com CRASE
let result = `Meu nome é  ${fullName} e tenho x anos ${age}`;

console.log(result);

*/

//let names = ['Lucas', 'João','Gabriel'];

// let ages = [27, 37, 24];

// console.log (`${names[0]} tem ${ages[0]} anos`)

//let allnames = names.join('-');
//console.log(allnames)

//let allnames = names.indexOf('Lucas');
//console.log(allnames)

//let allname = names.concat(['Ana','Maria'])

//allname.push('Valdemar')
// pop apaga o ultimo item da array
//allname.pop()

//console.log(allname.join('-'));


// ------------- boolean

// console.log(true,false,'true','false');

//let email = 'lucasfernandoherzer@gmail.com';
//let names = ['Lucas','Anão'];

//let result = email.includes('@');

//let result = names.includes('ANAL')

//console.log(result);

/*
let age = 24;

console.log(age != 25);
console.log(age == 25);
console.log(age >= 25);
console.log(age <= 25);
console.log(age > 25);
console.log(age < 25);
//comparar o tipo adiciona um terceiro = (igual)
console.log(age === 25);

*/

// ------------- type conversion


//let score ='100';

//score = Number(score);

//console.log(typeof score, score)

// let result = Boolean(-50);
// console.log(result)


// stack over flow dicionario de programador


/// for loops 

// let array =['Lucas','Anão','Viking']
// for (let i = 0; i < array.length; i++) {
//     console.log("Index: " +i+" "+array[i])
// };

// loop de while

// let i = 1;

// while(i < 5) {
//     console.log(i)
//     i++
// }



// const password = 'p@ssword'


// if(password.length >= 8 && password.includes('@')){
//     console.log('Senha é forte')
// }

// else {
//     console.log('Senha é fraca')
// }


//continue e break
/*
const scores =[10,33,40,50,99,130]


for (let i = 0; i < scores.length; i++) {
    const scores[i] = array[i];
    
}  

*/




// const key = 'Z'


// switch (key) {
//     case 'A':
//         console.log('Sua letra: A')
//         break;
//     case 'B':
//         console.log('Sua letra: B')
//         break;
//     case 'C':
//         console.log('Sua letra: C')
//         break;

//     default:
//         console.log('Não sei a sua letra')
//         break;
// }

// ---------------------- scope

// let age = 30;

// if(true){
//     console.log('Sua idade é '+age);
// }


// let name = 'Lucas';

// console.log(name.split('a'));



//EXPRESSAO REGULAR ---- /^[a-zA-Z0-2]+$/.test() a~z minusculo A~Z maiusculo - 0~2 string numerica


//console.log(/^[a-zA-Z0-2]+$/.test('a'));

// let name = null;

// console.log(name)


// let age = 11;

// if(age >= 18){
//     console.log('Maior de idade');
// } else {
//     console.log('Menor de idade')
// }

//Operador ternario (if e else simplificado)

let age =11;

let msg = age >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(msg)


//// OQ É FALSE NO JS

//inteiro = 0
// string = ''
//array = []
//Boolean = false



///Primo

// divisores = 0
//divisores == 2

//divisores