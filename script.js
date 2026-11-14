/* ============================================================
   EDIT YOUR DETAILS HERE – used across every page
   ============================================================ */
const CONFIG = {
  name: "Nagar Boys Hostel",
  phone: "+91 99999 99999",        // shown on the site
  phoneRaw: "919999999999",        // digits only, with country code (for call / WhatsApp links)
  email: "info@nagarboyshostel.com",
  website: "www.nagarboyshostel.com",
  address: "Plot 57-B, Marbles, MR 10 Rd, behind Ramdev, Vijay Nagar, Sector C, Sheetal Nagar, Indore, Madhya Pradesh 452010.",
  hours: "Open 24 hours",
  instagram: "#",
  facebook: "#",
  // live Google Map for the hostel's plus code (PWX2+J8 Indore)
  mapEmbed: "https://www.google.com/maps?q=PWX2%2BJ8%20Indore%2C%20Madhya%20Pradesh&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=PWX2%2BJ8%20Indore%2C%20Madhya%20Pradesh"
};

/* ---------- big black outline icons (viewBox 0 0 24 24) ---------- */
const ICONS = {
  ac:'<rect x="2" y="4" width="20" height="8" rx="2"/><path d="M5 9h9M7 15v2M12 15v3M17 15v2"/>',
  desk:'<rect x="7" y="2" width="10" height="6" rx="1"/><path d="M12 8v2M3 11h18M5 11v10M19 11v10M10 11v4h4v-4"/>',
  fan:'<circle cx="12" cy="12" r="1.5"/><path d="M12 10.5C12 6 8 3 5 5c-1 2 2 5 7 5.5M13.5 12c4.500 0 7.500-4 5.500-7-2-1-5 2-5.500 7M12 13.500c0 4.500 4 7.500 7 5.500 1-2-2-5-7-5.500M10.500 12C6 12 3 16 5 19c2 1 5-2 5.500-7"/>',
  window:'<rect x="5" y="2" width="14" height="20"/><rect x="7.500" y="4.500" width="9" height="7"/><rect x="7.500" y="13" width="9" height="6.500"/>',
  cupboard:'<rect x="5" y="2" width="14" height="20"/><path d="M12 2v20M10 12h.01M14 12h.01"/>',
  hot:'<path d="M4 15c2-2 4 2 8 0s6 2 8 0M4 20c2-2 4 2 8 0s6 2 8 0M8 3c-1 2 1 3 0 5M12 3c-1 2 1 3 0 5M16 3c-1 2 1 3 0 5"/>',
  bed:'<path d="M2 20v-9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9M2 16h20M6 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3M9 12h6"/>',
  bath:'<path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3zM6 12V6a2 2 0 0 1 4 0M7 19l-1 2M17 19l1 2"/>',
  meal:'<circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="3.500"/><path d="M3 3v7M5 3v7M3 7h2M4 10v11M21 3c-2 2-2 6 0 8v10"/>',
  wifi:'<rect x="3" y="14" width="18" height="6" rx="1.500"/><path d="M7 17h.01M10 17h.01M13 17h4M8 11a6 6 0 0 1 8 0M5.500 8.500a10 10 0 0 1 13 0M12 14v-2"/>',
  zap:'<rect x="3" y="7" width="18" height="12" rx="1.500"/><circle cx="7" cy="20.500" r="1.500"/><circle cx="17" cy="20.500" r="1.500"/><path d="M13 9l-3 4h4l-3 4"/>',
  cctv:'<path d="M3 3v16M3 8l4-1.500M7 6.500l12-3.500 2.500 8-12 3.500zM17 3.200l2.500 8M12 14l-1 5h-4"/><circle cx="19.500" cy="8" r="1"/>',
  ro:'<path d="M12 2c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11z"/><path d="M9 14a3 3 0 0 0 3 3"/>',
  user:'<path d="M8 8c0-4 8-4 8 0M7 8h10M12 11a3 3 0 1 0 .01 0M4 21c0-5 4-7 8-7s8 2 8 7"/>',
  wash:'<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="14" r="5"/><path d="M8 6h.01M12 6h.01M10 14a2 2 0 0 0 4 0"/>',
  spark:'<path d="M12 3l1.900 5.100L19 10l-5.100 1.900L12 17l-1.900-5.100L5 10l5.100-1.900zM19 16l.8 2.200L22 19l-2.200.8L19 22l-.8-2.200L16 19l2.200-.8z"/>',
  key:'<circle cx="7.500" cy="15.500" r="4.500"/><path d="M10.700 12.300L21 2M16 7l3 3"/>',
  fire:'<path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-9z"/>',
  visitor:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.870M16 3.130a4 4 0 0 1 0 7.750"/>',
  dining:'<path d="M3 10h18M12 10v10M8 20h8M6 4v6M18 4v6M5 10l-1 7M19 10l1 7"/>',
  tv:'<rect x="9" y="3" width="13" height="11"/><path d="M14 18h4M16 14v4"/><rect x="2" y="9" width="5" height="12" rx="1"/><path d="M4 12h1M4 15h1M4 18h1"/>',
  game:'<path d="M7 7h10a5 5 0 0 1 5 5v1a4 4 0 0 1-7 2.500l-.5-.5h-5l-.5.500A4 4 0 0 1 2 13v-1a5 5 0 0 1 5-5zM7 10v4M5 12h4M16 11h.01M18 13h.01"/>',
  fit:'<path d="M12 21C5 16 2 12 2 8.500A4.500 4.500 0 0 1 12 6a4.500 4.500 0 0 1 10 2.500c0 3.500-3 7.500-10 12.500zM7 12h3l1.500-3 2 5 1.500-2h2"/>',
  micro:'<rect x="2" y="5" width="20" height="14" rx="2"/><rect x="5" y="8" width="11" height="8"/><path d="M19 9h.01M19 12h.01M19 15h.01"/>',
  pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  phone:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  mail:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
  wa:'<path d="M21 11.500a8.500 8.500 0 0 1-12.500 7.500L3 21l2-5.300A8.500 8.500 0 1 1 21 11.500z"/>',
  call:'<path d="M22 16.920v3a2 2 0 0 1-2.180 2 19.790 19.790 0 0 1-8.630-3.070 19.500 19.500 0 0 1-6-6A19.790 19.790 0 0 1 2.120 4.180 2 2 0 0 1 4.110 2h3a2 2 0 0 1 2 1.720c.13.960.36 1.900.7 2.810a2 2 0 0 1-.45 2.110L8.090 9.910a16 16 0 0 0 6 6l1.270-1.270a2 2 0 0 1 2.110-.45c.91.340 1.850.570 2.810.7A2 2 0 0 1 22 16.920z"/>'
};
function icon(name, size = 80, sw = 1.3){
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||''}</svg>`;
}

/* ---------- logo (house crest + letter-spaced wordmark) ---------- */
const LOGO = `
<a class="logo" href="index.html" aria-label="${CONFIG.name}">
  <svg width="86" height="94" viewBox="0 0 86 94" aria-hidden="true">
    <path d="M6 30L43 6l37 24" fill="none" stroke="#4a90e8" stroke-width="9" stroke-linejoin="round" stroke-linecap="round"/>
    <rect x="38" y="2" width="9" height="12" fill="#4a90e8"/>
    <path d="M10 38h66v24c0 14-10 26-33 30C20 88 10 76 10 62z" fill="#2fae8c" stroke="#1f8a6e" stroke-width="2"/>
    <path d="M22 46v26M33 46v36M43 46v36M54 46v36M65 46v26" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
  </svg>
  <div class="l1">NAGAR</div>
  <div class="l2">BOYS HOSTEL</div>
  <div class="l3">Boys Hostel &amp; Guest House In Indore</div>
