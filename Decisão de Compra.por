programa {
  funcao inicio() {
  //Peça ao usuário para inserir o preço de um item e seu saldo. Em seguida, determine se eles podem comprar o item ou não
  //variáveis
  real precoItem, saldo

  //leitura de dados
  escreva("Valor do item: R$")
  leia(precoItem)
  escreva("Saldo disponínel: R$")
  leia(saldo)

  //atribuindo
  se(precoItem < saldo){
    escreva("Compra finalizada, obrigado!") 
  }senao{
    escreva("\nSaldo insuficiente:")

  }
  }
}
