programa {
  funcao inicio() {

//variáveis
inteiro qtdInicial
inteiro qtdFinal
inteiro qtdTotal

//dados
escreva("Laranjas início do dia: ")
leia(qtdInicial)
escreva("Laranjas final do dia: ")
leia(qtdFinal)

//calculando
qtdTotal = qtdInicial - qtdFinal
qtdInicial = qtdFinal + qtdTotal
qtdFinal = qtdFinal / qtdTotal

//apresentando dados
escreva("Laranjas vendias no dia: " + qtdTotal)
leia(qtdTotal)

 }
}
