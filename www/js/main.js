!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";
/*! npm.im/object-fit-images 3.2.4 */var i="bfred-it:object-fit-images",r=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,o="undefined"==typeof Image?{style:{"object-position":1}}:new Image,s="object-fit"in o.style,c="object-position"in o.style,a="background-size"in o.style,l="string"==typeof o.currentSrc,u=o.getAttribute,f=o.setAttribute,d=!1;function p(t,e,n){var i="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(e||1)+"' height='"+(n||0)+"'%3E%3C/svg%3E";u.call(t,"src")!==i&&f.call(t,"src",i)}function g(t,e){t.naturalWidth?e(t):setTimeout(g,100,t,e)}function m(t){var e=function(t){for(var e,n=getComputedStyle(t).fontFamily,i={};null!==(e=r.exec(n));)i[e[1]]=e[2];return i}(t),n=t[i];if(e["object-fit"]=e["object-fit"]||"fill",!n.img){if("fill"===e["object-fit"])return;if(!n.skipTest&&s&&!e["object-position"])return}if(!n.img){n.img=new Image(t.width,t.height),n.img.srcset=u.call(t,"data-ofi-srcset")||t.srcset,n.img.src=u.call(t,"data-ofi-src")||t.src,f.call(t,"data-ofi-src",t.src),t.srcset&&f.call(t,"data-ofi-srcset",t.srcset),p(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{!function(t){var e={get:function(e){return t[i].img[e||"src"]},set:function(e,n){return t[i].img[n||"src"]=e,f.call(t,"data-ofi-"+n,e),m(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!l&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(n.img),t.style.backgroundImage='url("'+(n.img.currentSrc||n.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=e["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(e["object-fit"])?g(n.img,(function(){n.img.naturalWidth>t.width||n.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"})):t.style.backgroundSize=e["object-fit"].replace("none","auto").replace("fill","100% 100%"),g(n.img,(function(e){p(t,e.naturalWidth,e.naturalHeight)}))}function v(t,e){var n=!d&&!t;if(e=e||{},t=t||"img",c&&!e.skipTest||!a)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][i]=t[r][i]||{skipTest:e.skipTest},m(t[r]);n&&(document.body.addEventListener("load",(function(t){"IMG"===t.target.tagName&&v(t.target,{skipTest:e.skipTest})}),!0),d=!0,t="img"),e.watchMQ&&window.addEventListener("resize",v.bind(null,t,{skipTest:e.skipTest}))}v.supportsObjectFit=s,v.supportsObjectPosition=c,function(){function t(t,e){return t[i]&&t[i].img&&("src"===e||"srcset"===e)?t[i].img:t}c||(HTMLImageElement.prototype.getAttribute=function(e){return u.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,n){return f.call(t(this,e),e,String(n))})}(),t.exports=v},function(t,e,n){!function(e){"use strict";var n,i,r=!1;function o(t){if("undefined"!=typeof document&&!r){var e=document.documentElement;i=window.pageYOffset,document.documentElement.scrollHeight>window.innerHeight?e.style.width="calc(100% - "+function(){if(void 0!==n)return n;var t=document.documentElement,e=document.createElement("div");return e.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"),t.appendChild(e),n=e.offsetWidth-e.clientWidth,t.removeChild(e),n}()+"px)":e.style.width="100%",e.style.position="fixed",e.style.top=-i+"px",e.style.overflow="hidden",r=!0}}function s(){if("undefined"!=typeof document&&r){var t=document.documentElement;t.style.width="",t.style.position="",t.style.top="",t.style.overflow="",window.scroll(0,i),r=!1}}var c={on:o,off:s,toggle:function(){r?s():o()}};void 0!==t.exports?t.exports=c:e.noScroll=c}(window)},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e);var i,r,o,s,c,a,l,u,f,d,p=n(0),g=n.n(p),m=(i=$(".days"),r=$(".hours"),o=$(".minutes"),s=$(".seconds"),{timerMeetup:function(){setInterval((function(){var t=new Date,e=new Date(2022,1,17,19,0)-t,n=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),a=Math.floor(e%36e5/6e4),l=Math.floor(e%6e4/1e3);a=a<10?"0"+a:""+a,l=l<10?"0"+l:""+l,c=c<10?"0"+c:""+c,n=(n=n<10?"0"+n:""+n).split(""),c=(""+c).split(""),a=(""+a).split(""),l=(""+l).split(""),m.timeToHtml(i,n),m.timeToHtml(r,c),m.timeToHtml(o,a),m.timeToHtml(s,l)}),1e3)},timeToHtml:function(t,e){for(var n=0;n<t.length;n++)t[n].innerHTML=e[n%2]},init:function(){m.timerMeetup()}}),v=m,h=(c={phone:{regExp:/[0-9+()-\s]/,empty:"Номер телефона обязателен",notValid:"Некорректный номер телефона"},nickname:{regExp:/^\S*$/,empty:"Логин обязателен",notValid:"Некорректный логин"}},a=$(".js-registration-form"),l=$(".js-input-location"),{submitHandler:function(){a.submit((function(t){t.preventDefault();var e=new Date,n=e.getDate(),i=e.getMonth()+1,r=e.getFullYear(),o=e.getHours(),s=e.getMinutes();a.find($(".js-input-date")).val("".concat(n,".").concat(i,".").concat(r," / ").concat(o,":").concat(s)),l.val("affhub.club/nonsaintnight.com"),$(".js-loader").addClass("progress"),$.ajax({url:"https://api.apispreadsheets.com/data/s1t6aIcH4JTq7Fxu",type:"POST",contentType:!1,processData:!1,data:new FormData(this),success:function(){$(".js-loader").removeClass("progress"),$(".js-registration-form").hide(),$(".js-registration-title").hide(),$(".js-success").show()},error:function(){alert("error")}})}))},showErrorFields:function(t){console.log(t);for(var e=0;e<t.length;e++){var n=t[e],i=n.name,r=n.msg;$("[name=".concat(i,"]")).parents(".form__wrap-input").addClass("error").append('<div class="form_error"> '.concat(r,"</div >"))}},validateInput:function(t){if(!t.length)return!1;var e="",n=t.val(),i=t.attr("name");if(!c[i])return!1;var r=c[i],o=r.regExp,s=r.empty,a=r.notValid;return n.length<1?e=s:o.test(n)||(e=a),e},validateForm:function(t){for(var e=t.find(".js-input"),n=[],i=[],r=0;r<e.length;r++){var o=$(e[r]),s=o.attr("name"),a="";c[s]&&(a=c[s].group);var l=h.validateInput(o);l?a?n.push({name:s,msg:l,group:a}):n.push({name:s,msg:l}):a&&-1===i.indexOf(a)&&i.push(a)}return n.filter((function(t){var e=t.group;return e?-1===i.indexOf(e)&&t:t}))},init:function(){h.submitHandler()}}),y=h,b=n(1),w=n.n(b),j=(u=$(".js-popup"),f=$(".js-show-popup"),d=$(".js-overlay"),{initPopUp:function(){f.click((function(t){t.preventDefault();var e=$(this);$(e.data("target")).toggleClass("active"),d.addClass("active")}))},closePopup:function(){$(".js-close").click((function(t){t.preventDefault(),u.removeClass("active"),d.removeClass("active"),w.a.off()}))},init:function(){j.initPopUp(),j.closePopup()}}),x=j;$((function(){g()(),v.init(),y.init(),x.init()}))}]);