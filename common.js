// ===== ТЕХ-ТУЛТИПЫ =====
const techDesc = {
    react: "React — библиотека для интерфейсов. Идеален для SPA, CRM, дашбордов.",
    vue: "Vue — прогрессивный фреймворк. Лёгкий, гибкий, для малых и средних проектов.",
    ts: "TypeScript — типизированный JS. Надёжность, масштабируемость, меньше ошибок.",
    gsap: "GSAP — профессиональная анимация. Плавные переходы, сложные таймлайны.",
    three: "Three.js — 3D в браузере. Впечатляющие сцены, анимация продуктов.",
    node: "Node.js — серверный JS. Быстрые API, чаты, real-time приложения.",
    python: "Python + Django — мощный бэкенд, ML, аналитика, высокие нагрузки.",
    laravel: "Laravel — PHP-фреймворк. Портал, интернет-магазин, CRM.",
    postgres: "PostgreSQL — надёжная СУБД. Целостность данных, сложные запросы.",
    docker: "Docker — контейнеризация. Лёгкое развёртывание, масштабирование.",
    figma: "Figma — дизайн интерфейсов. Прототипы, дизайн-системы, коллаборация.",
    uiux: "UI/UX Research — исследование поведения. Интерфейсы, решающие бизнес-задачи.",
    motion: "Motion Design — анимированные интерфейсы. Вовлечённость, впечатления.",
    "3d": "3D Art — трёхмерная визуализация. Презентации, дополненная реальность.",
    adobe: "Adobe Suite — графика, ретушь, подготовка элементов.",
    audit: "SEO-аудит — анализ ошибок, скорости, дублей, метатегов.",
    metrika: "Метрика/GA4 — сбор данных, вебвизор, цели, e-commerce.",
    cluster: "Кластеризация — группировка запросов. Оптимальная структура страниц.",
    core: "Core Web Vitals — LCP, CLS, FID. Влияют на ранжирование.",
    semrush: "SEMrush / Ahrefs — анализ конкурентов, ключей, ссылок."
};

function initTechTooltips() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tech-tooltip';
    document.body.appendChild(tooltip);
    let timeout = null;
    
    document.querySelectorAll('.tech-item').forEach(el => {
        el.addEventListener('mouseenter', function(e) {
            const tech = this.getAttribute('data-tech');
            const d = techDesc[tech] || "Современная технология";
            tooltip.innerHTML = '<strong>' + this.innerText + '</strong><br>' + d;
            tooltip.style.opacity = '1';
            const r = this.getBoundingClientRect();
            let left = r.right + 15;
            let top = r.top + r.height / 2 - 50;
            if (left + 380 > window.innerWidth) left = r.left - 390;
            if (top < 10) top = 10;
            if (top + 150 > window.innerHeight) top = window.innerHeight - 160;
            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
            if (timeout) clearTimeout(timeout);
        });
        el.addEventListener('mouseleave', function() {
            timeout = setTimeout(function() { tooltip.style.opacity = '0'; }, 150);
        });
    });
}

// ===== КАЛЬКУЛЯТОР =====
const rate = 2000;
const sh = { design: 20, front: 30, back: 40, seo: 15, cms: 25, crm: 60, ai: 90, mobile: 120, support: 8 };
const cm = { simple: 1, medium: 1.5, high: 2.2, enterprise: 3.5 };
let selected = new Set();
let complexity = "simple";

