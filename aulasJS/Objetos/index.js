
class Retangulo {
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }
    get area() {
        return this.altura * this.largura;
    }
    
}


let retangulo1 = new Retangulo(2,7);
console.log(retangulo1.area);


