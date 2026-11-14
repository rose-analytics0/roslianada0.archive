(function(){
var ORDER=window.PORTFOLIO_ORDER,CATS=Object.keys(ORDER),primary={};
CATS.forEach(function(c){ORDER[c].forEach(function(i){if(!primary[i])primary[i]=c})});
var chips=document.querySelectorAll("[data-filter]");
function byId(i){return document.getElementById(i)}
function listOf(c){return document.querySelector("#cat-"+c+" .acclist")}
function setFilter(f){
 CATS.forEach(function(c){
  var sec=document.getElementById("cat-"+c),list=listOf(c);
  sec.hidden=!(f==="all"||f===c);
  ORDER[c].forEach(function(i){var el=byId(i);if(!el)return;
   if(f==="all"?primary[i]===c:f===c)list.appendChild(el)});
  sec.querySelectorAll(".xref").forEach(function(x){x.hidden=(f!=="all")})});
 chips.forEach(function(b){var on=b.getAttribute("data-filter")===f;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on)})}
function toggle(acc,open){
 var h=acc.querySelector(".acc-h");if(open===undefined)open=!acc.classList.contains("open");
 acc.classList.toggle("open",open);h.setAttribute("aria-expanded",open)}
document.addEventListener("click",function(e){
 var h=e.target.closest&&e.target.closest(".acc-h");if(h){toggle(h.parentNode);return}
 var x=e.target.closest&&e.target.closest("a[href^='#']");if(x){var id=x.getAttribute("href").slice(1);if(byId(id)){e.preventDefault();goTo(id)}}});
chips.forEach(function(b){b.addEventListener("click",function(){setFilter(b.getAttribute("data-filter"))})});
function goTo(id){var el=byId(id);if(!el)return;
 if(el.classList.contains("acc")){if(el.closest(".catsec")&&el.closest(".catsec").hidden)setFilter("all");toggle(el,true)}
 el.scrollIntoView({behavior:"smooth",block:"start"});if(history.replaceState)history.replaceState(null,"","#"+id)}
function fromHash(){var id=location.hash.slice(1);if(id)goTo(id)}
setFilter("all");window.addEventListener("hashchange",fromHash);fromHash();
})();
