const CACHE_NAME = "szu-cache-v1";
const OFFLINE_URL = "/offline.html";
const CORE_ASSETS = ["/", "/fundraisers", "/live", "/news", "/support", "/media", "/awards", "/closed", "/raffles", "/partners", "/team", OFFLINE_URL];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const isNavigate = event.request.mode === "navigate";

  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request)
        .then(fetchResponse => {
          const responseClone = fetchResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          return fetchResponse;
        })
        .catch(() => (isNavigate ? caches.match(OFFLINE_URL) : undefined));
    })
  );
});
