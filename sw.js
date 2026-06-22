const CACHE_NAME = 'kamus-inggris-v1';
const FILES_TO_CACHE = [
  './app-html.html',
  './data.js',
  './sentences.js',
  './conversations.js',
  './stories.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

// Install — simpan semua file ke cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Menyimpan file ke cache...');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate — hapus cache lama jika ada
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch — pakai cache jika offline, pakai internet jika online
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).catch(() => caches.match('./app-html.html'));
    })
  );
});
