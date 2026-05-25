// ===== ОПИСАНИЯ ТЕХНОЛОГИЙ ДЛЯ ТУЛТИПОВ =====
const techDesc = {
    react: "React / Next.js — библиотека для создания пользовательских интерфейсов. Next.js добавляет серверный рендеринг (SSR) и генерацию статических сайтов (SSG), что улучшает SEO и скорость загрузки.",
    ts: "TypeScript — типизированный JavaScript. Позволяет находить ошибки на этапе разработки, улучшает читаемость кода и упрощает поддержку крупных проектов.",
    redux: "Redux / RTK — управление состоянием приложения. Redux Toolkit упрощает настройку хранилища, уменьшает количество шаблонного кода и интегрируется с React.",
    ssr: "SSR / SSG — серверный рендеринг и статическая генерация. SSR отдаёт готовый HTML с сервера, ускоряя первую загрузку. SSG генерирует статические файлы на этапе сборки.",
    css: "CSS3 / SASS / Tailwind — современные технологии стилизации. SASS добавляет переменные и миксины. Tailwind — утилитарный CSS-фреймворк для быстрой вёрстки.",
    node: "Node.js / Nest.js — серверный JavaScript. Node.js — асинхронная событийно-ориентированная платформа. Nest.js добавляет модульную архитектуру, похожую на Angular.",
    python: "Python / Django — высокоуровневый язык для бэкенда и AI. Django предоставляет встроенную админ-панель, ORM и систему аутентификации.",
    cpp: "C++ — язык для высокопроизводительных систем. Используется в финансах, игровой индустрии, embedded-системах и высоконагруженных сервисах.",
    postgres: "PostgreSQL / MS SQL — мощные реляционные СУБД. Поддерживают сложные запросы, транзакции, хранимые процедуры и репликацию.",
    redis: "Redis / Elasticsearch — Redis для кэширования и очередей сообщений, Elasticsearch для полнотекстового поиска и аналитики логов.",
    rabbitmq: "RabbitMQ / Kafka — брокеры сообщений. RabbitMQ для маршрутизации и надёжной доставки, Kafka для потоковой обработки больших данных.",
    kubernetes: "Kubernetes — оркестрация контейнеров. Автоматизирует развертывание, масштабирование и управление контейнеризированными приложениями.",
    docker: "Docker — контейнеризация приложений. Упаковывает приложение со всеми зависимостями в контейнер, который работает одинаково в любой среде.",
    yandex: "Yandex Cloud / Selectel — российские облачные провайдеры. Предоставляют виртуальные машины, объектное хранение, managed базы данных и Kubernetes.",
    gitlab: "GitLab CI/CD — встроенная система непрерывной интеграции и доставки. Автоматическая сборка, тестирование и деплой кода при каждом коммите.",
    terraform: "Terraform / Ansible — Infrastructure as Code. Terraform для создания и версионирования инфраструктуры, Ansible для настройки серверов.",
    jenkins: "Jenkins / ArgoCD — CI/CD инструменты. Jenkins — гибкий сервер автоматизации сборки. ArgoCD — GitOps инструмент для Kubernetes.",
    reactnative: "React Native / Expo — кроссплатформенная разработка мобильных приложений. Один код на JavaScript для iOS и Android. Expo упрощает запуск и тестирование.",
    swift: "Swift / Objective C — языки разработки для iOS/macOS. Swift — современный, безопасный и выразительный язык от Apple. Objective C — для поддержки легаси кода.",
    kotlin: "Kotlin / Java — языки для Android. Kotlin — официальный язык от Google, более лаконичный и безопасный чем Java, с поддержкой корутин.",
    flutter: "Flutter — фреймворк Google для кроссплатформенной разработки. Использует язык Dart, собственный движок рендеринга и богатую библиотеку виджетов.",
    ml: "ML / DL / NLP — машинное обучение, глубокое обучение, обработка естественного языка. Ключевые направления искусственного интеллекта.",
    python_ml: "Python / Pandas / Sklearn — стандартный стек для Data Science. Pandas для обработки данных, Sklearn для классических алгоритмов ML.",
    catboost: "CatBoost / OpenVINO — градиентный бустинг от Яндекса. OpenVINO для оптимизации и ускорения моделей на Intel процессорах.",
    airflow: "Airflow / sqlalchemy — Airflow для оркестрации пайплайнов данных, sqlalchemy для работы с базами данных из Python (ORM).",
    vision: "Computer Vision — компьютерное зрение. Распознавание объектов, лиц, сегментация изображений, анализ медицинских снимков.",
    voice: "Voice technologies ASR/TTS — распознавание и синтез речи. Автоматические субтитры, голосовые ассистенты, озвучивание текста.",
    postman: "Postman / Swagger — тестирование и документация API. Postman для ручных и автоматических тестов, Swagger для генерации документации.",
    jmeter: "JMeter — нагрузочное тестирование. Симуляция высокой нагрузки для проверки производительности и стабильности сервисов.",
    testrail: "TestRail — управление тест-кейсами. Система для хранения, выполнения тестов и формирования отчётов.",
    charles: "Charles / Fiddler — снифферы трафика. Отладка HTTP/HTTPS запросов, подмена ответов, анализ трафика между клиентом и сервером.",
    uml: "UML 2.x / BPMN 2.0 — нотации для визуализации архитектуры. UML для классов, компонентов и последовательностей, BPMN для бизнес-процессов.",
    figma: "Figma — облачный инструмент для дизайна интерфейсов. Совместная работа в реальном времени, создание прототипов и дизайн-систем.",
    enterprise: "Sparx Enterprise Architect — профессиональный инструмент для моделирования архитектуры предприятия. Поддерживает UML, BPMN, SysML.",
    iso: "ISO/IEC 12207 / 15288 — международные стандарты для жизненного цикла программного обеспечения и системной инженерии.",
    scrum: "SCRUM / Agile — гибкие методологии разработки. Итеративная поставка, адаптация к изменениям, кросс-функциональные команды.",
    bigdata: "Big Data аналитика — обработка и анализ больших объёмов данных. Инструменты: Hadoop, Spark, ClickHouse, BigQuery.",
    trading: "Trading аналитика — анализ финансовых рынков. Алгоритмическая торговля, прогнозирование цен, риск-менеджмент.",
    blockchain: "Blockchain аналитика — анализ блокчейн-транзакций. Отслеживание движения средств, выявление мошенничества, анализ смарт-контрактов.",
    graph: "Graph аналитика — анализ графовых структур. Социальные сети, рекомендательные системы, поиск кратчайших путей.",
    vue: "Vue — прогрессивный фреймворк. Лёгкий, гибкий, для малых и средних проектов.",
    gsap: "GSAP — профессиональная анимация. Плавные переходы, сложные таймлайны.",
    three: "Three.js — 3D в браузере. Впечатляющие сцены, анимация продуктов.",
    laravel: "Laravel — PHP-фреймворк. Портал, интернет-магазин, CRM.",
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

// ===== ТУЛТИПЫ ДЛЯ ТЕХНОЛОГИЙ =====
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
            const desc = techDesc[tech] || "Технология, которую мы используем в наших проектах для достижения максимального результата.";
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

// ===== КИНЕТИЧЕСКИЕ КНОПКИ (3 СЕГМЕНТА) =====
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
    
    const defaultColors = {
        left: 'rgba(255, 255, 255, 0.3)',
        centerTop: 'rgba(255, 255, 255, 0.3)',
        centerBottom: 'rgba(255, 255, 255, 0.3)',
        right: 'rgba(255, 255, 255, 0.3)'
    };
    
    const hoverColors = {
        left: '#FF3366',
        centerTop: '#14C6B0',
        centerBottom: '#14C6B0',
        right: '#8B5CF6'
    };
    
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
    
    function resetToWhite() {
        leftSeg.style.borderColor = defaultColors.left;
        centerSeg.style.borderTopColor = defaultColors.centerTop;
        centerSeg.style.borderBottomColor = defaultColors.centerBottom;
        rightSeg.style.borderColor = defaultColors.right;
        leftSeg.style.boxShadow = '';
        centerSeg.style.boxShadow = '';
        rightSeg.style.boxShadow = '';
    }
    
    function setHoverColors() {
        leftSeg.style.borderColor = hoverColors.left;
        centerSeg.style.borderTopColor = hoverColors.centerTop;
        centerSeg.style.borderBottomColor = hoverColors.centerBottom;
        rightSeg.style.borderColor = hoverColors.right;
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
        setHoverColors();
    });
    
    btn.addEventListener('mouseleave', () => {
        leftSeg.style.transform = '';
        rightSeg.style.transform = '';
        centerSeg.style.transform = '';
        resetToWhite();
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
    
    resetToWhite();
}

// ===== КАЛЬКУЛЯТОР СТОИМОСТИ =====
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

// ===== FAQ (старый, оставлен для совместимости) =====
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
            
            if (!name || !phone || !email) {
                if (stat) stat.innerHTML = '<div style="background:#990000; padding:12px; border-radius:8px;">❌ Заполните все обязательные поля (Имя, Телефон, Email)</div>';
                setTimeout(function() { if (stat) stat.innerHTML = ''; }, 4000);
                return;
            }
            
            console.log('Заявка:', { name, phone, email });
            if (stat) stat.innerHTML = '<div style="background:#F5B700; color:#0D1117; padding:12px; border-radius:8px;">✅ Спасибо! Менеджер свяжется с вами в ближайшее время.</div>';
            form.reset();
            setTimeout(function() { if (stat) stat.innerHTML = ''; }, 5000);
        });
    }
}

