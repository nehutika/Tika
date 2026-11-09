const sb=supabase.createClient("https://dwtscjuueknglaxwkvqb.supabase.co","sb_publishable_9rNKRbcBWuhxsql7BXNlxg_CnGBqqpN");
const $=s=>document.querySelector(s),esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const P={plus:'<path d="M12 5v14M5 12h14"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 7l9 6 9-6"/>',home:'<path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z"/>',vid:'<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10.5 9l4 3-4 3z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',l:'<path d="M12 21s-8-5-8-11a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 6-8 11-8 11z"/>',d:'<path d="M7 14V3H4v11zM7 14l4 7h1.5l-.8-5H19a2 2 0 002-2.3l-1.2-7A2 2 0 0017.8 5H7"/>',c:'<path d="M4 5h16v11H9l-5 4z"/>',r:'<path d="M17 3l4 4-4 4M21 7H8a4 4 0 00-4 4M7 21l-4-4 4-4M3 17h13a4 4 0 004-4"/>',s:'<path d="M6 3h12v18l-6-4-6 4z"/>',tk:'<path d="M4 6h16a1 1 0 011 1v3a2 2 0 000 4v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a2 2 0 000-4V7a1 1 0 011-1z"/><path d="M14 6v12" stroke-dasharray="2 2"/>',bell:'<path d="M6 17v-6a6 6 0 0112 0v6l2 2H4z"/><path d="M10 21a2 2 0 004 0"/>',sl:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',img:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M21 16l-5-5-8 8"/>',dots:'<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>',stk:'<path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8l-6 6H6a2 2 0 01-2-2z"/><path d="M14 20v-4a2 2 0 012-2h6"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/>'};
const ic=k=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${P[k]}</svg>`;
let me=null,tab=0,mode="in",cmode="p",io=null,ptab=0,lastErr="",cache={},pc={},vmap={},chat=null,rtc=null,rec=null,csig=new Map(),tiersC=null,isMod=false,pmap={},cmeta={},rmap={},rpt=null;
const T=m=>{const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(T.h);T.h=setTimeout(()=>t.classList.remove("on"),2800)};
const er=(m,ok)=>{const e=$("#er");if(e){e.className="er"+(ok?" ok":"");e.textContent=m}};
const ERR=e=>{const m=(e&&e.message)||"";if(/Invalid login/i.test(m))return"Email o contraseña incorrectos.";if(/already registered/i.test(m))return"Ese email ya tiene una cuenta.";if(/not confirmed/i.test(m))return"Confirma tu email primero (revisa tu correo).";if(/underage/.test(m))return"Debes tener 16 años o más para registrarte.";if(e&&e.code==="23505")return"Ese nombre de usuario ya está en uso.";if(e&&e.code==="23514")return"Usuario inválido: 3 a 20 caracteres, con letras, números, punto, guion o guion bajo.";if(/Failed to fetch|NetworkError|Load failed|network request failed/i.test(m))return"Sin conexión. Revisa tu internet e inténtalo de nuevo.";if(/rate_limit/.test(m))return"Estás haciendo eso muy rápido. Espera un momento y vuelve a intentar.";if(/spam_repeat/.test(m))return"Ya enviaste ese mismo texto varias veces. Espera un poco.";if(/blocked_word/.test(m))return"Tu texto tiene palabras que no están permitidas en tika.";if(/no_tickets/.test(m))return"No te quedan tickets de ese tipo. Compra más con el botón de ticket de arriba.";if(/own_post/.test(m))return"No puedes donar a tu propia publicación.";if(/post_not_found/.test(m))return"No se encontró la publicación.";if(/test_off/.test(m))return"Las compras de prueba están desactivadas.";if(/list_hidden/.test(m))return"Esta persona no muestra esa lista.";if(/row-level security/i.test(m))return"No tienes permiso para hacer eso. Si tu cuenta fue suspendida, escribe a soporte desde Ajustes.";return m||"Ocurrió un error. Intenta de nuevo."};
const LG=()=>(window.I18N&&I18N.lang)||"es",langBtn=()=>`<button class="lnk" data-lang="${LG()==="en"?"es":"en"}" translate="no">${LG()==="en"?"Español":"English"}</button>`;
const rel=d=>{const s=(Date.now()-new Date(d))/1e3,f=new Intl.RelativeTimeFormat(LG()==="en"?"en":"es",{numeric:"auto"});if(s<60)return LG()==="en"?"now":"ahora";if(s<3600)return f.format(-Math.floor(s/60),"minute");if(s<86400)return f.format(-Math.floor(s/3600),"hour");if(s<604800)return f.format(-Math.floor(s/86400),"day");return new Date(d).toLocaleDateString(LG()==="en"?"en-US":"es-AR",{day:"numeric",month:"short",year:"numeric"})};
const redir=()=>location.origin+location.pathname;

/* ---------- Ingreso y registro ---------- */
function authView(){$("#app").innerHTML=`<div class="auth"><h1>tika</h1><div class="seg"><button data-m="in" class="${mode==="in"?"on":""}">Ingresar</button><button data-m="up" class="${mode==="up"?"on":""}">Crear cuenta</button></div><input id="em" type="email" placeholder="Email" autocomplete="email"><input id="pw" type="password" placeholder="Contraseña (mínimo 8)" autocomplete="${mode==="in"?"current-password":"new-password"}">${mode==="up"?'<small class="u">Al crear tu cuenta aceptas los <button class="tg" data-set="terms">términos y condiciones</button> y la <button class="tg" data-set="privacy">política de privacidad</button>.</small>':""}<div id="cf"></div><p class="er" id="er"></p><button class="btn" id="go">${mode==="in"?"Ingresar":"Crear cuenta"}</button>${GOOGLE_LOGIN?'<button class="btn ghost" id="gg">Continuar con Google</button>':""}${mode==="in"?'<button class="lnk" id="fg">Olvidé mi contraseña</button>':""}${langBtn()}</div>`;initCaptcha()}
async function doAuth(){const email=$("#em").value.trim(),password=$("#pw").value;if(!email||password.length<8)return er("Escribe tu email y una contraseña de al menos 8 caracteres.");if(TURNSTILE_KEY&&!capTok)return er("Completa la verificación de seguridad.");
  if(mode==="in"){const{error}=await sb.auth.signInWithPassword({email,password,options:capOpt()});capReset();if(error)er(ERR(error));return}
  const{data,error}=await sb.auth.signUp({email,password,options:{emailRedirectTo:redir(),...capOpt()}});capReset();
  if(error)return er(ERR(error));if(!data.session)er("Te enviamos un correo. Ábrelo, confirma tu email y vuelve a ingresar.",1)}
async function forgot(){const email=$("#em").value.trim();if(!email)return er("Escribe tu email arriba.");const{error}=await sb.auth.resetPasswordForEmail(email,{redirectTo:redir(),...capOpt()});capReset();error?er(ERR(error)):er("Te enviamos un correo para cambiar la contraseña.",1)}
function recView(){$("#app").innerHTML=`<div class="auth"><h1>tika</h1><b>Elige tu nueva contraseña</b><input id="pw" type="password" placeholder="Nueva contraseña (mínimo 8)"><p class="er" id="er"></p><button class="btn" id="nr">Guardar</button></div>`}
async function newPass(){const password=$("#pw").value;if(password.length<8)return er("Mínimo 8 caracteres.");const{error}=await sb.auth.updateUser({password});if(error)return er(ERR(error));T("Contraseña cambiada");route()}

/* ---------- Crear perfil (usuario único y edad mínima se validan en el servidor) ---------- */
function setupView(){$("#app").innerHTML=`<div class="auth"><h1>tika</h1><b>Crea tu perfil</b><input id="sn" maxlength="30" placeholder="Tu nombre"><input id="su" maxlength="20" placeholder="Nombre de usuario" autocapitalize="none"><small id="sa" class="u"></small><label class="u">Fecha de nacimiento (mínimo 16 años)</label><input id="sb" type="date"><small class="u">Al crear tu perfil aceptas las <button class="tg" data-set="rules">normas de la comunidad</button>.</small><p class="er" id="er"></p><button class="btn" id="cs">Crear perfil</button><button class="lnk" id="lo">Cerrar sesión</button></div>`;
  let h;$("#su").addEventListener("input",()=>{clearTimeout(h);h=setTimeout(async()=>{const u=$("#su").value.trim();if(!u)return $("#sa").textContent="";const{data}=await sb.rpc("username_available",{u});$("#sa").textContent=data?"Disponible":"No disponible o inválido"},350)})}
async function doSetup(){const n=$("#sn").value.trim(),u=$("#su").value.trim(),b=$("#sb").value;if(!n||!u||!b)return er("Completa todos los campos.");const{error}=await sb.rpc("create_profile",{p_username:u,p_name:n,p_birth:b});if(error)return er(ERR(error));route()}

/* ---------- Estructura principal ---------- */
async function route(){try{await route0()}catch(e){fatalView(ERR(e)||String(e))}}
async function route0(){const{data:{session}}=await sb.auth.getSession();if(!session){me=null;keep={};RPp=null;return authView()}
  const{data,error}=await sb.from("profiles").select("*").eq("id",session.user.id).maybeSingle();if(error)return fatalView(ERR(error));
  if(!data){me=null;return setupView()}me=data;document.documentElement.dataset.theme=me.theme;const[okc]=await Promise.all([hasConsent(),loadCfg()]);if(!okc){consentView();return}shell();await show(tab);rt();openHash();sb.rpc("is_moderator").then(r=>{isMod=!!r.data})}
function shell(){$("#app").innerHTML=`<header><button class="ib pri" id="bc" aria-label="Crear">${ic("plus")}</button><h1>tika</h1><div class="hr"><button class="ib" id="bd" aria-label="Tickets">${ic("tk")}</button><button class="ib" id="bm" aria-label="Mensajes">${ic("mail")}<span class="dot" hidden></span></button><button class="ib" id="bn" aria-label="Notificaciones" hidden>${ic("bell")}<span class="dot" hidden></span></button><button class="ib" id="bs" aria-label="Ajustes" hidden>${ic("sl")}</button></div></header><main id="mn"></main><nav><span id="ni"></span><button data-t="0">${ic("home")}Inicio</button><button data-t="1">${ic("vid")}Videos</button><button data-t="2">${ic("user")}Perfil</button></nav>`}
async function show(n){curProf=null;flushViews();const dr=n-tab;if(!(dr&&stash(tab)))pgo&&pgo.disconnect();tab=n;$("#ni").style.transform=`translateX(${n*100}%)`;bdot();const pf=n===2;$("#bm").hidden=pf;$("#bn").hidden=!pf;$("#bs").hidden=!pf;document.querySelectorAll("nav button").forEach((b,i)=>b.setAttribute("aria-current",i===n));const m=$("#mn");m.className=n===1?"reels":"";const kp=dr?takeKeep(n):null;if(kp){m.replaceChildren(kp.fr);m.scrollTop=kp.top;pgo=kp.pg;slide(m,dr);if(n===0)prefetchReels();return}
  m.innerHTML=cache[n]&&n!==1?cache[n]:skel(n);if(dr)slide(m,dr);
  try{if(n===0)await feed();if(n===1)await reels();if(n===2)await prof()}catch(e){const mm=$("#mn");if(mm)mm.innerHTML=`<div class="empty"><b>No se pudo cargar</b>${esc(ERR(e)||String(e))}<br><button class="btn" data-rt="1">Reintentar</button></div>`}}

/* ---------- Datos ---------- */
async function profMap(ids){ids=[...new Set(ids)];if(!ids.length)return{};const{data}=await sb.from("profiles").select("id,username,display_name,avatar_path").in("id",ids);return Object.fromEntries((data||[]).map(x=>[x.id,x]))}
async function fetchPosts(f){try{return await fetchPosts0(f)}catch(e){lastErr=ERR(e);return null}}
const sig=new Map();
async function signed(paths){const now=Date.now(),ok=p=>{const x=sig.get(p);return x&&x.exp>now+300000},need=paths.filter(p=>!ok(p));
  if(need.length){const{data}=await sb.storage.from("media").createSignedUrls(need,3600);(data||[]).forEach(x=>x.signedUrl&&sig.set(x.path,{u:x.signedUrl,exp:now+3600000}))}
  return p=>{const x=sig.get(p);return x&&x.u}}
const PAGE=30;let pgo=null;
async function fetchPosts0(f){const{data,error}=await f(sb.from("posts").select("id,author,kind,body,media_path,thumb_path,created_at,edited_at,reply_to").order("created_at",{ascending:false}).limit(PAGE));
  if(error){lastErr=ERR(error);return null}const ids=data.map(p=>p.id);if(!ids.length)return[];
  const paths=[...new Set(data.flatMap(p=>[p.media_path,p.thumb_path]).filter(Boolean))],mine=t=>sb.from(t).select(t==="reactions"?"post_id,kind":"post_id").eq("user_id",me.id).in("post_id",ids);
  const[pm,c,r,rp,sv,url,qm]=await Promise.all([profMap(data.map(p=>p.author)),sb.from("post_counts").select("*").in("post_id",ids),mine("reactions"),mine("reposts"),mine("saves"),signed(paths),quotedMap(data)]);
  const rps=new Set((rp.data||[]).map(x=>x.post_id)),svs=new Set((sv.data||[]).map(x=>x.post_id)),cm=Object.fromEntries((c.data||[]).map(x=>[x.post_id,x])),rm=Object.fromEntries((r.data||[]).map(x=>[x.post_id,x.kind]));
  return data.map(p=>({...p,profiles:pm[p.author]||{},c:cm[p.id]||{},mine:rm[p.id],rp:rps.has(p.id),sv:svs.has(p.id),url:url(p.media_path),thumb:url(p.thumb_path),rq:qm[p.reply_to]}))}
const avUrl=p=>sb.storage.from("avatars").getPublicUrl(p).data.publicUrl;
const GR=["#FF4D6A,#FFB36B","#2F6BDB,#8FD3FF","#10B5A0,#9BE7A5","#F5A524,#FF6B6B","#E8590C,#FFD166"];
const ava=(u,big)=>{const n=u.display_name||"?",c="av"+(big?" big":"");return u.avatar_path?`<img class="${c}" src="${esc(avUrl(u.avatar_path))}" alt="">`:`<span class="${c}" style="background:linear-gradient(135deg,${GR[(n.charCodeAt(0)+n.length)%GR.length]})">${esc(n[0])}</span>`};
const AM={like:["l","likes","Me gusta"],dislike:["d","dislikes","No me gusta"],comment:["c","comments","Comentarios"],repost:["r","reposts","Repostear"],save:["s",null,"Guardar"],ticket:["tk","tickets","Donar ticket"]};
const act=(p,k)=>{const[i,n,a]=AM[k],on=k==="repost"?p.rp:k==="save"?p.sv:p.mine===k;return `<button data-r="${k}" data-p="${p.id}" class="${on?"on":""}" aria-label="${a}">${ic(i)}${n?Number(p.c[n]||0):""}</button>`};
const fmt=t=>esc(t).replace(/(^|[^\p{L}\p{N}_&])#([\p{L}\p{N}_]{2,30})/gu,'$1<button class="tg" data-s="#$2">#$2</button>').replace(/(^|[^\w@])@([A-Za-z0-9_-][A-Za-z0-9._-]{1,18}[A-Za-z0-9_-])/g,'$1<button class="tg" data-un="$2">@$2</button>');
const errV=()=>`<div class="empty"><b>No se pudo cargar</b>${esc(lastErr)}<br><br><button class="btn" data-rt="1">Reintentar</button></div>`;
const list=(l,e)=>l===null?errV():l.length?l.map(card).join(""):`<div class="empty">${e}</div>`;
const head=(u,s)=>`<div class="pfh">${ava(u,1)}<div class="stats"><div><b>${s.posts||0}</b><small>publicaciones</small></div><button class="stb" data-fl="followers" data-fu="${u.id}"><b>${s.followers||0}</b><small>seguidores</small></button><button class="stb" data-fl="following" data-fu="${u.id}"><b>${s.following||0}</b><small>seguidos</small></button></div></div>`;
function card(p){if(p.isRep)return repCard(p);pmap[p.id]=p;const u=p.profiles||{},av=ava(u);
  const md=!p.url?"":p.kind==="video"?`<video class="ph v" src="${p.url}" poster="${p.thumb||""}" controls playsinline preload="none"></video>`:`<img class="ph" src="${p.url}" alt="" loading="lazy">`;
  return `<article class="post" data-pid="${p.id}" data-a="${p.author}"><div class="who"><button class="wb" data-u="${p.author}">${av}<b>${esc(u.display_name)}</b><span class="u">@${esc(u.username)}</span></button><small>${rel(p.created_at)}${p.edited_at?" · editado":""}</small><button class="mb" data-pm="${p.id}" aria-label="Más opciones">${ic("dots")}</button></div>${p.body?`<p>${fmt(p.body)}</p>`:""}${md}${qbox(p)}<div class="acts">${["like","dislike","comment","repost","save","ticket"].filter(k=>k!=="ticket"||p.author!==me.id).map(k=>act(p,k)).join("")}</div></article>`}
const FSEP='<h3 class="ng">Más publicaciones</h3>';
async function feedPage(st){const out=[];
  while(out.length<PAGE&&st.ph<=2){
    const{data,error}=await sb.rpc("feed_page",{p_phase:st.ph,p_before:st.before,p_limit:PAGE});
    if(error){lastErr=ERR(error);return out.length?out:null}
    const ids=data||[];if(!ids.length){st.ph++;st.before=null;continue}
    const l=await fetchPosts(q=>q.in("id",ids));if(!l)return out.length?out:null;
    if(!l.length){st.ph++;st.before=null;continue}
    l.forEach(p=>{p._ph=st.ph});out.push(...l);st.before=l[l.length-1].created_at;
    if(ids.length<PAGE){st.ph++;st.before=null}}
  return out}
function feedRender(l,st){let h="";for(const p of l){if(p._ph===2&&!st.sep&&st.had){h+=FSEP;st.sep=1}if(p._ph===1)st.had=1;h+=card(p)}return h}
function feedMore(host,st){pgo&&pgo.disconnect();pgo=null;if(!host||st.ph>2)return;const sn=document.createElement("div");sn.className="more";host.appendChild(sn);let busy=false;
  const ob=new IntersectionObserver(async es=>{if(busy||!es[0].isIntersecting)return;busy=true;const l=await feedPage(st);if(!document.body.contains(sn)){busy=false;return}
    if(l&&l.length)sn.insertAdjacentHTML("beforebegin",feedRender(nm(l),st));watch(host);
    if(st.ph>2||!l){ob.disconnect();sn.remove();return}
    busy=false},{rootMargin:"400px"});pgo=ob;ob.observe(sn)}
const homeTop=()=>`<div class="sb"><input id="q" type="search" placeholder="Buscar personas, #hashtags y publicaciones"></div><div class="seg ht"><button data-ht="0" class="${htab===0?"on":""}">Para ti</button><button data-ht="1" class="${htab===1?"on":""}">Siguiendo</button></div><div id="tr"></div><div id="sg"></div>`;
function bindQ(){let h;$("#q").addEventListener("input",()=>{clearTimeout(h);h=setTimeout(()=>search($("#q").value.trim()),400)})}
async function feed(){return htab===1?feedFollow():feedFyp()}
async function feedFollow(){const st={ph:1,before:null},l0=await feedPage(st),l=nm(l0);if(tab!==0||htab!==1)return;const E="<b>Todavía no hay publicaciones</b>Toca + para publicar la primera.";$("#mn").innerHTML=`${homeTop()}<div id="fd">${l===null?errV():l.length?feedRender(l,st):`<div class="empty">${E}</div>`}</div>`;bindQ();cache[0]=$("#mn").innerHTML;feedMore($("#fd"),st);sugg();trend();watch($("#mn"));prefetchReels()}
async function feedFyp(){const st={seed:Math.random().toString(36).slice(2,8),off:0,end:false},l=await fypPage(st,null);if(tab!==0||htab!==0)return;const E="<b>Todavía no hay nada para ti</b>Mira la pestaña Siguiendo o vuelve más tarde.";
  $("#mn").innerHTML=`${homeTop()}<div id="fd">${l===null?errV():l.length?l.map(card).join(""):`<div class="empty">${E}</div>`}</div>`;bindQ();cache[0]=$("#mn").innerHTML;fypMore($("#fd"),st,null,x=>x.map(card).join(""),()=>watch($("#fd")));sugg();trend();watch($("#mn"));prefetchReels()}
async function search(t){if(!t)return feed();const k=t.replace(/[%,()*\\]/g,""),isH=k[0]==="#",n=k.replace(/^[@#]/,""),tag=n.replace(/[^\p{L}\p{N}_]/gu,"");if(!n)return;
  pgo&&pgo.disconnect();const sg=$("#sg");if(sg)sg.innerHTML="";
  const qp=isH?Promise.resolve({data:[]}):sb.from("profiles").select("id,username,display_name,avatar_path").or(`username.ilike.%${n}%,display_name.ilike.%${n}%`).limit(8);
  const qs=async()=>{if(isH&&tag){const l=await fetchPosts(q=>q.filter("body","imatch",`(^|[^[:alnum:]_])#${tag}($|[^[:alnum:]_])`));if(l!==null)return nm(l)}return nm(await fetchPosts(q=>q.ilike("body",`%${k}%`)))};
  const[pp,l]=await Promise.all([qp,qs()]),qi=$("#q");if(!$("#fd")||(qi&&qi.value.trim()!==t))return;
  const P2=pp.data||[];$("#fd").innerHTML=`${P2.length?'<h3 class="ng">Personas</h3>'+P2.map(u=>`<button class="row" data-u="${u.id}">${ava(u)}<span><b>${esc(u.display_name)}</b> <span class="u">@${esc(u.username)}</span></span></button>`).join(""):""}<h3 class="ng">Publicaciones</h3>${list(l,"<b>Sin resultados</b>")}`}
