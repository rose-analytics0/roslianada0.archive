(function(){
var typeBtns=document.querySelectorAll("[data-type]"),chips=document.querySelectorAll("[data-filter]");
var pro=document.getElementById("pro"),proj=document.getElementById("proj"),coll=document.getElementById("bitlabs-10");
var items=document.querySelectorAll("#proj [data-cat]"),rows=coll.querySelectorAll("li[data-cat]");
var showing=document.getElementById("showing"),count=document.getElementById("projcount");
count.textContent=items.length;
var cat="all";
function setType(t){pro.hidden=(t==="projects");proj.hidden=(t==="professional");
 typeBtns.forEach(function(b){var on=b.getAttribute("data-type")===t;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on)})}
function setCat(c){cat=c;var n=0;
 items.forEach(function(el){var ok=(c==="all")||el.getAttribute("data-cat").split(" ").indexOf(c)>-1;el.hidden=!ok;
  if(ok&&el.tagName!=="LI")n++;if(ok&&el.tagName==="LI")n++});
 coll.hidden=!Array.prototype.some.call(rows,function(r){return !r.hidden});
 showing.textContent="Showing "+n+" of "+items.length+" projects";
 chips.forEach(function(b){var on=b.getAttribute("data-filter")===c;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on)})}
typeBtns.forEach(function(b){b.addEventListener("click",function(){setType(b.getAttribute("data-type"))})});
chips.forEach(function(b){b.addEventListener("click",function(){setCat(b.getAttribute("data-filter"))})});
setType("all");setCat("all");
document.addEventListener("click",function(ev){var h=ev.target.closest&&ev.target.closest(".acc-h");if(!h)return;var a=h.parentNode,o=!a.classList.contains("open");a.classList.toggle("open",o);h.setAttribute("aria-expanded",o)});
function fromHash(){var id=location.hash.slice(1),el=id&&document.getElementById(id);if(el&&el.classList.contains("acc")){setType("all");el.classList.add("open");el.querySelector(".acc-h").setAttribute("aria-expanded","true");el.scrollIntoView()}}
window.addEventListener("hashchange",fromHash);fromHash();
})();
