// ============================================
// sw.js — Service Worker для кеширования ресурсов
// ============================================

const CACHE_NAME = 'albe-digital-v1';
const urlsToCache = [
    '/',
    '/style.css',
    '/common.js',
    '/Geist-Regular.woff2',
    '/Geist-Medium.woff2',
    '/zen-dots.woff2'
];

// Установка Service Worker — кеширование статических ресурсов
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(err => console.log('Cache addAll failed:', err))
    );
    // Активация немедленно
    self.skipWaiting();
});

// Перехват запросов — стратегия "Cache First, then Network"
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit — возвращаем из кеша
                if (response) {
                    return response;
                }
                // Cache miss — идём в сеть
                return fetch(event.request).then(
                    networkResponse => {
                        // Проверяем, что получили валидный ответ
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }
                        // Клонируем ответ для кеширования
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        return networkResponse;
                    }
                );
            })
    );
});

// Очистка старых кешей при активации
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
