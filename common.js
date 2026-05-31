// ============================================
// common.js — ПОЛНАЯ ИСПРАВЛЕННАЯ ВЕРСИЯ
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
        const words = ["ДИЗАЙН", "ПРИЛОЖЕНИЯ", "AI РЕКЛАМУ", "CRM/ERP", "WEB3", "BLOCKCHAIN", "САЙТЫ", "И МНОГОЕ ДРУГОЕ"];
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

    // ============================================
    // ЗАПУСК ВСЕХ ИНИЦИАЛИЗАЦИЙ
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        // Инициализация hero-баннера
        initHeroMatrixRain();
        initHeroStaticElements();
        initHeroTypewriter();
        
        // Инициализация остальных функций
        initTechTooltips();
        initCalculatorWithFallback();
        initSmoothScroll();
        initForm();
        initHeaderFixed();
        initBurgerMenu();
        initQuantumCards();
        initKineticButtons();
        initCaseAccordion();
        initLazyKinescope();
        initKineticToTop();
        initServiceModal();
        
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
