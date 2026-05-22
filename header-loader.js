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

// Инициализация функционала шапки (фиксация при скролле)
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

// ===== ИНИЦИАЛИЗАЦИЯ БУРГЕР-МЕНЮ =====
function initBurgerMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            navMenu.classList.toggle('active');
            
            const spans = burgerBtn.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = burgerBtn.querySelectorAll('span');
                if (spans) {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
        
        console.log('Бургер-меню инициализировано');
    } else {
        console.warn('Бургер или меню не найдены, повторная попытка...');
        // Повторяем попытку через 50 мс (DOM может ещё не обновиться)
        setTimeout(initBurgerMenu, 50);
    }
}

// Запуск загрузки
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', 'header.html', () => {
        initHeader();
        initBurgerMenu();
    });
    loadComponent('footer-placeholder', 'footer.html');
});