function getRec(serv) {
    let rec = [], exp = "";
    if (serv.has('front') || serv.has('design')) {
        rec.push("React / Next.js, TypeScript, Tailwind");
        exp += "<strong>React:</strong> SEO-рендеринг, UX. TypeScript — надёжность. Tailwind — быстрая вёрстка.<br>";
    }
    if (serv.has('back')) {
        rec.push("Node.js / Python + PostgreSQL");
        exp += "<strong>Node.js/Python:</strong> масштабируемый бэкенд, готовая архитектура.<br>";
    }
    if (serv.has('crm')) exp += "<strong>CRM/ERP:</strong> автоматизация, 1С, единая база.<br>";
    if (serv.has('ai')) exp += "<strong>AI/ML:</strong> нейросети, прогнозирование, персонализация.<br>";
    if (serv.has('mobile')) exp += "<strong>React Native/Flutter:</strong> кроссплатформа, экономия бюджета.<br>";
    if (rec.length === 0) rec.push("React + Node.js / Laravel");
    let compText = "";
    if (complexity === 'high' || complexity === 'enterprise') compText = "<br><br><strong>Enterprise:</strong> микросервисы, Docker, Kubernetes, Redis.";
    return { rec: rec.join(". "), exp: exp + compText };
}

function updateCalculator() {
    let h = 0;
    for (let s of selected) h += sh[s];
    let fin = Math.round(h * cm[complexity]);
    let cost = fin * rate;
    let servList = Array.from(selected).map(function(s) {
        var names = { design: "Дизайн", front: "Frontend", back: "Backend", seo: "SEO", cms: "CMS", crm: "CRM", ai: "AI", mobile: "Мобильное", support: "Поддержка" };
        return names[s];
    }).join(", ");
    if (servList === "") servList = "—";
    
    var priceEl = document.getElementById('calcPrice');
    var hoursEl = document.getElementById('calcHoursInfo');
    if (priceEl) priceEl.innerHTML = cost.toLocaleString() + ' ₽';
    if (hoursEl) hoursEl.innerHTML = '✔ Услуги: ' + servList + '<br>✔ Сложность: ' + (complexity === 'simple' ? 'Старт' : complexity === 'medium' ? 'Бизнес' : complexity === 'high' ? 'Премиум' : 'Enterprise') + '<br>✔ Часы: ' + h + ' ч × ' + cm[complexity] + ' = ' + fin + ' ч.';
    
    var rec = getRec(selected);
    var phases = [
        { n: "Аналитика и прототип", b: 10, m: 1.2 },
        { n: "Дизайн", b: selected.has('design') ? 20 : 0, m: 1 },
        { n: "Frontend", b: selected.has('front') ? 30 : 0, m: 1 },
        { n: "Backend", b: selected.has('back') ? 40 : 0, m: 1 },
        { n: "SEO", b: selected.has('seo') ? 15 : 0, m: 1 },
        { n: "CMS", b: selected.has('cms') ? 25 : 0, m: 1 },
        { n: "CRM/ERP", b: selected.has('crm') ? 60 : 0, m: 1 },
        { n: "AI/ML", b: selected.has('ai') ? 90 : 0, m: 1 },
        { n: "Мобильное", b: selected.has('mobile') ? 120 : 0, m: 1 },
        { n: "Поддержка", b: selected.has('support') ? 8 : 0, m: 1 },
        { n: "Тестирование", b: 15, m: 1.3 },
        { n: "Деплой", b: 8, m: 1.1 }
    ];
    var br = [], tot = 0;
    for (var i = 0; i < phases.length; i++) {
        var p = phases[i];
        if (p.b > 0) {
            var hh = Math.round(p.b * p.m * cm[complexity]);
            br.push({ name: p.n, h: hh });
            tot += hh;
        }
    }
    if (tot < fin && fin - tot > 5) br.push({ name: "Управление проектом", h: fin - tot });
    else if (tot > fin && br.length) {
        br[0].h -= tot - fin;
        if (br[0].h < 0) br[0].h = 0;
    }
    br = br.filter(function(b) { return b.h > 0; });
    var timeHtml = '<div class="time-breakdown"><h4>Распределение ' + fin + ' часов:</h4>';
    for (var i = 0; i < br.length; i++) {
        timeHtml += '<div class="time-breakdown-item"><span>' + br[i].name + '</span><span>' + br[i].h + ' ч</span></div>';
    }
    timeHtml += '</div>';
    
    var stackEl = document.getElementById('stackExplanation');
    if (stackEl) {
        if (h === 0) {
            stackEl.innerHTML = '<h4>Рекомендуемый стек</h4><p>Выберите услуги для расчёта</p>';
        } else {
            stackEl.innerHTML = '<h4>Рекомендуемый стек</h4><p><strong>' + rec.rec + '</strong></p><h4>Преимущества</h4><p>' + rec.exp + '</p>' + timeHtml + '<p style="margin-top:12px; font-size:0.85rem;">Выбор технологий основан на потребностях вашего проекта.</p>';
        }
    }
}

