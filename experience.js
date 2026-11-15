(function(){
var typeBtns=document.querySelectorAll("[data-type]"),chips=document.querySelectorAll("[data-filter]"),pchips=document.querySelectorAll("[data-pfilter]");
var pro=document.getElementById("pro"),proj=document.getElementById("proj"),coll=document.getElementById("bitlabs-10");
var pacc=document.querySelectorAll("#pro .acc[data-pcat]"),items=document.querySelectorAll("#proj .acc[data-cat]");
var showing=document.getElementById("showing"),count=document.getElementById("projcount");
count.textContent=items.length;
function mark(list,attr,val){list.forEach(function(b){var on=b.getAttribute(attr)===val;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on)})}
function setType(t){pro.hidden=(t==="projects");proj.hidden=(t==="professional");mark(typeBtns,"data-type",t)}
function setP(f){pacc.forEach(function(a){a.hidden=!(f==="all"||a.getAttribute("data-pcat")===f)});mark(pchips,"data-pfilter",f)}
function setCat(c){var n=0;
 items.forEach(function(el){var ok=(c==="all")||el.getAttribute("data-cat").split(" ").indexOf(c)>-1;el.hidden=!ok;if(ok)n++});
 var anyRow=Array.prototype.some.call(coll.querySelectorAll(".acc[data-cat]"),function(r){return !r.hidden});
 coll.hidden=!anyRow;
 showing.textContent="Showing "+n+" of "+items.length+" projects";mark(chips,"data-filter",c)}
typeBtns.forEach(function(b){b.addEventListener("click",function(){setType(b.getAttribute("data-type"))})});
pchips.forEach(function(b){b.addEventListener("click",function(){setP(b.getAttribute("data-pfilter"))})});
chips.forEach(function(b){b.addEventListener("click",function(){setCat(b.getAttribute("data-filter"))})});
document.addEventListener("click",function(ev){var h=ev.target.closest&&ev.target.closest(".acc-h");if(!h)return;var a=h.parentNode,o=!a.classList.contains("open");a.classList.toggle("open",o);h.setAttribute("aria-expanded",o)});
function fromHash(){var id=location.hash.slice(1),el=id&&document.getElementById(id);if(!el)return;
 if(el.classList.contains("acc")){setType("all");setP("all");setCat("all");el.classList.add("open");var h=el.querySelector(".acc-h");if(h)h.setAttribute("aria-expanded","true")}
 el.scrollIntoView()}
window.addEventListener("hashchange",fromHash);
setType("all");setP("all");setCat("all");fromHash();
})();