const reelHtml=p=>`<section class="vid" data-pid="${p.id}" data-a="${p.author}"><video src="${p.url}" poster="${p.thumb||""}" loop playsinline preload="metadata"></video><div class="vcap"><b>@${esc((p.profiles||{}).username)}</b><p>${esc(p.body)}</p></div><div class="vside">${["like","comment","repost","save","ticket"].filter(k=>k!=="ticket"||p.author!==me.id).map(k=>act(p,k)).join("")}<button data-pm="${p.id}" aria-label="Más opciones">${ic("dots")}</button></div></section>`;
async function reels(){let st=null,l=null,fyp=true,l0=null;const pre=await takeReels();
  if(pre){st=pre.st;l=nm(pre.l)}else{st={seed:Math.random().toString(36).slice(2,8),off:0,end:false};l=await fypPage(st,"video")}
  if(!l||!l.length){fyp=false;l0=await fetchPosts(q=>q.eq("kind","video"));l=nm(l0)}
  if(tab!==1)return;const m=$("#mn");
  if(l===null){m.className="";m.innerHTML=errV();return}if(!l.length){m.className="";m.innerHTML='<div class="empty"><b>Todavía no hay videos</b>Toca + y elige Video para subir el primero.</div>';return}
  l.forEach(p=>pmap[p.id]=p);m.innerHTML=l.map(reelHtml).join("");
  io&&io.disconnect();io=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target.querySelector("video");if(e.isIntersecting)v.play().catch(()=>{v.muted=true;v.play().catch(()=>{})});else v.pause()}),{threshold:.6});
  const again=()=>{m.querySelectorAll(".vid").forEach(e=>io.observe(e));watch(m)};again();
  const rd=x=>{x.forEach(p=>pmap[p.id]=p);return x.map(reelHtml).join("")};
  if(fyp)fypMore(m,st,"video",rd,again);else pager(m,q=>q.eq("kind","video"),l0,rd,again)}
async function myList(){if(ptab<2){const l=await fetchPosts(q=>q.eq("author",me.id).eq("kind",ptab?"video":"post"));if(ptab===0&&l&&me.replies_as_posts)return mergeRep(l,await repliesAsPosts(me.id));return l}const{data}=await sb.from(ptab===3?"saves":"reposts").select("post_id").eq("user_id",me.id),ids=(data||[]).map(x=>x.post_id);return ids.length?fetchPosts(q=>q.in("id",ids)):[]}
async function prof(){const k=ptab,[st,l,rq]=await Promise.all([sb.from("profile_stats").select("*").eq("profile_id",me.id).maybeSingle(),myList(),sb.from("follows").select("follower",{count:"exact",head:true}).eq("following",me.id).eq("status","pending")]),n=rq.count||0;if(tab!==2||ptab!==k)return;
  $("#mn").innerHTML=`${head(me,st.data||{})}<div class="pfb"><h2>${esc(me.display_name)}</h2><span class="u">@${esc(me.username)}${me.is_private?" · cuenta privada":""}</span><p>${fmt(me.bio)}</p><div><button class="btn ghost" id="ep">Editar perfil</button><button class="btn ghost" id="shp">Compartir perfil</button>${n?`<button class="btn" id="rq">Solicitudes (${n})</button>`:""}</div></div><div class="seg pt" style="--i:${ptab}">${["Posts","Videos","Reposts","Guardados"].map((x,i)=>`<button data-pt="${i}" class="${i===ptab?"on":""}">${x}</button>`).join("")}</div><div id="pl">${pc[k]=plHtml(l,k)}</div>`;cache[2]=$("#mn").innerHTML}
const plHtml=(l,k)=>k===1&&l&&l.length?(l.forEach(p=>vmap[p.id]=p),`<div class="vg">${l.map(p=>`<button class="vt" data-vp="${p.id}" aria-label="Ver video"><img src="${p.thumb||""}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover"></button>`).join("")}</div>`):`${k===3?'<p class="u" style="padding:0 16px">Solo tú ves tus guardados.</p>':""}${list(l,k===1?"<b>Todavía no hay videos</b>Toca + y elige Video.":"<b>Nada por aquí</b>")}`;
async function loadPl(){const k=ptab,l=await myList();pc[k]=plHtml(l,k);if(ptab===k&&tab===2&&$("#pl")){$("#pl").innerHTML=pc[k];cache[2]=$("#mn").innerHTML}}
function setPt(n){const o=ptab;ptab=n;$(".seg.pt").style.setProperty("--i",n);document.querySelectorAll("[data-pt]").forEach(b=>b.classList.toggle("on",+b.dataset.pt===n));$("#pl").innerHTML=pc[n]||'<div class="empty">Cargando…</div>';slide($("#pl"),n-o);return loadPl()}
async function profView(id){if(id===me.id)return show(2);curProf=id;const m=$("#mn");m.className="";m.innerHTML='<div class="empty">Cargando…</div>';document.querySelectorAll("nav button").forEach(b=>b.setAttribute("aria-current","false"));
  const[pr,st,fl,l,bl]=await Promise.all([sb.from("profiles").select("*").eq("id",id).maybeSingle(),sb.from("profile_stats").select("*").eq("profile_id",id).maybeSingle(),sb.from("follows").select("status").eq("follower",me.id).eq("following",id).maybeSingle(),fetchPosts(q=>q.eq("author",id)),sb.from("blocks").select("blocked").eq("blocker",me.id).eq("blocked",id).maybeSingle()]);
  const u=pr.data;if(!u){m.innerHTML='<div class="empty"><b>Perfil no encontrado</b></div>';return}const f=fl.data&&fl.data.status,lab=f==="accepted"?"Siguiendo":f==="pending"?"Solicitud enviada":u.is_private?"Solicitar seguir":"Seguir";
  let L=l;if(u.replies_as_posts&&L&&!bl.data&&(!u.is_private||f==="accepted"))L=mergeRep(L,await repliesAsPosts(id));
  m.innerHTML=`${head(u,st.data||{})}<div class="pfb"><h2>${esc(u.display_name)}</h2><span class="u">@${esc(u.username)}${u.is_private?" · cuenta privada":""}</span><p>${fmt(u.bio)}</p><div>${bl.data?`<button class="btn" data-ub="${id}">Desbloquear</button>`:`<button class="btn${f?" ghost":""}" data-f="${id}" data-pv="${u.is_private?1:0}" data-st="${f||""}">${lab}</button><button class="btn ghost" data-ch="${id}">Mensaje</button>`}<button class="btn ghost" data-bk="1">Volver</button><button class="ib" data-pu="${id}" aria-label="Más opciones">${ic("dots")}</button></div></div>${list(L,bl.data?"<b>Bloqueaste a esta persona</b>Desbloquéala para volver a ver sus publicaciones.":u.is_private&&f!=="accepted"?"<b>Cuenta privada</b>Sigue a esta persona para ver sus publicaciones.":"<b>Sin publicaciones</b>")}`}
async function reqSheet(ti){const{data}=await sb.from("follows").select("follower").eq("following",me.id).eq("status","pending");const pm=await profMap((data||[]).map(r=>r.follower));(data||[]).forEach(r=>r.profiles=pm[r.follower]||{});
  sheet(`${hd(ti||"Solicitudes")}${(data||[]).map(r=>`<div class="srow"><span><b>${esc(r.profiles.display_name)}</b> <span class="u">@${esc(r.profiles.username)}</span></span><span><button class="btn" data-ra="${r.follower}" data-ok="1">Aceptar</button> <button class="btn ghost" data-ra="${r.follower}">Rechazar</button></span></div>`).join("")||`<p class="u">${ti?"Sin novedades por ahora. Los me gusta, comentarios y tickets llegan pronto.":"No hay solicitudes."}</p>`}`)}
const NG=[["like","Me gusta"],["comment","Comentarios"],["mention","Menciones"],["follow","Seguidores"],["ticket","Tickets"]],NT={like:"le dio me gusta a tu publicación",comment:"comentó tu publicación",follow:"empezó a seguirte",follow_request:"quiere seguirte",ticket:"te donó un ticket",mention:"te mencionó"};
async function bdot(){if(!me)return;const[n,m]=await Promise.all([sb.from("notifications").select("id",{count:"exact",head:true}).is("read_at",null),sb.from("messages").select("id",{count:"exact",head:true}).eq("recipient",me.id).is("read_at",null).is("deleted_at",null)]),a=$("#bn .dot"),b=$("#bm .dot");if(a)a.hidden=!n.count;if(b)b.hidden=!m.count}
async function notSheet(){const{data,error}=await sb.from("notifications").select("id,actor_id,kind,post_id,tier,created_at,read_at").order("created_at",{ascending:false}).limit(80);if(error)return T(ERR(error));
  const seen=new Set(),L=(data||[]).filter(n=>{if(n.kind==="comment"||n.kind==="ticket")return true;const k=n.kind+n.actor_id+n.post_id;if(seen.has(k))return false;seen.add(k);return true});
  const pm=await profMap(L.map(n=>n.actor_id).filter(Boolean)),grp=g=>L.filter(n=>g==="follow"?n.kind==="follow"||n.kind==="follow_request":n.kind===g);
  const row=n=>{const u=(n.actor_id&&pm[n.actor_id])||{display_name:"Alguien"};return `<div class="nt">${ava(u)}<span style="flex:1">${n.read_at?"":'<i class="un"></i>'}<b>${esc(u.display_name)}</b> ${NT[n.kind]||""}${n.kind==="ticket"&&n.tier?" "+esc(n.tier):""}<small>${rel(n.created_at)}</small></span>${n.kind==="follow_request"?'<button class="btn ghost" id="rq">Ver</button>':n.post_id?`<button class="btn ghost" data-op="${n.post_id}">Ver</button>`:""}</div>`};
  sheet(`${hd("Notificaciones")}${NG.map(([g,t])=>{const a=grp(g);return a.length?`<h3 class="ng">${t}</h3>${a.map(row).join("")}`:""}).join("")||'<p class="u">Sin novedades por ahora.</p>'}`);
  sb.rpc("mark_notifications_read").then(()=>bdot())}
