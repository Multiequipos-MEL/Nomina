const CACHE_NAME = 'multiequipos-pwa-v1';
const urlsToCache = ['/', '/index.html'];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(clients.claim());
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});