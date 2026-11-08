// tika · servicio en segundo plano: deja la app abrir sin conexión.
// Los datos (publicaciones, mensajes, etc.) siempre vienen en vivo de Supabase.
// Los archivos de la app van "primero internet": así las actualizaciones llegan solas.
const V = "tika-v15";
const SHELL = ["./", "index.html", "app.js", "boot.js", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
const CDN = ["cdn.jsdelivr.net", "fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(V)
      .then(c => Promise.allSettled(SHELL.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
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
  if (u.hostname.endsWith("supabase.co")) return;            // datos siempre en vivo
  if (r.mode === "navigate") {                                // solo la pantalla principal
    if (!(u.pathname.endsWith("/") || u.pathname.endsWith("/index.html"))) return;
    e.respondWith(
      fetch(r).then(x => { if (x.ok) { const cp = x.clone(); caches.open(V).then(c => c.put("index.html", cp)); } return x; })
        .catch(() => caches.match("index.html"))
    );
    return;
  }
  if (u.origin === location.origin) {                         // archivos de la app: primero internet
    e.respondWith(
      fetch(r).then(x => { if (x.ok) { const cp = x.clone(); caches.open(V).then(c => c.put(r, cp)); } return x; })
        .catch(() => caches.match(r))
    );
    return;
  }
  if (CDN.includes(u.hostname)) {                             // librerías y fuentes: primero lo guardado
    e.respondWith(
      caches.match(r).then(h => h || fetch(r).then(x => {
        if (x.ok || x.type === "opaque") { const cp = x.clone(); caches.open(V).then(c => c.put(r, cp)); }
        return x;
      }).catch(() => h))
    );
  }
});