async function commentSheet(pid){const{data:d0}=await sb.from("comments").select("id,author,body,created_at").eq("post_id",pid).order("created_at"),data=(d0||[]).filter(c=>!muted.has(c.author));const pm=await profMap((data||[]).map(c=>c.author));(data||[]).forEach(c=>{c.profiles=pm[c.author]||{};cmeta[c.id]=c.author});
  sheet(`${hd("Comentarios")}${(data||[]).map(c=>`<div class="srow"><span><b>${esc(c.profiles.display_name)}</b> <span translate="no">${esc(c.body)}</span><small>${rel(c.created_at)}</small></span>${c.author===me.id||(pmap[pid]||{}).author===me.id?`<button class="lnk" data-dc="${c.id}" data-p="${pid}">Borrar</button>`:`<button class="lnk" data-rc="${c.id}">Denunciar</button>`}</div>`).join("")||'<p class="u">Sé el primero en comentar.</p>'}<div class="srow"><input id="ci" maxlength="300" placeholder="Escribe un comentario"><button class="btn" id="cs2" data-p="${pid}">Enviar</button></div><button class="btn ghost" id="cas" data-p="${pid}">Publicar como publicación</button><small class="u">Se publica en tu perfil con la publicación original debajo.</small><p class="er" id="er"></p>`)}
async function google(){const{error}=await sb.auth.signInWithOAuth({provider:"google",options:{redirectTo:redir()}});if(error)er(/not enabled|Unsupported/i.test(error.message)?"El ingreso con Google todavía no está activado.":ERR(error))}

/* ---------- Hojas (paneles desde abajo) ---------- */
function sheet(h,c){closeSheet();const d=document.createElement("div");d.className="sheet"+(c?" fs":"");d.id="sh";d.innerHTML=`<div class="panel${c?" full":""}">${h}</div>`;d.addEventListener("click",e=>{if(e.target===d)closeSheet()});document.body.appendChild(d)}
const closeSheet=()=>{if(rec)recStop(false);chat=null;const s=$("#sh");if(s)s.remove()};
const hd=t=>`<div class="ph-h"><b>${t}</b><button class="btn ghost" data-x="1">Cerrar</button></div>`;
const pkr=(id,acc,label)=>`<div class="pk"><input id="${id}" type="file" accept="${acc}" hidden><button type="button" class="pkb" data-pk="${id}">${ic("img")}<span>${label}</span></button><div class="pkp" id="${id}p" hidden></div></div>`;
function pkShow(i){const p=$("#"+i.id+"p"),b=i.parentNode.querySelector(".pkb span"),f=i.files&&i.files[0];if(!p||!b)return;
  if(!b.dataset.l)b.dataset.l=b.textContent;
  if(!f){p.hidden=true;p.innerHTML="";b.textContent=b.dataset.l;return}
  const u=URL.createObjectURL(f),v=(f.type||"").startsWith("video");
  p.hidden=false;p.innerHTML=`${v?`<video src="${u}" muted playsinline></video>`:`<img src="${u}" alt="">`}<div><b>${esc(f.name.slice(0,40))}</b><small>${(f.size/1048576).toFixed(1)} MB</small></div><button type="button" class="btn ghost" data-pkx="${i.id}">Quitar</button>`;
  b.textContent="Elegir otra"}
document.addEventListener("change",e=>{const i=e.target;if(i&&i.closest&&i.closest(".pk"))pkShow(i)});
function createSheet(){sheet(`${hd("Crear")}<div class="seg"><button data-c="p" class="${cmode==="p"?"on":""}">Publicación</button><button data-c="v" class="${cmode==="v"?"on":""}">Video</button></div><textarea id="tx" maxlength="500" placeholder="${cmode==="v"?"Descripción del video":"¿Qué quieres compartir?"}"></textarea>${pkr("fi",cmode==="v"?"video/*":"image/*",cmode==="v"?"Elegir video de la galería":"Elegir foto de la galería")}<small class="u">${cmode==="v"?"Vertical, máximo 3 minutos y 50 MB.":"Foto opcional."}</small><p class="er" id="er"></p><button class="btn" id="pub">Publicar</button>`)}
const up=async(p,b,ct)=>{const{error}=await sb.storage.from("media").upload(p,b,{contentType:ct});if(error)throw error};
function img(f,max,q){return new Promise((res,rej)=>{const i=new Image(),u=URL.createObjectURL(f);i.onload=()=>{const k=Math.min(1,max/Math.max(i.width,i.height)),c=document.createElement("canvas");c.width=Math.round(i.width*k);c.height=Math.round(i.height*k);c.getContext("2d").drawImage(i,0,0,c.width,c.height);URL.revokeObjectURL(u);c.toBlob(b=>b?res(b):rej(new Error("No se pudo procesar la imagen")),"image/jpeg",q)};i.onerror=()=>rej(new Error("No se pudo leer la imagen. Usa JPG, PNG o WebP."));i.src=u})}
function vmeta(f){return new Promise((res,rej)=>{const v=document.createElement("video"),u=URL.createObjectURL(f);v.preload="metadata";v.muted=true;v.playsInline=true;v.onerror=()=>rej(new Error("No se pudo leer el video."));v.onloadedmetadata=()=>{v.currentTime=Math.min(.5,v.duration/2)};
  v.onseeked=()=>{const k=Math.min(1,320/v.videoWidth),c=document.createElement("canvas");c.width=Math.round(v.videoWidth*k);c.height=Math.round(v.videoHeight*k);c.getContext("2d").drawImage(v,0,0,c.width,c.height);c.toBlob(b=>{URL.revokeObjectURL(u);res({d:v.duration,w:v.videoWidth,h:v.videoHeight,thumb:b})},"image/jpeg",.8)};v.src=u})}
async function publish(){const t=$("#tx").value.trim(),f=$("#fi").files[0],b=$("#pub");b.disabled=true;er("Subiendo…",1);
  try{const base=`${me.id}/${crypto.randomUUID()}`,row={author:me.id,kind:cmode==="v"?"video":"post",body:t};
    if(cmode==="v"){if(!f)throw new Error("Elige un video.");if(f.size>52428800)throw new Error("El video pesa más de 50 MB.");const m=await vmeta(f);
      if(!(m.d>0)||!isFinite(m.d))throw new Error("No se pudo leer la duración del video.");if(m.d>180)throw new Error("El video dura más de 3 minutos.");if(m.h<=m.w)throw new Error("El video debe ser vertical.");
      const ext=(f.name.split(".").pop()||"mp4").toLowerCase();await up(`${base}.${ext}`,f,f.type||"video/mp4");await up(`${base}_t.jpg`,m.thumb,"image/jpeg");
      Object.assign(row,{media_path:`${base}.${ext}`,thumb_path:`${base}_t.jpg`,duration_s:Math.max(1,Math.ceil(m.d)),width:m.w,height:m.h})}
    else{if(!t&&!f)throw new Error("Escribe algo o añade una foto.");if(f){await up(`${base}.jpg`,await img(f,1280,.8),"image/jpeg");await up(`${base}_t.jpg`,await img(f,320,.75),"image/jpeg");Object.assign(row,{media_path:`${base}.jpg`,thumb_path:`${base}_t.jpg`})}}
    const{error}=await sb.from("posts").insert(row).select("id").single();if(error)throw error;closeSheet();cache={};pc={};if(cmode==="v"){ptab=1;show(2)}else{htab=1;show(0)}T("Publicado")}catch(e){er(ERR(e));b.disabled=false}}
function editSheet(){sheet(`<div class="ph-h"><button class="btn ghost" data-x="1">Cancelar</button><b>Editar perfil</b><button class="btn" id="sv">Guardar</button></div><input id="en" maxlength="30" value="${esc(me.display_name)}" placeholder="Nombre"><input id="eu" maxlength="20" value="${esc(me.username)}" placeholder="Usuario" autocapitalize="none"><textarea id="eb" maxlength="160" placeholder="Biografía">${esc(me.bio)}</textarea><label class="u">Foto de perfil</label>${pkr("ea","image/*","Elegir foto de la galería")}<p class="er" id="er"></p>`,1)}
async function saveProfile(){const f=$("#ea").files[0];let avatar=me.avatar_path;try{if(f){const path=`${me.id}/avatar.jpg`,{error}=await sb.storage.from("avatars").upload(path,await img(f,400,.85),{contentType:"image/jpeg",upsert:true});if(error)throw error;avatar=path+"?v="+Date.now()}
  const{error}=await sb.from("profiles").update({display_name:$("#en").value.trim()||me.display_name,username:$("#eu").value.trim(),bio:$("#eb").value.trim(),avatar_path:avatar}).eq("id",me.id);if(error)throw error;
  me=(await sb.from("profiles").select("*").eq("id",me.id).single()).data;closeSheet();cache={};pc={};show(2);T("Perfil actualizado")}catch(e){er(ERR(e))}}
const tg=(k,t,d)=>`<div class="srow"><span><b>${t}</b><small>${d}</small></span><button class="sw ${me[k]?"on":""}" role="switch" aria-checked="${!!me[k]}" aria-label="${t}" data-k="${k}"></button></div>`;
const setSheet=()=>sheet(`${hd("Ajustes")}${tg("is_private","Cuenta privada","Quien quiera seguirte tendrá que enviar una solicitud.")}${tg("anon_tickets","Tickets anónimos","Quien reciba tu ticket no verá tu nombre.")}${tg("dm_followers_only","Mensajes solo de seguidores","Solo quienes te siguen podrán escribirte.")}${tg("dm_mutual_only","Mensajes solo de seguidores mutuos","Solo podrán escribirte quienes te siguen y a quienes tú también sigues.")}${tg("show_followers","Mostrar mis seguidores","Si lo apagas, otras personas no podrán ver quién te sigue.")}${tg("show_following","Mostrar a quién sigo","Si lo apagas, otras personas no podrán ver a quién sigues.")}${tg("replies_as_posts","Mostrar mis respuestas como publicaciones","Tus comentarios aparecen en tu perfil con la publicación original debajo.")}<small class="u">Idioma / Language</small><div class="seg" translate="no"><button data-lang="es" class="${LG()==="es"?"on":""}">Español</button><button data-lang="en" class="${LG()==="en"?"on":""}">English</button></div><div class="seg"><button data-th="light" class="${me.theme==="light"?"on":""}">Claro</button><button data-th="dark" class="${me.theme==="dark"?"on":""}">Oscuro</button></div><button class="btn ghost" data-set="terms">Términos y condiciones</button><button class="btn ghost" data-set="privacy">Política de privacidad</button><button class="btn ghost" data-set="rules">Normas de la comunidad</button><button class="btn ghost" data-set="support">Ayuda y soporte</button><button class="btn ghost" data-set="blocked">Usuarios bloqueados</button><button class="btn ghost" data-set="muted">Usuarios silenciados</button><button class="btn ghost" data-set="resetrec">Reiniciar mis recomendaciones</button>${canInstall()?'<button class="btn ghost" data-set="install">Instalar la app</button>':""}${isMod?'<button class="btn ghost" data-set="mod">Panel de moderación</button>':""}<button class="btn ghost" id="lo">Cerrar sesión</button><button class="btn ghost" data-set="del">Eliminar mi cuenta</button><small class="u">tika · versión 16</small>`);
async function upd(patch){const{error}=await sb.from("profiles").update(patch).eq("id",me.id);if(error)return T(ERR(error));Object.assign(me,patch);document.documentElement.dataset.theme=me.theme;setSheet()}
async function react(btn){const pid=btn.dataset.p,k=btn.dataset.r;if(k==="comment")return commentSheet(pid);if(k==="ticket")return TICKETS==="soon"?soon():donateSheet(pid);
  const on=btn.classList.contains("on"),bs=[...document.querySelectorAll(`[data-p="${pid}"][data-r]`)],snap=bs.map(b=>[b,b.className,b.innerHTML]);
  const cnt=(kind,d)=>{const[i,n]=AM[kind];if(!n)return;bs.filter(b=>b.dataset.r===kind).forEach(b=>{b.innerHTML=ic(i)+Math.max(0,(parseInt(b.textContent)||0)+d)})};
  const setOn=(kind,v)=>bs.filter(b=>b.dataset.r===kind).forEach(b=>b.classList.toggle("on",v));
  const tb=k==="repost"?"reposts":k==="save"?"saves":"reactions";
  if(tb==="reactions"){const o=k==="like"?"dislike":"like";if(on){cnt(k,-1);setOn(k,false)}else{if(bs.some(b=>b.dataset.r===o&&b.classList.contains("on"))){cnt(o,-1);setOn(o,false)}cnt(k,1);setOn(k,true)}}
  else{cnt(k,on?-1:1);setOn(k,!on)}
  const row={post_id:pid,user_id:me.id};if(tb==="reactions")row.kind=k;
  const q=on?sb.from(tb).delete().match({post_id:pid,user_id:me.id}):tb==="reactions"?sb.from(tb).upsert(row,{onConflict:"post_id,user_id"}):sb.from(tb).insert(row);
  const{error}=await q;if(error){snap.forEach(([b,c,h])=>{b.className=c;b.innerHTML=h});return T(ERR(error))}
  if(((k==="save"&&ptab===3)||(k==="repost"&&ptab===2))&&tab===2&&on&&$("#pl"))return loadPl();cache[tab]=$("#mn").innerHTML}

/* ---------- Mensajes ---------- */
const MSG="id,sender,recipient,body,media_path,created_at,read_at,kind,edited_at,deleted_at",hhmm=d=>new Date(d).toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});
async function chatUrls(paths){const now=Date.now(),need=paths.filter(p=>{const x=csig.get(p);return!(x&&x.exp>now+300000)});
  if(need.length){const{data}=await sb.storage.from("chat").createSignedUrls(need,3600);(data||[]).forEach(x=>x.signedUrl&&csig.set(x.path,{u:x.signedUrl,exp:now+3600000}))}
  return p=>{const x=csig.get(p);return x&&x.u}}
function inboxSheet(){sheet(`<div class="ph-h"><b>Mensajes</b><button class="btn ghost" data-x="1">Cerrar</button></div><input id="mq" type="search" placeholder="Buscar personas para escribirles"><div id="cl"><div class="empty">Cargando…</div></div>`,1);
  let h;$("#mq").addEventListener("input",()=>{clearTimeout(h);h=setTimeout(findPeople,350)});loadInbox()}
async function findPeople(){const q=$("#mq");if(!q)return;const t=q.value.trim().replace(/[%,()*]/g,"").replace(/^@/,"");if(!t)return loadInbox();
  const{data}=await sb.from("profiles").select("id,username,display_name,avatar_path").neq("id",me.id).or(`username.ilike.%${t}%,display_name.ilike.%${t}%`).limit(10);
  const c=$("#cl");if(!c||!$("#mq").value.trim())return;
  c.innerHTML=(data||[]).map(u=>`<button class="row" data-ch="${u.id}">${ava(u)}<span><b>${esc(u.display_name)}</b> <span class="u">@${esc(u.username)}</span></span></button>`).join("")||'<div class="empty"><b>Sin resultados</b></div>'}
