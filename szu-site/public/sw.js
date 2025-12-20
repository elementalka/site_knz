const CACHE_NAME = "szu-cache-v2";
const OFFLINE_URL = "/offline.html";
const CORE_ASSETS = [OFFLINE_URL];
const STATIC_ASSET_REGEX = /\.(?:css|js|mjs|map|png|jpg|jpeg|gif|webp|avif|svg|ico|woff2?|ttf|otf)$/i;

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
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  const isNavigate = event.request.mode === "navigate";
  const isNextAsset = url.pathname.startsWith("/_next/");
  const isStaticAsset = isNextAsset || STATIC_ASSET_REGEX.test(url.pathname);

  if (isNavigate) {
    event.respondWith(
      fetch(event.request)
        .then(fetchResponse => {
          const responseClone = fetchResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          return fetchResponse;
        })
        .catch(() => caches.match(event.request).then(response => response ?? caches.match(OFFLINE_URL)))
    );
    return;
  }

  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) return response;
        return fetch(event.request)
          .then(fetchResponse => {
            const responseClone = fetchResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
            return fetchResponse;
          });
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(fetchResponse => {
        const responseClone = fetchResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        return fetchResponse;
      })
      .catch(() => caches.match(event.request))
  );
});
