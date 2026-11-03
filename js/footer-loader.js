/**
 * ALBE DIGITAL — Footer Loader
 * Автоматически подгружает /footer.html во все страницы, где есть #footer-placeholder.
 * Кэш: sessionStorage, TTL 1 час. Для сброса кэша после правки footer.html — бампните CACHE_KEY.
 */
(function () {
  'use strict';

  var FOOTER_URL = '/footer.html';        // абсолютный путь от корня домена
  var CACHE_KEY  = 'albe-footer-v1';      // при обновлении footer.html → v2, v3 …
  var CACHE_TTL  = 60 * 60 * 1000;        // 1 час

  function postInject(root) {
    var y = root.querySelector('#year');
    if (y) y.textContent = new Date().getFullYear();
    document.dispatchEvent(new CustomEvent('footer:ready', { detail: { root: root } }));
  }

  function inject(html) {
    var ph = document.getElementById('footer-placeholder');
    if (!ph) return;
    ph.innerHTML = html;
    ph.dataset.loaded = '1';
    postInject(ph);
  }

  function fallback() {
    var ph = document.getElementById('footer-placeholder');
    if (!ph) return;
    ph.innerHTML =
      '<footer style="padding:24px;text-align:center;color:#83878E;font-size:.85rem;border-top:1px solid rgba(255,255,255,.08);background:rgba(18,21,26,.92)">' +
        '© ' + new Date().getFullYear() + ' ALBE DIGITAL · ' +
        '<a href="/privacy" style="color:#C7CBD1;text-decoration:none">Политика конфиденциальности</a>' +
      '</footer>';
    ph.dataset.loaded = '1';
  }

  async function load() {
    var ph = document.getElementById('footer-placeholder');
    if (!ph || ph.dataset.loaded === '1') return;

    // Кэш
    try {
      var cached = sessionStorage.getItem(CACHE_KEY);
      var cachedAt = parseInt(sessionStorage.getItem(CACHE_KEY + ':t') || '0', 10);
      if (cached && Date.now() - cachedAt < CACHE_TTL) {
        inject(cached);
        return;
      }
    } catch (e) { /* sessionStorage отключён */ }

    // Сеть
    try {
      var resp = await fetch(FOOTER_URL, { credentials: 'same-origin' });
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      var html = await resp.text();
      inject(html);
      try {
        sessionStorage.setItem(CACHE_KEY, html);
        sessionStorage.setItem(CACHE_KEY + ':t', String(Date.now()));
      } catch (e) { /* quota */ }
    } catch (err) {
      console.warn('[footer-loader]', err);
      fallback();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', load);
  } else {
    load();
  }
})();