async function loadInbox(){const{data,error}=await sb.rpc("my_conversations");if(!$("#cl")||$("#mq").value.trim())return;
  if(error){$("#cl").innerHTML=`<div class="empty"><b>No se pudo cargar</b>${esc(ERR(error))}</div>`;return}
  const L=(data||[]).sort((a,b)=>new Date(b.o_at)-new Date(a.o_at)),pm=await profMap(L.map(x=>x.o_id));if(!$("#cl")||$("#mq").value.trim())return;
  $("#cl").innerHTML=L.length?L.map(x=>{const u=pm[x.o_id]||{display_name:"Usuario"},n=Number(x.o_unread)||0;
    return `<button class="row" data-ch="${x.o_id}">${ava(u)}<span style="flex:1;min-width:0"><b>${esc(u.display_name)}</b><span class="pv${n?" bold":""}">${x.o_mine?"Tú: ":""}${x.o_deleted?"Mensaje eliminado":x.o_kind==="sticker"?ic("stk")+" Sticker":x.o_kind==="audio"?ic("mic")+" Audio":x.o_media&&!x.o_body?ic("img")+" Foto":esc(x.o_body)}</span></span><span class="mt">${rel(x.o_at)}${n?`<i class="bd">${n}</i>`:""}</span></button>`}).join(""):'<div class="empty"><b>Todavía no hay mensajes</b>Busca a alguien arriba para escribirle.</div>'}
async function openChat(id){const pm=await profMap([id]),u=pm[id];if(!u)return T("Usuario no encontrado");
  sheet(`<div class="ph-h"><button class="btn ghost" data-mb="1">Volver</button><button class="wb" data-cu="${id}" aria-label="Ver perfil">${ava(u)}<b>${esc(u.display_name)}</b></button><span style="width:72px"></span></div><div class="ml" id="ml"><div class="empty">Cargando…</div></div><div class="eb" id="eb" hidden><span>Editando mensaje</span><button class="btn ghost" data-ex="1">Cancelar</button></div><div class="ctray" id="ctray" hidden><button class="btn ghost" id="cph">${ic("img")} Foto de la galería</button><button class="btn ghost" id="cst">${ic("stk")} Stickers</button></div><div class="cin" id="cin"><button class="ib" id="cp" aria-label="Más opciones">${ic("plus")}</button><input id="cf" type="file" accept="image/*" hidden><input id="ct" maxlength="1000" placeholder="Escribe un mensaje" autocomplete="off"><button class="btn" id="cx" hidden>Enviar</button><button class="ib" id="cm" aria-label="Grabar audio">${ic("mic")}</button></div><div class="rbar" id="rbar" hidden><i class="rdot"></i><b id="rtm">0:00</b><span style="flex:1"></span><button class="btn ghost" id="rcx">Cancelar</button><button class="btn" id="rok">Enviar audio</button></div>`,1);
  $("#sh .panel").classList.add("chat");chat={id,u,m:[],edit:null};
  $("#ct").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();sendMsg()}});
  $("#ct").addEventListener("input",cinUi);
  $("#cf").addEventListener("change",e=>{const f=e.target.files[0];e.target.value="";if(f)sendMsg(f)});
  const ml=$("#ml");let lp=null,lx=0,ly=0;
  ml.addEventListener("pointerdown",e=>{const b=e.target.closest(".bb[data-mid]");if(!b||e.target.closest("audio"))return;lx=e.clientX;ly=e.clientY;clearTimeout(lp);lp=setTimeout(()=>{lp=null;msgMenu(b.dataset.mid)},450)});
  ["pointerup","pointercancel","pointerleave"].forEach(ev=>ml.addEventListener(ev,()=>{clearTimeout(lp);lp=null}));
  ml.addEventListener("pointermove",e=>{if(lp&&(Math.abs(e.clientX-lx)>10||Math.abs(e.clientY-ly)>10)){clearTimeout(lp);lp=null}});
  ml.addEventListener("contextmenu",e=>{if(e.target.closest(".bb[data-mid]"))e.preventDefault()});
  const{data,error}=await sb.from("messages").select(MSG).or(`and(sender.eq.${me.id},recipient.eq.${id}),and(sender.eq.${id},recipient.eq.${me.id})`).order("created_at",{ascending:false}).limit(80);
  if(!chat||chat.id!==id)return;
  if(error){$("#ml").innerHTML=`<div class="empty"><b>No se pudo cargar</b>${esc(ERR(error))}</div>`;return}
  chat.m=(data||[]).reverse();const hs=await hiddenSet(chat.m.map(x=>x.id));if(!chat||chat.id!==id)return;chat.m=chat.m.filter(x=>!hs.has(x.id));await renderChat();sb.rpc("mark_messages_read",{p_other:id}).then(bdot)}
function cinUi(){const t=$("#ct");if(!t||!chat)return;const has=t.value.trim().length>0||!!chat.edit;$("#cx").hidden=!has;$("#cm").hidden=has;$("#cx").textContent=chat.edit?"Guardar":"Enviar";$("#cp").hidden=!!chat.edit}
function bubble(m,url,last){const mine=m.sender===me.id,mc=mine?" me":"",tm=hhmm(m.created_at),seen=mine&&last&&m.id===last.id&&m.read_at?" · Visto":"";
  if(m.deleted_at)return `<div class="bb del${mc}" data-mid="${m.id}"><span>Mensaje eliminado</span><small>${tm}</small></div>`;
  if(m.kind==="sticker")return `<div class="bb st${mc}" data-mid="${m.id}"><img class="stk" src="${url(m.media_path)||""}" alt="Sticker"><small>${tm}${seen}</small></div>`;
  if(m.kind==="audio")return `<div class="bb${mc}" data-mid="${m.id}"><audio controls preload="metadata" src="${url(m.media_path)||""}"></audio><small>${tm}${seen}</small></div>`;
  return `<div class="bb${mc}" data-mid="${m.id}">${m.media_path?`<img src="${url(m.media_path)||""}" alt="Foto">`:""}${m.body?`<span>${esc(m.body)}</span>`:""}<small>${m.edited_at?"editado · ":""}${tm}${seen}</small></div>`}
async function renderChat(){if(!chat||!$("#ml"))return;const url=await chatUrls(chat.m.map(m=>m.media_path).filter(Boolean)),ml=$("#ml");if(!ml||!chat)return;
  const last=[...chat.m].reverse().find(m=>m.sender===me.id&&!m.deleted_at),keep=ml.scrollHeight-ml.scrollTop-ml.clientHeight<80||!ml.dataset.r;
  ml.innerHTML=chat.m.length?chat.m.map(m=>bubble(m,url,last)).join(""):'<div class="empty">Escribe el primer mensaje.</div>';ml.dataset.r="1";
  if(keep)ml.scrollTop=ml.scrollHeight}
/* menú al mantener presionado un mensaje */
function closeMm(){const d=$("#mm");if(d)d.remove()}
function msgMenu(id){const m=chat&&chat.m.find(x=>x.id===id);if(!m)return;const mine=m.sender===me.id,dl=!!m.deleted_at;closeMm();
  const d=document.createElement("div");d.className="mm";d.id="mm";
  d.innerHTML=`<div class="mmc"><b>Mensaje</b>${!dl&&mine&&m.kind==="text"&&!m.media_path?`<button class="btn ghost" data-me="${id}">Editar</button>`:""}${!dl&&m.body?`<button class="btn ghost" data-mc="${id}">Copiar texto</button>`:""}<button class="btn ghost" data-mh="${id}">Eliminar solo para mí</button>${!dl&&mine?`<button class="btn ghost" data-md="${id}">Eliminar para las dos personas</button>`:""}<button class="btn ghost" data-mx="1">Cancelar</button></div>`;
  d.addEventListener("click",e=>{if(e.target===d)closeMm()});$("#sh .panel").appendChild(d)}
function msgEdit(id){const m=chat&&chat.m.find(x=>x.id===id);if(!m)return;closeMm();chat.edit=id;$("#eb").hidden=false;const t=$("#ct");t.value=m.body;cinUi();t.focus()}
function endEdit(){if(!chat)return;chat.edit=null;const e=$("#eb");if(e)e.hidden=true;const t=$("#ct");if(t)t.value="";cinUi()}
async function msgCopy(id){closeMm();const m=chat&&chat.m.find(x=>x.id===id);if(!m||!m.body)return;try{await navigator.clipboard.writeText(m.body);T("Texto copiado")}catch(e){prompt("Copia el texto:",m.body)}}
async function msgDel(id){closeMm();if(!confirm("¿Eliminar este mensaje para las dos personas? No se puede deshacer."))return;
  const{data,error}=await sb.rpc("delete_message",{p_id:id});if(error)return T(ERR(error));
  if(data)sb.storage.from("chat").remove([data]).catch(()=>{});
  const x=chat&&chat.m.find(y=>y.id===id);if(x){x.deleted_at=new Date().toISOString();x.body="";x.media_path=null}renderChat()}
async function sendMsg(file){const ta=$("#ct");if(!ta||!chat)return;
  if(chat.edit){const id=chat.edit,body=ta.value.trim();if(!body)return T("El mensaje no puede quedar vacío");
    const{data,error}=await sb.from("messages").update({body}).eq("id",id).select(MSG).single();if(error)return T(ERR(error));
    const x=chat.m.find(y=>y.id===id);if(x)Object.assign(x,data);endEdit();renderChat();return}
  const body=ta.value.trim();if(!body&&!file)return;const to=chat.id,row={sender:me.id,recipient:to,body};ta.value="";cinUi();
  try{if(file){const p=`${me.id}/${crypto.randomUUID()}.jpg`,{error}=await sb.storage.from("chat").upload(p,await img(file,1280,.8),{contentType:"image/jpeg"});if(error)throw error;row.media_path=p}
    await insMsg(row,to)}
  catch(e){if($("#ct")){$("#ct").value=body;cinUi()}T(dmErr(e))}}
const dmErr=e=>/row-level security|42501/i.test((e&&e.message)||"")?"No puedes escribirle a esta persona por su configuración de mensajes.":ERR(e);
async function insMsg(row,to){const{data,error}=await sb.from("messages").insert(row).select(MSG).single();if(error)throw error;if(chat&&chat.id===to){chat.m.push(data);renderChat()}}
/* ---- audios ---- */
const rfmt=ms=>{const t=Math.floor(ms/1000);return Math.floor(t/60)+":"+String(t%60).padStart(2,"0")};
function recUi(on){const a=$("#cin"),b=$("#rbar");if(a)a.hidden=on;if(b)b.hidden=!on}
async function recStart(){if(rec||!chat)return;
  if(!navigator.mediaDevices||!window.MediaRecorder)return T("Tu navegador no permite grabar audios");
  let st;try{st=await navigator.mediaDevices.getUserMedia({audio:true})}catch(e){return T("Para grabar audios permite el micrófono")}
  const mt=["audio/webm;codecs=opus","audio/webm","audio/mp4","audio/ogg;codecs=opus"].find(t=>MediaRecorder.isTypeSupported(t))||"";
  let mr;try{mr=new MediaRecorder(st,mt?{mimeType:mt}:undefined)}catch(e){st.getTracks().forEach(t=>t.stop());return T("No se pudo iniciar la grabación")}
  const r={mr,st,ch:[],t0:Date.now(),send:false,to:chat.id,iv:null};rec=r;
  mr.ondataavailable=e=>{if(e.data&&e.data.size)r.ch.push(e.data)};
  mr.onstop=()=>recDone(r);
  r.iv=setInterval(()=>{const t=$("#rtm");if(t)t.textContent=rfmt(Date.now()-r.t0);if(Date.now()-r.t0>=90000)recStop(true)},250);
  mr.start();recUi(true)}
function recStop(send){if(!rec)return;rec.send=!!send;try{rec.mr.state!=="inactive"&&rec.mr.stop()}catch(e){recDone(rec)}}
async function recDone(r){clearInterval(r.iv);r.st.getTracks().forEach(t=>t.stop());if(rec===r)rec=null;recUi(false);
  if(!r.send||!r.ch.length)return;if(Date.now()-r.t0<900)return T("El audio es muy corto");
  const type=((r.mr.mimeType||r.ch[0].type||"audio/webm").split(";")[0]),blob=new Blob(r.ch,{type}),ext=type.includes("mp4")||type.includes("aac")?"m4a":type.includes("ogg")?"ogg":"webm";
  if(blob.size>5*1048576)return T("El audio es demasiado largo");
  try{const p=`${me.id}/${crypto.randomUUID()}.${ext}`,{error}=await sb.storage.from("chat").upload(p,blob,{contentType:type});if(error)throw error;
    await insMsg({sender:me.id,recipient:r.to,body:"",media_path:p,kind:"audio"},r.to)}catch(e){T(dmErr(e))}}
/* ---- stickers ---- */
function mkSticker(f){return new Promise((res,rej)=>{const i=new Image(),u=URL.createObjectURL(f);
  i.onload=()=>{const S=512,pd=14,c=document.createElement("canvas");c.width=c.height=S;const x=c.getContext("2d"),s0=Math.min(i.width,i.height),sx=(i.width-s0)/2,sy=(i.height-s0)/2,
    rr=(a,b,w,h,q)=>{x.beginPath();x.moveTo(a+q,b);x.arcTo(a+w,b,a+w,b+h,q);x.arcTo(a+w,b+h,a,b+h,q);x.arcTo(a,b+h,a,b,q);x.arcTo(a,b,a+w,b,q);x.closePath()};
    x.shadowColor="rgba(0,0,0,.28)";x.shadowBlur=10;x.fillStyle="#fff";rr(pd,pd,S-2*pd,S-2*pd,110);x.fill();x.shadowBlur=0;
    x.save();rr(pd+12,pd+12,S-2*pd-24,S-2*pd-24,98);x.clip();x.drawImage(i,sx,sy,s0,s0,pd+12,pd+12,S-2*pd-24,S-2*pd-24);x.restore();
    URL.revokeObjectURL(u);c.toBlob(b=>b?res(b):rej(new Error("No se pudo crear el sticker")),"image/png")};
  i.onerror=()=>rej(new Error("No se pudo leer la imagen. Usa JPG, PNG o WebP."));i.src=u})}
async function stkSheet(){if(!chat)return;closeMm();const d=document.createElement("div");d.className="mm";d.id="mm";
  d.innerHTML=`<div class="mmc"><div class="ph-h"><b>Stickers</b><button class="btn ghost" data-mx="1">Cerrar</button></div><div class="stg" id="stg"><div class="empty">Cargando…</div></div><input id="sti" type="file" accept="image/*" hidden><button class="btn" id="stn">Crear sticker con una foto</button></div>`;
  d.addEventListener("click",e=>{if(e.target===d)closeMm()});$("#sh .panel").appendChild(d);loadStk()}
async function loadStk(){const g=$("#stg");if(!g)return;const{data,error}=await sb.from("stickers").select("id,path").eq("owner",me.id).order("created_at",{ascending:false}).limit(60);
  if(!$("#stg"))return;if(error){g.innerHTML=`<div class="empty"><b>No se pudo cargar</b>${esc(ERR(error))}</div>`;return}
  const L=data||[],url=await chatUrls(L.map(x=>x.path));if(!$("#stg"))return;
  g.innerHTML=L.map(x=>`<div class="stc"><button data-ss="${x.id}" data-sp="${esc(x.path)}" aria-label="Enviar sticker"><img src="${url(x.path)||""}" alt="Sticker"></button><button class="sx" data-sd="${x.id}" data-sp="${esc(x.path)}" aria-label="Borrar sticker">×</button></div>`).join("")||'<div class="empty"><b>Todavía no tienes stickers</b>Crea uno con una foto de tu galería.</div>'}
