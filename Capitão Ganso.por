programa {
  funcao inicio() {
//variáveis
real gastosSuprimentos, faturamentoIngressos, faturamentoItens, lucroReais, lucroPercentual
real faturamentoBruto, lucro100

//dados
escreva("Valor gasto em suprimentos: R$")
leia(gastosSuprimentos)
escreva("Faturamento com Ingressos: R$")
leia(faturamentoIngressos)
escreva("Faturamento com Itens: R$")
leia(faturamentoItens)

//cálculo
faturamentoBruto = faturamentoIngressos + faturamentoItens
lucroReais = faturamentoBruto - gastosSuprimentos
lucro100 = lucroReais * 100
lucroPercentual = lucro100 / faturamentoBruto

//resultado
escreva("Lucro obtido: R$" + lucroReais)
escreva("\nLucro Percentua: " + lucroPercentual + "%" )

  }
}
