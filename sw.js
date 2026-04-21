const CACHE_NAME = 'pwa-offline-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './musique.mp3', // Assure-toi que le nom correspond exactement
  './icon.png'     // Une icône pour l'appli
];

// Installation : Mise en cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Stratégie : Répondre avec le cache d'abord
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});