</a>`;

/* ---------- chevron ornaments ---------- */
function chevSvg(color, flip){
  const d = flip ? "M88 20 L62 46 88 72 M56 20 L30 46 56 72" : "M16 20 L42 46 16 72 M48 20 L74 46 48 72";
  const top = flip ? [10,20,30] : [74,84,94], bot = flip ? [74,84,94] : [10,20,30];
  return `<svg viewBox="0 0 104 92" aria-hidden="true">
    <g fill="${color}">
      ${top.map(x=>`<circle cx="${x}" cy="5" r="2.2"/>`).join("")}
      ${bot.map(x=>`<circle cx="${x}" cy="87" r="2.2"/>`).join("")}
    </g>
    <path d="${d}" fill="none" stroke="${color}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}
function buildOrnaments(){
  document.querySelectorAll(".orn[data-c]").forEach(el=>{
    const c = el.dataset.c;
    el.innerHTML = `<span class="chev l">${chevSvg(c,false)}</span><span class="chev r">${chevSvg(c,true)}</span>`;
  });
}

/* ---------- shared header / footer ---------- */
const PAGES = [["index.html","Home"],["gallery.html","Gallery"],["contact.html","Contact Us"]];
function buildChrome(){
  const here = location.pathname.split("/").pop() || "index.html";
  const tabs = PAGES.map(([h,t])=>`<li><a href="${h}" class="${h===here?"active":""}">${t}</a></li>`).join("");
  document.getElementById("site-header").innerHTML = `
  <div class="site-head">
    <div class="tabs"><ul>${tabs}</ul><a class="callpill" href="tel:+${CONFIG.phoneRaw}">Call us</a></div>
    ${LOGO}
  </div>`;

  const ig = `<svg width="39" height="39" viewBox="0 0 39 39"><defs><linearGradient id="ig" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#fdb441"/><stop offset=".5" stop-color="#e1306c"/><stop offset="1" stop-color="#8a3ab9"/></linearGradient></defs><rect width="39" height="39" fill="url(#ig)"/><rect x="9" y="9" width="21" height="21" rx="6" fill="none" stroke="#fff" stroke-width="2.600"/><circle cx="19.500" cy="19.500" r="5" fill="none" stroke="#fff" stroke-width="2.600"/><circle cx="26" cy="13" r="1.600" fill="#fff"/></svg>`;
  const fb = `<svg width="39" height="39" viewBox="0 0 39 39"><rect width="39" height="39" fill="#3b5998"/><path d="M21.500 33V21h4l.6-4.600h-4.600v-3c0-1.300.4-2.200 2.300-2.200h2.400V7.100c-.4-.1-1.800-.2-3.500-.2-3.500 0-5.800 2.100-5.800 6v3.500h-4V21h4v12z" fill="#fff"/></svg>`;
  const dot = (c,i)=>`<span class="dot" style="background:${c}">${icon(i,24,1.8)}</span>`;
  document.getElementById("site-footer").innerHTML = `
  <footer class="site-foot">
    <div class="wrap">
      <div>
        <div class="fh">${CONFIG.name}</div>
        <div class="frow">${dot("#67a646","pin")}<span>Address- ${CONFIG.address}</span></div>
        <div class="frow">${dot("#bada55","phone")}<a href="tel:+${CONFIG.phoneRaw}">Contact- ${CONFIG.phone}</a></div>
        <div class="frow">${dot("#3f7652","mail")}<a href="mailto:${CONFIG.email}">Email- ${CONFIG.email}</a></div>
        <div class="frow">${dot("#689ade","globe")}<span>${CONFIG.website}</span></div>
        <div class="frow">${dot("#3f7652","clock")}<a href="${CONFIG.mapLink}" target="_blank" rel="noopener">${CONFIG.hours} · View on Google Maps</a></div>
      </div>
      <div class="social"><a href="${CONFIG.instagram}" aria-label="Instagram">${ig}</a><a href="${CONFIG.facebook}" aria-label="Facebook">${fb}</a></div>
    </div>
    <div class="copy">© ${new Date().getFullYear()} ${CONFIG.name}. All rights reserved.</div>
  </footer>
  <div class="float">
    <a class="wa" href="https://wa.me/${CONFIG.phoneRaw}?text=${encodeURIComponent("Hi, I'd like to know about rooms at "+CONFIG.name)}" aria-label="WhatsApp" target="_blank" rel="noopener">${icon("wa",26,1.8)}</a>
    <a class="call" href="tel:+${CONFIG.phoneRaw}" aria-label="Call">${icon("call",24,1.8)}</a>
  </div>`;
}