// ===== КНОПКА НАВЕРХ =====
function initToTop() {
    window.addEventListener('scroll', function() {
        const btn = document.querySelector('#toTopBtn');
        if (btn) {
            btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
        }
    });
}

// ===== ФИКСАЦИЯ ШАПКИ =====
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

// ===== БУРГЕР-МЕНЮ =====
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

// ===== ДОБАВЛЯЕМ ФУТЕР С ЧАСАМИ И СТОИМОСТЬЮ В АКТИВНУЮ ПАНЕЛЬ =====
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
            <span>ДЛИТЕЛЬНОСТЬ</span>
            <span>${hours}</span>
        </div>
        <div class="footer-price">
            <span>СТОИМОСТЬ</span>
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

// ===== ГОРИЗОНТАЛЬНЫЙ АККОРДЕОН ПОРТФОЛИО =====
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

// ===== 3D ПАРАЛЛАКС ДЛЯ КАРТОЧЕК (ТОЛЬКО ГОРИЗОНТАЛЬНЫЙ, БЕЗ ВЕРТИКАЛЬНОГО СМЕЩЕНИЯ) =====
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

        let targetRotateY = 0;           // только горизонтальный наклон
        let currentRotateY = 0;
        // Вертикальный наклон убран (targetRotateX всегда 0)

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

        // Лимиты для горизонтального смещения
        const MAX_X = 12;
        const MAX_RY = 4;

        function limit(value, max) {
            return Math.min(max, Math.max(-max, value));
        }

        function updateSegments() {
            // seg1
            segCurrent.seg1.x += (segTargets.seg1.x - segCurrent.seg1.x) * 0.2;
            segCurrent.seg1.ry += (segTargets.seg1.ry - segCurrent.seg1.ry) * 0.2;
            seg1.style.transform = `translateX(${segCurrent.seg1.x}px) rotateY(${segCurrent.seg1.ry}deg) translateZ(-5px)`;
            // seg2
            segCurrent.seg2.x += (segTargets.seg2.x - segCurrent.seg2.x) * 0.2;
            seg2.style.transform = `translateX(${segCurrent.seg2.x}px) translateZ(-5px)`;
            // seg3
            segCurrent.seg3.x += (segTargets.seg3.x - segCurrent.seg3.x) * 0.2;
            seg3.style.transform = `translateX(${segCurrent.seg3.x}px) translateZ(-5px)`;
            // seg4
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
            // вертикальная координата не используется для движения, только для блика

            // Горизонтальный наклон карточки
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

            // Только горизонтальное смещение
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

// ===== АККОРДЕОН FAQ В СТИЛЕ «КЕЙС» =====
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
        const colors = ['#FF3366', '#14C6B0', '#10B981', '#8B5CF6'];
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

// ===== ЗАГРУЗКА КОМПОНЕНТОВ =====
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

// ===== ЗАПУСК ВСЕХ ИНИЦИАЛИЗАЦИЙ =====
document.addEventListener('DOMContentLoaded', function() {
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
