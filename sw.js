// tika · servicio en segundo plano: deja la app abrir sin conexión.
// Los datos (publicaciones, mensajes, etc.) siempre vienen en vivo de Supabase.
const V = "tika-v11";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
const CDN = ["cdn.jsdelivr.net", "fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (u.hostname.endsWith("supabase.co")) return;           // datos siempre en vivo
  if (r.mode === "navigate") {                               // la página: primero internet, si no hay, la guardada
    e.respondWith(
      fetch(r).then(x => { const cp = x.clone(); caches.open(V).then(c => c.put("index.html", cp)); return x; })
        .catch(() => caches.match("index.html"))
    );
    return;
  }
  if (u.origin === location.origin || CDN.includes(u.hostname)) {
    e.respondWith(
      caches.match(r).then(h => h || fetch(r).then(x => {
        if (x.ok || x.type === "opaque") { const cp = x.clone(); caches.open(V).then(c => c.put(r, cp)); }
        return x;
      }).catch(() => h))
    );
  }
});
