
// veiculo = {
//     modelo: ['Opala','Golf','Ka'],
//     marca: ['GM','VolksWagen','Ford'],
//     placa : ['POG1994','POG1995','POG1996'],
//     ano : [1992,2001,2003]

// }


class Veiculo {
    contructor(modelo, placa, marca, ano) {
        this.modelo = modelo;
        this.placa = placa;
        this.marca = marca;
        this.ano = ano;
    }
}

console.log(apresentarMenu())
function apresentarMenu() {
    return window.prompt(`
(1) - Cadastrar automóvel;
(2) - Pesquisar automóvel;
(3) - Excluir automóvel;
(4) - Alterar automóvel;
(0) - Sair;`)
}


let cadastroAutomovel = [];


function executarSistema(){
    switch (apresentarMenu){ 
        case '1':{
            if (Veiculo == 1){

            }
        }
    
        executarSistema()
        case '2':
    
        executarSistema()
            
        case '3':
            
    
        executarSistema()
        case '4':
            
    
        executarSistema()
        case '0':
            
    
            break;
        }
    }
