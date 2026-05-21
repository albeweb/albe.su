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

// Инициализация функционала шапки и меню
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
    
    // Инициализация кнопки МЕНЮ и оверлея
    const menuBtn = document.getElementById('menuBtn');
    const overlay = document.getElementById('myMenuOverlay');
    const closeBtn = document.getElementById('myMenuClose');
    
    if (menuBtn && overlay) {
        // Удаляем старые обработчики через клонирование
        const newMenuBtn = menuBtn.cloneNode(true);
        menuBtn.parentNode.replaceChild(newMenuBtn, menuBtn);
        
        newMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeBtn) {
        const newCloseBtn = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
        
        newCloseBtn.addEventListener('click', function() {
            const ov = document.getElementById('myMenuOverlay');
            if (ov) {
                ov.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
    
    // Закрытие меню по клику на ссылки
    if (overlay) {
        const navLinks = overlay.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                const ov = document.getElementById('myMenuOverlay');
                if (ov) {
                    ov.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
        });
        
        // Закрытие по клику на фон
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const ov = document.getElementById('myMenuOverlay');
            if (ov && ov.style.display === 'flex') {
                ov.style.display = 'none';
                document.body.style.overflow = '';
            }
        }
    });
    
    // ===== СТАРОЕ МЕНЮ (бургер) — скрываем =====
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('navMenu');
    
    if (burgerBtn && mobileMenu) {
        burgerBtn.style.display = 'none';
        mobileMenu.style.display = 'none';
    }
}

// Запуск загрузки
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', 'header.html', initHeader);
    loadComponent('footer-placeholder', 'footer.html');
    loadComponent('menu-placeholder', 'menu.html');  // Загружаем отдельное меню
});