function initCalculator() {
    var serviceOptions = document.querySelectorAll('#calcServices .calc-option');
    for (var i = 0; i < serviceOptions.length; i++) {
        var o = serviceOptions[i];
        o.addEventListener('click', function() {
            var s = this.getAttribute('data-service');
            if (selected.has(s)) {
                selected.delete(s);
                this.classList.remove('selected');
            } else {
                selected.add(s);
                this.classList.add('selected');
            }
            updateCalculator();
        });
    }
    
    var complexityOptions = document.querySelectorAll('#calcComplexity .calc-option');
    for (var i = 0; i < complexityOptions.length; i++) {
        var o = complexityOptions[i];
        o.addEventListener('click', function() {
            complexity = this.getAttribute('data-complex');
            var allOptions = document.querySelectorAll('#calcComplexity .calc-option');
            for (var j = 0; j < allOptions.length; j++) {
                allOptions[j].classList.remove('selected');
            }
            this.classList.add('selected');
            updateCalculator();
        });
    }
    
    var defaultComplexity = document.querySelector('#calcComplexity .calc-option[data-complex="simple"]');
    if (defaultComplexity) defaultComplexity.classList.add('selected');
    updateCalculator();
}

// ===== ПЛАВНЫЙ СКРОЛЛ =====
function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
        var a = links[i];
        a.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href === "#" || href === "") return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// ===== FAQ — ИСПРАВЛЕННАЯ ВЕРСИЯ (ЗАКРЫВАЕТ ВСЕ ПРИ ЗАГРУЗКЕ) =====
function initFaq() {
    // Принудительно закрываем все вопросы при загрузке
    var allAnswers = document.querySelectorAll('.faq-answer');
    for (var i = 0; i < allAnswers.length; i++) {
        allAnswers[i].classList.remove('active');
    }
    var allQuestions = document.querySelectorAll('.faq-question');
    for (var i = 0; i < allQuestions.length; i++) {
        allQuestions[i].classList.remove('active');
    }
    
    // Ищем контейнер с вопросами
    var faqGrid = document.querySelector('.faq-grid');
    if (!faqGrid) return;
    
    // Используем делегирование — один обработчик на весь блок
    faqGrid.addEventListener('click', function(e) {
        // Находим кнопку вопроса
        var button = e.target.closest('.faq-question');
        if (!button) return;
        
        e.preventDefault();
        
        // Находим родительский .faq-item и ответ внутри него
        var item = button.closest('.faq-item');
        if (!item) return;
        
        var answer = item.querySelector('.faq-answer');
        if (!answer) return;
        
        var isActive = answer.classList.contains('active');
        
        // Закрываем все ответы
        var allAnswers = document.querySelectorAll('.faq-answer');
        for (var i = 0; i < allAnswers.length; i++) {
            allAnswers[i].classList.remove('active');
        }
        var allButtons = document.querySelectorAll('.faq-question');
        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove('active');
        }
        
        // Открываем текущий, если он не был открыт
        if (!isActive) {
            answer.classList.add('active');
            button.classList.add('active');
        }
    });
}

