!function(){var e={866:function(){new Swiper(".mySwiper",{slidesPerView:2,loop:!0,spaceBetween:40,pagination:{el:".speakers-pagination",clickable:!0,type:"bullets"},navigation:{nextEl:".swiper-speakers-next",prevEl:".swiper-speakers-prev"},breakpoints:{120:{slidesPerView:1},631:{slidesPerView:2}}});var e=document.querySelector(".burger"),t=document.querySelector("#header-modal"),r=document.querySelector(".close-btn");e.addEventListener("click",(function(){t.style.display="flex"})),r.addEventListener("click",(function(){t.style.display="none"}))},91:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},428:function(e,t,r){"use strict";e.exports=r.p+"assets/cross.png"},507:function(e,t,r){"use strict";e.exports=r.p+"assets/img.png"},270:function(e,t,r){"use strict";e.exports=r.p+"assets/jaron.png"},382:function(e,t,r){"use strict";e.exports=r.p+"assets/mindshare.png"}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var s=n.length-1;s>-1&&!e;)e=n[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),r.b=document.baseURI||self.location.href,function(){"use strict";var e=r(91),t=r.n(e),n=new URL(r(428),r.b),s=new URL(r(382),r.b),o=new URL(r(507),r.b),i=new URL(r(270),r.b);t()(n),t()(s),t()(o),t()(i),r(866)}()}();