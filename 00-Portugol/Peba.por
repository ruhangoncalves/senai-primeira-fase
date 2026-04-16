programa {
  funcao inicio() {
  //variáveis 
  inteiro pontosVitoria = 3, totalVitorias
  inteiro pontosEmpate = 1, totalEmpates
  inteiro pontosSomados

  //leitura de dados
  escreva("Número de vitórias: ")
  leia(totalVitorias)
  escreva("Número de empates: ")
  leia(totalEmpates)

  //cálculos
pontosVitoria = 3 * totalVitorias
pontosEmpate = 1 * totalEmpates 
pontosSomados = pontosVitoria + pontosEmpate

//resultado
escreva("Número total de pontos: " + pontosSomados)
  }
}
