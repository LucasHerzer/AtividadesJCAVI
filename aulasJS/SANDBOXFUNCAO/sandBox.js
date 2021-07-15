// String
// Array
// Number
// Boolean
// Function

//declarando uma funcao

// function greet(){
//     console.log('Hello there')
// }

//greet ()
//greet ()

// ------ argumentos e parametros

// const speak = function(){
//     console.log('Good day Lucas!')
// }

// speak();


// const speak = function(name){
//     console.log(`Good day ${name}!`)
// }

// const speak = function(name,time ='day'){
//     console.log(`Good ${time} ${name}`)
// }
// speak('Lucas','night');
// speak('Lucas','day');
// speak('Ain Mds');



/// -------- RADIUS (RETORNO)

// const calcArea = function(radius){
//     let area =3.14 * radius**2;
//     return area;
// }

// const area = calcArea(4);
    
// console.log(area);


// const retornarNumeroSePar = function(numero){
//     if(numero %2 == 0){
//         return numero
//     } else {
//         'não é par'
//     }
// }

// let numero = retornarNumeroSePar(7)
// let numero1 = retornarNumeroSePar(5)
// let numero2 = retornarNumeroSePar(6)
// let numero3 = retornarNumeroSePar(8)

// console.log(numero)
// console.log(numero1)
// console.log(numero2)
// console.log(numero3)


//pode chamar a function usando =>

// const calcArea = (radius)=> {
//     let area = 3.14 * radius**2;
//     return area;
// }


// const calcArea = (radius) => radius *2

// const area = calcArea (10)
// console.log(area)



// const calcArea = function (radius){
//     let area = 3.14 * radius**2;
//     return area;
// }

// const area = calcArea(5);
// console.log(area);

//// --------- metodo 1

// const greet = function(msg){
//   return msg;
// }

// console.log(greet('hello'))
// console.log(greet('Ola'))


////// ------------------- metodo 2

// const greet = (msg) => msg;


// const result = greet ('hello');
// console.log(result);
// console.log(greet('olá'));




/// -----------------------------

//(products, tax)
//([10,20,30],0.2)

// const bill = function(products, tax){
//     let total =0;
//     for (let i = 0;  i < products.length; i++) {
//         total += products[i] + products[i] * tax
        
//     }
//     return total;
// }


// const result = bill([10,20,30],0.2)
// console.log(result)




//// --------------------------------------

// let name = 'lucas'
// let result = name.toUpperCase();

// console.log(result)


//FUNCAO DENTRO DE FUNCAO

// const myFunc = (callBackFunc) => {
//     let value = 50;
//     callBackFunc(value);
// }

// myFunc(function(value){
//     console.log(value)
// })



//------------------------------------------

// let names = ['Anão','Chorão','Drauzio Varela','Sikera Jr'];

// for (let i = 0; i < names.length; i++) {
//     console.log (names[i]);
// }


// names.forEach(function(name){
//     console.log(name)
// })

// arrow function no FOREACH

// names.forEach(name =>{
//     console.log(name)
// })

//ARROW FUNCTION 

// names.forEach((name, i) =>{
//     console.log(name, i)
// })


// const logName =((name, index) =>{
//         console.log(name, index)
// })

// names.forEach(logName);


// ________________NAAAMEEEES

const ul = document.querySelector('.names')

let html = ``;

let names = ['Anão','Chorão','Drauzio Varela','Sikera Jr'];

names.forEach(name => {
    html += `<li style="color:purple">${name}</li>`
})

ul.innerHTML = html;