// =========================================
// TEXTOS DO SITE EM 3 IDIOMAS (PT, FR, EN)
// =========================================
var T={
    pt:{n1:"sobre",n2:"skills",n3:"projetos",n4:"terminal",role:"Estudante de Engenharia de Software",loc:"📍 Santa Maria, Brasília/DF · UDF",b1:"Ver projetos",b2:"Abrir terminal",h1:"sobre_mim",about:"Oi! Eu sou o Brunel, tenho 20 anos e estudo Engenharia de Software na UDF, em Brasília. Falo português, francês e inglês, e estou construindo meus primeiros projetos de programação, um commit de cada vez.",st:"\"aprendendo todo dia\"",h2:"skills",learn:"// sempre aprendendo coisas novas",h3:"projetos",p1:"Site sobre o Brasil feito com HTML, CSS e JavaScript.",p2:"App que une recursos do Instagram e do TikTok.",idea:"em ideia",p3:"Este site: meu cartão de visita em 3 idiomas.",h4:"jornada",t1:"Comecei Engenharia de Software na UDF Brasília.",t2:"Primeiros projetos com HTML, CSS e JavaScript.",t3:"Construindo meu app social. Continua...",h5:"terminal",
    n5:"meu espaço",h6:"meu_espaco",ph:"📷 Clique aqui para colocar sua foto",sp1:"🎵 Cole o link de uma música do Spotify:",spbtn:"Tocar",spopen:"Abrir no Spotify",acc:"Escolha a cor do site:",spph:"Cole o link do Spotify aqui",welcome:"Bem-vindo! Digite help para ver os comandos.",unk:"comando não encontrado: ",
    help:"Comandos: help, about, skills, projects, langs, clear",about_o:"Brunel Belloni, 20 anos. Estudante de Engenharia de Software na UDF, Brasília.",skills_o:"HTML · CSS · JavaScript · Git",proj_o:"1) Descubra o Brasil\n2) Social App (ideia)\n3) brunel.dev",langs_o:"Português · Français · English"},
    fr:{n1:"à propos",n2:"skills",n3:"projets",n4:"terminal",role:"Étudiant en génie logiciel",loc:"📍 Santa Maria, Brasília/DF · UDF",b1:"Voir les projets",b2:"Ouvrir le terminal",h1:"a_propos",about:"Salut ! Je suis Brunel, j’ai 20 ans et j’étudie le génie logiciel à l’UDF, à Brasília. Je parle portugais, français et anglais, et je construis mes premiers projets de programmation, un commit à la fois.",st:"\"j’apprends chaque jour\"",h2:"skills",learn:"// toujours en train d’apprendre",h3:"projets",p1:"Site sur le Brésil fait avec HTML, CSS et JavaScript.",p2:"App qui mélange des fonctions d’Instagram et de TikTok.",idea:"à l’état d’idée",p3:"Ce site : ma carte de visite en 3 langues.",h4:"parcours",t1:"Début du génie logiciel à l’UDF Brasília.",t2:"Premiers projets en HTML, CSS et JavaScript.",t3:"Je construis mon app sociale. À suivre...",h5:"terminal",
    n5:"mon espace",h6:"mon_espace",ph:"📷 Clique ici pour ajouter ta photo",sp1:"🎵 Colle le lien d’une chanson Spotify :",spbtn:"Lire",spopen:"Ouvrir dans Spotify",acc:"Choisis la couleur du site :",spph:"Colle le lien Spotify ici",welcome:"Bienvenue ! Tape help pour voir les commandes.",unk:"commande introuvable : ",
    help:"Commandes : help, about, skills, projects, langs, clear",about_o:"Brunel Belloni, 20 ans. Étudiant en génie logiciel à l’UDF, Brasília.",skills_o:"HTML · CSS · JavaScript · Git",proj_o:"1) Descubra o Brasil\n2) Social App (idée)\n3) brunel.dev",langs_o:"Português · Français · English"},
    en:{n1:"about",n2:"skills",n3:"projects",n4:"terminal",role:"Software Engineering student",loc:"📍 Santa Maria, Brasília/DF · UDF",b1:"See projects",b2:"Open terminal",h1:"about_me",about:"Hi! I’m Brunel, 20, studying Software Engineering at UDF in Brasília. I speak Portuguese, French and English, and I’m building my first coding projects, one commit at a time.",st:"\"learning every day\"",h2:"skills",learn:"// always learning new things",h3:"projects",p1:"A website about Brazil built with HTML, CSS and JavaScript.",p2:"An app combining Instagram and TikTok features.",idea:"idea stage",p3:"This site: my business card in 3 languages.",h4:"journey",t1:"Started Software Engineering at UDF Brasília.",t2:"First projects with HTML, CSS and JavaScript.",t3:"Building my social app. To be continued...",h5:"terminal",
    n5:"my space",h6:"my_space",ph:"📷 Click here to add your photo",sp1:"🎵 Paste a Spotify song link:",spbtn:"Play",spopen:"Open in Spotify",acc:"Pick the site color:",spph:"Paste the Spotify link here",welcome:"Welcome! Type help to see the commands.",unk:"command not found: ",
    help:"Commands: help, about, skills, projects, langs, clear",about_o:"Brunel Belloni, 20. Software Engineering student at UDF, Brasília.",skills_o:"HTML · CSS · JavaScript · Git",proj_o:"1) Descubra o Brasil\n2) Social App (idea)\n3) brunel.dev",langs_o:"Português · Français · English"}
    };

