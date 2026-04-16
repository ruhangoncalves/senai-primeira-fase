programa {
  funcao inicio() {
  //variáveis
  real custoMensal, dizimoDiario, quantoFalta

  //lendo dados
  escreva("Custo mensal da igreja: ")
  leia(custoMensal)
  escreva("Dízimo do dia: ")
  leia(dizimoDiario)

  //cálculos
  quantoFalta = custoMensal - dizimoDiario

  //apresentando dados
  escreva("Falta arrecadar: " + quantoFalta)
  leia(quantoFalta)

  }
}
