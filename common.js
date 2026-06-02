// ============================================
// common.js — С НАСТОЯЩЕЙ ЛЕНИВОЙ ЗАГРУЗКОЙ
// ============================================

(function() {
    'use strict';

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
    // 3D ПАРАЛЛАКС ДЛЯ КАРТОЧЕК
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
            '.section-more-btn, button[type="submit"], .header-telegram'
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
        parent.replaceChild(wrapper, toTopBtn);
        
        initKineticButtonEffects(kineticBtn, btnText);
        
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
    // ЛЕНИВАЯ ЗАГРУЗКА КАРТИНОК
    // ============================================
    function initLazyImages() {
        const images = document.querySelectorAll('img[data-src], img[loading="lazy"]');
        
        if (images.length === 0) return;
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const dataSrc = img.getAttribute('data-src');
                    if (dataSrc) {
                        img.src = dataSrc;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '100px', threshold: 0.01 });
        
        images.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // ЛЕНИВАЯ ЗАГРУЗКА СЕКЦИЙ (ОСНОВНАЯ ФИШКА!)
    // ============================================
    
    // HTML-коды всех секций (загружаем только при скролле)
    const lazySectionsHtml = {
        'portfolio': `<!-- КЕЙСЫ / ПОРТФОЛИО -->
<section id="portfolio" class="section">
    <div class="container">
        <div class="section-header">
            <h2>Кейсы / Портфолио</h2>
            <a href="#portfolio" class="section-more-btn">Все проекты</a>
        </div>
        <div class="portfolio-accordion">
            <div class="accordion-panel">
                <div class="accordion-panel-header">
                    <div class="panel-number">01</div>
                    <div class="panel-title"><h3>NeoBank Platform</h3></div>
                </div>
                <div class="accordion-panel-content">
                    <div class="panel-image"><picture><source data-srcset="images/bank.avif" type="image/avif"><img data-src="images/bank.avif" alt="Neo Bank Platform" loading="lazy"></picture></div>
                    <div class="panel-description"><p>Современная онлайн-банк платформа с персонализированными дашбордами, аналитикой расходов и интеграцией с платежными системами. Рост активных клиентов +210%.</p></div>
                    <div class="panel-tech"><h4>Технологии</h4><div class="tech-items"><span>React 18</span><span>Next.js 14</span><span>TypeScript</span><span>Node.js</span><span>PostgreSQL</span><span>Docker</span></div></div>
                    <div class="metrics-row"><div class="metric-item"><span class="metric-label">Длительность</span><span class="metric-value">8 недель</span></div><div class="metric-item"><span class="metric-label">Команда</span><span class="metric-value">3 разработчика + дизайнер</span></div><div class="metric-item"><span class="metric-label">Результат</span><span class="metric-value">+210% клиентов</span></div></div>
                    <div class="metrics-bottom"><div class="metric-hours"><span class="metric-label">Часы</span><span class="metric-value">320 ч</span></div><div class="metric-price"><span class="metric-label">Стоимость</span><span class="metric-value">640 000 ₽</span></div></div>
                </div>
            </div>
            <div class="accordion-panel">
                <div class="accordion-panel-header">
                    <div class="panel-number">02</div>
                    <div class="panel-title"><h3>AI система</h3></div>
                </div>
                <div class="accordion-panel-content">
                    <div class="panel-image"><picture><source data-srcset="images/ai.avif" type="image/avif"><img data-src="images/ai.avif" alt="AI рекомендательная система" loading="lazy"></picture></div>
                    <div class="panel-description"><p>Нейросетевая рекомендательная система для крупного интернет-магазина. Персонализация предложений увеличила конверсию на 34%.</p></div>
                    <div class="panel-tech"><h4>Технологии</h4><div class="tech-items"><span>Python</span><span>Django</span><span>TensorFlow</span><span>PyTorch</span><span>Redis</span><span>React</span></div></div>
                    <div class="metrics-row"><div class="metric-item"><span class="metric-label">Длительность</span><span class="metric-value">12 недель</span></div><div class="metric-item"><span class="metric-label">Команда</span><span class="metric-value">2 ML инженера + 2 разработчика</span></div><div class="metric-item"><span class="metric-label">Результат</span><span class="metric-value">+34% конверсии</span></div></div>
                    <div class="metrics-bottom"><div class="metric-hours"><span class="metric-label">Часы</span><span class="metric-value">480 ч</span></div><div class="metric-price"><span class="metric-label">Стоимость</span><span class="metric-value">960 000 ₽</span></div></div>
                </div>
            </div>
            <div class="accordion-panel">
                <div class="accordion-panel-header">
                    <div class="panel-number">03</div>
                    <div class="panel-title"><h3>FitTrack приложение</h3></div>
                </div>
                <div class="accordion-panel-content">
                    <div class="panel-image"><picture><source data-srcset="images/app.avif" type="image/avif"><img data-src="images/app.avif" alt="FitTrack приложение" loading="lazy"></picture></div>
                    <div class="panel-description"><p>Мобильное приложение для отслеживания тренировок и питания с интеграцией фитнес-браслетов и AI-тренером. Более 50 000 установок.</p></div>
                    <div class="panel-tech"><h4>Технологии</h4><div class="tech-items"><span>React Native</span><span>TypeScript</span><span>Redux Toolkit</span><span>Node.js</span><span>MongoDB</span><span>Firebase</span></div></div>
                    <div class="metrics-row"><div class="metric-item"><span class="metric-label">Длительность</span><span class="metric-value">14 недель</span></div><div class="metric-item"><span class="metric-label">Команда</span><span class="metric-value">2 мобильных разработчика + бэкенд</span></div><div class="metric-item"><span class="metric-label">Результат</span><span class="metric-value">50 000+ установок</span></div></div>
                    <div class="metrics-bottom"><div class="metric-hours"><span class="metric-label">Часы</span><span class="metric-value">600 ч</span></div><div class="metric-price"><span class="metric-label">Стоимость</span><span class="metric-value">1 200 000 ₽</span></div></div>
                </div>
            </div>
            <div class="accordion-panel">
                <div class="accordion-panel-header">
                    <div class="panel-number">04</div>
                    <div class="panel-title"><h3>Luxury Estate Portal</h3></div>
                </div>
                <div class="accordion-panel-content">
                    <div class="panel-image"><picture><source data-srcset="images/bank.avif" type="image/avif"><img data-src="images/bank.avif" alt="Luxury Estate Portal" loading="lazy"></picture></div>
                    <div class="panel-description"><p>Премиум портал для продажи элитной недвижимости с 3D-турами, интеграцией с CRM и автоматическим расчетом ипотеки. +40% среднего чека.</p></div>
                    <div class="panel-tech"><h4>Технологии</h4><div class="tech-items"><span>Vue 3</span><span>Nuxt 3</span><span>Laravel</span><span>MySQL</span><span>Three.js</span><span>Docker</span></div></div>
                    <div class="metrics-row"><div class="metric-item"><span class="metric-label">Длительность</span><span class="metric-value">16 недель</span></div><div class="metric-item"><span class="metric-label">Команда</span><span class="metric-value">3 разработчика + дизайнер</span></div><div class="metric-item"><span class="metric-label">Результат</span><span class="metric-value">+40% среднего чека</span></div></div>
                    <div class="metrics-bottom"><div class="metric-hours"><span class="metric-label">Часы</span><span class="metric-value">720 ч</span></div><div class="metric-price"><span class="metric-label">Стоимость</span><span class="metric-value">1 440 000 ₽</span></div></div>
                </div>
            </div>
            <div class="accordion-panel">
                <div class="accordion-panel-header">
                    <div class="panel-number">05</div>
                    <div class="panel-title"><h3>LogiSmart Platform</h3></div>
                </div>
                <div class="accordion-panel-content">
                    <div class="panel-image"><picture><source data-srcset="images/ai.avif" type="image/avif"><img data-src="images/ai.avif" alt="LogiSmart Platform" loading="lazy"></picture></div>
                    <div class="panel-description"><p>Система управления логистикой с IoT-трекингом, оптимизацией маршрутов на основе AI. Снижение затрат на доставку на 25%.</p></div>
                    <div class="panel-tech"><h4>Технологии</h4><div class="tech-items"><span>Go</span><span>React</span><span>WebSocket</span><span>TimescaleDB</span><span>Kafka</span><span>Kubernetes</span></div></div>
                    <div class="metrics-row"><div class="metric-item"><span class="metric-label">Длительность</span><span class="metric-value">20 недель</span></div><div class="metric-item"><span class="metric-label">Команда</span><span class="metric-value">4 разработчика + аналитик</span></div><div class="metric-item"><span class="metric-label">Результат</span><span class="metric-value">-25% затрат на доставку</span></div></div>
                    <div class="metrics-bottom"><div class="metric-hours"><span class="metric-label">Часы</span><span class="metric-value">840 ч</span></div><div class="metric-price"><span class="metric-label">Стоимость</span><span class="metric-value">1 680 000 ₽</span></div></div>
                </div>
            </div>
        </div>
    </div>
</section>`,
        'services': `<!-- ЭКСКЛЮЗИВНЫЕ РЕШЕНИЯ (УСЛУГИ) -->
<section id="services" class="section">
    <div class="container">
        <div class="section-header"><h2>Эксклюзивные решения</h2><a href="/services/" class="section-more-btn">Все услуги</a></div>
        <div class="services-grid">
            <div class="service-card quantum-card">
                <div class="segment segment-1"></div>
                <div class="segment segment-2"></div>
                <div class="segment segment-3"></div>
                <div class="segment segment-4"></div>
                <div class="corner corner-tl"></div>
                <div class="corner corner-tr"></div>
                <div class="corner corner-bl"></div>
                <div class="corner corner-br"></div>
                <div class="card-content">
                    <div><div class="color-strip"><div class="color-dot dot-pink"></div><div class="color-dot dot-teal"></div><div class="color-dot dot-mint"></div><div class="color-dot dot-purple"></div></div><h3>Веб-разработка</h3><p>Современный стек: React, Vue, Node.js, Laravel. Высокая производительность и масштабируемость.</p></div>
                    <button class="card-btn" data-service="web-development">ПОДРОБНЕЕ</button>
                </div>
            </div>
            <div class="service-card quantum-card">
                <div class="segment segment-1"></div>
                <div class="segment segment-2"></div>
                <div class="segment segment-3"></div>
                <div class="segment segment-4"></div>
                <div class="corner corner-tl"></div>
                <div class="corner corner-tr"></div>
                <div class="corner corner-bl"></div>
                <div class="corner corner-br"></div>
                <div class="card-content">
                    <div><div class="color-strip"><div class="color-dot dot-pink"></div><div class="color-dot dot-teal"></div><div class="color-dot dot-mint"></div><div class="color-dot dot-purple"></div></div><h3>Иммерсивный дизайн</h3><p>Микровзаимодействия, 3D-сцены, анимация. Визуальный язык, который запоминается.</p></div>
                    <button class="card-btn" data-service="design">ПОДРОБНЕЕ</button>
                </div>
            </div>
            <div class="service-card quantum-card">
                <div class="segment segment-1"></div>
                <div class="segment segment-2"></div>
                <div class="segment segment-3"></div>
                <div class="segment segment-4"></div>
                <div class="corner corner-tl"></div>
                <div class="corner corner-tr"></div>
                <div class="corner corner-bl"></div>
                <div class="corner corner-br"></div>
                <div class="card-content">
                    <div><div class="color-strip"><div class="color-dot dot-pink"></div><div class="color-dot dot-teal"></div><div class="color-dot dot-mint"></div><div class="color-dot dot-purple"></div></div><h3>E-commerce платформы</h3><p>Интернет-магазины с конверсией 15%+, интеграция с 1С, CRM и маркетплейсами.</p></div>
                    <button class="card-btn" data-service="ecommerce">ПОДРОБНЕЕ</button>
                </div>
            </div>
            <div class="service-card quantum-card">
                <div class="segment segment-1"></div>
                <div class="segment segment-2"></div>
                <div class="segment segment-3"></div>
                <div class="segment segment-4"></div>
                <div class="corner corner-tl"></div>
                <div class="corner corner-tr"></div>
                <div class="corner corner-bl"></div>
                <div class="corner corner-br"></div>
                <div class="card-content">
                    <div><div class="color-strip"><div class="color-dot dot-pink"></div><div class="color-dot dot-teal"></div><div class="color-dot dot-mint"></div><div class="color-dot dot-purple"></div></div><h3>SEO и аналитика</h3><p>Полная оптимизация: от семантики до лидерских позиций в Яндексе и Google.</p></div>
                    <button class="card-btn" data-service="seo">ПОДРОБНЕЕ</button>
                </div>
            </div>
            <div class="service-card quantum-card">
                <div class="segment segment-1"></div>
                <div class="segment segment-2"></div>
                <div class="segment segment-3"></div>
                <div class="segment segment-4"></div>
                <div class="corner corner-tl"></div>
                <div class="corner corner-tr"></div>
                <div class="corner corner-bl"></div>
                <div class="corner corner-br"></div>
                <div class="card-content">
                    <div><div class="color-strip"><div class="color-dot dot-pink"></div><div class="color-dot dot-teal"></div><div class="color-dot dot-mint"></div><div class="color-dot dot-purple"></div></div><h3>AI и Machine Learning</h3><p>Чат-боты, рекомендательные системы, аналитика данных, генеративный AI.</p></div>
                    <button class="card-btn" data-service="ai">ПОДРОБНЕЕ</button>
                </div>
            </div>
            <div class="service-card quantum-card">
                <div class="segment segment-1"></div>
                <div class="segment segment-2"></div>
                <div class="segment segment-3"></div>
                <div class="segment segment-4"></div>
                <div class="corner corner-tl"></div>
                <div class="corner corner-tr"></div>
                <div class="corner corner-bl"></div>
                <div class="corner corner-br"></div>
                <div class="card-content">
                    <div><div class="color-strip"><div class="color-dot dot-pink"></div><div class="color-dot dot-teal"></div><div class="color-dot dot-mint"></div><div class="color-dot dot-purple"></div></div><h3>Мобильные приложения</h3><p>iOS, Android, React Native, Flutter. Полный цикл от идеи до публикации.</p></div>
                    <button class="card-btn" data-service="mobile">ПОДРОБНЕЕ</button>
                </div>
            </div>
        </div>
    </div>
</section>`,
        'ai-reklama': `<!-- AI РЕКЛАМА -->
<section id="ai-reklama" class="section ai-reklama-section">
    <div class="container">
        <div class="section-header"><h2>AI реклама</h2><a href="/services/ai-ads/" class="section-more-btn">Все услуги</a></div>
        <div class="ai-design-grid">
            <div class="ai-cards-column">
                <div class="ai-card"><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="lines"><div class="line line-1"></div><div class="line line-2"></div><div class="line line-3"></div></div><div><h3>нейросети в рекламе</h3><p>Создаём продающие видео-ролики премиум класса.</p><div class="price-tag">от 20 000 ₽ / 30 сек</div></div></div>
                <div class="ai-card"><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="lines"><div class="line line-1"></div><div class="line line-2"></div><div class="line line-3"></div></div><div><h3>скорость и качество</h3><p>Ролик под ключ за 3 дня. Без потери качества. Правки, субтитры, адаптация под соцсети — включены в стоимость.</p><div class="price-tag">срок от 3 дней</div></div></div>
                <div class="ai-card"><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="lines"><div class="line line-1"></div><div class="line line-2"></div><div class="line line-3"></div></div><div><h3>премиум результат</h3><p>Уникальный визуальный стиль, AI аватар, профессиональная озвучка и вовлекающий сценарий.</p><div class="price-tag">окупаемость до 30 дней</div></div></div>
            </div>
            <div class="ai-videos-wrapper"><div class="ai-video-container"><div class="ai-video-item"><div class="video-placeholder" data-video-id="tyTxHyuEgCojbTw7uPFQxm"><div class="video-frame"><img data-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='711' viewBox='0 0 400 711'%3E%3Crect width='400' height='711' fill='%23833AB4'/%3E%3Ctext x='200' y='355' text-anchor='middle' fill='white' font-size='18'%3EAI РОЛИК 1%3C/text%3E%3C/svg%3E" alt="Превью AI видео рекламы 1" loading="lazy"><div class="play-overlay"><svg class="play-icon" viewBox="0 0 24 24" width="64" height="64" fill="white"><path d="M8 5v14l11-7z"/></svg></div></div></div></div><div class="ai-video-item"><div class="video-placeholder" data-video-id="wzToMP6ZpNgEfgDNY7ecHM"><div class="video-frame"><img data-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='711' viewBox='0 0 400 711'%3E%3Crect width='400' height='711' fill='%23D62976'/%3E%3Ctext x='200' y='355' text-anchor='middle' fill='white' font-size='18'%3EAI РОЛИК 2%3C/text%3E%3C/svg%3E" alt="Превью AI видео рекламы 2" loading="lazy"><div class="play-overlay"><svg class="play-icon" viewBox="0 0 24 24" width="64" height="64" fill="white"><path d="M8 5v14l11-7z"/></svg></div></div></div></div><div class="ai-video-item"><div class="video-placeholder" data-video-id="it8tEfjsnaLMaCU712FV2S"><div class="video-frame"><img data-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='729' viewBox='0 0 400 729'%3E%3Crect width='400' height='729' fill='%23F56040'/%3E%3Ctext x='200' y='364' text-anchor='middle' fill='white' font-size='18'%3EAI РОЛИК 3%3C/text%3E%3C/svg%3E" alt="Превью AI видео рекламы 3" loading="lazy"><div class="play-overlay"><svg class="play-icon" viewBox="0 0 24 24" width="64" height="64" fill="white"><path d="M8 5v14l11-7z"/></svg></div></div></div></div></div></div>
        </div>
    </div>
</section>`,
        'process': `<!-- ПРОЦЕСС -->
<section id="process" class="section"><div class="container"><div class="section-header"><h2>Как мы создаём лидеров рынка</h2><a href="/process/" class="section-more-btn">Подробнее</a></div><div class="steps-container"><div class="step-card"><div class="step-num">01</div><h3>Аналитика</h3><p>Изучаем нишу, конкурентов, ЦА. Формируем KPI.</p></div><div class="step-card"><div class="step-num">02</div><h3>Прототипирование</h3><p>Интерактивные прототипы, тестирование гипотез.</p></div><div class="step-card"><div class="step-num">03</div><h3>Дизайн и код</h3><p>Пиксель-перфект, чистый код, ежедневные билды.</p></div><div class="step-card"><div class="step-num">04</div><h3>SEO и запуск</h3><p>Техническая SEO-оптимизация, деплой, мониторинг.</p></div></div></div></section>`,
        'team': `<!-- КОМАНДА -->
<section class="team-section"><div class="container"><div class="team-header"><h2>Наша команда</h2><div class="team-subtitle">Единомышленники, объединённые целью создавать цифровые продукты мирового уровня</div></div><div class="team-layout"><div class="founder-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="founder-content"><div class="founder-avatar"><div class="founder-avatar-inner"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F5B700" stroke-width="1.5"><path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2z" fill="#F5B700"/></svg></div></div><div class="founder-name">Алексей Белов</div><div class="founder-role">Основатель / CEO</div><div class="founder-bio">Основатель ALBE digital. Более 12 лет в IT-индустрии, эксперт в области цифровой трансформации и AI-технологий. Запустил более 50 успешных digital-проектов для крупного бизнеса.</div><div class="founder-quote"><p>«Мы создаём не просто сайты — мы строим цифровую экосистему, которая работает на результат 24/7»</p><span>— Алексей Белов</span></div><div class="founder-stats"><div class="founder-stat"><span class="stat-number">50+</span><span class="stat-label">успешных проектов</span></div><div class="founder-stat"><span class="stat-number">12 лет</span><span class="stat-label">в индустрии</span></div><div class="founder-stat"><span class="stat-number">24/7</span><span class="stat-label">на связи</span></div></div></div></div><div class="specialists-grid"><div class="specialist-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="specialist-content"><div class="specialist-avatar"><div class="specialist-avatar-inner"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg></div></div><div class="specialist-name">Артём Белов</div><div class="specialist-role">Tech Lead / Fullstack</div><div class="specialist-bio">Архитектор высоконагруженных систем. 9 лет в разработке, эксперт в React, Node.js и микросервисах.</div><div class="specialist-stack"><span class="specialist-stack-tag">React</span><span class="specialist-stack-tag">Node.js</span><span class="specialist-stack-tag">TypeScript</span></div></div></div><div class="specialist-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="specialist-content"><div class="specialist-avatar"><div class="specialist-avatar-inner"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div></div><div class="specialist-name">Екатерина Воронова</div><div class="specialist-role">AI / ML инженер</div><div class="specialist-bio">Специалист по компьютерному зрению и LLM. Разработала 12+ рекомендательных систем с нуля.</div><div class="specialist-stack"><span class="specialist-stack-tag">Python</span><span class="specialist-stack-tag">TensorFlow</span><span class="specialist-stack-tag">PyTorch</span></div></div></div><div class="specialist-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="specialist-content"><div class="specialist-avatar"><div class="specialist-avatar-inner"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div></div><div class="specialist-name">Марк Штерн</div><div class="specialist-role">Creative Director / UI/UX</div><div class="specialist-bio">Продающий дизайн и иммерсивные интерфейсы. Победитель международных премий в digital дизайне.</div><div class="specialist-stack"><span class="specialist-stack-tag">Figma</span><span class="specialist-stack-tag">After Effects</span><span class="specialist-stack-tag">Spline</span></div></div></div><div class="specialist-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="specialist-content"><div class="specialist-avatar"><div class="specialist-avatar-inner"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div></div><div class="specialist-name">Ольга Дымова</div><div class="specialist-role">SEO-стратег / Head of Marketing</div><div class="specialist-bio">Вывела 30+ проектов в ТОП-3 Яндекса. Глубокая аналитика и стратегии с гарантированным ROI.</div><div class="specialist-stack"><span class="specialist-stack-tag">Ahrefs</span><span class="specialist-stack-tag">Semrush</span><span class="specialist-stack-tag">GA4</span></div></div></div></div></div><div class="team-more-wrapper"><div class="kinetic-team-btn"><div class="segment-left"></div><div class="segment-center"></div><div class="segment-right"></div><span class="btn-text">ВСЯ КОМАНДА</span></div></div></div></section>`,
        'competences': `<!-- КОМПЕТЕНЦИИ -->
<section id="competences" class="section"><div class="container"><div class="section-header"><h2>Наши компетенции</h2><a href="/competences/" class="section-more-btn">Подробнее</a></div><div class="competences-grid"><div class="competence-card"><h3>Frontend</h3><p>Современные интерфейсы</p><div class="competence-tech-list"><div class="tech-item" data-tech="react">React / Next.js</div><div class="tech-item" data-tech="ts">TypeScript</div><div class="tech-item" data-tech="redux">Redux / RTK</div><div class="tech-item" data-tech="ssr">SSR / SSG</div><div class="tech-item" data-tech="css">CSS3 / SASS / Tailwind</div></div></div><div class="competence-card"><h3>Backend</h3><p>Надёжная архитектура</p><div class="competence-tech-list"><div class="tech-item" data-tech="node">Node.js / Nest.js</div><div class="tech-item" data-tech="python">Python / Django</div><div class="tech-item" data-tech="cpp">C++</div><div class="tech-item" data-tech="postgres">PostgreSQL / MS SQL</div><div class="tech-item" data-tech="redis">Redis / Elasticsearch</div><div class="tech-item" data-tech="rabbitmq">RabbitMQ / Kafka</div></div></div><div class="competence-card"><h3>DevOps и Cloud</h3><p>Масштабирование и инфраструктура</p><div class="competence-tech-list"><div class="tech-item" data-tech="kubernetes">Kubernetes</div><div class="tech-item" data-tech="docker">Docker</div><div class="tech-item" data-tech="yandex">Yandex Cloud / Selectel</div><div class="tech-item" data-tech="gitlab">GitLab CI/CD</div><div class="tech-item" data-tech="terraform">Terraform / Ansible</div><div class="tech-item" data-tech="jenkins">Jenkins / ArgoCD</div></div></div><div class="competence-card"><h3>Mobile Development</h3><p>Кроссплатформенные приложения</p><div class="competence-tech-list"><div class="tech-item" data-tech="reactnative">React Native / Expo</div><div class="tech-item" data-tech="swift">Swift / Objective C</div><div class="tech-item" data-tech="kotlin">Kotlin / Java</div><div class="tech-item" data-tech="flutter">Flutter</div></div></div><div class="competence-card"><h3>AI и Machine Learning</h3><p>Нейросети и анализ данных</p><div class="competence-tech-list"><div class="tech-item" data-tech="ml">ML / DL / NLP</div><div class="tech-item" data-tech="python_ml">Python / Pandas / Sklearn</div><div class="tech-item" data-tech="catboost">CatBoost / OpenVINO</div><div class="tech-item" data-tech="airflow">Airflow / sqlalchemy</div><div class="tech-item" data-tech="vision">Computer Vision</div><div class="tech-item" data-tech="voice">Voice technologies ASR/TTS</div></div></div><div class="competence-card"><h3>Testing и QA</h3><p>Качество и надежность</p><div class="competence-tech-list"><div class="tech-item" data-tech="postman">Postman / Swagger</div><div class="tech-item" data-tech="jmeter">JMeter</div><div class="tech-item" data-tech="testrail">TestRail</div><div class="tech-item" data-tech="charles">Charles / Fiddler</div></div></div><div class="competence-card"><h3>Architecture и Design</h3><p>Проектирование систем</p><div class="competence-tech-list"><div class="tech-item" data-tech="uml">UML 2.x / BPMN 2.0</div><div class="tech-item" data-tech="figma">Figma</div><div class="tech-item" data-tech="enterprise">Sparx Enterprise Architect</div><div class="tech-item" data-tech="iso">ISO/IEC 12207 / 15288</div><div class="tech-item" data-tech="scrum">SCRUM / Agile</div></div></div><div class="competence-card"><h3>Data Analytics</h3><p>Аналитика больших данных</p><div class="competence-tech-list"><div class="tech-item" data-tech="bigdata">Big Data аналитика</div><div class="tech-item" data-tech="trading">Trading аналитика</div><div class="tech-item" data-tech="blockchain">Blockchain аналитика</div><div class="tech-item" data-tech="graph">Graph analytics</div></div></div></div></div></section>`,
        'calculator': `<!-- КАЛЬКУЛЯТОР -->
<section id="calculator" class="section"><div class="container"><div class="section-header"><h2>Калькулятор стоимости</h2><a href="/calculator/" class="section-more-btn">Рассчитать</a></div><div class="calculator-card interactive-calculator" id="interactiveCalculator"><div class="calculator-two-columns"><div class="calculator-left"><div class="calc-group"><div class="calc-label">Услуги:</div><div class="calc-options" id="calcServices"><div data-service="design" class="calc-option">Дизайн (UI/UX)</div><div data-service="front" class="calc-option">Frontend</div><div data-service="back" class="calc-option">Backend</div><div data-service="seo" class="calc-option">SEO</div><div data-service="cms" class="calc-option">CMS</div><div data-service="crm" class="calc-option">CRM / ERP</div><div data-service="ai" class="calc-option">AI / ML</div><div data-service="mobile" class="calc-option">Мобильное приложение</div><div data-service="support" class="calc-option">Техподдержка</div></div></div><div class="calc-group"><div class="calc-label">Сложность:</div><div class="calc-options" id="calcComplexity"><div data-complex="simple" class="calc-option">Старт (Лендинг)</div><div data-complex="medium" class="calc-option">Бизнес (Сайт услуг)</div><div data-complex="high" class="calc-option">Премиум (Магазин)</div><div data-complex="enterprise" class="calc-option">Enterprise (Портал)</div></div></div><div class="calc-total-block"><div class="calc-price" id="calcPrice">0 ₽</div><div id="calcHoursInfo" style="font-size:.85rem;color:#B0C4DE"></div></div></div><div class="calculator-right stack-explanation" id="stackExplanation"><h3>Рекомендуемый стек</h3><p>Выберите услуги для расчёта</p></div></div></div></div></section>`,
        'reviews': `<!-- ОТЗЫВЫ -->
<section class="reviews-section"><div class="container"><div class="reviews-header"><h2>Что говорят клиенты</h2><div class="reviews-subtitle">Более 150 успешных проектов и сотни благодарных клиентов по всей России</div></div><div class="reviews-stats"><div class="reviews-stat-item"><span class="reviews-stat-number">4.98</span><span class="reviews-stat-label">средний рейтинг</span></div><div class="reviews-stat-item"><span class="reviews-stat-number">150+</span><span class="reviews-stat-label">довольных клиентов</span></div><div class="reviews-stat-item"><span class="reviews-stat-number">98%</span><span class="reviews-stat-label">возвращаются</span></div></div><div class="reviews-grid"><div class="review-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="review-content"><div class="review-quote-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm-8 8h-4v-4h4v4zm8 0h-4v-4h4v4z"/></svg></div><div class="review-company-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="margin-right:6px"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> CRM-система</div><div class="review-text">Выражаем искреннюю благодарность Студии Разработки Albe за проделанную работу при создании и внедрении CRM-системы, которая стала важным шагом на пути к повышению эффективности наших бизнес-процессов и улучшению взаимодействия с клиентами. Благодаря высокому профессионализму вашей команды, глубокому пониманию наших потребностей и индивидуальному подходу, проект был успешно реализован в кратчайшие сроки на самом высоком уровне.</div><div class="review-client"><div class="client-avatar"><div class="client-avatar-inner"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1"><circle cx="12" cy="8" r="4"/><path d="M5 20v-2a7 7 0 0 1 14 0v2"/></svg></div></div><div class="client-info"><div class="client-name">Елена Верник</div><div class="client-position">IT Recruiter, ПАО СБЕРБАНК</div></div></div></div></div><div class="review-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="review-content"><div class="review-quote-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm-8 8h-4v-4h4v4zm8 0h-4v-4h4v4z"/></svg></div><div class="review-company-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="margin-right:6px"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="16" y2="13"/></svg> Сбербанк Онлайн</div><div class="review-text">ПАО СБЕРБАНК выражает признательность команде Albe за значительный вклад в разработку приложения «Сбербанк Онлайн». Особое внимание хотелось бы уделить вашему специалисту, который взял на себя нелёгкую задачу занять должность Team Lead в отделе разработки Frontend. С уверенностью можем рекомендовать компанию Albe как надёжного партнёра.</div><div class="review-client"><div class="client-avatar"><div class="client-avatar-inner"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1"><circle cx="12" cy="8" r="4"/><path d="M5 20v-2a7 7 0 0 1 14 0v2"/></svg></div></div><div class="client-info"><div class="client-name">Николай Юрьевич Беляков</div><div class="client-position">Руководитель направления, ПАО СБЕРБАНК</div></div></div></div></div><div class="review-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="review-content"><div class="review-quote-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm-8 8h-4v-4h4v4zm8 0h-4v-4h4v4z"/></svg></div><div class="review-company-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="margin-right:6px"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg> Голосовой ассистент</div><div class="review-text">От лица T-Bank выражаем огромную благодарность студии за участие в разработке голосового ассистента T-Банк нашего проекта на базе искусственного интеллекта. Команда Albe профессионально подошла к задаче, на каждом этапе демонстрируя высокий уровень экспертизы и креативный подход.</div><div class="review-client"><div class="client-avatar"><div class="client-avatar-inner"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1"><circle cx="12" cy="8" r="4"/><path d="M5 20v-2a7 7 0 0 1 14 0v2"/></svg></div></div><div class="client-info"><div class="client-name">Валерий Акимов</div><div class="client-position">Директор по цифровым технологиям, T-Bank</div></div></div></div></div><div class="review-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="review-content"><div class="review-quote-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm-8 8h-4v-4h4v4zm8 0h-4v-4h4v4z"/></svg></div><div class="review-company-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="margin-right:6px"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> Отель Аквамарин</div><div class="review-text">Спасибо, Albe, за великолепный опыт сотрудничества! Каждый этап разработки сайта проходил гладко, и мы получили именно то, что хотели. Успехов вам!</div><div class="review-client"><div class="client-avatar"><div class="client-avatar-inner"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1"><circle cx="12" cy="8" r="4"/><path d="M5 20v-2a7 7 0 0 1 14 0v2"/></svg></div></div><div class="client-info"><div class="client-name">Александра Кулик</div><div class="client-position">Отель Аквамарин, г. Зеленогорск</div></div></div></div></div><div class="review-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="review-content"><div class="review-quote-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm-8 8h-4v-4h4v4zm8 0h-4v-4h4v4z"/></svg></div><div class="review-company-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="margin-right:6px"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 2v20M17 2v20M2 12h20"/></svg> Интернет-магазин мебели</div><div class="review-text">Отличная работа команды Albe! Всё выполнено чётко, быстро и профессионально. Дизайн превзошёл все ожидания. Большое спасибо!</div><div class="review-client"><div class="client-avatar"><div class="client-avatar-inner"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1"><circle cx="12" cy="8" r="4"/><path d="M5 20v-2a7 7 0 0 1 14 0v2"/></svg></div></div><div class="client-info"><div class="client-name">Евгений Михайличенко</div><div class="client-position">Интернет-магазин офисной мебели, г. Архангельск</div></div></div></div></div><div class="review-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="review-content"><div class="review-quote-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm-8 8h-4v-4h4v4zm8 0h-4v-4h4v4z"/></svg></div><div class="review-company-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="margin-right:6px"><circle cx="12" cy="12" r="3"/><path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"/><path d="M12 9v3l2 2"/></svg> Компьютерное зрение</div><div class="review-text">Благодарность за разработку технологии компьютерного зрения для службы безопасности. Проект стал для нас настоящим прорывом в повышении уровня контроля, безопасности и эффективности работы. Высокий профессионализм команды, индивидуальный подход и стремление предоставить оптимальное решение.</div><div class="review-client"><div class="client-avatar"><div class="client-avatar-inner"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1"><circle cx="12" cy="8" r="4"/><path d="M5 20v-2a7 7 0 0 1 14 0v2"/></svg></div></div><div class="client-info"><div class="client-name">Евгений Алексеевич Корбут</div><div class="client-position">Начальник службы безопасности, ООО "Строймеханизм"</div></div></div></div></div></div><div class="reviews-more-wrapper"><div class="kinetic-reviews-btn"><div class="segment-left"></div><div class="segment-center"></div><div class="segment-right"></div><span class="btn-text">ВСЕ ОТЗЫВЫ</span></div></div></div></section>`,
        'why-us': `<!-- ПОЧЕМУ ВЫБИРАЮТ НАС -->
<section class="mission-new-section"><div class="container"><div class="mission-header"><h2>Почему выбирают нас</h2><div class="mission-subtitle">Мы создаём цифровые продукты, которые меняют рынок и приносят реальную прибыль</div></div><div class="mission-grid"><div class="mission-advantage-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="advantage-content"><div class="advantage-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div class="advantage-number">01</div><h3 class="advantage-title">Опыт и компетентность</h3><p class="advantage-text">Много лет успешного опыта разработки сложных продуктов и веб-сервисов с использованием искусственного интеллекта. Наши разработчики имеют высокий уровень профессионализма – от Middle до Team Lead.</p><div class="advantage-stats"><span class="stat">50+ проектов</span><span class="stat">12+ экспертов</span></div></div></div><div class="mission-advantage-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="advantage-content"><div class="advantage-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div><div class="advantage-number">02</div><h3 class="advantage-title">Доверие крупных брендов</h3><p class="advantage-text">Реализовали успешные проекты для таких компаний, как Сбер, Яндекс, ВКонтакте, Телеграм, крупных автодилеров, а также ресторанных сетей по всей России.</p><div class="advantage-stats"><span class="stat">Сбер</span><span class="stat">Яндекс</span><span class="stat">VK</span></div></div></div><div class="mission-advantage-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="advantage-content"><div class="advantage-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg></div><div class="advantage-number">03</div><h3 class="advantage-title">Качество и скорость</h3><p class="advantage-text">Мы гарантируем безупречное качество выполнения проектов и быструю реализацию благодаря опытной команде, эффективным процессам и современным технологиям.</p><div class="advantage-stats"><span class="stat">98% качества</span><span class="stat">в срок</span></div></div></div><div class="mission-advantage-card quantum-card"><div class="segment segment-1"></div><div class="segment segment-2"></div><div class="segment segment-3"></div><div class="segment segment-4"></div><div class="corner corner-tl"></div><div class="corner corner-tr"></div><div class="corner corner-bl"></div><div class="corner corner-br"></div><div class="advantage-content"><div class="advantage-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10h18M6 4h12M6 20h12M10 4v16M14 4v16"/></svg></div><div class="advantage-number">04</div><h3 class="advantage-title">Стоимость разработки</h3><p class="advantage-text">Сочетание доступных цен с высоким уровнем качества позволяет нашим клиентам эффективно использовать свой бюджет для достижения превосходных результатов.</p><div class="advantage-stats"><span class="stat">от 120 000 ₽</span><span class="stat">фикс. цена</span></div></div></div></div><div class="mission-numbers"><div class="number-item"><div class="number-value">7+</div><div class="number-label">лет на рынке</div></div><div class="number-divider"></div><div class="number-item"><div class="number-value">150+</div><div class="number-label">реализованных проектов</div></div><div class="number-divider"></div><div class="number-item"><div class="number-value">98%</div><div class="number-label">довольных клиентов</div></div><div class="number-divider"></div><div class="number-item"><div class="number-value">24/7</div><div class="number-label">техническая поддержка</div></div></div><div class="mission-more-wrapper"><div class="kinetic-mission-btn"><div class="segment-left"></div><div class="segment-center"></div><div class="segment-right"></div><span class="btn-text">О КОМПАНИИ</span></div></div></div></section>`,
        'faq': `<!-- FAQ -->
<section id="faq" class="section"><div class="container"><div class="section-header"><h2>Часто задаваемые вопросы</h2><a href="/faq/" class="section-more-btn">Подробнее</a></div><div class="cases-accordion" id="faqAccordion"><div class="case-item"><button class="case-lid"><div class="lid-left"><span class="case-number">ВОПРОС 01</span><span class="case-title">Сколько стоит разработка сайта под ключ?</span></div><div class="case-handle"><div class="handle-bar"></div></div></button><div class="case-inside"><div class="case-content"><div class="case-text">Стоимость разработки сайта под ключ рассчитывается индивидуально. Лендинг от 120 000 ₽, корпоративный сайт от 250 000 ₽, интернет-магазин от 450 000 ₽.</div><div class="project-meta"><span class="meta-tag">индивидуальный расчёт</span><span class="meta-tag">прозрачные цены</span></div></div></div></div><div class="case-item"><button class="case-lid"><div class="lid-left"><span class="case-number">ВОПРОС 02</span><span class="case-title">Какие сроки разработки сайта?</span></div><div class="case-handle"><div class="handle-bar"></div></div></button><div class="case-inside"><div class="case-content"><div class="case-text">Сроки разработки сайта под ключ составляют от 3 до 12 недель в зависимости от сложности проекта.</div><div class="project-meta"><span class="meta-tag">3–12 недель</span><span class="meta-tag">под ключ</span></div></div></div></div><div class="case-item"><button class="case-lid"><div class="lid-left"><span class="case-number">ВОПРОС 03</span><span class="case-title">Даёте гарантию на SEO продвижение?</span></div><div class="case-handle"><div class="handle-bar"></div></div></button><div class="case-inside"><div class="case-content"><div class="case-text">Да, мы гарантируем выполнение KPI по SEO продвижению. Заключаем договор с чёткими показателями.</div><div class="project-meta"><span class="meta-tag">гарантия KPI</span><span class="meta-tag">договор</span></div></div></div></div><div class="case-item"><button class="case-lid"><div class="lid-left"><span class="case-number">ВОПРОС 04</span><span class="case-title">Разрабатываете мобильные приложения?</span></div><div class="case-handle"><div class="handle-bar"></div></div></button><div class="case-inside"><div class="case-content"><div class="case-text">Да, мы разрабатываем мобильные приложения под iOS, Android и кроссплатформенные решения.</div><div class="project-meta"><span class="meta-tag">iOS / Android</span><span class="meta-tag">React Native</span></div></div></div></div><div class="case-item"><button class="case-lid"><div class="lid-left"><span class="case-number">ВОПРОС 05</span><span class="case-title">Как происходит SEO оптимизация сайта?</span></div><div class="case-handle"><div class="handle-bar"></div></div></button><div class="case-inside"><div class="case-content"><div class="case-text">SEO оптимизация включает технический аудит, сбор семантического ядра, оптимизацию метатегов и контента.</div><div class="project-meta"><span class="meta-tag">технический аудит</span><span class="meta-tag">семантическое ядро</span></div></div></div></div><div class="case-item"><button class="case-lid"><div class="lid-left"><span class="case-number">ВОПРОС 06</span><span class="case-title">Используете ли вы AI и нейросети?</span></div><div class="case-handle"><div class="handle-bar"></div></div></button><div class="case-inside"><div class="case-content"><div class="case-text">Да, мы активно внедряем AI решения: чат-боты, рекомендательные системы, генеративный AI.</div><div class="project-meta"><span class="meta-tag">чат-боты</span><span class="meta-tag">генеративный AI</span></div></div></div></div><div class="case-item"><button class="case-lid"><div class="lid-left"><span class="case-number">ВОПРОС 07</span><span class="case-title">Предоставляете техническую поддержку?</span></div><div class="case-handle"><div class="handle-bar"></div></div></button><div class="case-inside"><div class="case-content"><div class="case-text">Да, у нас есть круглосуточная техническая поддержка 24/7.</div><div class="project-meta"><span class="meta-tag">24/7</span><span class="meta-tag">круглосуточно</span></div></div></div></div><div class="case-item"><button class="case-lid"><div class="lid-left"><span class="case-number">ВОПРОС 08</span><span class="case-title">Как начать проект с ALBE digital?</span></div><div class="case-handle"><div class="handle-bar"></div></div></button><div class="case-inside"><div class="case-content"><div class="case-text">Оставьте заявку на сайте или напишите в Telegram. Проведём бесплатную консультацию.</div><div class="project-meta"><span class="meta-tag">бесплатная консультация</span><span class="meta-tag">telegram</span></div></div></div></div></div></div></section>`,
        'contacts': `<!-- КОНТАКТЫ -->
<section class="contacts-new-section"><div class="container"><div class="section-header"><h2><span>Контакты</span></h2><div class="section-desc">быстрая связь 24/7 — telegram, email, и сообщество во вконтакте</div></div><div class="contacts-new-grid"><div class="contact-new-info-card"><div><div class="contact-new-info-title"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>свяжитесь с нами</span></div><div class="contact-new-item"><div class="contact-new-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.6-1.38-.97-2.23-1.56-.99-.69-.35-1.07.22-1.69.15-.15 2.77-2.54 2.82-2.76.01-.03.02-.14-.05-.2-.07-.06-.18-.04-.26-.02-.11.02-1.85 1.18-5.22 3.45-.49.34-.94.5-1.34.49-.44-.01-1.29-.25-1.92-.46-.77-.25-1.38-.38-1.33-.81.03-.23.34-.46.95-.71 3.77-1.64 6.28-2.72 7.53-3.24 3.58-1.48 4.33-1.74 4.81-1.74.11 0 .35.02.51.15.13.1.17.24.19.38.02.2-.01.42-.04.62z"/></svg></div><div class="contact-new-details"><div class="label">telegram</div><div class="value"><a href="https://t.me/albe_web" target="_blank">@albe_web</a></div></div></div><div class="contact-new-item"><div class="contact-new-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div class="contact-new-details"><div class="label">e-mail</div><div class="value"><a href="mailto:albe.web@yandex.ru">albe.web@yandex.ru</a></div></div></div><div class="contact-new-item"><div class="contact-new-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="contact-new-details"><div class="label">режим работы</div><div class="value">24/7 — всегда на связи</div></div></div><div class="contact-new-item"><div class="contact-new-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M8 2v20M16 2v20"/></svg></div><div class="contact-new-details"><div class="label">AI & автоматизация</div><div class="value">индивидуальные IT-решения</div></div></div></div></div><div class="vk-new-widget-card"><div class="vk-new-header"><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg><div><h3>Мы в Вконтакте</h3><p>albe digital · сообщество IT-решений</p></div></div><div class="vk-group-widget" id="vk_widget_container"></div><div class="subscribers-simple"><span>3K</span> подписчиков</div><div class="vk-button-wrapper"><a href="https://vk.com/albeweb" target="_blank" class="join-button"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg><span>перейти в сообщество →</span></a></div></div></div></div></section>`
    };

    // Порядок загрузки секций
    const sectionOrder = ['portfolio', 'services', 'ai-reklama', 'process', 'team', 'competences', 'calculator', 'reviews', 'why-us', 'faq', 'contacts'];
    let loadedSections = new Set();
    let sectionsContainer = null;

    function createSkeletonLoader(sectionId) {
        const skeleton = document.createElement('div');
        skeleton.className = 'section-skeleton';
        skeleton.setAttribute('data-section', sectionId);
        skeleton.style.cssText = 'padding: 60px 0; text-align: center; background: rgba(10, 10, 10, 0.4); border-radius: 28px; margin: 20px 0;';
        skeleton.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; gap: 12px;">
                <div class="skeleton-spinner" style="width: 24px; height: 24px; border: 2px solid rgba(245,183,0,0.3); border-top-color: #F5B700; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
                <span style="color: #B0B3B8;">Загрузка контента...</span>
            </div>
        `;
        return skeleton;
    }

    function loadSection(sectionId) {
        if (loadedSections.has(sectionId)) return Promise.resolve();
        
        return new Promise((resolve) => {
            const skeleton = createSkeletonLoader(sectionId);
            if (sectionsContainer) {
                sectionsContainer.appendChild(skeleton);
            }
            
            // Имитация загрузки (в реальном проекте здесь был бы fetch к серверу)
            setTimeout(() => {
                const html = lazySectionsHtml[sectionId];
                if (html && sectionsContainer) {
                    // Удаляем скелетон
                    const existingSkeleton = sectionsContainer.querySelector(`.section-skeleton[data-section="${sectionId}"]`);
                    if (existingSkeleton) existingSkeleton.remove();
                    
                    // Добавляем HTML секции
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = html;
                    const sectionElement = tempDiv.firstElementChild;
                    sectionsContainer.appendChild(sectionElement);
                    
                    loadedSections.add(sectionId);
                    
                    // После добавления секции — инициализируем её внутренние компоненты
                    if (sectionId === 'portfolio') initPortfolioAccordion();
                    if (sectionId === 'services') {
                        initQuantumCards();
                        initServiceModal();
                    }
                    if (sectionId === 'competences') initTechTooltips();
                    if (sectionId === 'calculator') initCalculatorWithFallback();
                    if (sectionId === 'faq') initCaseAccordion();
                    if (sectionId === 'ai-reklama') initLazyKinescope();
                    
                    // Ленивая загрузка изображений внутри новой секции
                    const newImages = sectionElement.querySelectorAll('img[data-src]');
                    newImages.forEach(img => {
                        const dataSrc = img.getAttribute('data-src');
                        if (dataSrc) {
                            img.src = dataSrc;
                            img.removeAttribute('data-src');
                        }
                    });
                }
                resolve();
            }, 100);
        });
    }

    function initLazySections() {
        sectionsContainer = document.getElementById('lazy-sections-container');
        if (!sectionsContainer) return;
        
        // Создаём наблюдатели для каждой секции
        const sectionObservers = {};
        
        sectionOrder.forEach((sectionId, index) => {
            // Создаём наблюдаемый элемент-триггер перед каждой секцией
            const trigger = document.createElement('div');
            trigger.className = `lazy-trigger lazy-trigger-${sectionId}`;
            trigger.setAttribute('data-section', sectionId);
            trigger.style.height = '10px';
            trigger.style.width = '100%';
            trigger.style.position = 'relative';
            trigger.style.pointerEvents = 'none';
            sectionsContainer.appendChild(trigger);
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !loadedSections.has(sectionId)) {
                        loadSection(sectionId);
                        observer.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '200px', threshold: 0.01 });
            
            observer.observe(trigger);
            sectionObservers[sectionId] = observer;
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
    // HERO БАННЕР (СКРИПТЫ)
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
    // ОТЛОЖЕННАЯ ЗАГРУЗКА ВИДЕО
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
    // МОДАЛЬНОЕ ОКНО ДЛЯ УСЛУГ
    // ============================================

    const serviceDetails = {
        "Веб-разработка": {
            description: "Мы создаём высокопроизводительные веб-приложения, которые выдерживают высокие нагрузки и обеспечивают мгновенный отклик. Наши решения масштабируются от стартапов до enterprise-уровня.",
            stack: [
                "React / Next.js — для создания быстрых SPA и SSR-приложений с отличной SEO",
                "TypeScript — типобезопасный код, который легче поддерживать и рефакторить",
                "Node.js / Nest.js — высокопроизводительный бэкенд с модульной архитектурой",
                "PostgreSQL / MongoDB — выбор БД под задачи проекта",
                "Docker / Kubernetes — контейнеризация и оркестрация для лёгкого масштабирования"
            ],
            advantages: [
                "Скорость загрузки страниц до 0.3 секунды",
                "Высокая безопасность благодаря TypeScript и аудиту кода",
                "SEO-оптимизация из коробки с Next.js",
                "Легкое масштабирование от 100 до 100 000+ пользователей",
                "CI/CD пайплайны для быстрых и безопасных деплоев"
            ]
        },
        "Иммерсивный дизайн": {
            description: "Мы создаём дизайн, который не просто красив — он вовлекает пользователя в взаимодействие, запоминается и повышает конверсию. Микроанимации, 3D-сцены и плавные переходы делают ваш продукт уникальным.",
            stack: [
                "Figma / Adobe XD — профессиональное прототипирование",
                "Three.js — 3D-графика и анимация в браузере",
                "GSAP / Framer Motion — плавные микроанимации",
                "Lottie — легковесные JSON-анимации",
                "WebGL — аппаратно-ускоренная графика"
            ],
            advantages: [
                "Увеличение вовлеченности пользователей на 40-60%",
                "Повышение конверсии за счет понятной навигации",
                "Премиум восприятие бренда",
                "Адаптивный дизайн под все устройства",
                "Оптимизированная производительность без лагов"
            ]
        },
        "E-commerce платформы": {
            description: "Разрабатываем интернет-магазины с нуля, которые конвертируют до 15% посетителей в покупателей. Полная интеграция с 1С, CRM, платежными системами и маркетплейсами.",
            stack: [
                "Next.js / Nuxt.js — быстрый frontend с SSR",
                "Node.js / Laravel — надёжный бэкенд",
                "PostgreSQL — основная БД",
                "Redis — кэширование и сессии",
                "Elasticsearch — быстрый поиск по товарам",
                "RabbitMQ — обработка заказов в очередях"
            ],
            advantages: [
                "Конверсия до 15%+",
                "Интеграция с Wildberries, Ozon, Яндекс.Маркет",
                "50+ платежных систем",
                "Встроенная аналитика продаж",
                "Автоматическая синхронизация с 1С"
            ]
        },
        "SEO и аналитика": {
            description: "Выводим сайты в топ-10 Яндекса и Google. Полный цикл: от сбора семантики до технической оптимизации и наращивания ссылочной массы.",
            stack: [
                "Яндекс.Вебмастер / Google Search Console — мониторинг позиций",
                "KeyCollector / Semrush — сбор семантического ядра",
                "Screaming Frog — технический аудит",
                "Яндекс.Метрика / GA4 — аналитика поведения",
                "Ahrefs / Serpstat — анализ конкурентов"
            ],
            advantages: [
                "Рост трафика до 300% за 6 месяцев",
                "Попадание в топ-10 по 70+ запросам",
                "Техническая оптимизация под Core Web Vitals",
                "Ежемесячная детальная отчетность",
                "Гарантия KPI в договоре"
            ]
        },
        "AI и Machine Learning": {
            description: "Внедряем нейросети в ваш бизнес: от чат-ботов до рекомендательных систем и генеративного AI. Автоматизируем процессы и увеличиваем прибыль.",
            stack: [
                "Python / FastAPI — основной язык для ML",
                "TensorFlow / PyTorch — фреймворки глубокого обучения",
                "CatBoost / LightGBM — градиентный бустинг",
                "OpenAI / YandexGPT — генеративные модели",
                "Airflow — оркестрация пайплайнов",
                "PostgreSQL / ClickHouse — хранение данных"
            ],
            advantages: [
                "Автоматизация до 80% рутинных задач",
                "Рост конверсии от персонализации на 25-40%",
                "Чат-боты, отвечающие как люди",
                "Точность прогнозов до 95%",
                "Обработка терабайт данных в реальном времени"
            ]
        },
        "Мобильные приложения": {
            description: "Разрабатываем нативные и кроссплатформенные приложения под iOS и Android. Полный цикл: от идеи до публикации в App Store и Google Play.",
            stack: [
                "React Native / Expo — быстрая кроссплатформа",
                "Swift / Kotlin — нативная разработка",
                "Flutter — единый код для iOS/Android",
                "Firebase — аналитика и push-уведомления",
                "GraphQL / REST API — связь с бэкендом",
                "Realm / SQLite — локальное хранение"
            ],
            advantages: [
                "Публикация в App Store и Google Play",
                "Оффлайн-режим и push-уведомления",
                "Биометрическая авторизация",
                "60 FPS производительность",
                "Горячие обновления без стора"
            ]
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

    // Добавляем стили для спиннера скелетона
    function addSkeletonStyles() {
        if (document.getElementById('skeleton-styles')) return;
        const style = document.createElement('style');
        style.id = 'skeleton-styles';
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            .section-skeleton {
                opacity: 0;
                animation: fadeInSkeleton 0.3s ease forwards;
            }
            @keyframes fadeInSkeleton {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    // ============================================
    // ЗАПУСК ВСЕХ ИНИЦИАЛИЗАЦИЙ
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        addSkeletonStyles();
        
        // Инициализация hero-баннера
        initHeroMatrixRain();
        initHeroStaticElements();
        initHeroTypewriter();
        
        // Инициализация остальных функций
        initSmoothScroll();
        initForm();
        initHeaderFixed();
        initBurgerMenu();
        initKineticButtons();
        initKineticToTop();
        
        // Ленивая загрузка секций (основная фишка!)
        initLazySections();
        
        // Ленивая загрузка изображений
        initLazyImages();
        
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

})();