/* ---------- page helpers ---------- */
function fillIcons(){
  document.querySelectorAll(".it[data-icon]").forEach(el=>{
    el.insertAdjacentHTML("afterbegin", icon(el.dataset.icon, 84));
  });
}
function reveal(){
  const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} }),{threshold:.1});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}

/* ---------- gallery: add your photos here ---------- */
const GALLERY = [
  // { src:"images/room1.jpg", label:"Spacious Room" },   <- replace placeholders with real photos
  {src:"",label:"Furnished Room",c:"#8fb7e6,#c9dcf3"},
  {src:"",label:"Study Corner",c:"#c8e3ba,#9bc98a"},
  {src:"",label:"Reception",c:"#ffd36b,#ffbc2b"},
  {src:"",label:"Corridor",c:"#a9b8cc,#dfe6ef"},
  {src:"",label:"Dining Hall",c:"#e7cfa8,#c8a56e"},
  {src:"",label:"Terrace",c:"#8ed0c0,#4fae96"},
  {src:"",label:"Washroom",c:"#b6f3e8,#7fd0c2"},
  {src:"",label:"Laundry",c:"#9dbbdf,#6d8aae"},
  {src:"",label:"Common Area",c:"#c8e3ba,#6b7d5c"}
];
const SPANS = [4,4,4, 3,3,6, 5,7, 4];
function buildGallery(){
  const box = document.getElementById("gallery"); if(!box) return;
  box.innerHTML = GALLERY.map((g,i)=>{
    const span = `style="grid-column:span ${SPANS[i%SPANS.length]}${g.src?"":`;background:linear-gradient(135deg,${g.c})`}"`;
    return g.src
      ? `<a class="tile" ${span} data-i="${i}"><img src="${g.src}" alt="${g.label}" loading="lazy"></a>`
      : `<div class="tile ph" ${span}>${g.label}</div>`;
  }).join("");
  const lb = document.getElementById("lb"), lbImg = lb.querySelector("img");
  box.addEventListener("click",e=>{ const t=e.target.closest(".tile[data-i]"); if(!t) return; lbImg.src = GALLERY[t.dataset.i].src; lb.classList.add("open"); });
  lb.onclick = () => lb.classList.remove("open");
}

