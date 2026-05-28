// ============================================
// ОПИСАНИЯ ТЕХНОЛОГИЙ ДЛЯ ТУЛТИПОВ
// ============================================
const techDesc = {
    react: "react / next.js — библиотека для создания пользовательских интерфейсов. next.js добавляет серверный рендеринг (ssr) и генерацию статических сайтов (ssg), что улучшает seo и скорость загрузки.",
    ts: "typescript — типизированный javascript. позволяет находить ошибки на этапе разработки, улучшает читаемость кода и упрощает поддержку крупных проектов.",
    redux: "redux / rtk — управление состоянием приложения. redux toolkit упрощает настройку хранилища, уменьшает количество шаблонного кода и интегрируется с react.",
    ssr: "ssr / ssg — серверный рендеринг и статическая генерация. ssr отдаёт готовый html с сервера, ускоряя первую загрузку. ssg генерирует статические файлы на этапе сборки.",
    css: "css3 / sass / tailwind — современные технологии стилизации. sass добавляет переменные и миксины. tailwind — утилитарный css-фреймворк для быстрой вёрстки.",
    node: "node.js / nest.js — серверный javascript. node.js — асинхронная событийно-ориентированная платформа. nest.js добавляет модульную архитектуру, похожую на angular.",
    python: "python / django — высокоуровневый язык для бэкенда и ai. django предоставляет встроенную админ-панель, orm и систему аутентификации.",
    cpp: "c++ — язык для высокопроизводительных систем. используется в финансах, игровой индустрии, embedded-системах и высоконагруженных сервисах.",
    postgres: "postgresql / ms sql — мощные реляционные субд. поддерживают сложные запросы, транзакции, хранимые процедуры и репликацию.",
    redis: "redis / elasticsearch — redis для кэширования и очередей сообщений, elasticsearch для полнотекстового поиска и аналитики логов.",
    rabbitmq: "rabbitmq / kafka — брокеры сообщений. rabbitmq для маршрутизации и надёжной доставки, kafka для потоковой обработки больших данных.",
    kubernetes: "kubernetes — оркестрация контейнеров. автоматизирует развертывание, масштабирование и управление контейнеризированными приложениями.",
    docker: "docker — контейнеризация приложений. упаковывает приложение со всеми зависимостями в контейнер, который работает одинаково в любой среде.",
    yandex: "yandex cloud / selectel — российские облачные провайдеры. предоставляют виртуальные машины, объектное хранение, managed базы данных и kubernetes.",
    gitlab: "gitlab ci/cd — встроенная система непрерывной интеграции и доставки. автоматическая сборка, тестирование и деплой кода при каждом коммите.",
    terraform: "terraform / ansible — infrastructure as code. terraform для создания и версионирования инфраструктуры, ansible для настройки серверов.",
    jenkins: "jenkins / argocd — ci/cd инструменты. jenkins — гибкий сервер автоматизации сборки. argocd — gitops инструмент для kubernetes.",
    reactnative: "react native / expo — кроссплатформенная разработка мобильных приложений. один код на javascript для ios и android. expo упрощает запуск и тестирование.",
    swift: "swift / objective c — языки разработки для ios/macos. swift — современный, безопасный и выразительный язык от apple. objective c — для поддержки легаси кода.",
    kotlin: "kotlin / java — языки для android. kotlin — официальный язык от google, более лаконичный и безопасный чем java, с поддержкой корутин.",
    flutter: "flutter — фреймворк google для кроссплатформенной разработки. использует язык dart, собственный движок рендеринга и богатую библиотеку виджетов.",
    ml: "ml / dl / nlp — машинное обучение, глубокое обучение, обработка естественного языка. ключевые направления искусственного интеллекта.",
    python_ml: "python / pandas / sklearn — стандартный стек для data science. pandas для обработки данных, sklearn для классических алгоритмов ml.",
    catboost: "catboost / openvino — градиентный бустинг от яндекса. openvino для оптимизации и ускорения моделей на intel процессорах.",
    airflow: "airflow / sqlalchemy — airflow для оркестрации пайплайнов данных, sqlalchemy для работы с базами данных из python (orm).",
    vision: "computer vision — компьютерное зрение. распознавание объектов, лиц, сегментация изображений, анализ медицинских снимков.",
    voice: "voice technologies asr/tts — распознавание и синтез речи. автоматические субтитры, голосовые ассистенты, озвучивание текста.",
    postman: "postman / swagger — тестирование и документация api. postman для ручных и автоматических тестов, swagger для генерации документации.",
    jmeter: "jmeter — нагрузочное тестирование. симуляция высокой нагрузки для проверки производительности и стабильности сервисов.",
    testrail: "testrail — управление тест-кейсами. система для хранения, выполнения тестов и формирования отчётов.",
    charles: "charles / fiddler — снифферы трафика. отладка http/https запросов, подмена ответов, анализ трафика между клиентом и сервером.",
    uml: "uml 2.x / bpmn 2.0 — нотации для визуализации архитектуры. uml для классов, компонентов и последовательностей, bpmn для бизнес-процессов.",
    figma: "figma — облачный инструмент для дизайна интерфейсов. совместная работа в реальном времени, создание прототипов и дизайн-систем.",
    enterprise: "sparx enterprise architect — профессиональный инструмент для моделирования архитектуры предприятия. поддерживает uml, bpmn, sysml.",
    iso: "iso/iec 12207 / 15288 — международные стандарты для жизненного цикла программного обеспечения и системной инженерии.",
    scrum: "scrum / agile — гибкие методологии разработки. итеративная поставка, адаптация к изменениям, кросс-функциональные команды.",
    bigdata: "big data аналитика — обработка и анализ больших объёмов данных. инструменты: hadoop, spark, clickhouse, bigquery.",
    trading: "trading аналитика — анализ финансовых рынков. алгоритмическая торговля, прогнозирование цен, риск-менеджмент.",
    blockchain: "blockchain аналитика — анализ блокчейн-транзакций. отслеживание движения средств, выявление мошенничества, анализ смарт-контрактов.",
    graph: "graph аналитика — анализ графовых структур. социальные сети, рекомендательные системы, поиск кратчайших путей.",
    vue: "vue — прогрессивный фреймворк. лёгкий, гибкий, для малых и средних проектов.",
    gsap: "gsap — профессиональная анимация. плавные переходы, сложные таймлайны.",
    three: "three.js — 3d в браузере. впечатляющие сцены, анимация продуктов.",
    laravel: "laravel — php-фреймворк. портал, интернет-магазин, crm.",
    uiux: "ui/ux research — исследование поведения. интерфейсы, решающие бизнес-задачи.",
    motion: "motion design — анимированные интерфейсы. вовлечённость, впечатления.",
    "3d": "3d art — трёхмерная визуализация. презентации, дополненная реальность.",
    adobe: "adobe suite — графика, ретушь, подготовка элементов.",
    audit: "seo-аудит — анализ ошибок, скорости, дублей, метатегов.",
    metrika: "метрика/ga4 — сбор данных, вебвизор, цели, e-commerce.",
    cluster: "кластеризация — группировка запросов. оптимальная структура страниц.",
    core: "core web vitals — lcp, cls, fid. влияют на ранжирование.",
    semrush: "semrush / ahrefs — анализ конкурентов, ключей, ссылок."
};

