programa {
  funcao inicio() {
 //variáveis
 real precoPorQuilo = 10
 real precoPorGrama = precoPorQuilo / 1000
 real peso
 real precoTotal 

 //leitura de dados
 escreva("Digite o peso (g): ")
 leia(peso)

 //calculo
 precoTotal = peso * precoPorGrama
 
 //resultado
 escreva("Valor a pagar: R$" + precoTotal)
  }
}
