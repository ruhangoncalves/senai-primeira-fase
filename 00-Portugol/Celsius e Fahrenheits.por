programa {
  funcao inicio() {
   //variáveis
   real celsius, fahrenheit, alerta
   //entrada
   escreva("Temperatura em (C) Célsius: ")
   leia(celsius)
   //processamento
   fahrenheit = (celsius*9/5+32)
   //saída
   escreva("Temperatura em (F)Fahrenheit: " + fahrenheit)
   //lógica de decisão
   se(fahrenheit >= 154.4)
   {escreva("\nAlerta de SUPER CALOR!!")}


  }
}
