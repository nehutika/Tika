// tika · idiomas. Español es el idioma original de la app; aquí está el diccionario del inglés.
// Para agregar otro idioma (por ejemplo portugués): copiar el bloque EN, ponerle otro nombre (PT),
// traducir los textos de la derecha y sumarlo a LANGS. El texto de las personas (publicaciones,
// comentarios, mensajes, nombres) nunca se traduce. Los textos legales y las normas quedan en español.
(function () {
  "use strict";
  var EN = {
    // navegación y cabecera
    "Inicio": "Home", "Videos": "Videos", "Perfil": "Profile", "Para ti": "For you", "Siguiendo": "Following",
    "Crear": "Create", "Tickets": "Tickets", "Mensajes": "Messages", "Notificaciones": "Notifications", "Ajustes": "Settings",
    // ingreso
    "Ingresar": "Log in", "Crear cuenta": "Create account", "Email": "Email", "Contraseña (mínimo 8)": "Password (minimum 8)",
    "Olvidé mi contraseña": "I forgot my password", "Continuar con Google": "Continue with Google",
    "Al crear tu cuenta aceptas los": "By creating your account you accept the", "términos y condiciones": "terms and conditions",
    "y la": "and the", "política de privacidad": "privacy policy",
    "Elige tu nueva contraseña": "Choose your new password", "Nueva contraseña (mínimo 8)": "New password (minimum 8)", "Guardar": "Save",
    "Crea tu perfil": "Create your profile", "Tu nombre": "Your name", "Nombre de usuario": "Username",
    "Fecha de nacimiento (mínimo 16 años)": "Date of birth (minimum 16 years old)",
    "Al crear tu perfil aceptas las": "By creating your profile you accept the", "normas de la comunidad": "community guidelines",
    "Crear perfil": "Create profile", "Cerrar sesión": "Log out", "Disponible": "Available", "No disponible o inválido": "Not available or invalid",
    "Escribe tu email y una contraseña de al menos 8 caracteres.": "Enter your email and a password of at least 8 characters.",
    "Completa la verificación de seguridad.": "Complete the security check.",
    "Te enviamos un correo. Ábrelo, confirma tu email y vuelve a ingresar.": "We sent you an email. Open it, confirm your address and log in again.",
    "Escribe tu email arriba.": "Enter your email above.",
    "Te enviamos un correo para cambiar la contraseña.": "We sent you an email to change your password.",
    "Mínimo 8 caracteres.": "Minimum 8 characters.", "Contraseña cambiada": "Password changed",
    "Completa todos los campos.": "Fill in all the fields.",
    // errores
    "Email o contraseña incorrectos.": "Wrong email or password.", "Ese email ya tiene una cuenta.": "That email already has an account.",
    "Confirma tu email primero (revisa tu correo).": "Confirm your email first (check your inbox).",
    "Debes tener 16 años o más para registrarte.": "You must be 16 or older to sign up.",
    "Ese nombre de usuario ya está en uso.": "That username is already taken.",
    "Usuario inválido: 3 a 20 caracteres, con letras, números, punto, guion o guion bajo.": "Invalid username: 3 to 20 characters, using letters, numbers, dots, hyphens or underscores.",
    "Sin conexión. Revisa tu internet e inténtalo de nuevo.": "No connection. Check your internet and try again.",
    "Estás haciendo eso muy rápido. Espera un momento y vuelve a intentar.": "You are doing that too fast. Wait a moment and try again.",
    "Ya enviaste ese mismo texto varias veces. Espera un poco.": "You already sent that same text several times. Wait a bit.",
    "Tu texto tiene palabras que no están permitidas en tika.": "Your text has words that are not allowed on tika.",
    "No te quedan tickets de ese tipo. Compra más con el botón de ticket de arriba.": "You have no tickets of that type left. Buy more with the ticket button above.",
    "No puedes donar a tu propia publicación.": "You can't donate to your own post.", "No se encontró la publicación.": "Post not found.",
    "Las compras de prueba están desactivadas.": "Test purchases are turned off.",
    "No tienes permiso para hacer eso. Si tu cuenta fue suspendida, escribe a soporte desde Ajustes.": "You don't have permission to do that. If your account was suspended, contact support from Settings.",
    "Ocurrió un error. Intenta de nuevo.": "Something went wrong. Try again.", "Esta persona no muestra esa lista.": "This person doesn't show that list.",
    // inicio, búsqueda y perfil
    "Buscar personas, #hashtags y publicaciones": "Search people, #hashtags and posts", "Más publicaciones": "More posts",
    "Todavía no hay publicaciones": "There are no posts yet", "Toca + para publicar la primera.": "Tap + to publish the first one.",
    "Todavía no hay nada para ti": "There is nothing for you yet", "Mira la pestaña Siguiendo o vuelve más tarde.": "Check the Following tab or come back later.",
    "No se pudo cargar": "Could not load", "Reintentar": "Try again", "Personas": "People", "Publicaciones": "Posts", "Sin resultados": "No results",
    "Sugerencias para seguir": "Suggestions to follow", "Seguir": "Follow", "Solicitar": "Request", "Solicitar seguir": "Request to follow",
    "Solicitud enviada": "Request sent", "Desbloquear": "Unblock", "Mensaje": "Message", "Volver": "Back",
    "Todavía no hay videos": "There are no videos yet", "Toca + y elige Video para subir el primero.": "Tap + and choose Video to upload the first one.",
    "Toca + y elige Video.": "Tap + and choose Video.", "Todavía no hay videos con este hashtag": "There are no videos with this hashtag yet",
    "Todavía no hay publicaciones con este hashtag": "There are no posts with this hashtag yet", "Cargar más": "Load more",
    "publicaciones": "posts", "seguidores": "followers", "seguidos": "following", "Seguidores": "Followers", "Seguidos": "Following",
    "Editar perfil": "Edit profile", "Compartir perfil": "Share profile", "Posts": "Posts", "Reposts": "Reposts", "Guardados": "Saved",
    "Solo tú ves tus guardados.": "Only you can see your saved posts.", "Nada por aquí": "Nothing here", "Nada por aquí todavía.": "Nothing here yet.",
    "Perfil no encontrado": "Profile not found", "Cuenta privada": "Private account", "Sigue a esta persona para ver sus publicaciones.": "Follow this person to see their posts.",
    "Sin publicaciones": "No posts", "Bloqueaste a esta persona": "You blocked this person", "Desbloquéala para volver a ver sus publicaciones.": "Unblock them to see their posts again.",
    "Cargando…": "Loading…", "Solicitudes": "Requests", "No hay solicitudes.": "No requests.", "Aceptar": "Accept", "Rechazar": "Decline",
    "Sin novedades por ahora. Los me gusta, comentarios y tickets llegan pronto.": "Nothing new for now. Likes, comments and tickets are coming soon.",
    "Desliza para actualizar": "Pull to refresh", "Suelta para actualizar": "Release to refresh", "Actualizando…": "Refreshing…",
    // notificaciones
    "Me gusta": "Likes", "No me gusta": "Dislikes", "Comentarios": "Comments", "Menciones": "Mentions", "Ver": "View", "Alguien": "Someone",
    "le dio me gusta a tu publicación": "liked your post", "comentó tu publicación": "commented on your post", "empezó a seguirte": "started following you",
    "quiere seguirte": "wants to follow you", "te mencionó": "mentioned you", "Sin novedades por ahora.": "Nothing new for now.",
    // comentarios y respuestas
    "Sé el primero en comentar.": "Be the first to comment.", "Escribe un comentario": "Write a comment", "Enviar": "Send", "Borrar": "Delete", "Denunciar": "Report",
    "Publicar como publicación": "Post as a new post", "Se publica en tu perfil con la publicación original debajo.": "It is published on your profile with the original post below.",
    "Escribe tu respuesta arriba.": "Write your reply above.", "Publicado como publicación": "Posted as a new post", "Publicación no disponible": "Post not available",
    // paneles
    "Cerrar": "Close", "Cancelar": "Cancel", "Publicación": "Post", "Video": "Video", "Opciones": "Options",
    "¿Qué quieres compartir?": "What do you want to share?", "Descripción del video": "Video description",
    "Elegir video de la galería": "Choose a video from your gallery", "Elegir foto de la galería": "Choose a photo from your gallery",
    "Vertical, máximo 3 minutos y 50 MB.": "Vertical, maximum 3 minutes and 50 MB.", "Foto opcional.": "Photo optional.", "Publicar": "Post",
    "Subiendo…": "Uploading…", "Elige un video.": "Choose a video.", "El video pesa más de 50 MB.": "The video is larger than 50 MB.",
    "No se pudo leer la duración del video.": "Could not read the video length.", "El video dura más de 3 minutos.": "The video is longer than 3 minutes.",
    "El video debe ser vertical.": "The video must be vertical.", "Escribe algo o añade una foto.": "Write something or add a photo.",
    "No se pudo procesar la imagen": "Could not process the image", "No se pudo leer la imagen. Usa JPG, PNG o WebP.": "Could not read the image. Use JPG, PNG or WebP.",
    "No se pudo leer el video.": "Could not read the video.", "Elegir otra": "Choose another", "Quitar": "Remove", "Publicado": "Posted",
    "Nombre": "Name", "Usuario": "Username", "Biografía": "Bio", "Foto de perfil": "Profile photo", "Perfil actualizado": "Profile updated",
    // ajustes
    "Tickets anónimos": "Anonymous tickets", "Quien reciba tu ticket no verá tu nombre.": "Whoever receives your ticket won't see your name.",
    "Quien quiera seguirte tendrá que enviar una solicitud.": "Anyone who wants to follow you will have to send a request.",
    "Mensajes solo de seguidores": "Messages only from followers", "Solo quienes te siguen podrán escribirte.": "Only people who follow you can write to you.",
    "Mensajes solo de seguidores mutuos": "Messages only from mutual followers", "Solo podrán escribirte quienes te siguen y a quienes tú también sigues.": "Only people who follow you and whom you also follow can write to you.",
    "Mostrar mis seguidores": "Show my followers", "Si lo apagas, otras personas no podrán ver quién te sigue.": "If you turn it off, other people can't see who follows you.",
    "Mostrar a quién sigo": "Show who I follow", "Si lo apagas, otras personas no podrán ver a quién sigues.": "If you turn it off, other people can't see who you follow.",
    "Mostrar mis respuestas como publicaciones": "Show my replies as posts", "Tus comentarios aparecen en tu perfil con la publicación original debajo.": "Your comments appear on your profile with the original post below.",
    "Claro": "Light", "Oscuro": "Dark", "Términos y condiciones": "Terms and conditions", "Política de privacidad": "Privacy policy",
    "Normas de la comunidad": "Community guidelines", "Ayuda y soporte": "Help and support", "Usuarios bloqueados": "Blocked users", "Usuarios silenciados": "Muted users",
    "Instalar la app": "Install the app", "Panel de moderación": "Moderation panel", "Eliminar mi cuenta": "Delete my account",
    "Reiniciar mis recomendaciones": "Reset my recommendations", "tika · versión 16": "tika · version 16", "Idioma / Language": "Idioma / Language",
    "¿Borrar lo que tika aprendió de lo que ves y te gusta? Tus recomendaciones empezarán de cero.": "Erase what tika learned from what you watch and like? Your recommendations will start from zero.",
    "Recomendaciones reiniciadas": "Recommendations reset",
    // mensajes
    "Buscar personas para escribirles": "Search people to message", "Todavía no hay mensajes": "No messages yet", "Busca a alguien arriba para escribirle.": "Search for someone above to write to them.",
    "Usuario no encontrado": "User not found", "Mensaje eliminado": "Message deleted", "Sticker": "Sticker", "Audio": "Audio", "Foto": "Photo",
    "Editando mensaje": "Editing message", "Foto de la galería": "Photo from gallery", "Stickers": "Stickers", "Escribe un mensaje": "Write a message",
    "Enviar audio": "Send audio", "Escribe el primer mensaje.": "Write the first message.", "Editar": "Edit", "Copiar texto": "Copy text",
    "Eliminar para las dos personas": "Delete for both people", "Eliminar solo para mí": "Delete only for me", "Texto copiado": "Text copied",
    "El mensaje no puede quedar vacío": "The message can't be empty", "Nuevo mensaje": "New message", "Ver perfil": "View profile",
    "Tu navegador no permite grabar audios": "Your browser doesn't allow recording audio", "Para grabar audios permite el micrófono": "To record audio, allow the microphone",
    "No se pudo iniciar la grabación": "Could not start recording", "El audio es muy corto": "The audio is too short", "El audio es demasiado largo": "The audio is too long",
    "No puedes escribirle a esta persona por su configuración de mensajes.": "You can't message this person because of their message settings.",
    "Crear sticker con una foto": "Create a sticker from a photo", "Todavía no tienes stickers": "You don't have any stickers yet",
    "Crea uno con una foto de tu galería.": "Create one from a photo in your gallery.", "Sticker creado": "Sticker created",
    "Llegaste al máximo de 60 stickers. Borra alguno.": "You reached the maximum of 60 stickers. Delete some.", "No se pudo crear el sticker": "Could not create the sticker",
    "¿Eliminar este mensaje para las dos personas? No se puede deshacer.": "Delete this message for both people? This can't be undone.",
    "¿Eliminar este mensaje solo para ti? La otra persona lo seguirá viendo.": "Delete this message only for you? The other person will still see it.",
    "¿Borrar este sticker?": "Delete this sticker?", "Copia el texto:": "Copy the text:",
    "Grabar audio": "Record audio", "Enviar sticker": "Send sticker", "Borrar sticker": "Delete sticker", "Más opciones": "More options", "Ver video": "View video",
    "Repostear": "Repost", "Donar ticket": "Donate ticket",
    // tickets
    "Modo de prueba: por ahora no se cobra dinero real.": "Test mode: no real money is charged for now.", "Comprar": "Buy", "Comprar tickets": "Buy tickets",
    "Los tickets se donan con el botón de ticket de cada publicación o video.": "Tickets are donated with the ticket button on each post or video.",
    "Ticket agregado (prueba)": "Ticket added (test)", "Donar un ticket": "Donate a ticket", "Elige qué ticket quieres donar. Se descuenta de tu saldo.": "Choose which ticket you want to donate. It is deducted from your balance.",
    "Elegir": "Choose", "Confirmar donación": "Confirm donation", "Confirmar donación ": "Confirm donation", "Donar de forma anónima": "Donate anonymously",
    "La persona no verá tu nombre.": "The person won't see your name.", "La persona verá tu nombre.": "The person will see your name.", "¡Ticket donado!": "Ticket donated!",
    "Vas a donar": "You are about to donate", "Próximamente podrás donar tickets": "Soon you will be able to donate tickets",
    "Muy pronto vas a poder apoyar a quien publica con tickets. Todavía no se pueden comprar ni donar.": "Very soon you will be able to support creators with tickets. They can't be bought or donated yet.",
    "Próximamente podrás comprar tickets. Estos son los tipos que habrá:": "Soon you will be able to buy tickets. These are the types there will be:", "Próximamente": "Soon",
    // seguridad, denuncias y bloqueos
    "Acoso": "Harassment", "Amenazas": "Threats", "Estafa o fraude": "Scam or fraud", "Contenido ilegal": "Illegal content", "Spam": "Spam", "Otro motivo": "Other reason",
    "Comentario": "Comment", "Compartir enlace": "Share link", "Editar texto": "Edit text", "Eliminar publicación": "Delete post", "Denunciar publicación": "Report post",
    "Denunciar usuario": "Report user", "Silenciar": "Mute", "Dejar de silenciar": "Unmute", "Bloquear": "Block", "Eliminar": "Delete",
    "¿Eliminar esta publicación? Se borra junto con sus comentarios y no se puede deshacer.": "Delete this post? It is deleted along with its comments and can't be undone.",
    "Publicación eliminada": "Post deleted", "¿Qué pasa con esto? Elige un motivo.": "What's wrong with this? Choose a reason.",
    "Contenido ilegal incluye abuso a menores. Si hay peligro inmediato, llama a emergencias.": "Illegal content includes child abuse. If there is immediate danger, call emergency services.",
    "Detalles (opcional)": "Details (optional)", "Enviar denuncia": "Send report", "Elige un motivo.": "Choose a reason.", "Gracias": "Thank you",
    "Recibimos tu denuncia y la vamos a revisar.": "We received your report and we will review it.",
    "Recibimos tu denuncia y la vamos a revisar. Mientras tanto, puedes bloquear a esta persona.": "We received your report and we will review it. In the meantime, you can block this person.",
    "Usuario bloqueado": "User blocked", "No bloqueaste a nadie.": "You haven't blocked anyone.", "Usuario desbloqueado": "User unblocked",
    "¿Bloquear a": "Block", "? No podrá ver tus publicaciones ni escribirte, y tú no verás las suyas. Dejarán de seguirse.": "? They won't be able to see your posts or message you, and you won't see theirs. You will stop following each other.",
    "Usuario silenciado. Ya no verás sus publicaciones ni comentarios.": "User muted. You will no longer see their posts or comments.",
    "No silenciaste a nadie.": "You haven't muted anyone.", "Listo, ya no está silenciado": "Done, they are no longer muted",
    "Cuéntanos un problema, una duda o una apelación. Lo leemos y te respondemos por correo.": "Tell us about a problem, a question or an appeal. We read it and reply by email.",
    "Escribe tu mensaje": "Write your message", "Escribe un poco más.": "Write a bit more.", "Mensaje enviado. ¡Gracias!": "Message sent. Thank you!",
    "Se borrarán para siempre tu perfil, tus publicaciones, comentarios, mensajes, seguidores y los tickets que no hayas usado. No se puede deshacer.": "Your profile, posts, comments, messages, followers and unused tickets will be permanently deleted. This can't be undone.",
    "Escribe ELIMINAR para confirmar": "Type ELIMINAR to confirm", "Escribe ELIMINAR para confirmar.": "Type ELIMINAR to confirm.",
    "Eliminar definitivamente": "Delete permanently", "Eliminando…": "Deleting…", "Tu cuenta fue eliminada": "Your account was deleted",
    "Eliminar mi cuenta ": "Delete my account",
    // consentimiento, instalación y otros
    "Antes de continuar": "Before you continue", "Para usar tika necesitas aceptar los términos y la política de privacidad. Puedes leerlos antes de decidir. Al aceptar confirmas que tienes 16 años o más.": "To use tika you need to accept the terms and the privacy policy. You can read them before deciding. By accepting you confirm that you are 16 or older.",
    "Leer términos y condiciones": "Read terms and conditions", "Leer política de privacidad": "Read privacy policy", "Leer normas de la comunidad": "Read community guidelines",
    "Acepto": "I accept", "No acepto": "I don't accept", "Instalar la app ": "Install the app",
    "En iPhone: toca el botón Compartir del navegador y elige": "On iPhone: tap the browser's Share button and choose", "Agregar a inicio": "Add to Home Screen",
    "Sin conexión. Algunas cosas no cargarán.": "No connection. Some things won't load.", "No se pudo abrir tu cuenta": "Could not open your account", "Error desconocido": "Unknown error",
    "No se encontró la publicación o no puedes verla": "Post not found or you can't see it", "Enlace copiado": "Link copied", "Copia este enlace:": "Copy this link:",
    "Escribe algo": "Write something", "El texto no puede quedar vacío.": "The text can't be empty.", "Publicación editada": "Post edited", "No se encontró ese perfil": "Profile not found",
    "Usuario no encontrado ": "User not found", "El ingreso con Google todavía no está activado.": "Google login is not turned on yet.",
    "Tu cuenta": "Your account"
  };
  var LANGS = { es: null, en: EN };

  // Frases con partes que cambian (números, nombres, horas)
  var PAT = [
    [/^Solicitudes \((\d+)\)$/, function (m, a) { return "Requests (" + a + ")"; }],
    [/^(\d+) denuncia\(s\) · (.*)$/, function (m, a, b) { return a + " report(s) · " + b; }],
    [/^(.*) · Tienes (\d+)$/, function (m, a, b) { return a + " · You have " + b; }],
    [/^Tú: (.*)$/, function (m, a) { return "You: " + tr(a); }],
    [/^(.*) · editado$/, function (m, a) { return a + " · edited"; }],
    [/^editado · (.*)$/, function (m, a) { return "edited · " + a; }],
    [/^(.*) · Visto$/, function (m, a) { return a + " · Seen"; }],
    [/^(@.*) · cuenta privada$/, function (m, a) { return a + " · private account"; }],
    [/^Silenciar a (@.*)$/, function (m, a) { return "Mute " + a; }],
    [/^Dejar de silenciar a (@.*)$/, function (m, a) { return "Unmute " + a; }],
    [/^Bloquear a (@.*)$/, function (m, a) { return "Block " + a; }],
    [/^te donó un ticket( .*)?$/, function (m, a) { return "donated you a ticket" + (a || ""); }],
    [/^En respuesta a (@.*)$/, function (m, a) { return "Replying to " + a; }],
    [/^1 ticket (.*)$/, function (m, a) { return "1 " + a + " ticket"; }],
    [/^\((.*)\) a esta publicación\. No se puede deshacer\.$/, function (m, a) { return "(" + a + ") to this post. This can't be undone."; }]
  ];

  var lang = "es";
  try { var s = localStorage.getItem("tika_lang"); if (s && LANGS[s] !== undefined) lang = s; } catch (e) {}

  function has(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }
  function tr(str) {
    if (lang === "es" || typeof str !== "string" || !LANGS[lang]) return str;
    var mm = str.match(/^(\s*)([\s\S]*?)(\s*)$/), core = mm[2];
    if (!core) return str;
    var D = LANGS[lang], out;
    if (has(D, core)) out = D[core];
    else {
      out = core;
      for (var i = 0; i < PAT.length; i++) {
        if (PAT[i][0].test(out)) out = out.replace(PAT[i][0], PAT[i][1]);
      }
    }
    return out === core ? str : mm[1] + out + mm[3];
  }

  var SKIP = '[translate="no"],textarea,script,style,.rules,.post>p,.vcap,.pfb p,.pfb h2,.who b,.who .u,.bb:not(.del)>span,.qt>span,.qt>b,.row b,.nt b,.av';
  var ATTR = ["placeholder", "aria-label", "title", "alt"];

  function attrs(el) {
    for (var i = 0; i < ATTR.length; i++) {
      var a = ATTR[i];
      if (el.hasAttribute(a)) { var v = el.getAttribute(a), t = tr(v); if (t !== v) el.setAttribute(a, t); }
    }
  }
  function walk(n) {
    if (lang === "es") return;
    if (n.nodeType === 3) {
      var p = n.parentElement;
      if (p && p.closest(SKIP)) return;
      var t = tr(n.nodeValue);
      if (t !== n.nodeValue) n.nodeValue = t;
      return;
    }
    if (n.nodeType !== 1) return;
    if (n.closest(SKIP)) return;
    attrs(n);
    for (var c = n.firstChild; c; c = c.nextSibling) walk(c);
  }

  var mo = null;
  function start() {
    if (mo || typeof MutationObserver === "undefined" || !document.body) return;
    mo = new MutationObserver(function (ms) {
      if (lang === "es") return;
      for (var i = 0; i < ms.length; i++) {
        var m = ms[i];
        if (m.type === "childList") { for (var j = 0; j < m.addedNodes.length; j++) walk(m.addedNodes[j]); }
        else if (m.type === "characterData") walk(m.target);
        else if (m.type === "attributes" && m.target.nodeType === 1 && !m.target.closest(SKIP)) attrs(m.target);
      }
    });
    mo.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTR });
    if (lang !== "es") walk(document.body);
  }

  function set(l) {
    if (LANGS[l] === undefined) return;
    lang = l;
    try { localStorage.setItem("tika_lang", l); } catch (e) {}
    document.documentElement.lang = l;
    if (l !== "es") walk(document.body);
  }

  // Los avisos del navegador (confirm / prompt) también se traducen
  var _c = window.confirm.bind(window), _p = window.prompt.bind(window);
  window.confirm = function (s) { return _c(tr(s)); };
  window.prompt = function (s, d) { return _p(tr(s), d); };

  document.documentElement.lang = lang;
  window.I18N = { get lang() { return lang; }, set: set, tr: tr };
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
