
    //Vendas na Harry Ploter
let total = 0
function registrarVenda(){
    let valor = Number(document.getElementById('inputVenda').value)
    // registrar venda no total
    total = total + valor
    // atualizar total na página
    document.getElementById('totalVendido').innerHTML =  
    'Total de vendas: R$' + total.toFixed(2)

    // lista de vendas
    document.getElementById('listaVendas').innerHTML += 'R$' + valor.toFixed(2) + '<br>'
    
    document.getElementById('inputVenda').value = ''
    document.getElementById('inputVenda').focus()


    console.log(valor)
}
//========================================================================
  
    //Bilu e o Contador de Páginas
// 1. Variáveis
let paginasLidas = 0;
const elementoVisor = document.getElementById("visor");
// 2. Função para alterar o valor (somar ou subtrair)
function alterarContador(valor) {
    paginasLidas = paginasLidas + valor;   
// Impede que o número de páginas fique negativo
    if (paginasLidas < 0) {
        paginasLidas = 0;
    }
    
    atualizarTela();
}
// 3. Função para zerar
function zerarContador() {
    paginasLidas = 0;
    atualizarTela();
}
// 4. Função para atualizar o HTML
function atualizarTela() {
    elementoVisor.innerText = paginasLidas;
}
//========================================================================
 
    //Dona Bete e a Rolagem dos Dados
// 1. Variáveis
let pontuacaoTotal = 0;
const elementoResultado = document.getElementById("resultadoDado");
const elementoTotal = document.getElementById("totalAcumulado");

// 2. Novas Variáveis para os Bônus (Memória avançada)
let historicoRolagens = []; // Um vetor (array) vazio para guardar a ordem das rolagens
let contagemDados = {       // Um objeto para guardar quantas vezes cada dado foi rolado
    4: 0,
    6: 0,
    8: 0,
    10: 0,
    12: 0,
    20: 0
};
// 3. Função de rolagem atualizada
function rolarDado(numeroDeLados) {
    let resultado = Math.floor(Math.random() * numeroDeLados) + 1;
    pontuacaoTotal = pontuacaoTotal + resultado;
    
    // Atualiza a tela principal
    elementoResultado.innerText = resultado;
    elementoTotal.innerText = pontuacaoTotal;

    // --- Lógica dos Bônus ---
    
    // A. Salva no histórico (adiciona no final do vetor)
    let textoRolagem = "d" + numeroDeLados + " ➔ Tirou " + resultado;
    historicoRolagens.push(textoRolagem);

    // B. Aumenta a contagem específica daquele dado
    contagemDados[numeroDeLados] = contagemDados[numeroDeLados] + 1;

    // C. Manda atualizar as listas visuais
    atualizarListas();
}
// 4. Função para desenhar as listas na tela
function atualizarListas() {
// Atualizando o Histórico (Laço de Repetição)
    const listaHist = document.getElementById("listaHistorico");
    let conteudoHistorico = ""; // Começa vazio
    
    for (let i = 0; i < historicoRolagens.length; i++) {
        conteudoHistorico = conteudoHistorico + "<li>" + historicoRolagens[i] + "</li>";
    }
    listaHist.innerHTML = conteudoHistorico; // Escreve tudo de uma vez no HTML

// Atualizando a Contagem por Dado
    const listaCont = document.getElementById("listaContagem");
    let conteudoContagem = "";
    
// Vetor com os dados disponíveis para facilitar a leitura
    let tiposDeDados = [4, 6, 8, 10, 12, 20]; 
    
    for (let i = 0; i < tiposDeDados.length; i++) {
        let faces = tiposDeDados[i];
        let quantidade = contagemDados[faces];
        
// Só exibe na lista se o dado já tiver sido rolado pelo menos uma vez
        if (quantidade > 0) {
            conteudoContagem = conteudoContagem + "<li>d" + faces + ": " + quantidade + " vezes</li>";
        }
    }
    listaCont.innerHTML = conteudoContagem;
}

