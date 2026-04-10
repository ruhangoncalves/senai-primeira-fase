programa {
  funcao inicio() {
  //variáveis
  real precoTotal, custoDenis = 500, valorHora = 350, lucro
  inteiro horas
  //leitura de dados
  escreva("Quantas horas foram estimadas? ")
  leia(horas)
  //cálculos
   //precoTotal = 500 + horas * 350
   precoTotal = custoDenis + horas * valorHora
   lucro = precoTotal - custoDenis
   //resultados
   escreva("Valor a cobrar: R$" + precoTotal)
   escreva("\nLucro por freela: R$" + lucro)
   

  }
}
