// A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
// valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
// parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
// parcelamento for em 5 vezes, o acréscimo será de 20%. 


//usuario
let valorProduto = 33;
numeroParcela = 3;

//padrao do sistema

let parcelas = [3,5]
let acrescimo = [0.1,0,2]

let valorFinal;


for (let index = 0; index < parcelas.length; index++) {
    if(numeroParcela == parcelas[index]){
        produtoAcrescimo == acrescimo[index] * valorProduto 
        valorFinal = acrescimo + valorProduto;
        break;
    } else {
        console.log('Parcela diferente da selecionada')
    }
    
}


console.log('Valor do produto com acrescimo: ' + valorFinal);