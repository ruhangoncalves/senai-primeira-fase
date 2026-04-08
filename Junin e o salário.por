programa {
  funcao inicio() {
 //variáveis
 real salarioMensal
 real diasTrabalhados, salarioDiario
 real salarioSemanal

 //lendo dados
 escreva("Valor do salário mensal: ")
 leia(salarioMensal)
 escreva("Quantidade de dias trabalhados: ")
 leia(diasTrabalhados)

 //cálculos
 salarioDiario = salarioMensal / diasTrabalhados
 salarioSemanal = salarioDiario * 5

 //resultado
 escreva("Valor do salário diário: " + salarioDiario)
 escreva("\nValor do salário semanal: " + salarioSemanal)
  }
}
