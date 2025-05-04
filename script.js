document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const tabUnderline = document.querySelector('.tab-underline');
    
    // Inicializa as abas
    function initTabs() {
        // Mostra a primeira aba por padrão
        showTab(document.querySelector('.tab-btn.ativo'));
    }
    
    // Mostra a aba selecionada
    function showTab(activeButton) {
        // Remove a classe 'ativo' de todos os botões e painéis
        tabButtons.forEach(button => {
            button.classList.remove('ativo');
        });
        
        tabPanes.forEach(pane => {
            pane.classList.remove('ativo');
        });
        
        // Adiciona a classe 'ativo' ao botão clicado
        activeButton.classList.add('ativo');
        
        // Mostra o painel correspondente
        const tabId = activeButton.dataset.tab;
        const activePane = document.getElementById(tabId);
        activePane.classList.add('ativo');
        
        // Atualiza a posição do sublinhado
        updateUnderline(activeButton);
    }
    
    // Atualiza a posição do sublinhado
    function updateUnderline(activeButton) {
        const { offsetLeft, offsetWidth } = activeButton;
        tabUnderline.style.width = `${offsetWidth}px`;
        tabUnderline.style.left = `${offsetLeft}px`;
    }
    
    // Event listeners
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            showTab(this);
        });
        
        // Atualiza o sublinhado quando o mouse passa sobre uma aba não ativa
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('ativo')) {
                updateUnderline(this);
            }
        });
        
        // Volta o sublinhado para a aba ativa quando o mouse sai
        button.addEventListener('mouseleave', function() {
            const activeButton = document.querySelector('.tab-btn.ativo');
            updateUnderline(activeButton);
        });
    });
    
    // Redimensionamento da janela
    window.addEventListener('resize', function() {
        const activeButton = document.querySelector('.tab-btn.ativo');
        updateUnderline(activeButton);
    });
    
    // Inicializa o sistema de abas
    initTabs();
});