// ===== ФОРМА =====
function initForm() {
    var form = document.getElementById('mainForm');
    var stat = document.getElementById('formStatus');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('userName') ? document.getElementById('userName').value.trim() : '';
            var phone = document.getElementById('userPhone') ? document.getElementById('userPhone').value.trim() : '';
            var email = document.getElementById('userEmail') ? document.getElementById('userEmail').value.trim() : '';
            var telegram = document.getElementById('userTelegram') ? document.getElementById('userTelegram').value.trim() : '';
            var msg = document.getElementById('userMsg') ? document.getElementById('userMsg').value.trim() : '';
            var comment = document.getElementById('userComment') ? document.getElementById('userComment').value.trim() : '';
            
            if (!name || !phone || !email) {
                if (stat) stat.innerHTML = '<div style="background:#990000; padding:12px; border-radius:8px;">Заполните все обязательные поля (Имя, Телефон, Email)</div>';
                setTimeout(function() { if (stat) stat.innerHTML = ''; }, 4000);
                return;
            }
            
            console.log('Заявка:', { name, phone, email, telegram, msg, comment });
            
            if (stat) stat.innerHTML = '<div style="background:#F5B700; color:#0D1117; padding:12px; border-radius:8px;">Спасибо! Менеджер свяжется с вами в ближайшее время.</div>';
            form.reset();
            setTimeout(function() { if (stat) stat.innerHTML = ''; }, 5000);
        });
    }
}

// ===== КНОПКА НАВЕРХ =====
function initToTop() {
    var toTop = document.getElementById('toTopBtn');
    if (!toTop) return;
    window.addEventListener('scroll', function() {
        toTop.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
    toTop.style.display = 'none';
    toTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== ФИКСАЦИЯ ШАПКИ =====
function initHeaderFixed() {
    var header = document.getElementById('mainHeader');
    if (!header) return;
    
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

// ===== МОБИЛЬНОЕ МЕНЮ =====
function initMobileMenu() {
    var burgerBtn = document.getElementById('burgerBtn');
    var mobileMenu = document.getElementById('navMenu');
    
    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            var spans = burgerBtn.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        var navLinks = document.querySelectorAll('.nav-link');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                var spans = burgerBtn.querySelectorAll('span');
                if (spans) {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        }
    }
}

// ===== СХЕМА =====
function addSchema() {
    var schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfessionalService",
                "name": "ALBE digital",
                "url": "https://albe.su/",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Москва, Россия",
                    "streetAddress": "Цветной бульвар"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+79959870353",
                    "contactType": "sales",
                    "availableLanguage": "Russian"
                },
                "sameAs": ["https://t.me/albe_web"],
                "priceRange": "от 120 000 ₽"
            },
            {
                "@type": "WebSite",
                "url": "https://albe.su/",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://albe.su/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            }
        ]
    };
    var sc = document.createElement('script');
    sc.type = 'application/ld+json';
    sc.textContent = JSON.stringify(schema);
    document.head.appendChild(sc);
    
    // FAQ Schema
    var faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        var faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": []
        };
        for (var i = 0; i < faqItems.length; i++) {
            var question = faqItems[i].querySelector('.faq-question');
            var answer = faqItems[i].querySelector('.faq-answer');
            if (question && answer) {
                faqSchema.mainEntity.push({
                    "@type": "Question",
                    "name": question.innerText.replace('+', '').replace('−', '').trim(),
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": answer.innerText.trim()
                    }
                });
            }
        }
        if (faqSchema.mainEntity.length > 0) {
            var faqSc = document.createElement('script');
            faqSc.type = 'application/ld+json';
            faqSc.textContent = JSON.stringify(faqSchema);
            document.head.appendChild(faqSc);
        }
    }
}

// ===== ЗАПУСК ВСЕХ ИНИЦИАЛИЗАЦИЙ =====
document.addEventListener('DOMContentLoaded', function() {
    initTechTooltips();
    initCalculator();
    initSmoothScroll();
    initFaq();
    initForm();
    initToTop();
    initHeaderFixed();
    initMobileMenu();
    addSchema();
});
