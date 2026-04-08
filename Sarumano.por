programa {
  funcao inicio() {
   //variáveis
   inteiro numeroDeShows, bombasPorShow = 7, numeroDeBombas
   real precoPorBomba = 10.00, precoTotalBombas

   //leitura de dados
   escreva("Quantidade de shows marcados: ")
   leia(numeroDeShows)

   //cálculo
   numeroDeBombas = numeroDeShows * bombasPorShow
   precoTotalBombas = numeroDeBombas * precoPorBomba

   //resultado
   escreva("\nNumero total de bombas: " + numeroDeBombas)
   escreva("\nValor a ser investido em bombas: R$" + precoTotalBombas)

  }
}
