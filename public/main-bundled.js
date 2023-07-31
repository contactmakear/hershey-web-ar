/*! For license information please see main-bundled.js.LICENSE.txt */
(()=>{"use strict";var e={419:(e,t,n)=>{e.exports=n.p+"46e454841fbbf37c4aef.png"},28:(e,t,n)=>{e.exports=n.p+"ef977587917d91131175.glb"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===e(i)?i:String(i)),r)}var i}function o(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}var r=o((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}));function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(){s=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var i=t&&t.prototype instanceof d?t:d,c=Object.create(i.prototype),a=new U(r||[]);return o(c,"_invoke",{value:B(e,n,a)}),c}function y(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=h;var p={};function d(){}function f(){}function g(){}var m={};u(m,i,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(A([])));b&&b!==t&&n.call(b,i)&&(m=b);var T=g.prototype=d.prototype=Object.create(m);function k(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function r(o,i,c,s){var l=y(e[o],e,i);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==a(h)&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,c,s)}),(function(e){r("throw",e,c,s)})):t.resolve(h).then((function(e){u.value=e,c(u)}),(function(e){return r("throw",e,c,s)}))}s(l.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function B(e,t,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return{value:void 0,done:!0}}for(n.method=r,n.arg=i;;){var c=n.delegate;if(c){var a=I(c,n);if(a){if(a===p)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var s=y(e,t,n);if("normal"===s.type){if(o=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o="completed",n.method="throw",n.arg=s.arg)}}}function I(e,t){var n=t.method,o=e.iterator[n];if(void 0===o)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,I(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var r=y(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function U(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function A(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,r=function t(){for(;++o<e.length;)if(n.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:x}}function x(){return{value:void 0,done:!0}}return f.prototype=g,o(T,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:f,configurable:!0}),f.displayName=u(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,l,"GeneratorFunction")),e.prototype=Object.create(T),e},e.awrap=function(e){return{__await:e}},k(w.prototype),u(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var c=new w(h(t,n,o,r),i);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},k(T),u(T,l,"Generator"),u(T,i,(function(){return this})),u(T,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var o in t)n.push(o);return n.reverse(),function e(){for(;n.length;){var o=n.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=A,U.prototype={constructor:U,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(n,o){return c.type="throw",c.arg=e,t.next=n,o&&(t.method="next",t.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;E(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:A(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}function l(e,t,n,o,r,i,c){try{var a=e[i](c),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(o,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function c(e){l(i,o,r,c,a,"next",e)}function a(e){l(i,o,r,c,a,"throw",e)}c(void 0)}))}}var h=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.packtype="hello",$(".owl-carousel").owlCarousel({loop:!1,margin:1,nav:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:5}}})}var t,n;return t=e,(n=[{key:"untapKisses",value:function(){var e=document.getElementById("hoverhershey");e.src.match("/images/hershey.png")&&(e.src="/images/kisses.png")}},{key:"changeKissesPack",value:function(){var e=document.getElementById("hoverChange");this.untapKisses(),e.src.match("/images/kisses.png")?(e.src="/images/tapkisses.png",console.log("kisses"),this.packtype="kisses",console.log("module"+this.packtype)):(e.src="/images/kisses.png",this.packtype="")}},{key:"changeHersheyPack",value:function(){var e=document.getElementById("hoverhershey");this.untapKisses(),e.src.match("/images/hershey.png")?(e.src="/images/taphershey.png",console.log("chocolatebar"),this.packtype="chocolatebar",console.log("module"+this.packtype)):(e.src="/images//hershey.png",this.packtype="")}},{key:"changeExoticPack",value:function(){var e=document.getElementById("hoverexotic");this.untapKisses(),e.src.match("/images/exotic.png")?(e.src="/images/tapexotic.png",console.log("exotic"),this.packtype="exotic",console.log("module"+this.packtype)):(e.src="/images/exotic.png",this.packtype="")}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}());new r,new URL(n(28),n.b).href,new URL(n(419),n.b).href;var y,p,d,f,g,m,v,b,T,k=document.getElementById("scenediv"),w=document.getElementById("thirdscreen-bar"),B=document.getElementById("thirdscreen"),I=document.getElementById("headerlogo");k.style.zIndex=-1,secondscreen.style.display="none",sendgift.onclick=function(){firstscreen.style.display="none",k.style.display="block",secondscreen.style.display="block"},sendthankyou.onclick=function(){firstscreen.style.display="none",k.style.display="block",secondscreen.style.display="block"},document.getElementById("copy"),d=new URLSearchParams(document.location.search.substring(1)),f=d.get("name")?d.get("name"):"friend",console.log(f),"friend"===f&&(f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEV4r8729vb39/f1+Pt4q8u71OV4rMm71eT39/n1+Pz19fX2+Pn39/XZ5u670+J2qMdJ1ZSjAAABz0lEQVR4nO3U23KDIBgAYfGIiub937ZoYpL2up3M/t0douSObwCbnNpS2qOU2khV1Zrru0nBa5s2lfs0X5NYHcLYBRcu78L80aX8TRX4EuYuWPN6sMqaH8J126dhiDT2rZ7KpTz3cN5v49hHGre9O2WXsJuaYI3T/BDer2E39J9e0i83Dvc9TFVYQgr7u3BJ1ykNJxynH/dQIS6F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIb9/KNxv/dk4PgZ9Pk5zKuUlXLd9OJuuQZ9PW07pTZhyF6y5Ape3U7qkqMUVlofpFNb9TEs04/GVue7h01Y+uKA/avkujFjbNjnXZ5vr7/gbqnw+vgB2C0ejZ/UGZAAAAABJRU5ErkJggg==");var P,E="image/png",U="iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEV4r8729vb39/f1+Pt4q8u71OV4rMm71eT39/n1+Pz19fX2+Pn39/XZ5u670+J2qMdJ1ZSjAAABz0lEQVR4nO3U23KDIBgAYfGIiub937ZoYpL2up3M/t0douSObwCbnNpS2qOU2khV1Zrru0nBa5s2lfs0X5NYHcLYBRcu78L80aX8TRX4EuYuWPN6sMqaH8J126dhiDT2rZ7KpTz3cN5v49hHGre9O2WXsJuaYI3T/BDer2E39J9e0i83Dvc9TFVYQgr7u3BJ1ykNJxynH/dQIS6F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIb9/KNxv/dk4PgZ9Pk5zKuUlXLd9OJuuQZ9PW07pTZhyF6y5Ape3U7qkqMUVlofpFNb9TEs04/GVue7h01Y+uKA/avkujFjbNjnXZ5vr7/gbqnw+vgB2C0ejZ/UGZAAAAABJRU5ErkJggg==";fetch("data:image/png;filename=image.png;base64,"+U).then((function(e){return e.blob()})).then(URL.createObjectURL).then((function(e){return P=e})).then(console.log);var A=document.createElement("a");A.href=P,document.body.appendChild(A),hoverChange.onclick=function(){console.log("clickedkisses"),h.changeKissesPack(),y="kisses"},hoverhershey.onclick=function(){console.log("clickedchocolatebar"),h.changeHersheyPack(),y="chocolatebar",console.log(y)},hoverexotic.onclick=function(){console.log("clickedexotic"),h.changeExoticPack(),y="exotic"},nextbtn.onclick=function(){v=document.getElementById("siblingname").value,secondscreen.style.display="none","kisses"===y?(modelname.setAttribute("gltf-model","/models/kisses .glb"),console.log("ss"),B.style.display="block",I.src="/images/hersheys-kisses-logo 1.png",I.classList.add("headerlogokisses")):"chocolatebar"===y?(modelname.setAttribute("gltf-model","/models/kisses .glb"),w.style.display="block",I.src="/images/hersheyslogo.png",I.classList.add("headerlogo-bar-exotic")):"exotic"===y&&(modelname.setAttribute("gltf-model","/models/kisses .glb"),w.style.display="block",I.src="/images/hed-logo.png",I.classList.add("headerlogo-bar-exotic"))},nextQuestionid.onclick=function(){B.style.display="none",m="Dear ".concat(v,", Our bond can be described as ").concat(b," and that makes it special. Your ").concat(T," makes you a Super Sibling.You are the best I could ask for and I am sure with your crazy and determined attitude all your dreams will turn into reality. My words fall short of expressing my love, hence Saying it with a Kiss."),console.log(m),permissions.setAttribute("zappar-permissions-ui",""),k.style.zIndex=0,console.log(h.packtype),console.log("next"),Z.style.display="block"},nextQuestionid1.onclick=function(){w.style.display="none",m="Dear ".concat(v,", Our bond can be described as ").concat(b," and that makes it special. Your ").concat(T," makes you a Super Sibling.You are the best I could ask for and I am sure with your crazy and determined attitude all your dreams will turn into reality. My words fall short of expressing my love, hence Saying it with a Kiss."),console.log(m),permissions.setAttribute("zappar-permissions-ui",""),k.style.zIndex=0,console.log(h.packtype),console.log("next"),Z.style.display="block"};var x=document.getElementById("div-1"),F=document.getElementById("div-2"),S=document.getElementById("div-3");x.onclick=function(){console.log("option1 div 1"),b="Sweet Troublemakers"},F.onclick=function(){b="Partners in crime"},S.onclick=function(){b="Top Secret keepers"};var L=document.getElementById("custom-div-1"),O=document.getElementById("custom-div-2"),j=document.getElementById("custom-div-3");L.onclick=function(){console.log("option3 div 1"),T="Caring nature"},O.onclick=function(){console.log("option3 div 2"),T="Delightfully annoying nature"},j.onclick=function(){console.log("option3 div 3"),T="Giving mature advices"};var N=document.getElementById("custom-option-1"),R=document.getElementById("custom-option-1"),J=document.getElementById("custom-option-1");N.onclick=function(){console.log("option3 div 1")},R.onclick=function(){console.log("option3 div 2")},J.onclick=function(){console.log("option3 div 3")};var Z=document.getElementById("tap-to-place")||document.createElement("div");function Y(){return Y=u(s().mark((function e(){var t,n,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("canvas")||document.createElement("canvas"),e.next=3,ZapparVideoRecorder.createCanvasVideoRecorder(t);case 3:n=e.sent,o=!1,n.onStart.bind((function(){o=!0,console.log("start 2")})),n.onComplete.bind(function(){var e=u(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("stop 2"),console.log(t.asDataURL()),e.t0=ZapparWebGLSnapshot,e.next=5,t.asDataURL();case 5:e.t1=e.sent,e.t2=function(){console.log("Dialog was closed")},e.t3={data:e.t1,fileNamePrepend:"ImpresarioTech",onClose:e.t2},(0,e.t0)(e.t3),o=!1;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),capture.addEventListener("click",u(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o?(n.stop(),console.log("stop")):(n.start(),console.log("start"));case 1:case"end":return e.stop()}}),e)}))));case 8:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}Z.addEventListener("click",(function(){arscreen.style.display="block",document.getElementById("instant-tracker").setAttribute("zappar-instant","placement-mode: false"),Z.remove(),setTimeout((function(){modelname.setAttribute("animation-mixer",{clip:"Animation",loop:"once",crossFadeDuration:.4,clampWhenFinished:!0}),setTimeout((function(){modelname.setAttribute("animation-mixer",{timeScale:0})}),13e3)}),1e3)})),function(){Y.apply(this,arguments)}(),AFRAME.registerComponent("swap-texture",{init:function(){console.log("init");var e=document.getElementById("uploadbtn");e.onchange=function(){!function(o){var r=new FileReader;r.onload=function(){if(e.files.length>0){var i=e.files.item(0).size/Math.pow(1024,2);console.log(i),i>=12?console.log("size is large"):console.log("size is ohk")}console.log("image upload clicked"),(p=document.getElementById("galleryimg")).src=r.result,console.log(p.src),g=p.src;var c=o.target.files[0];"image/jpeg"===(E=c.type)?(console.log(E),U=g.substring(23,g.length)):"image/png"===E&&(console.log(E),U=g.substring(22,g.length));var a,s=function(e,t,n){t=t||"",n=n||512;for(var o=atob(e),r=[],i=0;i<o.length;i+=n){for(var c=o.slice(i,i+n),a=new Array(c.length),s=0;s<c.length;s++)a[s]=c.charCodeAt(s);var l=new Uint8Array(a);r.push(l)}return new Blob(r,{type:t})}(U,E);P=URL.createObjectURL(s),f=g=P,console.log("sss"+f),a=n.getObject3D("mesh").children[3].children[6],console.log(n.getObject3D("mesh")),console.log(n.getObject3D("mesh").children[3].children[6]),a.material.map=t.load(f),console.log(f),a.material.map.flipY=!1},r.readAsDataURL(o.target.files[0])}(event)},document.getElementById("galleryimg").src;var t=new THREE.TextureLoader,n=document.getElementById("modelname"),o=document.getElementById("notebox");console.log("init"),o.addEventListener("click",(function(e){n.setAttribute("animation-mixer",{timeScale:1})}))}})})()})();