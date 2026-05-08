let resultado = document.getElementById("resultado")

function cltEpj(){
    //informações
    let clt, estagiarios, pj, totalEsperado
    //entrada
    clt = Number(prompt("Número de Clts: "))
    estagiarios = Number(prompt("Número de estagiários: "))
    pj = Number(prompt("Número de PJs: "))
    //processamento
    totalEsperado = clt + estagiarios + pj
    //saída
    console.log("Total de Devs na empresa: " + totalEsperado)
    if(clt >= totalEsperado*0.50){
        resultado.innerHTML += "<br>" + "Total de Devs " + totalEsperado
    }else{resultado.innerHTML +="<br>" + ""

    }


}
//========================================================================
function verificarMeta(){
//informações
let totalBruto, premiacoes, presentes, comissoes, lucro
let meta 
//entrada
totalBruto = Number(prompt("Total Bruto: "))
premiacoes = Number(prompt("Premiações: "))
presentes = Number(prompt("Presentes: "))
comissoes = Number(prompt("Comissões: "))
meta = Number(prompt("Meta diária: "))
//processamento
lucro = totalBruto - premiacoes - presentes - comissoes
let mensagem = ''
//saída
console.log("Lucro do dia: R$ " + lucro.toFixed(2))
resultado.innerHTML = "Lucro de Hoje: R$" + lucro.toFixed(2).replace('.',',')
 //meta batida
if(lucro >= meta){mensagem = "Batemos a meta, lucro de R$" + lucro.toFixed(2).replace('.',',')}
 //sem meta mas com lucro 
else if(lucro > 0)
{mensagem = "Não batemos a meta mas o lucro foi de R$" + lucro.toFixed(2).replace('.',',')}
 //sem meta e prejuízo  
else
{let prejuizo = lucro * -1
mensagem = "Hoje foi só preju " + prejuizo.toFixed(2).replace('.',',')
}
console.log(mensagem);
resultado.innerHTML += '<br>'+mensagem
}
//========================================================================
function calcularParImpar(){
    //informações
    let n  = Number(prompt("Digite o número aí jovem: "))
    //entrada
    //processamento
    if(n%2 == 0 )
    {alert("Par")}
    else
    {alert("Ímpar")}
    //saídas
}
//========================================================================
function mostrarDiaDaSemana(){
    //informações
    let numero, dia 
    //entrada
    numero = Number(prompt("Digite o número: "))
    //processamento
    if(numero == 1)
    {dia = "Domingo"}
    else if(numero == 2)
    {dia = "Segunda"}
    else if(numero == 3)
    {dia = "Terça"}
    else if(numero == 4)
    {dia = "Quarta"}
    else if(numero == 5)
    {dia = "Quinta"}
    else if(numero == 6)
    {dia = "Sexta"}
    else if(numero == 7)
    {dia = "Sábado"}
    else
    { dia = "Erro #404, dia não encontrado."}
    //saídas
resultado.innerHTML = 'Dia escolhido: ' + dia 
}
//========================================================================
function adivinharNumero(){
    // let numero = Math.round(Math.random()*10)// 0..10
    // let numero = Math.floor(Math.random()*10) // 0..9
    let numero = Math.ceil(Math.random()*3) // 1..10
    // let numero = Math.random()
    // console.log(numero);
    // numero = numero * 10
    // console.log(numero);
    // numero = Math.ceil(numero)
    // console.log(numero);

    let chute = Number(prompt("Chuta aí:"))
    if(chute == numero)
    {resposta.innerHTML = "Acertou!"}
    else
    {resposta.innerHTML = "ERROU!"}
}
//========================================================================
function calcularPrecoBrique(){
//informações
let precoCompra, precoVenda
//entradas
precoCompra = Number(prompt("Preço de compra:"))
//processamento
precoVenda = precoCompra * 3
//saídas
console.log("Preço para venda: R$" + precoVenda.toFixed(2));
resultado.innerHTML = "Preço de venda: R$" 
+ precoVenda.toFixed(2)
}
//========================================================================
function chancePorcentagem(){
//informações
let chance, n
//leitura
n = Number(prompt("Numero de vezes no celular: "))
//calculos
chance = (0.1/(1+500*n)) * 100
//saídas
console.log("Percentual de aprovação: " + chance.toFixed(4))
resultado.innerHTML = "Número de chances" + chance.toFixed(4)
}
//========================================================================
function verificarIdade(){
//informações
let idade 
//entradas
idade = Number(prompt("Digite sua idade"))
//processamentos
//saídas
if (idade>= 18)
    {resultado.innerHTML = "Você é maior de idade"}
    else
    {resultado.innerHTML = "Você é menor de idade"
}
}
//========================================================================
function decisaoDeCompra(){
//informações
let precoItem, saldo
//entrada
precoItem = Number(prompt("Digite o preço do item"))
saldo = Number(prompt("Digite o seu saldo"))
//procesamento
//saídas
   if(precoItem> saldo)
    {resultado.innerHTML = "Você não tem saldo suficiente"}
    else
    {resultado.innerHTML = "Você comprou o item"}
}
//========================================================================
function idadeDoCachorro(){
//informações
let idadeCachorro, idadeHumano
//entrada
idadeCachorro = Number(prompt("Digite a idade do Cachorro"))
//precessamento
idadeHumano = (idadeCachorro * 7)
//saídas
console.log("A idade do seu cachorro em idade humana é: " + idadeHumano)
resultado.innerHTML = "A idade do seu cachorro em idade humana é: " + idadeHumano
   if (idadeCachorro>= 65){
    resultado.innerHTML += "<br>Seu cachorro pode se aposentar"
    }else{
    resultado.innerHTML += "<br>Seu cachorro ainda é jovem"}     
}