// Загрузка компонентов
function loadComponent(elementId, filePath, callback) {
    const placeholder = document.getElementById(elementId);
    if (!placeholder) return;
    
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load ' + filePath);
            return response.text();
        })
        .then(data => {
            placeholder.innerHTML = data;
            if (callback) callback();
        })
        .catch(error => {
            console.error('Ошибка загрузки компонента:', error);
            placeholder.innerHTML = '<div style="padding:20px;text-align:center;">Ошибка загрузки</div>';
        });
}

// Инициализация функционала шапки
function initHeader() {
    const header = document.getElementById('mainHeader');
    if (header) {
        function handleHeaderScroll() {
            if (window.scrollY > 50) {
                if (!header.classList.contains('fixed')) {
                    header.classList.add('fixed');
                    document.body.classList.add('header-fixed');
                }
            } else {
                if (header.classList.contains('fixed')) {
                    header.classList.remove('fixed');
                    document.body.classList.remove('header-fixed');
                }
            }
        }
        window.addEventListener('scroll', handleHeaderScroll);
        handleHeaderScroll();
    }
}

// Запуск загрузки
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', 'header.html', initHeader);
    loadComponent('footer-placeholder', 'footer.html');
});
