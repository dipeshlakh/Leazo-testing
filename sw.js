// Leazo Partner Service Worker
// Minimal — just enables PWA install prompt, no offline caching
// (we always want live data from Supabase)

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Pass all fetches through to network — no caching
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
