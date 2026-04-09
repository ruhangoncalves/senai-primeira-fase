programa {
  funcao inicio() {
   //Peça ao usuário que insira a idade de seu cachorro e, em seguida, calcule a idade do cachorro em anos humanos (um ano de cachorro equivale a sete anos humanos). Informe se o doguinho já pode se aposentar por idade 
  
  //variáveis
  real idadeCachorro, idadeHumano
  
  
  //leitura de dados
  escreva("Qual é a idade do seu doguinho?: ")
  leia(idadeCachorro)

   //cálculo
  idadeHumano = idadeCachorro * 7

  //atribuindo
  se(idadeHumano >= 65){
  escreva("Seu doguinho teria: " + idadeHumano )
  escreva("\n anos e já poderia se aposentar se fosse humano")
  }senao{
  escreva("Seu doguinho ainda é um Djovem!")
  }


  }
}
