programa {
  funcao inicio() {
   //variável
   real peso, altura, imc
   //coleta de dados
   escreva("Digite seu peso (kg): ")
   leia(peso)
   escreva("Digite sua altura(m): ")
   leia(altura)
   //cálculo
   imc = peso / (altura*altura)
   escreva("Seu Indice de Massa Corporal (IMC) é de: " + imc)
   se(imc < 25)
   {escreva("\nSeu IMC é menor que 25")}
   senao
   {escreva("\nSeu IMC maior que 25")}
  }
}
