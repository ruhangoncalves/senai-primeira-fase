programa {
  funcao inicio() {
 //Verificando Votação: Peça ao usuário para inserir sua idade e verifique se ele é elegível para votar (idade mínima de 16 anos).


//variável
inteiro idade, idadeElegivel = 16

//leitura de dados
escreva("Digite aqui a sua idade: ")
leia(idade)

//atribuindo
se(idade >= 16){
  escreva("Parabéns, você tem direito ao voto!")
  }senao{
    escreva("Você terá que esperar até completar 16 anos!")
  }
 }
}
