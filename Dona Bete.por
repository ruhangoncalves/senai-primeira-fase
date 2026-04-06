programa {
  funcao inicio() {
  //variáveis
    real faturamento, premios, suborno, comissoes
    real lucro
    //leitura de dados
    escreva("Faturamento diário: ")
    leia(faturamento)
    escreva("Prêmios distribuídos: ")
    leia(premios)
    escreva("Presentes de autoridades: ")
    leia(suborno)
    escreva("Comissões de operadores: ")
    leia(comissoes)
    lucro = faturamento - premios - suborno - comissoes
    escreva("Lucro total diário: " + lucro)
    leia(lucro)
    //calculando as variáveis
    faturamento = premios + suborno + comissoes + lucro
    premios = faturamento - suborno - comissoes
    suborno = faturamento - premios - comissoes
    comissoes = faturamento - premios - suborno
     }
}