async function newSticker(f){const b=$("#stn");if(b)b.disabled=true;try{const p=`${me.id}/s-${crypto.randomUUID()}.png`,{error}=await sb.storage.from("chat").upload(p,await mkSticker(f),{contentType:"image/png"});if(error)throw error;
    const r=await sb.from("stickers").insert({owner:me.id,path:p});if(r.error){sb.storage.from("chat").remove([p]).catch(()=>{});throw r.error}T("Sticker creado");loadStk()}
  catch(e){T(/sticker_limit/i.test((e&&e.message)||"")?"Llegaste al máximo de 60 stickers. Borra alguno.":ERR(e))}finally{const b2=$("#stn");if(b2)b2.disabled=false}}
async function sendSticker(path){if(!chat)return;const to=chat.id;closeMm();try{const dst=`${me.id}/${crypto.randomUUID()}.png`,{error}=await sb.storage.from("chat").copy(path,dst);if(error)throw error;
    await insMsg({sender:me.id,recipient:to,body:"",media_path:dst,kind:"sticker"},to)}catch(e){T(dmErr(e))}}
async function delSticker(id,path){if(!confirm("¿Borrar este sticker?"))return;const{error}=await sb.from("stickers").delete().eq("id",id);if(error)return T(ERR(error));sb.storage.from("chat").remove([path]).catch(()=>{});loadStk()}
document.addEventListener("change",e=>{const i=e.target;if(i&&i.id==="sti"){const f=i.files[0];i.value="";if(f)newSticker(f)}});
function onMsg(m){if(chat&&chat.id===m.sender){if(!chat.m.some(x=>x.id===m.id)){chat.m.push(m);renderChat()}sb.rpc("mark_messages_read",{p_other:m.sender});return}
  bdot();if($("#cl"))loadInbox();else T("Nuevo mensaje")}
function onUpd(m){const o=m.sender===me.id?m.recipient:m.sender;if($("#cl"))loadInbox();if(!chat||chat.id!==o)return;const x=chat.m.find(y=>y.id===m.id);if(x){Object.assign(x,m);renderChat()}}
function rt(){if(rtc||!me)return;const f=(ev,t,col)=>({event:ev,schema:"public",table:t,filter:`${col}=eq.${me.id}`});
  rtc=sb.channel("tika-"+me.id).on("postgres_changes",f("INSERT","messages","recipient"),p=>onMsg(p.new)).on("postgres_changes",f("UPDATE","messages","sender"),p=>onUpd(p.new)).on("postgres_changes",f("UPDATE","messages","recipient"),p=>onUpd(p.new)).on("postgres_changes",f("INSERT","notifications","user_id"),()=>bdot()).subscribe()}

/* ---------- Tickets (modo de prueba) ---------- */
const TC={gris:"#8E959C",verde:"#2E9E5B",rojo:"#E5484D",dorado:"#E0A100"},ars=n=>"$"+Number(n).toLocaleString("es-AR"),tdot=c=>`<i class="tkd" style="background:${TC[c]||"var(--acc)"}"></i>`;
async function walletData(){const[t,w]=await Promise.all([tiersC?{data:tiersC}:sb.from("ticket_tiers").select("code,name,price_ars").order("price_ars"),sb.from("ticket_wallet").select("tier,qty").eq("user_id",me.id)]);
  if(t.data)tiersC=t.data;return{tiers:tiersC||[],qty:Object.fromEntries((w.data||[]).map(x=>[x.tier,x.qty]))}}
async function ticketSheet(){const{tiers,qty}=await walletData();
  sheet(`${hd("Tickets")}<p class="er ok" style="min-height:0">Modo de prueba: por ahora no se cobra dinero real.</p>${tiers.map(t=>`<div class="srow"><span><b>${tdot(t.code)}${esc(t.name)}</b><small>${ars(t.price_ars)} · Tienes ${qty[t.code]||0}</small></span><button class="btn" data-bt="${t.code}">Comprar</button></div>`).join("")}<small class="u">Los tickets se donan con el botón de ticket de cada publicación o video.</small>`)}
async function buyTicket(code,btn){btn.disabled=true;const{error}=await sb.rpc("test_buy_ticket",{p_tier:code});btn.disabled=false;if(error)return T(ERR(error));T("Ticket agregado (prueba)");ticketSheet()}
async function donateSheet(pid){const{tiers,qty}=await walletData();
  sheet(`${hd("Donar un ticket")}<p class="u" style="margin:0">Elige qué ticket quieres donar. Se descuenta de tu saldo.</p>${tiers.map(t=>{const n=qty[t.code]||0;return `<div class="srow"><span><b>${tdot(t.code)}${esc(t.name)}</b><small>${ars(t.price_ars)} · Tienes ${n}</small></span>${n?`<button class="btn" data-dt="${t.code}" data-p="${pid}">Elegir</button>`:'<button class="btn ghost" data-tb="1">Comprar</button>'}</div>`}).join("")}`)}
function confirmDonate(pid,code){const t=(tiersC||[]).find(x=>x.code===code)||{name:code,price_ars:0};
  sheet(`${hd("Confirmar donación")}<p style="margin:0">Vas a donar <b>1 ticket ${esc(t.name)}</b> (${ars(t.price_ars)}) a esta publicación. No se puede deshacer.</p><div class="srow"><span><b>Donar de forma anónima</b><small>${me.anon_tickets?"La persona no verá tu nombre.":"La persona verá tu nombre."}</small></span><button class="sw ${me.anon_tickets?"on":""}" role="switch" aria-checked="${!!me.anon_tickets}" aria-label="Donar de forma anónima" id="dan" data-p="${pid}" data-tier="${code}"></button></div><button class="btn" id="dok" data-p="${pid}" data-tier="${code}">Confirmar donación</button><button class="btn ghost" data-dd="${pid}">Volver</button>`)}
async function toggleAnon(pid,code){const v=!me.anon_tickets,{error}=await sb.from("profiles").update({anon_tickets:v}).eq("id",me.id);if(error)return T(ERR(error));me.anon_tickets=v;confirmDonate(pid,code)}
async function doDonate(pid,code){const b=$("#dok");if(b)b.disabled=true;const{error}=await sb.rpc("donate_ticket",{p_post:pid,p_tier:code});if(error){if(b)b.disabled=false;return T(ERR(error))}
  closeSheet();cache={};T("¡Ticket donado!");document.querySelectorAll(`[data-p="${pid}"][data-r="ticket"]`).forEach(x=>{x.innerHTML=ic("tk")+((parseInt(x.textContent)||0)+1);x.classList.add("on")})}

/* ---------- Seguridad: denunciar, bloquear, moderar, soporte, eliminar cuenta ---------- */
const RL={acoso:"Acoso",amenazas:"Amenazas",estafa:"Estafa o fraude",ilegal:"Contenido ilegal",spam:"Spam",otro:"Otro motivo"},TL={post:"Publicación",comment:"Comentario",user:"Usuario"},SUPPORT_EMAIL="";
function postMenu(pid){const p=pmap[pid];if(!p)return;const u=p.profiles||{};
  sheet(`${hd("Opciones")}<button class="btn ghost" data-sh="${pid}">Compartir enlace</button>${p.author===me.id?`<button class="btn ghost" data-edp="${pid}">Editar texto</button><button class="btn ghost" data-delp="${pid}">Eliminar publicación</button>`:`<button class="btn ghost" data-rp="${pid}">Denunciar publicación</button>${muted.has(p.author)?`<button class="btn ghost" data-um="${p.author}">Dejar de silenciar a @${esc(u.username)}</button>`:`<button class="btn ghost" data-mu="${p.author}">Silenciar a @${esc(u.username)}</button>`}<button class="btn ghost" data-bl="${p.author}">Bloquear a @${esc(u.username)}</button>`}`)}
function userMenu(id){sheet(`${hd("Opciones")}<button class="btn ghost" data-ru="${id}">Denunciar usuario</button>${muted.has(id)?`<button class="btn ghost" data-um="${id}">Dejar de silenciar</button>`:`<button class="btn ghost" data-mu="${id}">Silenciar</button>`}<button class="btn ghost" data-bl="${id}">Bloquear</button>`)}
function delPostSheet(pid){sheet(`${hd("Eliminar publicación")}<p style="margin:0">¿Eliminar esta publicación? Se borra junto con sus comentarios y no se puede deshacer.</p><button class="btn" data-dpok="${pid}">Eliminar</button><button class="btn ghost" data-x="1">Cancelar</button>`)}
async function delPost(pid){const p=pmap[pid]||{},{error}=await sb.from("posts").delete().eq("id",pid);if(error)return T(ERR(error));
  const fs=[p.media_path,p.thumb_path].filter(Boolean);if(fs.length)sb.storage.from("media").remove(fs).catch(()=>{});
  closeSheet();cache={};pc={};T("Publicación eliminada");show(tab)}
function reportSheet(type,id){rpt={type,id,reason:""};
  sheet(`${hd("Denunciar")}<p class="u" style="margin:0">¿Qué pasa con esto? Elige un motivo.</p><div class="rl">${Object.entries(RL).map(([k,v])=>`<button class="btn ghost" data-rr="${k}">${v}</button>`).join("")}</div><small class="u">Contenido ilegal incluye abuso a menores. Si hay peligro inmediato, llama a emergencias.</small><textarea id="rd" maxlength="300" placeholder="Detalles (opcional)"></textarea><p class="er" id="er"></p><button class="btn" id="rsend">Enviar denuncia</button>`)}
async function sendReport(){if(!rpt||!rpt.reason)return er("Elige un motivo.");const t=rpt.type,id=rpt.id,row={reporter:me.id,reason:rpt.reason,details:$("#rd").value.trim()};row[t==="post"?"post_id":t==="comment"?"comment_id":"user_id"]=id;
  const{error}=await sb.from("reports").insert(row);if(error&&error.code!=="23505")return er(ERR(error));
  const au=t==="post"?(pmap[id]||{}).author:t==="comment"?cmeta[id]:id,can=au&&au!==me.id;
  sheet(`${hd("Gracias")}<p style="margin:0">Recibimos tu denuncia y la vamos a revisar.${can?" Mientras tanto, puedes bloquear a esta persona.":""}</p>${can?`<button class="btn" data-bl="${au}">Bloquear</button>`:""}`)}
async function blockSheet(uid){const pm=await profMap([uid]),u=pm[uid]||{username:"?"};
  sheet(`${hd("Bloquear")}<p style="margin:0">¿Bloquear a <b>@${esc(u.username)}</b>? No podrá ver tus publicaciones ni escribirte, y tú no verás las suyas. Dejarán de seguirse.</p><button class="btn" data-bok="${uid}">Bloquear</button><button class="btn ghost" data-x="1">Cancelar</button>`)}
async function doBlock(uid){const{error}=await sb.rpc("block_user",{p_user:uid});if(error)return T(ERR(error));closeSheet();cache={};pc={};T("Usuario bloqueado");if(curProf===uid)return profView(uid);hideAuthor(uid)}
async function blockedSheet(){const{data}=await sb.from("blocks").select("blocked").eq("blocker",me.id),pm=await profMap((data||[]).map(x=>x.blocked));
  sheet(`${hd("Usuarios bloqueados")}${(data||[]).map(x=>{const u=pm[x.blocked]||{display_name:"Usuario",username:"?"};return `<div class="srow"><span><b>${esc(u.display_name)}</b> <span class="u">@${esc(u.username)}</span></span><button class="btn ghost" data-ub="${x.blocked}">Desbloquear</button></div>`}).join("")||'<p class="u">No bloqueaste a nadie.</p>'}`)}
async function unblock(uid){const{error}=await sb.from("blocks").delete().match({blocker:me.id,blocked:uid});if(error)return T(ERR(error));cache={};pc={};T("Usuario desbloqueado");if($("#sh"))blockedSheet();else profView(uid)}
function rulesSheet(){sheet(`${hd("Normas de la comunidad")}<div class="rules"><p><b>Respeto</b>No se permite el acoso, el hostigamiento, los insultos dirigidos ni la discriminación.</p><p><b>Sin amenazas ni violencia</b>Está prohibido amenazar a alguien o incitar a hacerle daño.</p><p><b>Sin estafas</b>No engañes para conseguir dinero, tickets o datos: falsos sorteos, suplantación de identidad, enlaces engañosos o pedir contraseñas.</p><p><b>Sin contenido ilegal</b>Nada que sea ilegal en Argentina. Nunca contenido sexual con menores, y tampoco venta de drogas, armas o datos robados.</p><p><b>Privacidad</b>No publiques datos personales ni fotos íntimas de otras personas sin su permiso. La edad mínima para usar tika es 16 años.</p><p><b>Qué pasa si no se cumplen</b>Podemos eliminar el contenido, suspender la cuenta o cerrarla. En casos graves podemos avisar a las autoridades.</p><p><b>Cómo denunciar</b>Toca los tres puntitos de una publicación o de un perfil, o la palabra Denunciar en un comentario. Si crees que te equivocaron, escribe a soporte.</p></div>`)}
function supportSheet(){sheet(`${hd("Ayuda y soporte")}<p class="u" style="margin:0">Cuéntanos un problema, una duda o una apelación. Lo leemos y te respondemos por correo.</p><textarea id="sp" maxlength="1000" placeholder="Escribe tu mensaje"></textarea><p class="er" id="er"></p><button class="btn" id="spsend">Enviar</button>${SUPPORT_EMAIL?`<small class="u">También puedes escribir a <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></small>`:""}`)}
async function sendSupport(){const body=$("#sp").value.trim();if(body.length<5)return er("Escribe un poco más.");const b=$("#spsend");b.disabled=true;
  const{data:{session}}=await sb.auth.getSession(),{error}=await sb.from("support_requests").insert({user_id:me.id,contact_email:session&&session.user.email,body});
  if(error){b.disabled=false;return er(ERR(error))}closeSheet();T("Mensaje enviado. ¡Gracias!")}
async function modSheet(){const{data,error}=await sb.rpc("mod_reports");if(error)return T(ERR(error));const L=data||[],url=await signed(L.map(r=>r.r_thumb).filter(Boolean));
  sheet(`${hd("Moderación")}${L.map(r=>{rmap[r.r_id]=r;const t=r.r_thumb&&url(r.r_thumb),u=r.r_type==="user";return `<div class="mcard"><span><b style="display:inline">${TL[r.r_type]} · ${RL[r.r_reason]||esc(r.r_reason)}</b> <small class="u">${r.r_count} denuncia(s) · ${rel(r.r_at)}</small></span>${r.r_details?`<span class="u">“${esc(r.r_details)}”</span>`:""}<span>${esc(r.r_snapshot)}</span>${t?`<img class="ph" style="max-height:200px" src="${t}" alt="">`:""}<div class="mb2">${u?"":`<button class="btn" data-mr="${r.r_id}" data-ma="remove">Eliminar</button>`}<button class="btn" data-mr="${r.r_id}" data-ma="${u?"suspend":"remove_suspend"}">${u?"Suspender":"Eliminar y suspender"}</button><button class="btn ghost" data-mr="${r.r_id}" data-ma="dismiss">Descartar</button></div></div>`}).join("")||'<p class="u">No hay denuncias abiertas.</p>'}`,1)}
async function modDo(id,a){const r=rmap[id]||{};if(a!=="dismiss"&&!confirm(a==="suspend"?"¿Suspender a este usuario?":a==="remove"?"¿Eliminar este contenido?":"¿Eliminar el contenido y suspender a su autor?"))return;
  const{error}=await sb.rpc("mod_action",{p_report:id,p_action:a});if(error)return T(ERR(error));
  if((a==="remove"||a==="remove_suspend")&&(r.r_media||r.r_thumb))sb.storage.from("media").remove([r.r_media,r.r_thumb].filter(Boolean)).catch(()=>{});
  cache={};pc={};T("Listo");modSheet()}
