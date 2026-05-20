// ===== ФИКСАЦИЯ ШАПКИ ПРИ СКРОЛЛЕ =====
const header = document.querySelector('.header');
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

// ===== БУРГЕР-МЕНЮ ДЛЯ МОБИЛЬНЫХ =====
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('navMenu');
if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        const spans = burgerBtn.querySelectorAll('span');
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
    document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const spans = burgerBtn.querySelectorAll('span');
        if (spans) {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }));
}

// ===== ТУЛТИПЫ ДЛЯ ТЕХНОЛОГИЙ (ПРИ НАВЕДЕНИИ) =====
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
const tooltip = document.createElement('div');
tooltip.className = 'tech-tooltip';
document.body.appendChild(tooltip);
let timeout = null;
document.querySelectorAll('.tech-item').forEach(el => {
    el.addEventListener('mouseenter', e => {
        const d = techDesc[el.getAttribute('data-tech')] || "Современная технология для вашего проекта.";
        tooltip.innerHTML = `<strong>${el.innerText}</strong><br>${d}`;
        tooltip.style.opacity = '1';
        const rect = el.getBoundingClientRect();
        let left = rect.right + 15;
        let top = rect.top + (rect.height / 2) - 50;
        if (left + 380 > window.innerWidth) left = rect.left - 390;
        if (top < 10) top = 10;
        if (top + 150 > window.innerHeight) top = window.innerHeight - 160;
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
        if (timeout) clearTimeout(timeout);
    });
    el.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => { tooltip.style.opacity = '0'; }, 150);
    });
});

// ===== КАЛЬКУЛЯТОР СТОИМОСТИ =====
const rate = 2000;
const serviceHours = { design: 20, front: 30, back: 40, seo: 15, cms: 25, crm: 60, ai: 90, mobile: 120, support: 8 };
const complexityMultiplier = { simple: 1, medium: 1.5, high: 2.2, enterprise: 3.5 };
let selectedServices = new Set();
let selectedComplexity = "simple";

function getStackRecommendation(services, complexity) {
    let rec = [], exp = "";
    if (services.has('front') || services.has('design')) {
        rec.push("React / Next.js, TypeScript, Tailwind CSS");
        exp += "<strong>React / Next.js:</strong> SEO-рендеринг, отличный UX. TypeScript — надёжность. Tailwind — быстрая вёрстка.<br>";
    }
    if (services.has('back')) {
        rec.push("Node.js (Nest.js) или Python/Django, PostgreSQL");
        exp += "<strong>Node.js / Python:</strong> масштабируемый бэкенд, готов к высоким нагрузкам.<br>";
    }
    if (services.has('crm')) exp += "<strong>CRM/ERP интеграция:</strong> автоматизация бизнес-процессов.<br>";
    if (services.has('ai')) exp += "<strong>AI/ML:</strong> нейросети для прогнозирования, персонализации.<br>";
    if (services.has('mobile')) exp += "<strong>React Native / Flutter:</strong> кроссплатформа, экономия до 40% бюджета.<br>";
    if (rec.length === 0) rec.push("React + Node.js или Laravel");
    return { rec: rec.join(". ") + ".", exp: exp };
}

function updateCalculator() {
    let totalHours = 0;
    for (let s of selectedServices) totalHours += serviceHours[s];
    let finalHours = Math.round(totalHours * complexityMultiplier[selectedComplexity]);
    let totalCost = finalHours * rate;
    let servicesList = Array.from(selectedServices).map(s => {
        const names = { design: 'Дизайн', front: 'Frontend', back: 'Backend', seo: 'SEO', cms: 'CMS', crm: 'CRM', ai: 'AI', mobile: 'Мобильное', support: 'Поддержка' };
        return names[s];
    }).join(', ') || '—';
    
    const calcPrice = document.getElementById('calcPrice');
    const calcHoursInfo = document.getElementById('calcHoursInfo');
    if (calcPrice) calcPrice.innerHTML = totalCost.toLocaleString() + ' ₽';
    if (calcHoursInfo) calcHoursInfo.innerHTML = `✔ Услуги: ${servicesList}<br>✔ Сложность: ${selectedComplexity === 'simple' ? 'Старт (Лендинг)' : selectedComplexity === 'medium' ? 'Бизнес (Сайт услуг)' : selectedComplexity === 'high' ? 'Премиум (Интернет-магазин)' : 'Enterprise (Портал)'}<br>✔ Часы: ${totalHours} ч × ${complexityMultiplier[selectedComplexity]} = ${finalHours} ч.`;
    
    const rec = getStackRecommendation(selectedServices, selectedComplexity);
    const rightColumn = document.getElementById('stackExplanation');
    if (rightColumn) {
        if (totalHours === 0) {
            rightColumn.innerHTML = `<h4>Рекомендуемый стек технологий</h4><p>Выберите услуги и сложность проекта, чтобы получить детальную рекомендацию.</p>`;
        } else {
            rightColumn.innerHTML = `<h4>Рекомендуемый стек технологий</h4><p><strong>${rec.rec}</strong></p><h4>Преимущества этого стека</h4><p>${rec.exp}</p><p style="margin-top:12px; font-size:0.85rem;">Выбор технологий основан на потребностях вашего проекта.</p>`;
        }
    }
}

const calcServices = document.getElementById('calcServices');
const calcComplexity = document.getElementById('calcComplexity');
if (calcServices) {
    document.querySelectorAll('#calcServices .calc-option').forEach(o => {
        o.addEventListener('click', () => {
            let s = o.getAttribute('data-service');
            if (selectedServices.has(s)) {
                selectedServices.delete(s);
                o.classList.remove('selected');
            } else {
                selectedServices.add(s);
                o.classList.add('selected');
            }
            updateCalculator();
        });
    });
}
if (calcComplexity) {
    document.querySelectorAll('#calcComplexity .calc-option').forEach(o => {
        o.addEventListener('click', () => {
            selectedComplexity = o.getAttribute('data-complex');
            document.querySelectorAll('#calcComplexity .calc-option').forEach(c => c.classList.remove('selected'));
            o.classList.add('selected');
            updateCalculator();
        });
    });
    document.querySelector('#calcComplexity .calc-option[data-complex="simple"]')?.classList.add('selected');
}
updateCalculator();

// ===== ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== FAQ АККОРДЕОН =====
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const answer = btn.nextElementSibling;
        if (answer) answer.classList.toggle('active');
    });
});

// ===== ФОРМА НА ГЛАВНОЙ =====
const form = document.getElementById('mainForm');
const statusDiv = document.getElementById('formStatus');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('userName')?.value.trim();
        const phone = document.getElementById('userPhone')?.value.trim();
        const email = document.getElementById('userEmail')?.value.trim();
        if (!name || !phone || !email) {
            statusDiv.innerHTML = '<div style="background:#990000; padding:12px;">Заполните все поля</div>';
            setTimeout(() => statusDiv.innerHTML = '', 3000);
            return;
        }
        statusDiv.innerHTML = '<div style="background:#F5B700; color:black; padding:12px;">Спасибо! Менеджер свяжется с вами.</div>';
        form.reset();
        setTimeout(() => statusDiv.innerHTML = '', 5000);
    });
}

// ===== КНОПКА НАВЕРХ =====
const toTop = document.getElementById('toTopBtn');
if (toTop) {
    window.addEventListener('scroll', () => {
        toTop.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
    toTop.style.display = 'none';
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}