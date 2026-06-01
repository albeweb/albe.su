// ============================================
// common.js — ИСПРАВЛЕННАЯ ВЕРСИЯ (калькулятор и видео работают)
// ============================================

(function() {
    'use strict';

    // ============================================
    // ОПИСАНИЯ ТЕХНОЛОГИЙ ДЛЯ ТУЛТИПОВ
    // ============================================
    const techDesc = {
        react: "react / next.js — библиотека для создания пользовательских интерфейсов...",
        ts: "typescript — типизированный javascript...",
        redux: "redux / rtk — управление состоянием приложения...",
        ssr: "ssr / ssg — серверный рендеринг и статическая генерация...",
        css: "css3 / sass / tailwind — современные технологии стилизации...",
        node: "node.js / nest.js — серверный javascript...",
        python: "python / django — высокоуровневый язык для бэкенда и ai...",
        cpp: "c++ — язык для высокопроизводительных систем...",
        postgres: "postgresql / ms sql — мощные реляционные субд...",
        redis: "redis / elasticsearch — redis для кэширования и очередей...",
        rabbitmq: "rabbitmq / kafka — брокеры сообщений...",
        kubernetes: "kubernetes — оркестрация контейнеров...",
        docker: "docker — контейнеризация приложений...",
        yandex: "yandex cloud / selectel — российские облачные провайдеры...",
        gitlab: "gitlab ci/cd — встроенная система непрерывной интеграции...",
        terraform: "terraform / ansible — infrastructure as code...",
        jenkins: "jenkins / argocd — ci/cd инструменты...",
        reactnative: "react native / expo — кроссплатформенная разработка...",
        swift: "swift / objective c — языки разработки для ios/macos...",
        kotlin: "kotlin / java — языки для android...",
        flutter: "flutter — фреймворк google для кроссплатформенной разработки...",
        ml: "ml / dl / nlp — машинное обучение, глубокое обучение...",
        python_ml: "python / pandas / sklearn — стандартный стек для data science...",
        catboost: "catboost / openvino — градиентный бустинг от яндекса...",
        airflow: "airflow / sqlalchemy — оркестрация пайплайнов данных...",
        vision: "computer vision — компьютерное зрение...",
        voice: "voice technologies asr/tts — распознавание и синтез речи...",
        postman: "postman / swagger — тестирование и документация api...",
        jmeter: "jmeter — нагрузочное тестирование...",
        testrail: "testrail — управление тест-кейсами...",
        charles: "charles / fiddler — снифферы трафика...",
        uml: "uml 2.x / bpmn 2.0 — нотации для визуализации архитектуры...",
        figma: "figma — облачный инструмент для дизайна интерфейсов...",
        enterprise: "sparx enterprise architect — профессиональный инструмент...",
        iso: "iso/iec 12207 / 15288 — международные стандарты...",
        scrum: "scrum / agile — гибкие методологии разработки...",
        bigdata: "big data аналитика — обработка и анализ больших объёмов данных...",
        trading: "trading аналитика — анализ финансовых рынков...",
        blockchain: "blockchain аналитика — анализ блокчейн-транзакций...",
        graph: "graph аналитика — анализ графовых структур..."
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
        const interactiveCalc = document.getElementById('interactiveCalculator');
        if (interactiveCalc) {
            interactiveCalc.style.display = 'block';
            initCalculator();
        }
    }

    // ============================================
    // ЗАГРУЗКА ВИДЕО (KINESCOPE) — ВОССТАНОВЛЕНО
    // ============================================
    function initLazyKinescope() {
        const placeholders = document.querySelectorAll('.video-placeholder');
        if (placeholders.length === 0) return;
        
        placeholders.forEach(placeholder => {
            const videoId = placeholder.getAttribute('data-video-id');
            if (!videoId) return;
            
            placeholder.addEventListener('click', () => {
                if (placeholder.querySelector('iframe')) return;
                
                const iframe = document.createElement('iframe');
                iframe.src = `https://kinescope.io/embed/${videoId}?autoplay=1&controls=1&loop=1&show_logo=0&playsinline=1`;
                iframe.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
                iframe.style.position = "absolute";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.border = "none";
                
                const videoFrame = placeholder.querySelector('.video-frame');
                if (videoFrame) {
                    videoFrame.innerHTML = '';
                    videoFrame.appendChild(iframe);
                }
                
                placeholder.classList.add('loaded');
            });
        });
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
    // КИНЕТИЧЕСКАЯ КНОПКА НАВЕРХ
    // ============================================
    function initKineticToTop() {
        const toTopBtn = document.getElementById('toTopBtn');
        if (!toTopBtn) return;
        
        const btnText = toTopBtn.textContent.trim();
        const parent = toTopBtn.parentNode;
        
        const wrapper = document.createElement('div');
        wrapper.className = 'kinetic-wrapper';
        wrapper.id = 'toTopBtn';
        
        const kineticBtn = document.createElement('div');
        kineticBtn.className = 'kinetic-btn totop-btn';
        
        const segLeft = document.createElement('div');
        segLeft.className = 'segment segment-left';
        const segCenter = document.createElement('div');
        segCenter.className = 'segment segment-center';
        const segRight = document.createElement('div');
        segRight.className = 'segment segment-right';
        
        const textSpan = document.createElement('div');
        textSpan.className = 'btn-text';
        textSpan.textContent = btnText;
        
        kineticBtn.appendChild(segLeft);
        kineticBtn.appendChild(segCenter);
        kineticBtn.appendChild(segRight);
        kineticBtn.appendChild(textSpan);
        
        wrapper.appendChild(kineticBtn);
        parent.replaceChild(wrapper, toTopBtn);
        
        const leftSeg = kineticBtn.querySelector('.segment-left');
        const rightSeg = kineticBtn.querySelector('.segment-right');
        const centerSeg = kineticBtn.querySelector('.segment-center');
        
        kineticBtn.addEventListener('mousemove', (e) => {
            const rect = kineticBtn.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width - 0.5;
            const relY = (e.clientY - rect.top) / rect.height - 0.5;
            
            if (leftSeg) leftSeg.style.transform = `translateX(${relX * -8}px) rotateY(${relX * -5}deg)`;
            if (rightSeg) rightSeg.style.transform = `translateX(${relX * 8}px) rotateY(${relX * 5}deg)`;
            if (centerSeg) centerSeg.style.transform = `translateY(${relY * 5}px)`;
        });
        
        kineticBtn.addEventListener('mouseleave', () => {
            if (leftSeg) leftSeg.style.transform = '';
            if (rightSeg) rightSeg.style.transform = '';
            if (centerSeg) centerSeg.style.transform = '';
        });
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                wrapper.classList.add('visible');
                kineticBtn.classList.add('visible');
            } else {
                wrapper.classList.remove('visible');
                kineticBtn.classList.remove('visible');
            }
        });
        
        kineticBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============================================
    // АККОРДЕОН FAQ
    // ============================================
    function initCaseAccordion() {
        const items = document.querySelectorAll('.case-item');
        if (items.length === 0) return;

        function openCase(selectedItem) {
            const isActive = selectedItem.classList.contains('active');
            items.forEach(item => {
                if (item !== selectedItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
            if (!isActive) {
                selectedItem.classList.add('active');
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
    // АККОРДЕОН ПОРТФОЛИО
    // ============================================
    function initPortfolioAccordion() {
        const panels = document.querySelectorAll('.accordion-panel');
        if (panels.length === 0) return;
        
        panels.forEach(panel => {
            const header = panel.querySelector('.accordion-panel-header');
            if (!header) return;
            
            header.addEventListener('click', () => {
                panels.forEach(p => {
                    if (p !== panel && p.classList.contains('active')) {
                        p.classList.remove('active');
                    }
                });
                panel.classList.toggle('active');
            });
        });
    }

    // ============================================
    // МОДАЛЬНОЕ ОКНО ДЛЯ УСЛУГ
    // ============================================
    const serviceDetails = {
        "Веб-разработка": {
            description: "Мы создаём высокопроизводительные веб-приложения, которые выдерживают высокие нагрузки и обеспечивают мгновенный отклик...",
            stack: ["React / Next.js", "TypeScript", "Node.js / Nest.js", "PostgreSQL / MongoDB", "Docker / Kubernetes"],
            advantages: ["Скорость загрузки до 0.3 сек", "Высокая безопасность", "SEO-оптимизация", "Масштабирование", "CI/CD"]
        },
        "Иммерсивный дизайн": {
            description: "Мы создаём дизайн, который вовлекает пользователя и повышает конверсию...",
            stack: ["Figma", "Three.js", "GSAP", "Lottie", "WebGL"],
            advantages: ["+40-60% вовлеченности", "Повышение конверсии", "Премиум восприятие", "Адаптивность", "Высокая производительность"]
        },
        "E-commerce платформы": {
            description: "Интернет-магазины с конверсией до 15%...",
            stack: ["Next.js / Nuxt.js", "Node.js / Laravel", "PostgreSQL", "Redis", "Elasticsearch", "RabbitMQ"],
            advantages: ["Конверсия до 15%+", "Интеграция с маркетплейсами", "50+ платежных систем", "Встроенная аналитика", "Синхронизация с 1С"]
        },
        "SEO и аналитика": {
            description: "Выводим сайты в топ-10 Яндекса и Google...",
            stack: ["Яндекс.Вебмастер", "KeyCollector", "Screaming Frog", "GA4", "Ahrefs"],
            advantages: ["Рост трафика до 300%", "Топ-10 по 70+ запросам", "Core Web Vitals", "Ежемесячная отчетность", "Гарантия KPI"]
        },
        "AI и Machine Learning": {
            description: "Внедряем нейросети в ваш бизнес...",
            stack: ["Python / FastAPI", "TensorFlow / PyTorch", "CatBoost", "OpenAI / YandexGPT", "Airflow"],
            advantages: ["Автоматизация до 80%", "+25-40% конверсии", "Чат-боты", "Точность до 95%", "Обработка терабайт данных"]
        },
        "Мобильные приложения": {
            description: "Нативные и кроссплатформенные приложения под iOS и Android...",
            stack: ["React Native", "Swift / Kotlin", "Flutter", "Firebase", "GraphQL"],
            advantages: ["Публикация в сторах", "Оффлайн-режим", "Биометрия", "60 FPS", "Горячие обновления"]
        }
    };

    function openServiceModal(serviceName) {
        const details = serviceDetails[serviceName];
        if (!details) return;
        
        const modal = document.getElementById('serviceModal');
        const title = document.getElementById('modalTitle');
        const description = document.getElementById('modalDescription');
        const stackList = document.getElementById('modalStackList');
        const advantagesList = document.getElementById('modalAdvantages');
        
        title.textContent = serviceName;
        description.textContent = details.description;
        
        stackList.innerHTML = '';
        details.stack.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            stackList.appendChild(li);
        });
        
        advantagesList.innerHTML = '';
        details.advantages.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            advantagesList.appendChild(li);
        });
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        const modal = document.getElementById('serviceModal');
        if (modal) modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function initServiceModal() {
        const cards = document.querySelectorAll('.service-card');
        const modal = document.getElementById('serviceModal');
        const closeBtn = document.querySelector('.modal-close');
        const contactBtn = document.getElementById('modalContactBtn');
        
        cards.forEach(card => {
            const btn = card.querySelector('.card-btn');
            const titleElement = card.querySelector('h3');
            
            if (btn && titleElement) {
                const serviceName = titleElement.textContent.trim();
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openServiceModal(serviceName);
                });
            }
        });
        
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (modal) modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        if (contactBtn) contactBtn.addEventListener('click', () => {
            closeModal();
            const contactSection = document.getElementById('contact');
            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modalEl = document.getElementById('serviceModal');
                if (modalEl && modalEl.classList.contains('active')) closeModal();
            }
        });
    }

    // ============================================
    // HERO БАННЕР
    // ============================================
    function initHeroMatrixRain() {
        const canvas = document.getElementById('matrixCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let w = window.innerWidth;
        let h = window.innerHeight;
        
        canvas.width = w;
        canvas.height = h;
        
        const chars = "01<>/{}[]=+-*&%$#@!~ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const wordsArr = ['DESIGN', 'CODE', 'AI', 'ALBE', 'DIGITAL'];
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
            return (Math.random() < 0.04) ? wordsArr[Math.floor(Math.random() * wordsArr.length)] : chars[Math.floor(Math.random() * chars.length)];
        }
        
        function drawMatrix(now) {
            requestAnimationFrame(drawMatrix);
            if (now - lastFrameTime < frameInterval) return;
            lastFrameTime = now;
            
            ctx.fillStyle = 'rgba(5,7,10,0.03)';
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

    function initHeroStaticElements() {
        const elements = ['agencyTag', 'leftPhrase', 'badgesGrid', 'staticPrefix', 'dynamicWordContainer'];
        elements.forEach((id, idx) => {
            const el = document.getElementById(id);
            if (el) setTimeout(() => el.style.opacity = "1", 1300 + idx * 100);
        });
        const statsRow = document.getElementById('statsRow');
        if (statsRow) setTimeout(() => statsRow.classList.add('visible'), 2000);
    }

    function initHeroTypewriter() {
        const words = ["ДИЗАЙН", "ПРИЛОЖЕНИЯ", "SEO СТРАТЕГИЮ", "САЙТЫ ПОД КЛЮЧ", "E-COMMERCE", "AI РЕКЛАМУ"];
        let wordIndex = 0;
        let isDeleting = false;
        let text = "";
        let typingSpeed = 100;
        const pauseTime = 1500;
        const el = document.getElementById('dynamicWordContainer');
        
        function type() {
            if (!el) return;
            const fullWord = words[wordIndex];
            
            if (isDeleting) {
                text = fullWord.substring(0, text.length - 1);
                typingSpeed = 50;
            } else {
                text = fullWord.substring(0, text.length + 1);
                typingSpeed = 100;
            }
            
            el.innerHTML = '<span class="dynamic-word-yellow">' + text + '</span><span class="cursor"></span>';
            
            if (!isDeleting && text === fullWord) {
                isDeleting = true;
                setTimeout(type, pauseTime);
                return;
            } else if (isDeleting && text === "") {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 200);
                return;
            }
            
            setTimeout(type, typingSpeed);
        }
        
        setTimeout(() => {
            if (el) {
                el.style.opacity = "1";
                el.innerHTML = '<span class="cursor"></span>';
                setTimeout(() => {
                    type();
                }, 300);
            }
        }, 2800);
    }

    // ============================================
    // ЗАГРУЗКА КОМПОНЕНТОВ
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
    // ЗАПУСК
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        initHeroMatrixRain();
        initHeroStaticElements();
        initHeroTypewriter();
        initTechTooltips();
        initCalculatorWithFallback();
        initLazyKinescope();      // ← ВОССТАНОВЛЕНО
        initSmoothScroll();
        initHeaderFixed();
        initBurgerMenu();
        initCaseAccordion();
        initKineticToTop();
        initServiceModal();
        initPortfolioAccordion();
        
        loadComponent('header-placeholder', 'header.html', function() {
            initBurgerMenu();
            initHeaderFixed();
        });
        loadComponent('footer-placeholder', 'footer.html');
    });

})();