function deleteSheet(){sheet(`${hd("Eliminar mi cuenta")}<p style="margin:0">Se borrarán para siempre tu perfil, tus publicaciones, comentarios, mensajes, seguidores y los tickets que no hayas usado. No se puede deshacer.</p><input id="dcf" placeholder="Escribe ELIMINAR para confirmar" autocapitalize="characters" autocomplete="off"><p class="er" id="er"></p><button class="btn" id="dacc">Eliminar definitivamente</button><button class="btn ghost" data-x="1">Cancelar</button>`)}
async function wipe(bk){try{for(let i=0;i<5;i++){const{data}=await sb.storage.from(bk).list(me.id,{limit:1000}),ps=(data||[]).map(x=>`${me.id}/${x.name}`);if(!ps.length)break;await sb.storage.from(bk).remove(ps)}}catch(e){}}
async function delAccount(){if($("#dcf").value.trim().toUpperCase()!=="ELIMINAR")return er("Escribe ELIMINAR para confirmar.");const b=$("#dacc");b.disabled=true;er("Eliminando…",1);
  try{for(const bk of["media","chat","avatars"])await wipe(bk);const{error}=await sb.rpc("delete_my_account");if(error)throw error;closeSheet();cache={};pc={};await sb.auth.signOut();T("Tu cuenta fue eliminada")}catch(e){er(ERR(e));b.disabled=false}}

/* ---------- Social: scroll infinito, actualizar, sugerencias, editar, compartir ---------- */
function pager(host,f,first,render,after){pgo&&pgo.disconnect();pgo=null;if(!host||!first||first.length<PAGE)return;
  let before=first[first.length-1].created_at,busy=false;const sn=document.createElement("div");sn.className="more";host.appendChild(sn);
  const ob=new IntersectionObserver(async es=>{if(busy||!es[0].isIntersecting)return;busy=true;
    const l=await fetchPosts(q=>f(q).lt("created_at",before));
    if(!l||!document.body.contains(sn)){busy=false;return}
    sn.insertAdjacentHTML("beforebegin",render(nm(l)));if(after)after();
    if(l.length<PAGE){ob.disconnect();sn.remove();return}
    before=l[l.length-1].created_at;busy=false},{rootMargin:"400px"});
  pgo=ob;ob.observe(sn)}
let py=0,pa=false;
function ptr(t){let p=$("#ptr");if(!p){p=document.createElement("div");p.id="ptr";document.body.appendChild(p)}p.textContent=t;p.style.display=t?"block":"none"}
document.addEventListener("touchstart",e=>{const m=$("#mn");pa=!!me&&!$("#sh")&&tab<2&&!!m&&m.scrollTop===0&&!m.querySelector(".pfh")&&!e.target.closest("video[controls],input,textarea,.sgl");py=e.touches[0].clientY},{passive:true});
document.addEventListener("touchmove",e=>{if(!pa)return;const t=e.touches[0],dy=t.clientY-py;if(dy<12||Math.abs(t.clientX-tx)>dy)return;ptr(dy>90?"Suelta para actualizar":"Desliza para actualizar")},{passive:true});
document.addEventListener("touchend",async e=>{if(!pa)return;pa=false;const t=e.changedTouches[0],dy=t.clientY-py;if(dy>90&&Math.abs(t.clientX-tx)<dy){ptr("Actualizando…");cache={};pc={};await show(tab)}ptr("")});
async function sugg(){const{data}=await sb.rpc("suggested_users");if(!data||!data.length||!$("#sg")||tab!==0)return;
  const ids=data.map(x=>x.s_id),{data:ps}=await sb.from("profiles").select("id,username,display_name,avatar_path,is_private").in("id",ids),pm=Object.fromEntries((ps||[]).map(x=>[x.id,x])),L=ids.map(i=>pm[i]).filter(Boolean);
  if(!L.length||!$("#sg")||tab!==0)return;
  $("#sg").innerHTML=`<h3 class="ng">Sugerencias para seguir</h3><div class="sgl">${L.map(u=>`<div class="sgc"><button class="wb" data-u="${u.id}" style="flex-direction:column">${ava(u,1)}<b>${esc(u.display_name)}</b><small class="u">@${esc(u.username)}</small></button><button class="btn" data-f="${u.id}" data-pv="${u.is_private?1:0}" data-st="">${u.is_private?"Solicitar":"Seguir"}</button></div>`).join("")}</div>`}