// ============================================
// ТУЛТИПЫ ДЛЯ ТЕХНОЛОГИЙ
// ============================================
function initTechTooltips() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tech-tooltip';
    document.body.appendChild(tooltip);
    let timeout = null;
    let rafId = null;
    
    document.querySelectorAll('.tech-item').forEach(el => {
        el.addEventListener('mouseenter', function() {
            if (rafId) cancelAnimationFrame(rafId);
            
            const tech = this.getAttribute('data-tech');
            const desc = techDesc[tech] || "технология, которую мы используем в наших проектах для достижения максимального результата.";
            tooltip.innerHTML = '<strong>' + this.innerText + '</strong><br>' + desc;
            
            rafId = requestAnimationFrame(() => {
                tooltip.style.opacity = '1';
                const rect = this.getBoundingClientRect();
                let left = rect.right + 15;
                let top = rect.top + rect.height / 2 - 50;
                if (left + 380 > window.innerWidth) left = rect.left - 390;
                if (top < 10) top = 10;
                if (top + 150 > window.innerHeight) top = window.innerHeight - 160;
                tooltip.style.left = left + 'px';
                tooltip.style.top = top + 'px';
            });
            
            if (timeout) clearTimeout(timeout);
        });
        
        el.addEventListener('mouseleave', function() {
            timeout = setTimeout(function() { 
                tooltip.style.opacity = '0'; 
            }, 150);
        });
    });
}

// ============================================
// КАЛЬКУЛЯТОР СТОИМОСТИ
// ============================================
const rate = 2000;
const sh = { design: 20, front: 30, back: 40, seo: 15, cms: 25, crm: 60, ai: 90, mobile: 120, support: 8 };
const cm = { simple: 1, medium: 1.5, high: 2.2, enterprise: 3.5 };
let selected = new Set();
let complexity = "simple";

