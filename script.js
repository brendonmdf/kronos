// Função para calcular lavagem de dinheiro e aplicar animações
function calcularLavagem() {
    const valor = parseFloat(document.getElementById("valor").value.replace('R$', '').replace(',', '.'));
    const desconto = parseFloat(document.getElementById("categoria").value);

    if (isNaN(valor) || valor <= 0) {
        document.getElementById("resultado").innerHTML = 
            "Por favor, insira um valor válido.";
        return;
    }

    const valorDesconto = Math.floor((valor * desconto) / 100); // Valor arredondado
    const valorFinal = Math.floor(valor - valorDesconto); // Valor arredondado

    // Formatar valores com separadores de milhares, sem decimais
    const valorDescontoFormatado = valorDesconto.toLocaleString('pt-BR');
    const valorFinalFormatado = valorFinal.toLocaleString('pt-BR');

    // Exibir os resultados no HTML
    const resultado = ` 
        <p>Desconto (${desconto}%): R$ ${valorDescontoFormatado}</p>
        <p>Valor final após lavagem: R$ ${valorFinalFormatado}</p>
    `;
    
    document.getElementById("resultado").innerHTML = resultado;

    // Reinicia animação da cédula de dinheiro
    let moneyElement = document.getElementById('moneyAnimation');
    moneyElement.style.animation = 'none'; // Reset da animação
    setTimeout(() => {
        moneyElement.style.animation = 'moneyFly 2s ease-out infinite'; // Reinicia animação
    }, 50);

    // Aplica animação de fade-in no resultado
    const result = document.getElementById("resultado");
    result.style.animation = 'none';
    setTimeout(() => {
        result.style.animation = 'fadeIn 1s forwards';
    }, 50);
}

// Função para alternar entre o modo claro e escuro
function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');

    // Alternar a classe de modo
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
}
// Função para alternar entre o modo claro e escuro
function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        localStorage.setItem('mode', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        localStorage.setItem('mode', 'dark');
    }
}

// Ao carregar a página, verificar a preferência do usuário
window.onload = () => {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('modeIcon').classList.add('fa-moon');
    } else {
        document.body.classList.add('light-mode');
        document.getElementById('modeIcon').classList.add('fa-sun');
    }
};
// Função para alternar entre o modo claro e escuro
function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        localStorage.setItem('mode', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        localStorage.setItem('mode', 'dark');
    }
}

// Ao carregar a página, verificar a preferência do usuário
window.onload = () => {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('modeIcon').classList.add('fa-moon');
    } else {
        document.body.classList.add('light-mode');
        document.getElementById('modeIcon').classList.add('fa-sun');
    }
};
// Mostrar indicador de carregamento
function showLoading() {
    document.getElementById("loading").style.display = "block";
}

// Ocultar indicador de carregamento
function hideLoading() {
    document.getElementById("loading").style.display = "none";
}

// No cálculo, adicionar o loading
showLoading();
// Seu cálculo aqui...
hideLoading();

// Função para calcular o pagamento do membro baseado no valor ganho pelo farming (30% ou 25%)
function calcularFarming() {
    const farmingValor = parseFloat(document.getElementById("farmingValor").value.replace('R$', '').replace(',', '.'));
    const tipoPagamento = parseFloat(document.getElementById("tipoPagamento").value); // Obtém o tipo de pagamento (30 ou 25)

    if (isNaN(farmingValor) || farmingValor <= 0) {
        document.getElementById("resultadoFarming").innerHTML = "Por favor, insira um valor válido.";
        return;
    }

    // Calculando o valor do pagamento com base no tipo de pagamento
    const valorPagamento = Math.floor((farmingValor * tipoPagamento) / 100); 

    // Formatar valores com separadores de milhares, sem decimais
    const valorPagamentoFormatado = valorPagamento.toLocaleString('pt-BR');

    // Exibir os resultados no HTML
    const resultado = ` 
        <p>Pagamento para o Membro (${tipoPagamento}%): R$ ${valorPagamentoFormatado}</p>
    `;
    
    document.getElementById("resultadoFarming").innerHTML = resultado;

    // Reinicia animação da cédula de dinheiro
    let moneyElement = document.getElementById('moneyAnimation');
    moneyElement.style.animation = 'none'; // Reset da animação
    setTimeout(() => {
        moneyElement.style.animation = 'moneyFly 2s ease-out infinite'; // Reinicia animação
    }, 50);

    // Aplica animação de fade-in no resultado
    const result = document.getElementById("resultadoFarming");
    result.style.animation = 'none';
    setTimeout(() => {
        result.style.animation = 'fadeIn 1s forwards';
    }, 50);
}