// 5. Função de Reset turbinada
function zerarTotal() {
// Zera os números simples
    pontuacaoTotal = 0;
    elementoResultado.innerText = "0";
    elementoTotal.innerText = "0";
// Zera a memória dos bônus
    historicoRolagens = []; // Esvazia o vetor
    contagemDados = { 4: 0, 6: 0, 8: 0, 10: 0, 12: 0, 20: 0 }; // Reseta as contagens
// Limpa a tela
    document.getElementById("listaHistorico").innerHTML = "";
    document.getElementById("listaContagem").innerHTML = "";
}
//========================================================================

    // 1. O Caixa da Dona Bete e a lista de Dinos
let arrecadacaoTotal = 0;
const listaDinos = [
    'Espinossauro', 'T-Rex', 'Braquiossauro', 'Velocirraptor', 
    'Estegossauro', 'Triceratopo', 'Anquilossauro', 'Parassaurolofo', 
    'Alossauro', 'Carnotauro'
];

// 2. A função principal engatilhada pelos botões
function jogar(dinoEscolhido) {
    // Captura o valor digitado no input
    const inputAposta = document.getElementById('valorAposta');
    const valorAposta = parseFloat(inputAposta.value);

    // Validação de segurança: verifica se o usuário digitou um número válido e maior que zero
    if (isNaN(valorAposta) || valorAposta <= 0) {
        alert("Por favor, insira um valor válido para apostar!");
        return; // Interrompe a função aqui
    }

    // O dinheiro entra no caixa da casa assim que a aposta é feita
    arrecadacaoTotal = arrecadacaoTotal + valorAposta;

    // Sorteia um dino aleatório da lista
    let indiceSorteado = Math.floor(Math.random() * listaDinos.length);
    let dinoSorteado = listaDinos[indiceSorteado];

    // Lógica da Vantagem da Banca (Regra de Ouro da Dona Bete)
    let premio = valorAposta * 2;
    let limitePremioPermitido = arrecadacaoTotal * 0.20; // 20% do caixa

    // Se o jogador deu a sorte de acertar...
    if (dinoEscolhido === dinoSorteado) {
        // ...nós verificamos se o prêmio quebra a banca
        if (premio > limitePremioPermitido) {
            // Se quebrar a banca, a máquina "rouba" invisivelmente.
            // Forçamos um sorteio de um dino diferente do que ele escolheu.
            dinoSorteado = forcarDerrota(dinoEscolhido);
        } else {
            // Se o prêmio for seguro (<= 20%), deixamos ele ganhar e tiramos o dinheiro do caixa
            arrecadacaoTotal = arrecadacaoTotal - premio;
        }
    }

    // Exibe os resultados na tela
    atualizarTela(dinoEscolhido, dinoSorteado, premio);
}

// 3. Função auxiliar para "trapacear"
function forcarDerrota(dinoApostado) {
    let novoDino;
// Fica sorteando até sair um dino que seja diferente do que o jogador escolheu
    do {
        let indiceSorteado = Math.floor(Math.random() * listaDinos.length);
        novoDino = listaDinos[indiceSorteado];
    } while (novoDino === dinoApostado);
    
    return novoDino;
}
// 4. Função para desenhar o resultado
function atualizarTela(escolhido, sorteado, premio) {
    document.getElementById('txtSeuDino').innerText = escolhido;
    document.getElementById('txtDinoSorteado').innerText = sorteado;
    
    const msgFinal = document.getElementById('mensagemFinal');
    
    if (escolhido === sorteado) {
        msgFinal.innerText = `Você ganhou R$ ${premio.toFixed(2)}!`;
        msgFinal.style.color = "#fbbf24"; // Amarelo vitória
    } else {
        msgFinal.innerText = "Você perdeu! O meteoro caiu.";
        msgFinal.style.color = "#ef4444"; // Vermelho derrota
    }

    // Atualiza o visor do desenvolvedor
    document.getElementById('txtCaixa').innerText = arrecadacaoTotal.toFixed(2);
}
//========================================================================
    
    //Oficina Desamassandro