function getRec(serv) {
    let rec = [], exp = "";
    if (serv.has('front') || serv.has('design')) {
        rec.push("react / next.js, typescript, tailwind");
        exp += "<strong>react:</strong> seo-рендеринг, ux. typescript — надёжность. tailwind — быстрая вёрстка.<br>";
    }
    if (serv.has('back')) {
        rec.push("node.js / python + postgresql");
        exp += "<strong>node.js/python:</strong> масштабируемый бэкенд, готовая архитектура.<br>";
    }
    if (serv.has('crm')) exp += "<strong>crm/erp:</strong> автоматизация, 1с, единая база.<br>";
    if (serv.has('ai')) exp += "<strong>ai/ml:</strong> нейросети, прогнозирование, персонализация.<br>";
    if (serv.has('mobile')) exp += "<strong>react native/flutter:</strong> кроссплатформа, экономия бюджета.<br>";
    if (rec.length === 0) rec.push("react + node.js / laravel");
    let compText = "";
    if (complexity === 'high' || complexity === 'enterprise') compText = "<br><br><strong>enterprise:</strong> микросервисы, docker, kubernetes, redis.";
    return { rec: rec.join(". "), exp: exp + compText };
}

function updateCalculator() {
    let h = 0;
    for (let s of selected) h += sh[s];
    let fin = Math.round(h * cm[complexity]);
    let cost = fin * rate;
    let servList = Array.from(selected).map(function(s) {
        var names = { design: "дизайн", front: "frontend", back: "backend", seo: "seo", cms: "cms", crm: "crm", ai: "ai", mobile: "мобильное", support: "поддержка" };
        return names[s];
    }).join(", ");
    if (servList === "") servList = "—";
    
    var priceEl = document.getElementById('calcPrice');
    var hoursEl = document.getElementById('calcHoursInfo');
    if (priceEl) priceEl.innerHTML = cost.toLocaleString() + ' ₽';
    if (hoursEl) hoursEl.innerHTML = '✔ услуги: ' + servList + '<br>✔ сложность: ' + (complexity === 'simple' ? 'старт' : complexity === 'medium' ? 'бизнес' : complexity === 'high' ? 'премиум' : 'enterprise') + '<br>✔ часы: ' + h + ' ч × ' + cm[complexity] + ' = ' + fin + ' ч.';
    
    var rec = getRec(selected);
    var phases = [
        { n: "аналитика и прототип", b: 10, m: 1.2 },
        { n: "дизайн", b: selected.has('design') ? 20 : 0, m: 1 },
        { n: "frontend", b: selected.has('front') ? 30 : 0, m: 1 },
        { n: "backend", b: selected.has('back') ? 40 : 0, m: 1 },
        { n: "seo", b: selected.has('seo') ? 15 : 0, m: 1 },
        { n: "cms", b: selected.has('cms') ? 25 : 0, m: 1 },
        { n: "crm/erp", b: selected.has('crm') ? 60 : 0, m: 1 },
        { n: "ai/ml", b: selected.has('ai') ? 90 : 0, m: 1 },
        { n: "мобильное", b: selected.has('mobile') ? 120 : 0, m: 1 },
        { n: "поддержка", b: selected.has('support') ? 8 : 0, m: 1 },
        { n: "тестирование", b: 15, m: 1.3 },
        { n: "деплой", b: 8, m: 1.1 }
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
    if (tot < fin && fin - tot > 5) br.push({ name: "управление проектом", h: fin - tot });
    else if (tot > fin && br.length) {
        br[0].h -= tot - fin;
        if (br[0].h < 0) br[0].h = 0;
    }
    br = br.filter(function(b) { return b.h > 0; });
    var timeHtml = '<div class="time-breakdown"><h4>распределение ' + fin + ' часов:</h4>';
    for (var i = 0; i < br.length; i++) {
        timeHtml += '<div class="time-breakdown-item"><span>' + br[i].name + '</span><span>' + br[i].h + ' ч</span></div>';
    }
    timeHtml += '</div>';
    
    var stackEl = document.getElementById('stackExplanation');
    if (stackEl) {
        if (h === 0) {
            stackEl.innerHTML = '<h4>рекомендуемый стек</h4><p>выберите услуги для расчёта</p>';
        } else {
            stackEl.innerHTML = '<h4>рекомендуемый стек</h4><p><strong>' + rec.rec + '</strong></p><h4>преимущества</h4><p>' + rec.exp + '</p>' + timeHtml + '<p style="margin-top:12px; font-size:0.85rem;">выбор технологий основан на потребностях вашего проекта.</p>';
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

function initCalculatorWithFallback() {
    const staticTable = document.getElementById('staticPriceTable');
    const interactiveCalc = document.getElementById('interactiveCalculator');
    
    if (staticTable && interactiveCalc) {
        staticTable.style.display = 'none';
        interactiveCalc.style.display = 'block';
        initCalculator();
    } else if (interactiveCalc) {
        interactiveCalc.style.display = 'block';
        initCalculator();
    }
}

// ============================================
// ПЛАВНЫЙ СКРОЛЛ
// ============================================
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

// ============================================
// FAQ (старый, оставлен для совместимости)
// ============================================
function initFaq() {
    var faqGrid = document.querySelector('.faq-grid');
    if (faqGrid) {
        faqGrid.addEventListener('click', function(e) {
            var button = e.target.closest('.faq-question');
            if (!button) return;
            e.preventDefault();
            var item = button.closest('.faq-item');
            if (!item) return;
            var answer = item.querySelector('.faq-answer');
            if (!answer) return;
            var isActive = answer.classList.contains('active');
            
            var allAnswersList = document.querySelectorAll('.faq-answer');
            for (var i = 0; i < allAnswersList.length; i++) {
                allAnswersList[i].classList.remove('active');
            }
            var allButtons = document.querySelectorAll('.faq-question');
            for (var i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.remove('active');
            }
            if (!isActive) {
                answer.classList.add('active');
                button.classList.add('active');
            }
        });
    }
}

// ============================================
// ФОРМА
// ============================================
function initForm() {
    var form = document.getElementById('mainForm');
    var stat = document.getElementById('formStatus');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('userName') ? document.getElementById('userName').value.trim() : '';
            var phone = document.getElementById('userPhone') ? document.getElementById('userPhone').value.trim() : '';
            var email = document.getElementById('userEmail') ? document.getElementById('userEmail').value.trim() : '';
            
            if (!name || !phone || !email) {
                if (stat) stat.innerHTML = '<div style="background:#990000; padding:12px; border-radius:8px;">❌ заполните все обязательные поля (имя, телефон, email)</div>';
                setTimeout(function() { if (stat) stat.innerHTML = ''; }, 4000);
                return;
            }
            
            console.log('заявка:', { name, phone, email });
            if (stat) stat.innerHTML = '<div style="background:#F5B700; color:#0D1117; padding:12px; border-radius:8px;">✅ спасибо! менеджер свяжется с вами в ближайшее время.</div>';
            form.reset();
            setTimeout(function() { if (stat) stat.innerHTML = ''; }, 5000);
        });
    }
}

// ============================================
// ФИКСАЦИЯ ШАПКИ
// ============================================
function initHeaderFixed() {
    var header = document.getElementById('mainHeader');
    if (!header) return;
    
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();
}

// ============================================
// БУРГЕР-МЕНЮ
// ============================================
function initBurgerMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', function() {
            burgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// ============================================
// ДОБАВЛЯЕМ ФУТЕР С ЧАСАМИ И СТОИМОСТЬЮ В АКТИВНУЮ ПАНЕЛЬ
// ============================================
function addFooterToActivePanel() {
    const activePanel = document.querySelector('.accordion-panel.active');
    if (!activePanel) return;
    
    if (activePanel.querySelector('.active-panel-footer')) return;
    
    const stats = activePanel.querySelector('.panel-stats');
    if (!stats) return;
    
    const statsSpans = stats.querySelectorAll('span');
    if (statsSpans.length < 2) return;
    
    const hours = statsSpans[0].textContent;
    const price = statsSpans[1].textContent;
    
    const footer = document.createElement('div');
    footer.className = 'active-panel-footer';
    footer.innerHTML = `
        <div class="footer-hours">
            <span>длительность</span>
            <span>${hours}</span>
        </div>
        <div class="footer-price">
            <span>стоимость</span>
            <span>${price}</span>
        </div>
    `;
    
    const content = activePanel.querySelector('.accordion-panel-content');
    if (content) {
        content.after(footer);
    } else {
        activePanel.appendChild(footer);
    }
}

// ============================================
// ГОРИЗОНТАЛЬНЫЙ АККОРДЕОН ПОРТФОЛИО
// ============================================
function initPortfolioAccordion() {
    const panels = document.querySelectorAll('.accordion-panel');
    
    if (panels.length === 0) return;
    
    function closeAllPanels() {
        panels.forEach(panel => {
            panel.classList.remove('active');
        });
    }
    
    function openPanel(panel) {
        if (!panel) return;
        closeAllPanels();
        panel.classList.add('active');
        
        document.querySelectorAll('.active-panel-footer').forEach(footer => footer.remove());
        addFooterToActivePanel();
    }
    
    panels.forEach((panel) => {
        const header = panel.querySelector('.accordion-panel-header');
        
        if (header) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', function(e) {
                e.stopPropagation();
                if (panel.classList.contains('active')) return;
                openPanel(panel);
            });
        }
        
        panel.addEventListener('click', function(e) {
            if (e.target.closest('a') || 
                e.target.closest('button') || 
                e.target.closest('.accordion-panel-content')) {
                return;
            }
            if (panel.classList.contains('active')) return;
            openPanel(panel);
        });
    });
    
    const activePanel = document.querySelector('.accordion-panel.active');
    if (!activePanel && panels.length > 0) {
        panels[0].classList.add('active');
        addFooterToActivePanel();
    } else if (activePanel) {
        addFooterToActivePanel();
    }
}

