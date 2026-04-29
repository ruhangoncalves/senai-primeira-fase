
function calcularPrecoBrique(){
//informações
let precoCompra, precoVenda
//leituras
precoCompra = Number(prompt("Preço de compra:"))
//processamento
precoVenda = precoCompra * 3
//saídas
console.log("Preço para venda: R$" + precoVenda.toFixed(2));

document.getElementById("resultado").innerHTML = "Preço de venda: R$" 
+ precoVenda.toFixed(2)
}

function chancePorcentagem(){
//informações
let chance, n
//leitura
n = Number(prompt("Numero de vezes no celular: "))
//calculos
chance = (0.1/(1+500*n)) * 100
//saídas
console.log("Percentual de aprovação: " + chance.toFixed(4))
document.getElementById("chance").innerHTML = "Número de chances" + chance.toFixed(4)

}
