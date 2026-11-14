(function(){
var pages=[["Home","index.html","home"],["About","about.html","about"],["Experience","experience.html","experience"],["Portfolio","portfolio.html","portfolio"],["Service","service.html","service"],["Insights","insights.html","insights"],["Recognition","recognition.html","recognition"],["Contact","contact.html","contact"]];
var b=document.body,cur=b.getAttribute("data-page");
var ic={cal:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',clk:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',pin:'<svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>'};
var links=pages.map(function(p){return '<a href="'+p[1]+'"'+(p[2]===cur?' class="active" aria-current="page"':'')+'>'+p[0]+'</a>'}).join("");
var head='<div class="topbar"><div class="wrap"><span>'+ic.cal+'<span id="d"></span></span><span>'+ic.clk+'<span id="t"></span>&nbsp;UTC+7</span><span>'+ic.pin+'Banten, Indonesia</span></div></div>'+
'<nav class="main"><div class="wrap"><a class="brand" href="index.html" aria-label="RDA, back to home"><img src="Logo.png" alt="RDA logo" width="64" height="64" onerror="this.style.display=\'none\';this.nextSibling.style.display=\'inline\'"><span class="brand-t" style="display:none">RDA</span></a><div class="links" id="links">'+links+'</div><button class="burger" id="bg" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button></div></nav>';
var cta=b.getAttribute("data-cta"),href=b.getAttribute("data-href");
var foot='<section class="closing"><div class="wrap"><a class="btn" href="'+href+'">'+cta+'</a></div></section><footer class="fbar"><div class="wrap"><span>\u00a9 2026 Rosliana Dwi Astuti. All rights reserved.</span><a href="#top">Back to top \u2191</a></div></footer>';
if(!document.body.id)document.body.id="top";
document.body.insertAdjacentHTML("afterbegin",head);
document.body.insertAdjacentHTML("beforeend",foot);
var bg=document.getElementById("bg"),ln=document.getElementById("links");
bg.addEventListener("click",function(){var o=ln.classList.toggle("open");bg.classList.toggle("open",o);bg.setAttribute("aria-expanded",o)});
ln.addEventListener("click",function(e){if(e.target.tagName==="A"){ln.classList.remove("open");bg.classList.remove("open")}});
var df=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Jakarta",weekday:"long",day:"numeric",month:"long",year:"numeric"});
var tf=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Jakarta",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false});
function tick(){var n=new Date();document.getElementById("d").textContent=df.format(n).replace(/^(\w+)\s/,"$1, ");document.getElementById("t").textContent=tf.format(n)}
tick();setInterval(tick,1000);
})();
