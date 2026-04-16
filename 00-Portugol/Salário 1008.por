programa {
  funcao inicio() {
  //variáveis
  inteiro id, horasTrabalhadas
  real valorHora, salario

  //leitura de dados
  escreva("Id do funcionário: ")
  leia(id)
  escreva("Quantidade de horas trabalhadas: ")
  leia(horasTrabalhadas)
  escreva("Valor da hora trabalhada: ")
  leia(valorHora)

//cálculo
salario = valorHora * horasTrabalhadas

//resultado
escreva("Number = " + id)
escreva("\nSalary = " + salario)

  }
}
