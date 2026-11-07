// tika · red de seguridad: si la app no logra abrir, muestra qué pasó en vez de una pantalla en blanco.
(function () {
  var errs = [], shown = false;
  function note(m) { errs.push(String(m).slice(0, 240)); if (errs.length > 6) errs.shift(); setTimeout(check, 2500); }
  addEventListener("error", function (e) {
    var t = e.target;
    if (t && t !== window && (t.tagName === "SCRIPT" || t.tagName === "LINK")) note("No se pudo cargar el archivo: " + (t.src || t.href));
    else note((e.message || "Error") + (e.lineno ? " (línea " + e.lineno + ")" : ""));
  }, true);
  addEventListener("unhandledrejection", function (e) {
    note("Promesa rechazada: " + ((e.reason && e.reason.message) || e.reason));
  });
  function stuck() { var a = document.getElementById("app"); return !!(a && a.querySelector(".boot")); }
  function check() { if (!shown && stuck()) panel(); }
  function mk(tag, text, css) { var n = document.createElement(tag); if (text) n.textContent = text; if (css) n.style.cssText = css; return n; }
  function btn(text, primary, fn) {
    var b = mk("button", text, "display:block;width:100%;margin:8px 0;padding:13px;border-radius:14px;font:700 15px system-ui;cursor:pointer;border:2px solid #E8E2D5;background:" + (primary ? "#FF4040;color:#fff;border-color:#FF4040" : "#FFFDF8;color:#23201B"));
    b.onclick = fn; return b;
  }
  function repair() {
    var p = [];
    if (navigator.serviceWorker && navigator.serviceWorker.getRegistrations)
      p.push(navigator.serviceWorker.getRegistrations().then(function (rs) { return Promise.all(rs.map(function (r) { return r.unregister(); })); }));
    if (window.caches && caches.keys) p.push(caches.keys().then(function (ks) { return Promise.all(ks.map(function (k) { return caches.delete(k); })); }));
    Promise.all(p).catch(function () {}).then(function () { location.reload(); });
  }
  function signout() {
    try { Object.keys(localStorage).forEach(function (k) { if (k.indexOf("sb-") === 0) localStorage.removeItem(k); }); } catch (e) {}
    repair();
  }
  function panel() {
    var a = document.getElementById("app"); if (!a) return; shown = true;
    var w = mk("div", "", "padding:32px 20px;max-width:420px;margin:0 auto;font:15px/1.5 system-ui;color:#23201B");
    w.appendChild(mk("h2", "tika no pudo abrir", "margin:0 0 8px;font-size:22px"));
    w.appendChild(mk("p", "Puede ser internet o una versión vieja guardada en tu celular. Prueba estas opciones en orden:", "margin:0 0 12px;color:#7C766A"));
    w.appendChild(btn("Reintentar", true, function () { location.reload(); }));
    w.appendChild(btn("Reparar la app", false, repair));
    w.appendChild(btn("Cerrar sesión y reintentar", false, signout));
    var d = mk("details", "", "margin-top:14px;color:#7C766A;font-size:13px");
    d.appendChild(mk("summary", "Detalle técnico (para enviar a soporte)"));
    d.appendChild(mk("pre", (errs.length ? errs.join("\n") : "Sin errores registrados: la app tardó demasiado en responder.") + "\nConexión: " + (navigator.onLine ? "sí" : "no"), "white-space:pre-wrap;word-break:break-word"));
    w.appendChild(d); a.innerHTML = ""; a.appendChild(w);
  }
  setTimeout(check, 9000);
})();
