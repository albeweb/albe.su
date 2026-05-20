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
        el.addEventListener('mouseenter', e => {
            const d = techDesc[el.getAttribute('data-tech')] || "Современная технология";
            tooltip.innerHTML = `<strong>${el.innerText}</strong><br>${d}`;
            tooltip.style.opacity = '1';
            const r = el.getBoundingClientRect();
            let left = r.right + 15, top = r.top + r.height / 2 - 50;
            if (left + 380 > innerWidth) left = r.left - 390;
            if (top < 10) top = 10;
            if (top + 150 > innerHeight) top = innerHeight - 160;
            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
            if (timeout) clearTimeout(timeout);
        });
        el.addEventListener('mouseleave', () => {
            timeout = setTimeout(() => { tooltip.style.opacity = '0'; }, 150);
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
    let fin = Math.round(h * cm[complexity]), cost = fin * rate;
    let servList = Array.from(selected).map(s => ({ design: "Дизайн", front: "Frontend", back: "Backend", seo: "SEO", cms: "CMS", crm: "CRM", ai: "AI", mobile: "Мобильное", support: "Поддержка" }[s])).join(", ") || "—";
    
    const priceEl = document.getElementById('calcPrice');
    const hoursEl = document.getElementById('calcHoursInfo');
    if (priceEl) priceEl.innerHTML = cost.toLocaleString() + ' ₽';
    if (hoursEl) hoursEl.innerHTML = `✔ Услуги: ${servList}<br>✔ Сложность: ${complexity === 'simple' ? 'Старт' : complexity === 'medium' ? 'Бизнес' : complexity === 'high' ? 'Премиум' : 'Enterprise'}<br>✔ Часы: ${h} ч × ${cm[complexity]} = ${fin} ч.`;
    
    let rec = getRec(selected);
    let phases = [
        { n: "Аналитика и прототип", b: 10, m: 1.2 }, { n: "Дизайн", b: selected.has('design') ? 20 : 0, m: 1 },
        { n: "Frontend", b: selected.has('front') ? 30 : 0, m: 1 }, { n: "Backend", b: selected.has('back') ? 40 : 0, m: 1 },
        { n: "SEO", b: selected.has('seo') ? 15 : 0, m: 1 }, { n: "CMS", b: selected.has('cms') ? 25 : 0, m: 1 },
        { n: "CRM/ERP", b: selected.has('crm') ? 60 : 0, m: 1 }, { n: "AI/ML", b: selected.has('ai') ? 90 : 0, m: 1 },
        { n: "Мобильное", b: selected.has('mobile') ? 120 : 0, m: 1 }, { n: "Поддержка", b: selected.has('support') ? 8 : 0, m: 1 },
        { n: "Тестирование", b: 15, m: 1.3 }, { n: "Деплой", b: 8, m: 1.1 }
    ];
    let br = [], tot = 0;
    phases.forEach(p => { if (p.b > 0) { let hh = Math.round(p.b * p.m * cm[complexity]); br.push({ name: p.n, h: hh }); tot += hh; } });
    if (tot < fin && fin - tot > 5) br.push({ name: "Управление проектом", h: fin - tot });
    else if (tot > fin && br.length) { br[0].h -= tot - fin; if (br[0].h < 0) br[0].h = 0; }
    br = br.filter(b => b.h > 0);
    let timeHtml = `<div class="time-breakdown"><h4>Распределение ${fin} часов:</h4>`;
    br.forEach(b => { timeHtml += `<div class="time-breakdown-item"><span>${b.name}</span><span>${b.h} ч</span></div>`; });
    timeHtml += `</div>`;
    
    const stackEl = document.getElementById('stackExplanation');
    if (stackEl) {
        stackEl.innerHTML = h === 0 ? `<h4>Рекомендуемый стек</h4><p>Выберите услуги для расчёта</p>` :
            `<h4>Рекомендуемый стек</h4><p><strong>${rec.rec}</strong></p><h4>Преимущества</h4><p>${rec.exp}</p>${timeHtml}<p style="margin-top:12px; font-size:0.85rem;">Выбор технологий основан на потребностях вашего проекта.</p>`;
    }
}

function initCalculator() {
    document.querySelectorAll('#calcServices .calc-option').forEach(o => {
        o.addEventListener('click', () => {
            let s = o.getAttribute('data-service');
            if (selected.has(s)) {
                selected.delete(s);
                o.classList.remove('selected');
            } else {
                selected.add(s);
                o.classList.add('selected');
            }
            updateCalculator();
        });
    });
    document.querySelectorAll('#calcComplexity .calc-option').forEach(o => {
        o.addEventListener('click', () => {
            complexity = o.getAttribute('data-complex');
            document.querySelectorAll('#calcComplexity .calc-option').forEach(c => c.classList.remove('selected'));
            o.classList.add('selected');
            updateCalculator();
        });
    });
    const defaultComplexity = document.querySelector('#calcComplexity .calc-option[data-complex="simple"]');
    if (defaultComplexity) defaultComplexity.classList.add('selected');
    updateCalculator();
}

// ===== ПЛАВНЫЙ СКРОЛЛ =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === "#" || href === "") return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===== FAQ =====
function initFaq() {
    document.querySelectorAll('.faq-question').forEach(b => {
        b.addEventListener('click', () => {
            b.classList.toggle('active');
            b.nextElementSibling?.classList.toggle('active');
        });
    });
}

// ===== ФОРМА =====
function initForm() {
    const form = document.getElementById('mainForm');
    const stat = document.getElementById('formStatus');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('userName')?.value.trim();
            const phone = document.getElementById('userPhone')?.value.trim();
            const email = document.getElementById('userEmail')?.value.trim();
            if (!name || !phone || !email) {
                if (stat) stat.innerHTML = '<div style="background:#990000; padding:12px;">Заполните все поля</div>';
                setTimeout(() => { if (stat) stat.innerHTML = ''; }, 3000);
                return;
            }
            if (stat) stat.innerHTML = '<div style="background:#F5B700; color:black; padding:12px;">Спасибо! Менеджер свяжется с вами.</div>';
            form.reset();
            setTimeout(() => { if (stat) stat.innerHTML = ''; }, 5000);
        });
    }
}

// ===== КНОПКА НАВЕРХ =====
function initToTop() {
    const toTop = document.getElementById('toTopBtn');
    if (!toTop) return;
    window.addEventListener('scroll', () => {
        toTop.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
    toTop.style.display = 'none';
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== СХЕМА =====
function addSchema() {
    const schema = {
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
    const sc = document.createElement('script');
    sc.type = 'application/ld+json';
    sc.textContent = JSON.stringify(schema);
    document.head.appendChild(sc);
}

// ===== ЗАПУСК ВСЕХ ИНИЦИАЛИЗАЦИЙ ПОСЛЕ ЗАГРУЗКИ СТРАНИЦЫ =====
document.addEventListener('DOMContentLoaded', () => {
    initTechTooltips();
    initCalculator();
    initSmoothScroll();
    initFaq();
    initForm();
    initToTop();
    addSchema();
});
});