/* ---------- contact form -> WhatsApp ---------- */
function buildForm(){
  const f = document.getElementById("enquiry"); if(!f) return;
  f.addEventListener("submit",e=>{
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f));
    const msg = `Hello ${CONFIG.name},\nName: ${d.name}\nPhone: ${d.phone}\nSubject: ${d.subject||"-"}\n${d.msg||""}`;
    window.open(`https://wa.me/${CONFIG.phoneRaw}?text=${encodeURIComponent(msg)}`,"_blank");
  });
  const map = document.getElementById("map");
  if(map && CONFIG.mapEmbed) map.innerHTML = `<iframe src="${CONFIG.mapEmbed}" style="border:0;width:100%;height:100%" loading="lazy" title="Map"></iframe>`;
}

document.addEventListener("DOMContentLoaded",()=>{
  buildChrome(); fillIcons(); buildOrnaments(); buildGallery(); buildForm(); reveal();
  document.querySelectorAll("[data-cfg]").forEach(el=>{ el.textContent = CONFIG[el.dataset.cfg]; });
  document.querySelectorAll("[data-tel]").forEach(el=>{ el.href = "tel:+"+CONFIG.phoneRaw; });
  document.querySelectorAll("[data-wa]").forEach(el=>{ el.href = "https://wa.me/"+CONFIG.phoneRaw; });
});
