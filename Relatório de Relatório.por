programa {
  funcao inicio() {
    //criar as variáveis
    inteiro qtdRelatoriosPF, qtdRelatoriosPJ, tempoRelatoriosPJ, tempoRelatoriosPF, mediaRelatoriosPJ, mediaRelatoriosPF, qtdTotal
    real valorTotalPF, valorTotalPJ
    inteiro tempoTotal
    real valorTotal
    real mediaValorPF, mediaValorPJ
    real mediaTempoPF, mediaTempoPJ

    //leitura dos dados
    escreva("Quantidade de relatórios PF: ")
    leia(qtdRelatoriosPF)
    escreva("Quantidad de relatorio PJ: ")
    leia(qtdRelatoriosPJ)
    escreva("Tempo de relatórios PF: ")
    leia(tempoRelatoriosPF)
    escreva("Tempo de relatórios PJ: ")
    leia(tempoRelatoriosPJ)
    escreva("Valor total recebido PF: ")
    leia(valorTotalPF)
    escreva("Valor total recebido PJ: ")
    leia(valorTotalPJ)
    
    //processar/calcular
    qtdTotal = qtdRelatoriosPF + qtdRelatoriosPJ
    tempoTotal = tempoRelatoriosPJ + tempoRelatoriosPF
    valorTotal = valorTotalPJ + valorTotalPJ
    mediaTempoPJ = qtdRelatoriosPJ / tempoRelatoriosPJ
    mediaTempoPF = qtdRelatoriosPF / tempoRelatoriosPF
    mediaValorPJ = valorTotalPJ / qtdRelatoriosPJ
    mediaValorPF = valorTotalPF / qtdRelatoriosPF

    //apresentar os dados
    escreva("Quantidade total de relatórios: " + qtdTotal)
    escreva("\nTempo total de relatórios: " + tempoTotal)
    escreva("\nValor total de relatórios: " + valorTotal)
    escreva("\nMédia de valor PJ: " + mediaValorPJ)
    escreva("\nMédia de valor PF: " + mediaValorPF)
    escreva("\nMédia de tempo PJ: " + mediaTempoPJ)
    escreva("\nMédia de tempo PF: " + mediaTempoPF)

  }
}
