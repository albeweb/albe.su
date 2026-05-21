// Загрузка шапки и подвала
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
    // Фиксация шапки при скролле
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
    
    // ===== НОВОЕ МЕНЮ (кнопка МЕНЮ) =====
    const menuBtn = document.getElementById('menuBtn');
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    const menuClose = document.getElementById('menuClose');
    
    if (menuBtn && fullscreenMenu) {
        // Удаляем старые обработчики через клонирование
        const newMenuBtn = menuBtn.cloneNode(true);
        menuBtn.parentNode.replaceChild(newMenuBtn, menuBtn);
        
        newMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            fullscreenMenu.style.height = '100%';
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (menuClose) {
        const newMenuClose = menuClose.cloneNode(true);
        menuClose.parentNode.replaceChild(newMenuClose, menuClose);
        
        newMenuClose.addEventListener('click', function() {
            const fm = document.getElementById('fullscreenMenu');
            if (fm) {
                fm.style.height = '0';
                document.body.style.overflow = '';
            }
        });
    }
    
    // Закрытие меню по клику на ссылки
    const navLinks = document.querySelectorAll('.fullscreen-nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const fm = document.getElementById('fullscreenMenu');
            if (fm) {
                fm.style.height = '0';
                document.body.style.overflow = '';
            }
        });
    });
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const fm = document.getElementById('fullscreenMenu');
            if (fm && fm.style.height === '100%') {
                fm.style.height = '0';
                document.body.style.overflow = '';
            }
        }
    });
    
    // ===== СТАРОЕ МЕНЮ (бургер) — оставляем на всякий случай, но скрываем =====
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('navMenu');
    
    if (burgerBtn && mobileMenu) {
        // Скрываем старую кнопку и меню, так как используем новое
        burgerBtn.style.display = 'none';
        mobileMenu.style.display = 'none';
    }
}

// Запуск загрузки
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', 'header.html', initHeader);
    loadComponent('footer-placeholder', 'footer.html');
});
