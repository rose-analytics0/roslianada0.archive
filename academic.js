(function(){
var opener=null,openEl=null,root=document.documentElement;
function focusables(m){return Array.prototype.slice.call(m.querySelectorAll('button,a[href],[tabindex]:not([tabindex="-1"])')).filter(function(x){return !x.disabled})}
function open(id,from){var m=document.getElementById(id);if(!m)return;close(true);openEl=m;opener=from||null;m.hidden=false;root.classList.add("am-lock");
 requestAnimationFrame(function(){m.classList.add("on")});var pn=m.querySelector(".amodal-panel");pn.scrollTop=0;pn.focus()}
function close(silent){if(!openEl)return;var m=openEl;openEl=null;m.classList.remove("on");m.hidden=true;root.classList.remove("am-lock");if(!silent&&opener&&opener.focus)opener.focus();opener=null}
document.addEventListener("click",function(e){var c=e.target.closest&&e.target.closest("[data-open]");if(c){open(c.getAttribute("data-open"),c);return}
 if(e.target.closest&&e.target.closest("[data-close]"))close()});
document.addEventListener("keydown",function(e){if(!openEl)return;
 if(e.key==="Escape"){e.preventDefault();close();return}
 if(e.key==="Tab"){var f=focusables(openEl);if(!f.length)return;var a=document.activeElement,i=f.indexOf(a);
  if(e.shiftKey&&(i<=0)){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&(i===f.length-1)){e.preventDefault();f[0].focus()}}});
})();
