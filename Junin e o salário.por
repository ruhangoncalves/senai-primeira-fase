programa {
  funcao inicio() {
 //variáveis
 real salarioMensal
 real diasTrabalhados, salarioDiario

 //lendo dados
 escreva("Valor do salário mensal: ")
 leia(salarioMensal)
 escreva("Quantidade de dias trabalhados: ")
 leia(diasTrabalhados)

 //cálculos
 salarioDiario = salarioMensal / diasTrabalhados

 //apresentando dados
 escreva("Valor do salário diário: " + salarioDiario)
 leia(salarioDiario)
  }
}