// Cores que o visitante pode escolher
var CORES = ["#1f8a4c", "#2b62b0", "#8a3fb0", "#c9611a", "#c73a6e"];
var MUSICA_PADRAO = "https://open.spotify.com/track/3A5vkgvvNimHf3UdEadHJD";

var idioma = "pt";
var out = document.getElementById("out");
var cli = document.getElementById("cli");

// Guarda algo no navegador do visitante (sem quebrar se não der)
function salvar(chave, valor) {
  try { localStorage.setItem(chave, valor); } catch (e) {}
}
function ler(chave) {
  try { return localStorage.getItem(chave); } catch (e) { return null; }
}

// =========================================
// TROCAR DE IDIOMA
// =========================================
function setLang(l) {
  idioma = l;
  var t = T[l];
  document.documentElement.lang = l == "pt" ? "pt-BR" : l;
  document.querySelectorAll("[data-i]").forEach(function (e) {
    e.textContent = t[e.dataset.i];
  });
  document.getElementById("st").textContent = t.st;
  document.getElementById("spin").placeholder = t.spph;
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.classList.toggle("on", b.dataset.l == l);
  });
  out.textContent = "";
  say(t.welcome);
  salvar("lang", l);
}
document.querySelectorAll(".lang button").forEach(function (b) {
  b.onclick = function () { setLang(b.dataset.l); };
});

// =========================================
// TERMINAL
// =========================================
function say(texto) {
  out.textContent += texto + "\n";
  out.scrollTop = out.scrollHeight;
}
function run(c) {
  c = c.trim().toLowerCase();
  if (!c) return;
  var t = T[idioma];
  say("$ " + c);
  var respostas = { help: t.help, about: t.about_o, skills: t.skills_o, projects: t.proj_o, langs: t.langs_o };
  if (c == "clear") out.textContent = "";
  else if (respostas[c]) say(respostas[c]);
  else say(t.unk + c);
}
cli.onkeydown = function (e) {
  if (e.key == "Enter") { run(cli.value); cli.value = ""; }
};
document.querySelectorAll(".chips button").forEach(function (b) {
  b.onclick = function () { run(b.textContent); };
});

// =========================================
// EFEITO DE DIGITAÇÃO "whoami"
// =========================================
var palavra = "whoami", letra = 0, ty = document.getElementById("ty");
(function digitar() {
  if (letra <= palavra.length) {
    ty.textContent = palavra.slice(0, letra++);
    setTimeout(digitar, 130);
  }
})();

// =========================================
// AS PARTES APARECEM AO ROLAR
// =========================================
var observador = new IntersectionObserver(function (itens) {
  itens.forEach(function (x) { if (x.isIntersecting) x.target.classList.add("on"); });
}, { threshold: 0.1 });
document.querySelectorAll(".revelar").forEach(function (e) { observador.observe(e); });

// =========================================
// FOTO (clique para trocar)
// =========================================
var ph = document.getElementById("ph");
var pf = document.getElementById("pf");
var pi = document.getElementById("phimg");
ph.onclick = function () { pf.click(); };
pf.onchange = function () {
  var f = pf.files[0];
  if (!f) return;
  var r = new FileReader();
  r.onload = function () {
    var im = new Image();
    im.onload = function () {
      // diminui a foto para no máximo 600px
      var s = Math.min(1, 600 / Math.max(im.width, im.height));
      var c = document.createElement("canvas");
      c.width = im.width * s;
      c.height = im.height * s;
      c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
      var u = c.toDataURL("image/jpeg", 0.85);
      pi.src = u;
      salvar("photo", u);
    };
    im.src = r.result;
  };
  r.readAsDataURL(f);
};

// =========================================
// MÚSICA DO SPOTIFY
// =========================================
function spotify(link) {
  var m = /open\.spotify\.com\/(?:intl-[a-z]+\/)?(track|album|playlist|episode|artist)\/([A-Za-z0-9]+)/.exec(link);
  if (!m) return;
  var box = document.getElementById("spbox");
  var fr = document.createElement("iframe");
  fr.src = "https://open.spotify.com/embed/" + m[1] + "/" + m[2];
  fr.allow = "encrypted-media";
  fr.loading = "lazy";
  box.innerHTML = "";
  box.appendChild(fr);
  var a = document.getElementById("spopen");
  a.href = "https://open.spotify.com/" + m[1] + "/" + m[2];
  a.hidden = false;
  salvar("spot", link);
}
document.getElementById("spgo").onclick = function () {
  spotify(document.getElementById("spin").value);
};
document.getElementById("spin").onkeydown = function (e) {
  if (e.key == "Enter") spotify(this.value);
};

// =========================================
// COR DO SITE
// =========================================
function mudarCor(c) {
  document.documentElement.style.setProperty("--cor", c);
  document.querySelectorAll(".cores button").forEach(function (b) {
    b.classList.toggle("on", b.dataset.c == c);
  });
  salvar("cor", c);
}
CORES.forEach(function (c) {
  var b = document.createElement("button");
  b.style.background = c;
  b.dataset.c = c;
  b.setAttribute("aria-label", c);
  b.onclick = function () { mudarCor(c); };
  document.getElementById("swb").appendChild(b);
});

// =========================================
// QUANDO A PÁGINA ABRE: recupera o que foi salvo
// =========================================
var fotoSalva = ler("photo");
if (fotoSalva) pi.src = fotoSalva;

var musica = ler("spot") || MUSICA_PADRAO;
document.getElementById("spin").value = musica;
spotify(musica);

mudarCor(ler("cor") || CORES[0]);

var idiomaSalvo = ler("lang") || "pt";
setLang(T[idiomaSalvo] ? idiomaSalvo : "pt");
