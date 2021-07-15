// A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
// valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
// parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
// parcelamento for em 5 vezes, o acréscimo será de 20%. 


let preco = Number (prompt("Digite o valor do seu produto: "));
let parcelas = Number (prompt("Digite o valor de suas parcelas: "));

if (parcelas == 1){
    valorPrestacao = preco;  //condição a vista
}
else if (parcelas == 3){
    valorPrestacao = preco + preco *(0.1);
}

else if (parcelas ==5){
    valorPrestacao = preco + preco * (0.2);
}
else {
    alert("Valor de parcela indisponível, favor colocar um valor válido")
}

alert (valorPrestacao);