// ============================================
// 3D ПАРАЛЛАКС ДЛЯ КАРТОЧЕК (ТОЛЬКО ГОРИЗОНТАЛЬНЫЙ)
// ============================================
function initQuantumCards() {
    const cards = document.querySelectorAll('.services-grid .service-card');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || cards.length === 0) return;

    cards.forEach(card => {
        const seg1 = card.querySelector('.seg-1');
        const seg2 = card.querySelector('.seg-2');
        const seg3 = card.querySelector('.seg-3');
        const seg4 = card.querySelector('.seg-4');
        const segments = [seg1, seg2, seg3, seg4];
        const content = card.querySelector('.card-content');

        if (!seg1 || !seg2 || !seg3 || !seg4) return;

        let targetRotateY = 0;
        let currentRotateY = 0;

        let segTargets = {
            seg1: { x: 0, ry: 0 },
            seg2: { x: 0 },
            seg3: { x: 0 },
            seg4: { x: 0, ry: 0 }
        };
        let segCurrent = {
            seg1: { x: 0, ry: 0 },
            seg2: { x: 0 },
            seg3: { x: 0 },
            seg4: { x: 0, ry: 0 }
        };

        const MAX_X = 12;
        const MAX_RY = 4;

        function limit(value, max) {
            return Math.min(max, Math.max(-max, value));
        }

        function updateSegments() {
            segCurrent.seg1.x += (segTargets.seg1.x - segCurrent.seg1.x) * 0.2;
            segCurrent.seg1.ry += (segTargets.seg1.ry - segCurrent.seg1.ry) * 0.2;
            seg1.style.transform = `translateX(${segCurrent.seg1.x}px) rotateY(${segCurrent.seg1.ry}deg) translateZ(-5px)`;
            
            segCurrent.seg2.x += (segTargets.seg2.x - segCurrent.seg2.x) * 0.2;
            seg2.style.transform = `translateX(${segCurrent.seg2.x}px) translateZ(-5px)`;
            
            segCurrent.seg3.x += (segTargets.seg3.x - segCurrent.seg3.x) * 0.2;
            seg3.style.transform = `translateX(${segCurrent.seg3.x}px) translateZ(-5px)`;
            
            segCurrent.seg4.x += (segTargets.seg4.x - segCurrent.seg4.x) * 0.2;
            segCurrent.seg4.ry += (segTargets.seg4.ry - segCurrent.seg4.ry) * 0.2;
            seg4.style.transform = `translateX(${segCurrent.seg4.x}px) rotateY(${segCurrent.seg4.ry}deg) translateZ(-5px)`;
        }

        function animate() {
            currentRotateY += (targetRotateY - currentRotateY) * 0.12;
            card.style.transform = `rotateY(${currentRotateY}deg)`;
            updateSegments();
            requestAnimationFrame(animate);
        }
        animate();

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width - 0.5;

            targetRotateY = relX * 12;

            const px = ((e.clientX - rect.left) / rect.width) * 100;
            const py = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--x', px + '%');
            card.style.setProperty('--y', py + '%');

            const intensity = Math.min(1, Math.abs(relX));
            const borderGlow = `rgba(255, 255, 255, ${0.15 + intensity * 0.4})`;
            segments.forEach(seg => {
                if (seg) seg.style.borderColor = borderGlow;
            });

            segTargets.seg1.x = limit(relX * -12, MAX_X);
            segTargets.seg1.ry = limit(relX * -4, MAX_RY);
            segTargets.seg2.x = limit(relX * -5, MAX_X);
            segTargets.seg3.x = limit(relX * 5, MAX_X);
            segTargets.seg4.x = limit(relX * 12, MAX_X);
            segTargets.seg4.ry = limit(relX * 4, MAX_RY);

            if (content) {
                content.style.transform = `translateZ(25px)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            targetRotateY = 0;
            segTargets = {
                seg1: { x: 0, ry: 0 },
                seg2: { x: 0 },
                seg3: { x: 0 },
                seg4: { x: 0, ry: 0 }
            };
            segments.forEach(seg => {
                if (seg) seg.style.borderColor = '';
            });
            if (content) {
                content.style.transform = 'translateZ(25px)';
            }
        });
    });
}

// ============================================
// КИНЕТИЧЕСКИЕ КНОПКИ (3 СЕГМЕНТА)
// ============================================
function initKineticButtons() {
    const buttonsToConvert = document.querySelectorAll(
        '.btn-primary, .btn-outline, .hero-btn-primary, .hero-btn-outline, ' +
        '.section-more-btn, button[type="submit"], .header-telegram, #toTopBtn'
    );
    
    if (buttonsToConvert.length === 0) return;
    
    buttonsToConvert.forEach(oldBtn => {
        const btnText = oldBtn.textContent.trim();
        const btnId = oldBtn.id;
        const btnClass = oldBtn.className;
        const parent = oldBtn.parentNode;
        let telegramLink = null;
        
        if (oldBtn.classList.contains('header-telegram')) {
            telegramLink = oldBtn.getAttribute('href');
        }
        
        const wrapper = document.createElement('div');
        wrapper.className = 'kinetic-wrapper';
        if (btnId) wrapper.id = btnId;
        
        let sizeClass = '';
        if (btnClass.includes('section-more-btn')) sizeClass = 'small';
        if (btnClass.includes('hero-btn') || (btnClass.includes('btn-primary') && btnText.length > 15)) sizeClass = 'large';
        if (btnId === 'toTopBtn') sizeClass = 'totop-btn';
        if (btnClass.includes('header-telegram')) sizeClass = 'header-telegram-btn';
        
        const kineticBtn = document.createElement('div');
        kineticBtn.className = `kinetic-btn ${sizeClass}`;
        if (telegramLink) {
            kineticBtn.setAttribute('data-telegram-link', telegramLink);
        }
        
        const segLeft = document.createElement('div');
        segLeft.className = 'segment segment-left';
        const segCenter = document.createElement('div');
        segCenter.className = 'segment segment-center';
        const segRight = document.createElement('div');
        segRight.className = 'segment segment-right';
        
        const textSpan = document.createElement('div');
        textSpan.className = 'btn-text';
        textSpan.textContent = btnText;
        
        for (let i = 0; i < 6; i++) {
            const spark = document.createElement('div');
            spark.className = 'spark';
            kineticBtn.appendChild(spark);
        }
        
        kineticBtn.appendChild(segLeft);
        kineticBtn.appendChild(segCenter);
        kineticBtn.appendChild(segRight);
        kineticBtn.appendChild(textSpan);
        
        wrapper.appendChild(kineticBtn);
        parent.replaceChild(wrapper, oldBtn);
        
        initKineticButtonEffects(kineticBtn, btnText);
        
        if (btnId === 'toTopBtn') {
            kineticBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        if (telegramLink) {
            kineticBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                window.open(telegramLink, '_blank');
            });
        }
    });
}

// Эффекты для одной кинетической кнопки
function initKineticButtonEffects(btn, originalText) {
    const leftSeg = btn.querySelector('.segment-left');
    const centerSeg = btn.querySelector('.segment-center');
    const rightSeg = btn.querySelector('.segment-right');
    const textSpan = btn.querySelector('.btn-text');
    
    if (!leftSeg || !centerSeg || !rightSeg) return;
    
    let targetRotateX = 0, targetRotateY = 0;
    let currentRotateX = 0, currentRotateY = 0;
    
    function triggerSparks(count = 3, clientX = null, clientY = null) {
        const rect = btn.getBoundingClientRect();
        const sparksList = btn.querySelectorAll('.spark');
        
        for (let i = 0; i < Math.min(count, sparksList.length); i++) {
            const spark = sparksList[i];
            const angle = Math.random() * Math.PI * 2;
            const radius = 25 + Math.random() * 35;
            const dx = Math.cos(angle) * radius * (Math.random() > 0.5 ? 1 : -1);
            const dy = Math.sin(angle) * radius * 0.5 - 8;
            
            spark.style.setProperty('--dx', dx + 'px');
            spark.style.setProperty('--dy', dy + 'px');
            
            if (clientX && clientY) {
                const localX = ((clientX - rect.left) / rect.width) * 100;
                const localY = ((clientY - rect.top) / rect.height) * 100;
                spark.style.left = localX + '%';
                spark.style.top = localY + '%';
            } else {
                spark.style.left = (Math.random() * 80 + 10) + '%';
                spark.style.top = (Math.random() * 70 + 15) + '%';
            }
            
            spark.style.animation = 'none';
            spark.offsetHeight;
            spark.style.animation = 'sparkFloat 0.5s ease-out forwards';
        }
    }
    
    function animateRotation() {
        currentRotateX += (targetRotateX - currentRotateX) * 0.12;
        currentRotateY += (targetRotateY - currentRotateY) * 0.12;
        btn.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
        requestAnimationFrame(animateRotation);
    }
    animateRotation();
    
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        
        targetRotateY = relX * 10;
        targetRotateX = -relY * 8;
        
        const px = ((e.clientX - rect.left) / rect.width) * 100;
        const py = ((e.clientY - rect.top) / rect.height) * 100;
        btn.style.setProperty('--x', px + '%');
        btn.style.setProperty('--y', py + '%');
        
        leftSeg.style.transform = `translateX(${relX * -8}px) rotateY(${relX * -5}deg) translateZ(${relY * 4}px)`;
        rightSeg.style.transform = `translateX(${relX * 8}px) rotateY(${relX * 5}deg) translateZ(${relY * 4}px)`;
        centerSeg.style.transform = `translateY(${relY * 5}px) translateZ(${Math.abs(relX) * 8}px)`;
        
        if (Math.random() < 0.05) {
            triggerSparks(1, e.clientX, e.clientY);
        }
    });
    
    btn.addEventListener('mouseenter', () => {
        triggerSparks(3);
    });
    
    btn.addEventListener('mouseleave', () => {
        leftSeg.style.transform = '';
        rightSeg.style.transform = '';
        centerSeg.style.transform = '';
        targetRotateX = 0;
        targetRotateY = 0;
    });
    
    btn.addEventListener('click', (e) => {
        triggerSparks(8, e.clientX, e.clientY);
        btn.style.transform = `scale(0.97)`;
        setTimeout(() => {
            btn.style.transform = '';
        }, 120);
    });
}

// ============================================
// КНОПКА НАВЕРХ
// ============================================
function initToTop() {
    const toTopBtn = document.getElementById('toTopBtn');
    if (!toTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            toTopBtn.classList.add('visible');
        } else {
            toTopBtn.classList.remove('visible');
        }
    });
    
    toTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// АККОРДЕОН FAQ В СТИЛЕ «КЕЙС»
// ============================================
function initCaseAccordion() {
    const items = document.querySelectorAll('.case-item');
    if (items.length === 0) return;

    let sparkContainer = document.querySelector('.spark-container');
    if (!sparkContainer) {
        sparkContainer = document.createElement('div');
        sparkContainer.className = 'spark-container';
        sparkContainer.style.position = 'fixed';
        sparkContainer.style.top = '0';
        sparkContainer.style.left = '0';
        sparkContainer.style.width = '100%';
        sparkContainer.style.height = '100%';
        sparkContainer.style.pointerEvents = 'none';
        sparkContainer.style.zIndex = '9999';
        document.body.appendChild(sparkContainer);
    }

    const sparks = [];
    const SPARKS_COUNT = 30;
    for (let i = 0; i < SPARKS_COUNT; i++) {
        const s = document.createElement('div');
        s.className = 'spark';
        sparkContainer.appendChild(s);
        sparks.push(s);
    }

    function burstSparks(x, y) {
        const colors = ['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.7)', '#D62976', '#F56040'];
        const count = 12 + Math.floor(Math.random() * 12);
        for (let i = 0; i < count; i++) {
            const spark = sparks[i % sparks.length];
            const angle = Math.random() * Math.PI * 2;
            const radius = 35 + Math.random() * 65;
            const dx = Math.cos(angle) * radius;
            const dy = Math.sin(angle) * radius;
            spark.style.setProperty('--dx', dx + 'px');
            spark.style.setProperty('--dy', dy + 'px');
            spark.style.left = (x - 2) + 'px';
            spark.style.top = (y - 2) + 'px';
            spark.style.background = colors[Math.floor(Math.random() * colors.length)];
            spark.style.animation = 'none';
            spark.offsetHeight;
            spark.style.animation = 'sparkOpen 0.5s ease-out forwards';
        }
    }

    function openCase(selectedItem) {
        const isActive = selectedItem.classList.contains('active');
        items.forEach(item => {
            if (item !== selectedItem && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
        if (!isActive) {
            selectedItem.classList.add('active');
            const handle = selectedItem.querySelector('.case-handle');
            if (handle) {
                const rect = handle.getBoundingClientRect();
                burstSparks(rect.left + rect.width / 2, rect.top + rect.height / 2);
            }
        } else {
            selectedItem.classList.remove('active');
        }
    }

    items.forEach(item => {
        const lid = item.querySelector('.case-lid');
        if (lid) {
            lid.addEventListener('click', (e) => {
                e.preventDefault();
                openCase(item);
            });
        }
    });
}

// ============================================
// ЗАГРУЗКА КОМПОНЕНТОВ (HEADER, FOOTER)
// ============================================
function loadComponent(elementId, filePath, callback) {
    const placeholder = document.getElementById(elementId);
    if (!placeholder) return;
    
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('failed to load ' + filePath);
            return response.text();
        })
        .then(data => {
            placeholder.innerHTML = data;
            if (callback) callback();
        })
        .catch(error => {
            console.error('ошибка загрузки компонента:', error);
            placeholder.innerHTML = '<div style="padding:20px;text-align:center;">ошибка загрузки</div>';
        });
}

// ============================================
// ЭТАЛОННЫЙ HERO БАННЕР
// ============================================

function initMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;
    
    canvas.width = w;
    canvas.height = h;
    
    const chars = "01<>/{}[]=+-*&%$#@!~ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const words = ['DESIGN', 'CODE', 'AI', 'ALBE', 'DIGITAL'];
    const colors = ['#F5B700', '#10B981', '#06B6D4', '#4C1D95'];
    const fontSize = 14;
    let cols = Math.floor(w / fontSize);
    let drops = [];
    
    for (let i = 0; i < cols; i++) {
        drops[i] = Math.random() * -h;
    }
    
    let lastFrameTime = 0;
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;
    
    function getRandomItem() {
        return (Math.random() < 0.04) ? words[Math.floor(Math.random() * words.length)] : chars[Math.floor(Math.random() * chars.length)];
    }
    
    function drawMatrix(now) {
        requestAnimationFrame(drawMatrix);
        if (now - lastFrameTime < frameInterval) return;
        lastFrameTime = now;
        
        ctx.fillStyle = 'rgba(5,7,10,0.06)';
        ctx.fillRect(0, 0, w, h);
        ctx.textAlign = 'center';
        
        for (let i = 0; i < drops.length; i++) {
            const item = getRandomItem();
            const x = i * fontSize + fontSize/2;
            const y = drops[i] * fontSize;
            let color, fontStyle;
            
            if (item.length > 1) {
                color = '#F5B700';
                fontStyle = `bold ${fontSize}px "Monaco", monospace`;
            } else {
                color = colors[Math.floor(Math.random() * colors.length)];
                fontStyle = `${fontSize}px "Monaco", monospace`;
            }
            ctx.font = fontStyle;
            ctx.fillStyle = color;
            ctx.fillText(item, x, y);
            
            if (y > h && Math.random() > 0.99) {
                drops[i] = 0;
            }
            drops[i] += 0.6;
        }
    }
    
    drawMatrix();
    
    window.addEventListener('resize', () => {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
        cols = Math.floor(w / fontSize);
        drops = [];
        for (let i = 0; i < cols; i++) {
            drops[i] = Math.random() * -h;
        }
    });
}

function initHeroLoaded() {
    const hero = document.querySelector('.hero-etalon');
    if (!hero) return;
    setTimeout(() => {
        hero.classList.add('loaded');
    }, 1300);
}

function initTypewriter() {
    const businessLine = document.getElementById('businessLine');
    if (!businessLine) return;
    
    const fullText = "МЫ СОЗДАЕМ БИЗНЕС";
    let index = 0;
    
    function typeWriter() {
        if (index < fullText.length) {
            businessLine.innerHTML = fullText.substring(0, index + 1) + '<span class="cursor"></span>';
            index++;
            setTimeout(typeWriter, 100);
        } else {
            businessLine.innerHTML = fullText;
        }
    }
    
    setTimeout(typeWriter, 2900);
}

function initHeroRestart() {
    const restartBtn = document.getElementById('restartHeroBtn');
    if (!restartBtn) return;
    
    restartBtn.addEventListener('click', () => {
        const hero = document.querySelector('.hero-etalon');
        const businessLine = document.getElementById('businessLine');
        
        if (hero) hero.classList.remove('loaded');
        if (businessLine) {
            businessLine.innerHTML = '';
        }
        
        const maskLetters = document.querySelectorAll('.mask-letter');
        maskLetters.forEach(letter => {
            letter.style.animation = 'none';
            letter.style.opacity = '0';
        });
        
        setTimeout(() => {
            maskLetters.forEach((letter, i) => {
                const delays = ['0.2s', '0.5s', '0.8s', '1.1s'];
                letter.style.animation = `revealLetter 0.6s ease forwards ${delays[i]}`;
            });
            
            if (hero) hero.classList.add('loaded');
            
            if (businessLine) {
                let index = 0;
                const fullText = "МЫ СОЗДАЕМ БИЗНЕС";
                function restartTypewriter() {
                    if (index < fullText.length) {
                        businessLine.innerHTML = fullText.substring(0, index + 1) + '<span class="cursor"></span>';
                        index++;
                        setTimeout(restartTypewriter, 100);
                    } else {
                        businessLine.innerHTML = fullText;
                    }
                }
                restartTypewriter();
            }
        }, 50);
    });
}

// ============================================
// ЗАПУСК ВСЕХ ИНИЦИАЛИЗАЦИЙ
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация эталонного баннера
    initMatrixRain();
    initHeroLoaded();
    initTypewriter();
    initHeroRestart();
    
    // Инициализация остальных функций
    initTechTooltips();
    initCalculatorWithFallback();
    initSmoothScroll();
    initFaq();
    initForm();
    initHeaderFixed();
    initBurgerMenu();
    initPortfolioAccordion();
    initQuantumCards();
    initKineticButtons();
    initToTop();
    initCaseAccordion();
    
    // Загрузка компонентов header и footer
    loadComponent('header-placeholder', 'header.html', function() {
        initBurgerMenu();
        initHeaderFixed();
        setTimeout(() => {
            initKineticButtons();
        }, 100);
    });
    loadComponent('footer-placeholder', 'footer.html', function() {
        setTimeout(() => {
            initKineticButtons();
        }, 100);
    });
});