async function openPost(id){const l=await fetchPosts(q=>q.eq("id",id));if(!l||!l.length){T("No se encontró la publicación o no puedes verla");return}sheet(`${hd("Publicación")}${card(l[0])}`)}
async function openHash(){const h=location.hash,mp=/^#p=([0-9a-f-]{36})$/i.exec(h),mu=/^#u=([A-Za-z0-9._-]{3,20})$/.exec(h);if(!mp&&!mu)return;history.replaceState(null,"",location.pathname+location.search);if(mp)return openPost(mp[1]);const{data}=await sb.from("profiles").select("id").ilike("username",mu[1].replace(/[_%]/g,"\\$&")).maybeSingle();if(data)profView(data.id);else T("No se encontró ese perfil")}
async function shareProfile(){const url=redir()+"#u="+me.username;
  try{if(navigator.share){await navigator.share({title:"tika",text:"Mira mi perfil en tika: @"+me.username,url});return}await navigator.clipboard.writeText(url);T("Enlace copiado")}
  catch(e){if(e&&e.name==="AbortError")return;prompt("Copia este enlace:",url)}}
async function sharePost(pid){const url=redir()+"#p="+pid;
  try{if(navigator.share){await navigator.share({title:"tika",text:"Mira esta publicación en tika",url});return}await navigator.clipboard.writeText(url);closeSheet();T("Enlace copiado")}
  catch(e){if(e&&e.name==="AbortError")return;closeSheet();prompt("Copia este enlace:",url)}}
function editPostSheet(pid){const p=pmap[pid];if(!p||p.author!==me.id)return;
  sheet(`${hd("Editar texto")}<textarea id="edt" maxlength="500" placeholder="Escribe algo">${esc(p.body)}</textarea><p class="er" id="er"></p><button class="btn" id="edsave" data-p="${pid}">Guardar</button>`)}
async function savePostEdit(pid){const p=pmap[pid]||{},body=$("#edt").value.trim();if(!body&&p.kind==="post"&&!p.media_path)return er("El texto no puede quedar vacío.");
  const b=$("#edsave");b.disabled=true;const{error}=await sb.from("posts").update({body}).eq("id",pid);if(error){b.disabled=false;return er(ERR(error))}
  closeSheet();cache={};pc={};T("Publicación editada");show(tab)}

/* ---------- Lanzamiento: legales, silenciar, modo de tickets, instalable, sin conexión ---------- */
const GOOGLE_LOGIN=false,TURNSTILE_KEY="",TERMS_V="1.2-2026-11",LEGAL={"terms": {"t": "Términos y condiciones", "v": "Versión 1.1 · 8 de noviembre de 2026 · Borrador pendiente de revisión legal", "s": [["1. Quiénes somos y qué aceptas", "tika es una red social para publicar fotos, textos y videos cortos, y para comunicarte con otras personas. Es operada por el titular que se identifica en la sección 14, al final de este documento (en adelante, “tika” o “nosotros”). Al crear una cuenta o usar tika aceptas estos Términos y la Política de Privacidad. Si no estás de acuerdo, no uses la aplicación."], ["2. Quién puede usar tika", "Debes tener al menos 16 años. Cada persona puede tener una sola cuenta, con datos veraces. Eres responsable de mantener tu contraseña en secreto y de lo que ocurra en tu cuenta. Avísanos si crees que alguien entró sin tu permiso."], ["3. Tu contenido", "Lo que publicas es tuyo. Nos das una licencia limitada, gratuita y no exclusiva para alojar, mostrar y distribuir tu contenido dentro de tika, solo para que el servicio funcione. Esa licencia termina cuando borras el contenido o tu cuenta, salvo copias técnicas temporales que se eliminan en un plazo razonable. Declaras que tienes derecho a publicar lo que subes y que no infringe derechos de otras personas (autoría, imagen, intimidad)."], ["4. Qué no está permitido", "Está prohibido:\n• acosar, hostigar o discriminar;\n• amenazar o incitar a la violencia;\n• estafar o engañar para obtener dinero, tickets, datos o contraseñas;\n• publicar contenido ilegal;\n• publicar contenido sexual explícito o pensado para personas adultas;\n• mostrar violencia gráfica o gore;\n• cualquier contenido que sexualice o ponga en riesgo a menores;\n• compartir datos personales o imágenes íntimas de otras personas sin su permiso;\n• suplantar identidades o enviar spam;\n• usar sistemas automáticos para extraer datos o intentar vulnerar la seguridad del servicio.\nLas Normas de la comunidad forman parte de estos Términos."], ["5. Denuncias, moderación y sanciones", "Puedes denunciar publicaciones, comentarios y perfiles, y bloquear o silenciar a otras personas. Revisamos las denuncias y podemos eliminar contenido, limitar funciones, suspender o cerrar cuentas cuando se incumplan estas reglas, con o sin aviso previo si el caso es grave. No tenemos obligación de revisar todo el contenido antes de que se publique. Si crees que nos equivocamos, escríbenos desde Ayuda y soporte. En casos graves podemos informar a las autoridades y colaborar con requerimientos legales."], ["6. Mensajes privados", "Los mensajes son entre las personas que participan. No los revisamos de forma rutinaria, pero pueden ser denunciados por quien los recibe, y podremos acceder a ellos si la ley lo exige o para proteger la seguridad de las personas."], ["7. Tickets y donaciones", "Los tickets son una función para apoyar a otras personas. Por ahora no se pueden comprar ni donar: esa función se habilitará más adelante. Antes de que esté disponible te informaremos los precios, impuestos, comisiones, medios de pago y política de reembolsos, y te pediremos aceptar las condiciones específicas."], ["8. Propiedad intelectual de tika", "El nombre, el diseño, el código y los elementos de tika pertenecen al titular de tika (sección 14) o a sus licenciantes. No puedes copiarlos ni usarlos sin permiso, salvo lo necesario para usar la aplicación."], ["9. Disponibilidad y cambios del servicio", "Trabajamos para que tika funcione bien, pero puede tener interrupciones, errores o cambios. Podemos modificar, suspender o discontinuar funciones. Durante las etapas de prueba, el servicio se ofrece tal como está."], ["10. Responsabilidad", "En la medida que lo permita la ley, tika no se responsabiliza por el contenido publicado por las personas usuarias ni por daños indirectos derivados del uso del servicio. Nada de esto limita los derechos irrenunciables que te correspondan como consumidor o consumidora según la ley argentina."], ["11. Eliminar tu cuenta", "Puedes eliminar tu cuenta cuando quieras desde Ajustes > Eliminar mi cuenta, o escribiéndonos. Se borrarán tu perfil, publicaciones, comentarios, mensajes, seguidores y saldo de tickets sin usar, según se explica en la Política de Privacidad. Podemos conservar los registros que la ley exija o que sean necesarios para resolver denuncias o disputas."], ["12. Cambios en estos términos", "Podemos actualizar estos Términos. Si el cambio es importante, te lo avisaremos en la aplicación y te pediremos aceptar la nueva versión. Si sigues usando tika después de un aviso razonable, se entenderá que aceptas los cambios."], ["13. Ley aplicable y contacto", "Estos Términos se rigen por las leyes de la República Argentina. Para cualquier controversia son competentes los tribunales ordinarios de Buenos Aires, Argentina, sin perjuicio de la jurisdicción que la ley otorgue a los consumidores. Contacto: Tika.oficial.mv@gmail.com, o Ajustes > Ayuda y soporte."], ["14. Datos del titular", "Titular de tika: Octavio Morales.\nDomicilio: Buenos Aires, Argentina.\nCorreo de contacto: Tika.oficial.mv@gmail.com"]]}, "privacy": {"t": "Política de privacidad", "v": "Versión 1.2 · 9 de noviembre de 2026 · Borrador pendiente de revisión legal", "s": [["1. Quién es responsable", "El responsable del tratamiento de tus datos personales es el titular que se identifica en la sección 16, al final de este documento. Contacto: Tika.oficial.mv@gmail.com. Esta política se rige por la Ley 25.326 de Protección de los Datos Personales de la República Argentina."], ["2. Qué datos recopilamos", "• Cuenta: correo electrónico y contraseña (la contraseña la guarda cifrada el proveedor de autenticación; nosotros no podemos verla).\n• Perfil: nombre, nombre de usuario, biografía, foto y tus preferencias de la app.\n• Fecha de nacimiento: solo para comprobar la edad mínima de 16 años; nadie más la ve.\n• Contenido: publicaciones, fotos, videos, comentarios, respuestas, mensajes (incluidos audios y stickers), reacciones y guardados.\n• Actividad en la app: qué publicaciones y videos ves y durante cuánto tiempo, tus me gusta y no me gusta, reposts y guardados, y los hashtags y cuentas que más te interesan. La usamos para recomendarte contenido (ver sección 4).\n• Relaciones y seguridad: a quién sigues, bloqueos, silencios y denuncias que envías o recibes.\n• Ajustes: tus opciones de privacidad (cuenta privada, quién puede escribirte, tickets anónimos, mostrar seguidores o seguidos, mostrar respuestas como publicaciones), el idioma y el tema.\n• Mensajes ocultos: cuáles mensajes eliminaste solo para ti, para no volver a mostrártelos.\n• Tickets: tu saldo y las donaciones que haces o recibes (por ahora solo en modo de prueba, sin dinero real).\n• Soporte: los mensajes que nos escribes.\n• Aceptación: la versión y la fecha en que aceptaste estos documentos.\n• Datos técnicos básicos (como dirección IP, tipo de dispositivo y registros de errores) que generan los servicios que usamos para funcionar y protegernos."], ["3. Para qué los usamos", "Para crear y mantener tu cuenta, mostrar tu contenido según tu configuración de privacidad, permitir mensajes, seguidores y notificaciones, recomendarte contenido y hashtags, prevenir abuso, spam y fraude (por ejemplo con filtros automáticos de palabras prohibidas y límites de velocidad), atender denuncias y soporte, mostrar la app en el idioma que elijas, cumplir obligaciones legales y mejorar el servicio. No vendemos tus datos personales y por ahora no mostramos publicidad personalizada."], ["4. Recomendaciones personalizadas", "La pestaña Para ti y la pestaña Videos ordenan el contenido combinando qué tan nuevo y popular es con tus intereses, que el sistema calcula a partir de lo que ves, cuánto tiempo lo ves y tus me gusta, no me gusta, reposts y guardados. Es un proceso automatizado: no produce efectos legales sobre ti y no lo usamos para publicidad. La pestaña Siguiendo ordena por fecha y muestra primero a las personas que sigues. Esta información de actividad no es visible para otras personas. Puedes borrar lo que el sistema aprendió desde Ajustes > Reiniciar mis recomendaciones, y también puedes pedirnos por correo que dejemos de usar tu actividad para recomendar."], ["5. Tu consentimiento", "Al crear la cuenta y aceptar estos documentos, nos das tu consentimiento libre, expreso e informado para tratar tus datos con estas finalidades. Puedes retirarlo eliminando tu cuenta."], ["6. Quién puede ver tu contenido", "Tu nombre, nombre de usuario, foto y biografía son visibles para las personas usuarias. Tus publicaciones, videos, reposts y las respuestas que publiques como publicación son visibles para todas ellas, salvo que tu cuenta sea privada: en ese caso solo las ven los seguidores que aceptaste. Los hashtags que escribas permiten que otras personas encuentren tu contenido en las páginas de hashtags y en las tendencias. Tus comentarios los ven quienes pueden ver la publicación comentada y, si activas \"Mostrar mis respuestas como publicaciones\", también aparecen en tu perfil. Puedes ocultar tu lista de seguidores y de seguidos en Ajustes; la cantidad de cada una siempre es visible. Si donas un ticket puedes hacerlo de forma anónima. Tus guardados y tu actividad son solo tuyos."], ["7. Mensajes privados", "Los mensajes privados (texto, fotos, audios y stickers) los ven solo quienes participan y los archivos se guardan en almacenamiento privado. No están cifrados de extremo a extremo: no los leemos de forma rutinaria, pero podríamos revisarlos si alguien los denuncia, para investigar abusos graves o si una autoridad competente lo exige. Si eliminas un mensaje para las dos personas, se borra su contenido y queda el aviso \"Mensaje eliminado\"; si lo eliminas solo para ti, la otra persona lo sigue viendo. Quien recibe un mensaje puede copiarlo o hacer una captura. Puedes limitar quién puede escribirte desde Ajustes."], ["8. Con quién compartimos datos", "Usamos proveedores que procesan datos por nuestra cuenta: Supabase (base de datos, autenticación, envío de correos y almacenamiento de archivos), Cloudflare (alojamiento de la aplicación web y, cuando está activa, la verificación anti-bots Turnstile) y jsDelivr (red que entrega una librería de la aplicación y puede ver tu dirección IP). Si descargas tika desde Google Play, Google trata datos según sus propias políticas. Más adelante podremos usar un proveedor de correo propio, el ingreso con Google y, para pagos, un procesador como Mercado Pago, y actualizaremos esta política antes de hacerlo. Las personas de nuestro equipo con funciones de moderación pueden ver el contenido denunciado y los datos necesarios para resolver la denuncia. También podemos compartir información con autoridades cuando una ley o una orden judicial lo exija, o para proteger la seguridad de las personas. Si tika cambiara de titular, tus datos podrían transferirse al nuevo titular, que deberá respetar esta política."], ["9. Transferencias internacionales", "Algunos de nuestros proveedores pueden almacenar o procesar datos en servidores fuera de la Argentina (la base de datos está en la región us-west-2, en el oeste de Estados Unidos, y Cloudflare entrega la aplicación desde una red de servidores en distintos países). Exigimos medidas de seguridad adecuadas a esos proveedores."], ["10. Cuánto tiempo conservamos tus datos", "Mientras tu cuenta esté activa. Si la eliminas, borramos tu perfil, contenido, mensajes, archivos, actividad y datos de recomendaciones. La eliminación se hace al momento desde la aplicación o desde la página de eliminación de cuenta de nuestro sitio. Tu actividad de recomendaciones también se borra cuando usas \"Reiniciar mis recomendaciones\". Podemos conservar por el tiempo necesario los registros que exija la ley y los de denuncias y moderación necesarios para proteger a otras personas o resolver disputas. Los mensajes de soporte se conservan mientras sean necesarios para atender tu consulta. Las copias de seguridad que pueda hacer el proveedor de infraestructura se eliminan según los plazos de ese proveedor."], ["11. Seguridad", "Usamos conexiones cifradas, reglas de acceso a nivel de datos para que cada persona solo acceda a lo que le corresponde, almacenamiento privado para fotos, videos y audios, y medidas contra abuso y bots. Ningún sistema es infalible: si ocurriera un incidente que te afecte, te lo informaremos como corresponda."], ["12. Tus derechos", "Tienes derecho a acceder, rectificar, actualizar y suprimir tus datos personales, a oponerte al uso de tu actividad para recomendaciones y a pedirnos una copia de tus datos. Puedes editar tu perfil y eliminar tu cuenta desde la aplicación, o escribirnos a Tika.oficial.mv@gmail.com. Responderemos en los plazos legales. El acceso es gratuito a intervalos no inferiores a seis meses, salvo que acredites un interés legítimo (artículo 14 de la Ley 25.326). La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la Ley 25.326, tiene la atribución de atender las denuncias y reclamos de quienes resulten afectados en sus derechos por el incumplimiento de las normas de protección de datos personales."], ["13. Menores", "tika es solo para personas de 16 años o más. Para comprobarlo usamos la fecha de nacimiento que declaras; no pedimos documentos. Si detectamos que una cuenta pertenece a una persona menor, podemos eliminarla."], ["14. Almacenamiento en tu dispositivo", "Guardamos en tu dispositivo la sesión, el tema, el idioma y otras preferencias básicas para que no tengas que configurarlos cada vez, y archivos de la aplicación para que cargue más rápido y abra sin conexión. Si el captcha está activo, su proveedor puede usar almacenamiento propio para distinguir personas de bots. No usamos cookies publicitarias ni rastreadores de publicidad de terceros."], ["15. Cambios y contacto", "Si cambiamos esta política de forma importante, te lo avisaremos y te pediremos aceptar la nueva versión. Dudas: Tika.oficial.mv@gmail.com."], ["16. Datos del responsable", "Responsable del tratamiento de datos: Octavio Morales.\nDomicilio: Buenos Aires, Argentina.\nCorreo de contacto: Tika.oficial.mv@gmail.com"]]}};
let TICKETS="soon",muted=new Set(),ipe=null;
const nm=l=>l&&l.filter(p=>!muted.has(p.author)),soon=()=>soonSheet(),skel=n=>n===1?'<div class="empty">Cargando…</div>':'<div class="skl"></div>'.repeat(3);
async function loadCfg(){try{const[c,mu]=await Promise.all([sb.from("app_config").select("value").eq("key","tickets_mode").maybeSingle(),sb.from("mutes").select("muted").eq("muter",me.id)]);TICKETS=(c.data&&c.data.value)||"soon";muted=new Set((mu.data||[]).map(x=>x.muted))}catch(e){}}
async function hasConsent(){const{data,error}=await sb.from("consents").select("version").eq("user_id",me.id).eq("version",TERMS_V).maybeSingle();return error?true:!!data}
function consentView(){$("#app").innerHTML=`<div class="auth"><h1>tika</h1><b>Antes de continuar</b><p class="u" style="margin:0">Para usar tika necesitas aceptar los términos y la política de privacidad. Puedes leerlos antes de decidir. Al aceptar confirmas que tienes 16 años o más.</p><button class="btn ghost" data-set="terms">Leer términos y condiciones</button><button class="btn ghost" data-set="privacy">Leer política de privacidad</button><button class="btn ghost" data-set="rules">Leer normas de la comunidad</button><p class="er" id="er"></p><button class="btn" id="acc">Acepto</button><button class="btn ghost" id="noacc">No acepto</button></div>`}
async function acceptTerms(){const b=$("#acc");b.disabled=true;const{error}=await sb.from("consents").insert({user_id:me.id,version:TERMS_V});if(error&&error.code!=="23505"){b.disabled=false;return er(ERR(error))}route()}
function legalSheet(k){const L=LEGAL[k];sheet(`${hd(L.t)}<div class="rules"><p class="u">${esc(L.v)}</p>${L.s.map(([h,t])=>`<p><b>${esc(h)}</b>${esc(t)}</p>`).join("")}</div>`)}
async function muteUser(uid){const{error}=await sb.from("mutes").insert({muter:me.id,muted:uid});if(error&&error.code!=="23505")return T(ERR(error));muted.add(uid);closeSheet();cache={};pc={};T("Usuario silenciado. Ya no verás sus publicaciones ni comentarios.");if(curProf===uid)return profView(uid);hideAuthor(uid)}
async function mutedSheet(){const{data}=await sb.from("mutes").select("muted").eq("muter",me.id),pm=await profMap((data||[]).map(x=>x.muted));
  sheet(`${hd("Usuarios silenciados")}${(data||[]).map(x=>{const u=pm[x.muted]||{display_name:"Usuario",username:"?"};return `<div class="srow"><span><b>${esc(u.display_name)}</b> <span class="u">@${esc(u.username)}</span></span><button class="btn ghost" data-um="${x.muted}">Dejar de silenciar</button></div>`}).join("")||'<p class="u">No silenciaste a nadie.</p>'}`)}
async function unmute(uid,fromList){const{error}=await sb.from("mutes").delete().match({muter:me.id,muted:uid});if(error)return T(ERR(error));muted.delete(uid);cache={};pc={};T("Listo, ya no está silenciado");if(fromList)return mutedSheet();closeSheet();if(curProf===uid)return profView(uid);show(tab)}
const standalone=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===true,iosWeb=()=>/iphone|ipad|ipod/i.test(navigator.userAgent),canInstall=()=>!standalone()&&(!!ipe||iosWeb());
async function installSheet(){if(ipe){const e=ipe;ipe=null;closeSheet();e.prompt();return}sheet(`${hd("Instalar la app")}<p style="margin:0">En iPhone: toca el botón Compartir del navegador y elige <b>Agregar a inicio</b>.</p>`)}
addEventListener("beforeinstallprompt",e=>{e.preventDefault();ipe=e});addEventListener("appinstalled",()=>{ipe=null});
if("serviceWorker" in navigator)addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
function offBar(){let b=$("#off");if(!b){b=document.createElement("div");b.id="off";b.textContent="Sin conexión. Algunas cosas no cargarán.";document.body.appendChild(b)}b.style.display=navigator.onLine?"none":"block"}
addEventListener("online",()=>{offBar();if(me&&!$("#sh")&&!$("#ml"))show(tab)});addEventListener("offline",offBar);offBar();

let capTok="",capId=null;
function initCaptcha(){if(!TURNSTILE_KEY||!$("#cf"))return;
  const go=()=>{capTok="";capId=turnstile.render("#cf",{sitekey:TURNSTILE_KEY,callback:t=>{capTok=t},"expired-callback":()=>{capTok=""}})};
  if(window.turnstile)return go();
  if(!document.getElementById("tsjs")){const e=document.createElement("script");e.id="tsjs";e.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";e.async=true;e.onload=go;document.head.appendChild(e)}else setTimeout(initCaptcha,300)}
const capOpt=()=>TURNSTILE_KEY?{captchaToken:capTok}:{},capReset=()=>{capTok="";try{if(window.turnstile&&capId!==null)turnstile.reset(capId)}catch(e){}};
document.addEventListener("load",e=>{const i=e.target;if(i&&i.tagName==="IMG"){const m=i.closest(".ml");if(m)m.scrollTop=1e9}},true);

function fatalView(msg){$("#app").innerHTML=`<div class="auth"><h1>tika</h1><b>No se pudo abrir tu cuenta</b><p class="u" style="margin:0">${esc(msg||"Error desconocido")}</p><button class="btn" id="rty">Reintentar</button><button class="btn ghost" id="lo">Cerrar sesión</button></div>`}

/* ---------- Deslizar entre páginas y pestañas ---------- */
function slide(el,d){if(!el||!d)return;el.style.animation="none";void el.offsetWidth;el.style.animation=`${d>0?"sr":"sl"} .28s cubic-bezier(.2,.8,.2,1)`}
function swipe(d){if($("#sh"))return;
  if(tab===2){if(!$("#pl"))return;if(d<0&&ptab===0)return show(1);const n=ptab+d;if(n>=0&&n<=3)setPt(n);return}
  if(tab===0&&d>0)return show(1);if(tab===1){if(d<0)return show(0);ptab=0;return show(2)}}
let tx=0,ty=0,sw=false;
document.addEventListener("touchstart",e=>{const t=e.touches[0];tx=t.clientX;ty=t.clientY;sw=!!me&&!$("#sh")&&!e.target.closest("video[controls],input,textarea,.sgl")},{passive:true});
document.addEventListener("touchmove",e=>{if(!sw)return;const t=e.touches[0],dx=t.clientX-tx,dy=t.clientY-ty;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5){sw=false;swipe(dx<0?1:-1)}},{passive:true});

/* ---------- v16: hashtags, Para ti, respuestas, listas, chat, tickets ---------- */
let htab=0,curProf=null,tgS=null,keep={},RPp=null;

/* Pestañas rápidas: al salir de Inicio o Videos se guarda la pantalla entera y se devuelve al instante */
function stash(t){const m=$("#mn");if(!m||(t!==0&&t!==1)||!me||!m.querySelector(".post,.vid"))return false;
  if(keep[t]&&keep[t].pg)keep[t].pg.disconnect();
  m.querySelectorAll("video").forEach(v=>v.pause());const top=m.scrollTop,fr=document.createDocumentFragment();while(m.firstChild)fr.appendChild(m.firstChild);
  keep[t]={fr,top,ref:cache,at:Date.now(),own:me.id,h:htab,pg:pgo};pgo=null;return true}
function takeKeep(n){const k=keep[n];if(!k)return null;delete keep[n];
  const ok=me&&k.own===me.id&&k.ref===cache&&Date.now()-k.at<(n===0?120000:300000)&&(n!==0||k.h===htab);if(!ok){k.pg&&k.pg.disconnect();return null}return k}
/* Los videos se piden en segundo plano mientras estás en Inicio */
function prefetchReels(){if(!me||RPp||(keep[1]&&keep[1].ref===cache))return;const own=me.id;
  RPp=(async()=>{const st={seed:Math.random().toString(36).slice(2,8),off:0,end:false},l=await fypPage(st,"video");
    if(!l||!l.length)return null;l.slice(0,4).forEach(p=>{if(p.thumb){const i=new Image();i.src=p.thumb}});return{st,l,t:Date.now(),own}})().catch(()=>null)}
async function takeReels(){const p=RPp;RPp=null;if(!p)return null;const r=await p;return r&&me&&r.own===me.id&&Date.now()-r.t<300000?r:null}


/* Respuestas como publicación: la publicación original va debajo */
async function quotedMap(rows){const ids=[...new Set(rows.map(p=>p.reply_to).filter(Boolean))];if(!ids.length)return{};
  const{data}=await sb.from("posts").select("id,author,kind,body,thumb_path,created_at").in("id",ids),L=data||[];
  const[pm,url]=await Promise.all([profMap(L.map(x=>x.author)),signed(L.map(x=>x.thumb_path).filter(Boolean))]);
  return Object.fromEntries(L.map(x=>[x.id,{...x,profiles:pm[x.author]||{},thumb:url(x.thumb_path)}]))}
const qbox=p=>{if(!p.reply_to)return"";const q=p.rq;if(!q)return'<div class="qt gone">Publicación no disponible</div>';const u=q.profiles||{};
  return `<button class="qt" data-op="${q.id}"><small class="u">En respuesta a @${esc(u.username)}</small><b>${esc(u.display_name)}</b>${q.body?`<span>${esc(q.body)}</span>`:""}${q.thumb?`<img src="${q.thumb}" alt="">`:""}</button>`};
function repCard(p){const u=p.profiles||{};return `<article class="post"><div class="who"><button class="wb" data-u="${p.author}">${ava(u)}<b>${esc(u.display_name)}</b><span class="u">@${esc(u.username)}</span></button><small>${rel(p.created_at)}</small></div><p>${esc(p.body)}</p>${qbox(p)}</article>`}
async function repliesAsPosts(uid){const{data}=await sb.from("comments").select("id,post_id,author,body,created_at").eq("author",uid).order("created_at",{ascending:false}).limit(30),L=data||[];if(!L.length)return[];
  const ps=await fetchPosts(q=>q.in("id",[...new Set(L.map(c=>c.post_id))]));if(!ps)return[];const pm=Object.fromEntries(ps.map(p=>[p.id,p])),pr=await profMap([uid]);
  return L.filter(c=>pm[c.post_id]&&!muted.has(pm[c.post_id].author)).map(c=>({id:"c"+c.id,isRep:1,author:uid,body:c.body,created_at:c.created_at,profiles:pr[uid]||{},rq:pm[c.post_id],reply_to:c.post_id,c:{}}))}
const mergeRep=(a,b)=>[...a,...b].sort((x,y)=>new Date(y.created_at)-new Date(x.created_at));
async function replyAsPost(pid){const v=$("#ci").value.trim();if(!v)return er("Escribe tu respuesta arriba.");const b=$("#cas");b.disabled=true;
  const{error}=await sb.from("posts").insert({author:me.id,kind:"post",body:v,reply_to:pid});if(error){b.disabled=false;return er(ERR(error))}
  closeSheet();cache={};pc={};T("Publicado como publicación");if(tab===2)return show(2);htab=1;show(0)}

/* Para ti: el servidor ordena según lo que miras y te gusta */
async function byIds(ids){if(!ids.length)return[];const l=await fetchPosts(q=>q.in("id",ids));if(!l)return null;const ix=Object.fromEntries(ids.map((x,i)=>[x,i]));return l.sort((a,b)=>ix[a.id]-ix[b.id])}
async function fypPage(st,kind){const out=[];let tries=0;
  while(!out.length&&!st.end&&tries++<3){const{data,error}=await sb.rpc("for_you",{p_seed:st.seed,p_offset:st.off,p_limit:PAGE,p_kind:kind});
    if(error){lastErr=ERR(error);return null}const ids=data||[];st.off+=ids.length;if(ids.length<PAGE)st.end=true;if(!ids.length)break;
    const l=await byIds(ids);if(!l)return null;out.push(...nm(l))}
  return out}
function fypMore(host,st,kind,render,after){pgo&&pgo.disconnect();pgo=null;if(!host||st.end)return;const sn=document.createElement("div");sn.className="more";host.appendChild(sn);let busy=false;
  const ob=new IntersectionObserver(async es=>{if(busy||!es[0].isIntersecting)return;busy=true;const l=await fypPage(st,kind);if(!document.body.contains(sn)){busy=false;return}
    if(l&&l.length){sn.insertAdjacentHTML("beforebegin",render(l));after&&after()}
    if(st.end||!l){ob.disconnect();sn.remove();return}busy=false},{rootMargin:"400px"});pgo=ob;ob.observe(sn)}
async function trend(){const{data}=await sb.rpc("trending_tags",{p_limit:10}),e=$("#tr");if(!e||tab!==0||!data||!data.length)return;
  e.innerHTML=`<div class="chips">${data.map(x=>`<button class="chip" data-s="#${esc(x.o_tag)}">#${esc(x.o_tag)}</button>`).join("")}</div>`}

/* Cuánto tiempo se ve cada publicación o video (se manda en lotes, solo para recomendar) */
const wm=new Map();let wq={},wo=null;
function watch(root){if(!root||!me)return;
  if(!wo)wo=new IntersectionObserver(es=>es.forEach(e=>{const id=e.target.dataset.pid;if(!id)return;
    if(e.isIntersecting)wm.set(id,Date.now());else{const t=wm.get(id);if(t){wm.delete(id);const ms=Date.now()-t;if(ms>=300)wq[id]=(wq[id]||0)+ms}}}),{threshold:.6});
  root.querySelectorAll("[data-pid]:not([data-w])").forEach(e=>{e.dataset.w="1";wo.observe(e)})}
async function flushViews(){if(!me)return;const now=Date.now();
  for(const[id,t]of[...wm]){const ms=now-t;if(ms>=300)wq[id]=(wq[id]||0)+ms;if(document.querySelector(`[data-pid="${id}"]`))wm.set(id,now);else wm.delete(id)}
  const items=Object.entries(wq).slice(0,40).map(([p,ms])=>({p,ms:Math.min(Math.round(ms),600000)}));if(!items.length)return;wq={};
  try{await sb.rpc("track_views",{p_items:items})}catch(e){}}
function rescan(){wm.clear();document.querySelectorAll("[data-pid][data-w]").forEach(e=>{const r=e.getBoundingClientRect(),h=Math.min(r.bottom,innerHeight)-Math.max(r.top,0);if(r.height>0&&h>=Math.min(r.height,innerHeight)*.6)wm.set(e.dataset.pid,Date.now())})}
setInterval(()=>{if(!document.hidden)flushViews()},10000);
document.addEventListener("visibilitychange",()=>{if(document.hidden){flushViews().then(()=>wm.clear())}else rescan()});
addEventListener("pagehide",()=>flushViews());

/* Página de un hashtag: publicaciones y videos relacionados */
function tagSheet(tag,kind){tag=String(tag||"").toLowerCase().replace(/[^\p{L}\p{N}_]/gu,"");if(!tag)return;kind=kind||"post";tgS={tag,kind,before:null,busy:false};
  sheet(`${hd("#"+esc(tag))}<div class="seg"><button data-tgk="post" class="${kind==="post"?"on":""}">Publicaciones</button><button data-tgk="video" class="${kind==="video"?"on":""}">Videos</button></div><div id="tgl"><div class="empty">Cargando…</div></div>`,1);tagMore(true)}
async function tagMore(first){const s=tgS;if(!s||s.busy)return;s.busy=true;
  const{data,error}=await sb.rpc("posts_by_tag",{p_tag:s.tag,p_kind:s.kind,p_before:s.before,p_limit:PAGE});if(tgS!==s||!$("#tgl"))return;
  if(error){$("#tgl").innerHTML=`<div class="empty"><b>No se pudo cargar</b>${esc(ERR(error))}<br><button class="btn" data-tgm="1">Reintentar</button></div>`;s.busy=false;return}
  const ids=data||[],l=ids.length?await byIds(ids):[];if(tgS!==s||!$("#tgl"))return;
  if(l===null){$("#tgl").innerHTML=errV();s.busy=false;return}
  const box=$("#tgl"),mb=box.querySelector("[data-tgm]");if(mb)mb.remove();if(first)box.innerHTML="";
  if(l.length)s.before=l[l.length-1].created_at;const vis=nm(l);
  if(first&&!ids.length)box.innerHTML=`<div class="empty"><b>${s.kind==="video"?"Todavía no hay videos con este hashtag":"Todavía no hay publicaciones con este hashtag"}</b></div>`;
  else box.insertAdjacentHTML("beforeend",vis.map(card).join("")+(ids.length>=PAGE?'<button class="btn ghost" data-tgm="1">Cargar más</button>':""));
  watch(box);s.busy=false}

/* Listas de seguidores y seguidos (la persona decide si se ven) */
async function followSheet(uid,kind){const{data,error}=await sb.rpc("follow_list",{p_user:uid,p_kind:kind});if(error)return T(ERR(error));
  const ids=(data||[]).map(x=>x.o_id),pm=await profMap(ids),L=ids.map(i=>pm[i]).filter(Boolean);
  sheet(`${hd(kind==="followers"?"Seguidores":"Seguidos")}${L.map(u=>`<button class="row" data-cu="${u.id}">${ava(u)}<span><b>${esc(u.display_name)}</b> <span class="u">@${esc(u.username)}</span></span></button>`).join("")||'<p class="u">Nada por aquí todavía.</p>'}`)}

/* Chat: eliminar un mensaje solo para mí */
async function hiddenSet(ids){if(!ids.length)return new Set();const{data}=await sb.from("message_hides").select("message_id").eq("user_id",me.id).in("message_id",ids);return new Set((data||[]).map(x=>x.message_id))}
async function msgHide(id){closeMm();if(!confirm("¿Eliminar este mensaje solo para ti? La otra persona lo seguirá viendo."))return;
  const{error}=await sb.from("message_hides").insert({user_id:me.id,message_id:id});if(error&&error.code!=="23505")return T(ERR(error));
  if(chat)chat.m=chat.m.filter(x=>x.id!==id);renderChat();if($("#cl"))loadInbox()}

/* Silenciar o bloquear sin salir de donde estás */
function hideAuthor(uid){document.querySelectorAll(`[data-a="${uid}"]`).forEach(e=>e.remove())}

/* Tickets: mientras no estén habilitados */
function soonSheet(){sheet(`${hd("Tickets")}<p style="margin:0"><b>Próximamente podrás donar tickets</b></p><p class="u" style="margin:0">Muy pronto vas a poder apoyar a quien publica con tickets. Todavía no se pueden comprar ni donar.</p><button class="btn" data-tsoon="1">Comprar tickets</button>`)}
async function soonTickets(){const{tiers}=await walletData();
  sheet(`${hd("Comprar tickets")}<p class="u" style="margin:0">Próximamente podrás comprar tickets. Estos son los tipos que habrá:</p>${tiers.map(t=>`<div class="srow"><span><b>${tdot(t.code)}${esc(t.name)}</b></span><button class="btn ghost" disabled>Próximamente</button></div>`).join("")}`)}

/* Recomendaciones */
async function resetRec(){if(!confirm("¿Borrar lo que tika aprendió de lo que ves y te gusta? Tus recomendaciones empezarán de cero."))return;
  const{error}=await sb.rpc("reset_recommendations");if(error)return T(ERR(error));cache={};T("Recomendaciones reiniciadas")}

/* ---------- Eventos ---------- */
document.addEventListener("click",async e=>{const t=e.target.closest("button");if(!t){const v=e.target.closest(".vid video");if(v){if(v.paused)v.play().catch(()=>{});else v.pause()}return}const d=t.dataset;
  if(d.lang){I18N.set(d.lang);cache={};pc={};closeSheet();return me?route():authView()}if(d.ht!=null){htab=+d.ht;cache[0]=null;return show(0)}if(d.fl)return followSheet(d.fu,d.fl);if(d.tgk)return tagSheet(tgS&&tgS.tag,d.tgk);if(d.tgm)return tagMore();if(d.mh)return msgHide(d.mh);if(t.id==="cas")return replyAsPost(d.p);if(d.tsoon)return soonTickets();
  if(d.m){mode=d.m;return authView()}if(t.id==="go")return doAuth();if(t.id==="fg")return forgot();if(t.id==="nr")return newPass();if(t.id==="cs")return doSetup();
  if(t.id==="lo"){closeSheet();return sb.auth.signOut()}
  if(d.t!=null)return show(+d.t);if(t.id==="bc")return createSheet();if(t.id==="bm")return inboxSheet();
  if(d.pk){const i=$("#"+d.pk);return i&&i.click()}if(d.pkx){const i=$("#"+d.pkx);if(i){i.value="";pkShow(i)}return}if(d.x)return closeSheet();if(d.c){cmode=d.c;return createSheet()}if(t.id==="pub")return publish();
  if(t.id==="ep")return editSheet();if(t.id==="shp")return shareProfile();if(t.id==="sv")return saveProfile();if(t.id==="st"||t.id==="bs")return setSheet();if(t.id==="bn")return notSheet();if(d.vp&&vmap[d.vp])return sheet(`${hd("Video")}${card(vmap[d.vp])}`);
  if(d.k){const pt={[d.k]:!me[d.k]};if(d.k==="dm_mutual_only"&&pt.dm_mutual_only)pt.dm_followers_only=false;if(d.k==="dm_followers_only"&&pt.dm_followers_only)pt.dm_mutual_only=false;return upd(pt)}if(d.th)return upd({theme:d.th});if(t.id==="gg")return google();if(t.id==="rq")return reqSheet();
  if(d.pt!=null)return setPt(+d.pt);if(d.u)return profView(d.u);if(d.bk)return show(0);
  if(d.un){const{data}=await sb.from("profiles").select("id").eq("username",d.un).maybeSingle();return data?profView(data.id):T("Usuario no encontrado")}
  if(d.s){if(d.s[0]==="#")return tagSheet(d.s.slice(1));await show(0);$("#q").value=d.s;return search(d.s)}
  if(d.f){const on=!!d.st,pv=d.pv==="1";t.dataset.st=on?"":(pv?"pending":"accepted");t.textContent=on?(pv?"Solicitar seguir":"Seguir"):(pv?"Solicitud enviada":"Siguiendo");t.classList.toggle("ghost",!on);
    const{error}=await(on?sb.from("follows").delete().match({follower:me.id,following:d.f}):sb.from("follows").insert({follower:me.id,following:d.f}));if(error){T(ERR(error));return profView(d.f)}return}
  if(d.ra){await sb.rpc("respond_follow",{p_follower:d.ra,p_accept:!!d.ok});return reqSheet()}
  if(t.id==="cs2"){const v=$("#ci").value.trim();if(!v)return;const{error}=await sb.from("comments").insert({post_id:d.p,author:me.id,body:v});return error?er(ERR(error)):commentSheet(d.p)}
  if(d.dc){await sb.from("comments").delete().eq("id",d.dc);return commentSheet(d.p)}
  if(d.sh)return sharePost(d.sh);if(d.edp)return editPostSheet(d.edp);if(t.id==="edsave")return savePostEdit(d.p);if(d.op)return openPost(d.op);
  if(d.set)return({rules:rulesSheet,support:supportSheet,blocked:blockedSheet,mod:modSheet,del:deleteSheet,terms:()=>legalSheet("terms"),privacy:()=>legalSheet("privacy"),muted:mutedSheet,install:installSheet,resetrec:resetRec})[d.set]();
  if(d.mu)return muteUser(d.mu);if(d.um)return unmute(d.um,!!t.closest(".srow"));if(t.id==="rty")return route();if(t.id==="acc")return acceptTerms();if(t.id==="noacc"){closeSheet();return sb.auth.signOut()}
  if(d.pm)return postMenu(d.pm);if(d.delp)return delPostSheet(d.delp);if(d.dpok)return delPost(d.dpok);if(d.rp)return reportSheet("post",d.rp);if(d.rc)return reportSheet("comment",d.rc);if(d.ru)return reportSheet("user",d.ru);if(d.pu)return userMenu(d.pu);
  if(d.rr){rpt.reason=d.rr;document.querySelectorAll("[data-rr]").forEach(b=>b.classList.toggle("on",b.dataset.rr===d.rr));return}if(t.id==="rsend")return sendReport();
  if(d.bl)return blockSheet(d.bl);if(d.bok)return doBlock(d.bok);if(d.ub)return unblock(d.ub);if(t.id==="spsend")return sendSupport();if(t.id==="dacc")return delAccount();if(d.ma)return modDo(d.mr,d.ma);
  if(d.ch)return openChat(d.ch);if(d.mb){recStop(false);return inboxSheet()}
  if(d.cu){const i=d.cu;recStop(false);closeSheet();return profView(i)}
  if(t.id==="cp"){const y=$("#ctray");if(y)y.hidden=!y.hidden;return}if(t.id==="cph"){$("#ctray").hidden=true;return $("#cf").click()}if(t.id==="cst"){$("#ctray").hidden=true;return stkSheet()}
  if(t.id==="cx")return sendMsg();if(t.id==="cm")return recStart();if(t.id==="rcx")return recStop(false);if(t.id==="rok")return recStop(true);
  if(d.mx){return closeMm()}if(d.me)return msgEdit(d.me);if(d.mc)return msgCopy(d.mc);if(d.md)return msgDel(d.md);if(d.ex)return endEdit();
  if(t.id==="stn"){const i=$("#sti");return i&&i.click()}if(d.ss)return sendSticker(d.sp);if(d.sd)return delSticker(d.sd,d.sp);
  if(d.bt)return buyTicket(d.bt,t);if(d.tb)return ticketSheet();if(d.dt)return confirmDonate(d.p,d.dt);if(d.dd)return donateSheet(d.dd);if(t.id==="dok")return doDonate(d.p,d.tier);if(t.id==="dan")return toggleAnon(d.p,d.tier);
  if(d.rt)return show(tab);if(t.id==="bd")return TICKETS==="soon"?soon():ticketSheet();if(d.r)return react(t)});
sb.auth.onAuthStateChange((ev)=>{if(ev==="PASSWORD_RECOVERY")return recView();if(ev==="SIGNED_OUT"){me=null;chat=null;if(rtc){sb.removeChannel(rtc);rtc=null}return setTimeout(route,0)}if(!me&&ev!=="TOKEN_REFRESHED")setTimeout(route,0)});
route();setInterval(()=>{if(me&&!document.hidden)bdot()},60000);