// 1. Variáveis de Caixa da Oficina
let totalGeralRecebido = 0;
let faturamentoSandro = 0;
let repasseCelso = 0;
let faturamentoSeguradoras = 0;

// Variável para contar apenas clientes normais/indicação (para o desafio 1)
let contadorClientes = 0;

// 2. Função Principal
function registrarPagamento() {
    let inputValor = document.getElementById('valorServico').value;
    let valorOriginal = parseFloat(inputValor);
    let tipoCliente = document.getElementById('tipoCliente').value;

    // Validação
    if (isNaN(valorOriginal) || valorOriginal <= 0) {
        alert("Digite um valor válido para o serviço!");
        return;
    }

    let valorCobrado = valorOriginal;
    let mensagemAviso = "";

    // 3. Regra de Negócio: Seguradoras (Desafio 2)
    if (tipoCliente === 'seguradora') {
        // Desconto de 30% (Sobra 70% do valor)
        valorCobrado = valorOriginal * 0.70;
        
        // Vai para o caixa separado e Sandro fica com tudo (Sem comissão pro Celso)
        faturamentoSeguradoras += valorCobrado;
        totalGeralRecebido += valorCobrado;
        
        mensagemAviso = "Desconto de 30% de Seguradora aplicado.";
    } 
    // 4. Regra de Negócio: Balcão e Indicação
    else {
        // Aumenta o número de clientes atendidos
        contadorClientes++;

        // Desafio 1: Desconto de 5% a cada 10 clientes
        // O operador % (módulo) pega o resto da divisão. Se for divisível por 10, o resto é 0.
        if (contadorClientes % 10 === 0) {
            valorCobrado = valorOriginal * 0.95; // 5% de desconto
            mensagemAviso = "Cliente nº " + contadorClientes + "! Ganhou 5% de desconto extra.";
        }

        // Calcula comissão do Seu Celso SE for indicação dele
        if (tipoCliente === 'celso') {
            let comissao = valorCobrado * 0.10; // 10% do que o cliente efetivamente pagou
            repasseCelso += comissao;
            
            // Sandro fica com o restante
            faturamentoSandro += (valorCobrado - comissao);
        } else {
            // Cliente direto: Sandro fica com 100%
            faturamentoSandro += valorCobrado;
        }

        // Adiciona ao caixa geral da oficina
        totalGeralRecebido += valorCobrado;
    }

    // 5. Atualiza a Tela
    document.getElementById('txtTotalRecebido').innerText = "R$ " + totalGeralRecebido.toFixed(2);
    document.getElementById('txtSandro').innerText = "R$ " + faturamentoSandro.toFixed(2);
    document.getElementById('txtCelso').innerText = "R$ " + repasseCelso.toFixed(2);
    document.getElementById('txtSeguradora').innerText = "R$ " + faturamentoSeguradoras.toFixed(2);
    
    document.getElementById('txtContador').innerText = contadorClientes;
    document.getElementById('mensagemDesconto').innerText = mensagemAviso;

    // Limpa o campo para o próximo serviço
    document.getElementById('valorServico').value = '';

//========================================================================

    //Variáveis Gobal e Local
let global = 'Eu sou uma variável global :/'
function funcao1(){
    let local = 'Sou uma variável local :D'
    // let global = 'ME identifico como global'
    console.log(local);
    console.log(global);
}
function funcao2(){
    // let local
    console.log(global);
    // console.log(local);
}

// funcao1()
// funcao2()

let totalAcumulado = 0
const displayTotal = document.getElementById('total-placar');
const displayMsg = document.getElementById('status-msg');
const listaHistorico = document.getElementById('lista-historico');
const btnReset = document.getElementById('btn-reset');
const botoesDados = document.querySelectorAll('.btn-dado')