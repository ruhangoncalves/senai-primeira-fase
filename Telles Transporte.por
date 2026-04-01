programa {
  funcao inicio() {
    inteiro peso1 = 20, peso2 = 60, peso3 = 3 
    inteiro distancia1 = 650, distancia2 = 1000, distancia3 = 1200
    real volume1 =1, volume2 = 0.5, volume3 = 0.2
    real valorFrete1, valorFrete2, valorFrete3
    //real valorFrete
    valorFrete1 = 15 + (2*peso1) + (0.05*distancia1) + (10*volume1)
    valorFrete2 = 15 + (2*peso2) + (0.05*distancia2) + (10*volume2)
    valorFrete3 = 15 + (2*peso3) + (0.05*distancia3) + (10*volume3)
    escreva("Tabela de preço Telles Transporte")
    escreva("\nValor do frete 1 = " + valorFrete1)
    escreva("\nValor do frete 2 = " + valorFrete2)
    escreva("\nValor do frete 3 = " + valorFrete3)
 }
}