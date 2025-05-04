document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const tabUnderline = document.querySelector('.tab-underline');
    
    function initTabs() {
        showTab(document.querySelector('.tab-btn.ativo'));
    }
    
    function showTab(activeButton) {
        tabButtons.forEach(button => {
            button.classList.remove('ativo');
        });
        
        tabPanes.forEach(pane => {
            pane.classList.remove('ativo');
        });
        activeButton.classList.add('ativo');
        const tabId = activeButton.dataset.tab;
        const activePane = document.getElementById(tabId);
        activePane.classList.add('ativo');
        updateUnderline(activeButton);
    }
    
    function updateUnderline(activeButton) {
        const { offsetLeft, offsetWidth } = activeButton;
        tabUnderline.style.width = `${offsetWidth}px`;
        tabUnderline.style.left = `${offsetLeft}px`;
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            showTab(this);
        });
        
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('ativo')) {
                updateUnderline(this);
            }
        });
        
        button.addEventListener('mouseleave', function() {
            const activeButton = document.querySelector('.tab-btn.ativo');
            updateUnderline(activeButton);
        });
    });
    
    window.addEventListener('resize', function() {
        const activeButton = document.querySelector('.tab-btn.ativo');
        updateUnderline(activeButton);
    });
    
    initTabs();
});