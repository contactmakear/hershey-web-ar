/*! For license information please see main-bundled.js.LICENSE.txt */
(()=>{"use strict";var e={419:(e,t,n)=>{e.exports=n.p+"46e454841fbbf37c4aef.png"},28:(e,t,n)=>{e.exports=n.p+"47c113e90bbcc17cb7d9.glb"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===e(i)?i:String(i)),r)}var i}function o(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}var r=o((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}));function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(){a=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,c=Object.create(i.prototype),s=new S(r||[]);return o(c,"_invoke",{value:I(e,n,s)}),c}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var y={};function g(){}function p(){}function h(){}var f={};d(f,i,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(T([])));b&&b!==t&&n.call(b,i)&&(f=b);var k=h.prototype=g.prototype=Object.create(f);function w(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(o,i,c,a){var l=m(e[o],e,i);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==s(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,c,a)}),(function(e){r("throw",e,c,a)})):t.resolve(u).then((function(e){d.value=e,c(d)}),(function(e){return r("throw",e,c,a)}))}a(l.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function I(e,t,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return{value:void 0,done:!0}}for(n.method=r,n.arg=i;;){var c=n.delegate;if(c){var s=L(c,n);if(s){if(s===y)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var a=m(e,t,n);if("normal"===a.type){if(o=n.done?"completed":"suspendedYield",a.arg===y)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(o="completed",n.method="throw",n.arg=a.arg)}}}function L(e,t){var n=t.method,o=e.iterator[n];if(void 0===o)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var r=m(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,y;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,y):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function B(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(B,this),this.reset(!0)}function T(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,r=function t(){for(;++o<e.length;)if(n.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=h,o(k,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:p,configurable:!0}),p.displayName=d(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,d(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},w(E.prototype),d(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var c=new E(u(t,n,o,r),i);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},w(k),d(k,l,"Generator"),d(k,i,(function(){return this})),d(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var o in t)n.push(o);return n.reverse(),function e(){for(;n.length;){var o=n.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=T,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(n,o){return c.type="throw",c.arg=e,t.next=n,o&&(t.method="next",t.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),a=n.call(i,"finallyLoc");if(s&&a){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),y}},e}function l(e,t,n,o,r,i,c){try{var s=e[i](c),a=s.value}catch(e){return void n(e)}s.done?t(a):Promise.resolve(a).then(o,r)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function c(e){l(i,o,r,c,s,"next",e)}function s(e){l(i,o,r,c,s,"throw",e)}c(void 0)}))}}var u=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.packtype="hello",$(".owl-carousel").owlCarousel({center:!0,loop:!1,margin:-70,nav:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:5}}})}var t,n;return t=e,(n=[{key:"untapKisses",value:function(){document.getElementById("hoverhershey").src="/images/kisses.png"}},{key:"changeKissesPack",value:function(){var e=document.getElementById("hoverChange");e.src.match("/images/kisses.png")?(e.src="/images/tapkisses.png",console.log("kisses"),this.packtype="kisses",console.log("module"+this.packtype)):(e.src="/images/kisses.png",this.packtype="")}},{key:"changeHersheyPack",value:function(){var e=document.getElementById("hoverhershey");e.src.match("/images/hershey.png")?(e.src="/images/taphershey.png",console.log("chocolatebar"),this.packtype="chocolatebar",console.log("module"+this.packtype)):(e.src="/images/hershey.png",this.packtype="")}},{key:"changeExoticPack",value:function(){var e=document.getElementById("hoverexotic");e.src.match("/images/exotic.png")?(e.src="/images/tapexotic.png",console.log("exotic"),this.packtype="exotic",console.log("module"+this.packtype)):(e.src="/images/exotic.png",this.packtype="")}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}());new r,new URL(n(28),n.b).href,new URL(n(419),n.b).href;var m,y=document.getElementById("scenediv"),g=document.getElementById("thirdscreen-bar"),p=document.getElementById("thirdscreen"),h=document.getElementById("thirdscreen-exotic");y.style.zIndex=-1,secondscreen.style.display="none",uploadingDiv.style.display="none",document.querySelector("#siblingname");var f=document.getElementById("#hereGoesID"),v=document.querySelector(".alert-check-questions");document.getElementById("alertCloseBtn").onclick=function(){v.classList.remove("visible"),v.classList.add("invisible")};var b=document.querySelector(".alert-check-questions-bar");document.getElementById("alertClosebarBtn").onclick=function(){b.classList.remove("visible"),b.classList.add("invisible")};var k=document.querySelector(".alert-check-questions-exotic");document.getElementById("alertCloseexoticBtn").onclick=function(){k.classList.remove("visible"),k.classList.add("invisible")};var w,E=document.getElementById("loadingHeader"),I=document.querySelector(".bars-casacade-loading");sendgift.onclick=function(){firstscreen.style.display="none",y.style.display="block",bgaudio.play(),secondscreen.style.display="block"},sendthankyou.onclick=function(){firstscreen.style.display="none",y.style.display="block",bgaudio.play(),secondscreen.style.display="block"},document.getElementById("copy");var L,B,x,S,T,P,A,U,j,F,q,O,R,M,C,D,N,z,H=0,Y=0,G=1,_=0,J=document.getElementById("tap-to-place"),Z=0;send.onclick=function(){console.log("copy clicked"),function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),Object.assign(t.style,{zIndex:"-99999",position:"absolute"});var n=navigator.userAgent||navigator.vendor||window.opera;if(/iPads|iPod/.test(n)&&!window.MSStream){t.contentEditable=!0,t.readOnly=!1;var o=window.getSelection();o.removeAllRanges();var r=document.createRange();r.selectNodeContents(t),o.addRange(r),t.setSelectionRange(0,999999)}else t.select();document.execCommand("copy"),document.body.removeChild(t)}("https://hersheysgifting.co.in/questions?name=".concat(O,"&name1=").concat(A,"&name2=").concat(j,"&name3=").concat(F,"&name4=").concat(q,"&name5=").concat(M));var e={url:"https://hersheysgifting.co.in/questions?name=".concat(O,"&name1=").concat(A,"&name2=").concat(j,"&name3=").concat(F,"&name4=").concat(q,"&name5=").concat(M)};navigator.share&&navigator.share(e),share.classList.add("pulse-once"),setTimeout((function(){share.classList.remove("pulse-once")}),200)},fetch("data:image/png;filename=image.png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEV4r8729vb39/f1+Pt4q8u71OV4rMm71eT39/n1+Pz19fX2+Pn39/XZ5u670+J2qMdJ1ZSjAAABz0lEQVR4nO3U23KDIBgAYfGIiub937ZoYpL2up3M/t0douSObwCbnNpS2qOU2khV1Zrru0nBa5s2lfs0X5NYHcLYBRcu78L80aX8TRX4EuYuWPN6sMqaH8J126dhiDT2rZ7KpTz3cN5v49hHGre9O2WXsJuaYI3T/BDer2E39J9e0i83Dvc9TFVYQgr7u3BJ1ykNJxynH/dQIS6F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIb9/KNxv/dk4PgZ9Pk5zKuUlXLd9OJuuQZ9PW07pTZhyF6y5Ape3U7qkqMUVlofpFNb9TEs04/GVue7h01Y+uKA/avkujFjbNjnXZ5vr7/gbqnw+vgB2C0ejZ/UGZAAAAABJRU5ErkJggg==").then((function(e){return e.blob()})).then(URL.createObjectURL).then((function(e){return z=e})).then(console.log);var W=document.createElement("a");W.href=z,document.body.appendChild(W),hoverChange.onclick=function(){document.getElementById("hoverhershey").value,document.getElementById("hoverexotic").value,console.log("clickedkisses"),u.changeKissesPack(),m="kisses",_=13e3,A="1"},hoverhershey.onclick=function(){document.getElementById("hoverChange").value,document.getElementById("hoverexotic").value,console.log("clickedchocolatebar"),u.changeHersheyPack(),m="chocolatebar",_=11e3,console.log(m),A="2"},hoverexotic.onclick=function(){document.getElementById("hoverChange").value,document.getElementById("hoverhershey").value,console.log("clickedexotic"),u.changeExoticPack(),m="exotic",_=17e3,A="3"},nextbtn.onclick=function(){M=document.getElementById("siblingname").value;var e=document.getElementById("uploadbtn").value;console.log(M),console.log(e),""===M?secondscreen.style.display="block":""===e?alert("Please upload your photo!"):(secondscreen.style.display="none","kisses"===m?(modelname.setAttribute("gltf-model","#kissesmodel"),console.log("ss"),p.style.display="block"):"chocolatebar"===m?(modelname.setAttribute("gltf-model","#barmodel"),g.style.display="block"):"exotic"===m&&(modelname.setAttribute("gltf-model","#exoticmodel"),h.style.display="block"),modelname.addEventListener("model-loaded",(function(){console.log("if loaded"),Z=1})))},reload.onclick=function(){Y++,H++,console.log("clicked"),modelname.removeAttribute("animation-mixer"),setTimeout((function(){modelname.setAttribute("animation-mixer",{clip:"Animation",loop:"once",crossFadeDuration:.4,clampWhenFinished:!0}),setTimeout((function(){G==Y&&(modelname.setAttribute("animation-mixer",{timeScale:0}),tapOnEnvelope.style.display="block",console.log("reload 1300"),notebox.setAttribute("class","cantap")),G++}),_)}),1e3)};var V=document.getElementById("div-1"),K=document.getElementById("div-2"),X=document.getElementById("div-3");V.onclick=function(){console.log("option1 div 1"),C="Sweet Troublemakers",j=1},K.onclick=function(){console.log("option1 div 2"),C="Partners in crime",j=2},X.onclick=function(){console.log("option1 div 3"),C="Top Secret keepers",j=3};var Q=document.getElementById("custom-div-1"),ee=document.getElementById("custom-div-2"),te=document.getElementById("custom-div-3");Q.onclick=function(){console.log("option2 div 1"),D="Caring nature",F=1},ee.onclick=function(){console.log("option2 div 2"),D="Delightfully annoying nature",F=2},te.onclick=function(){console.log("option2 div 3"),D="Giving mature advices",F=3};var ne=document.getElementById("custom-option-1"),oe=document.getElementById("custom-option-2"),re=document.getElementById("custom-option-3");ne.onclick=function(){console.log("option3 div 1"),N="Crazy",q=1},oe.onclick=function(){console.log("option3 div 2"),N="Realistic",q=1},re.onclick=function(){console.log("option3 div 3"),N="Determined",q=1};var ie=document.getElementById("hershey-bar-1"),ce=document.getElementById("hershey-bar-2"),se=document.getElementById("hershey-bar-3");ie.onclick=function(){console.log("option1 div 1"),C="Sweet Siblings",j=1},ce.onclick=function(){console.log("option1 div 2"),C="Nutty Friends",j=2},se.onclick=function(){console.log("option1 div 3"),C="Trusted Partners",j=3};var ae=document.getElementById("new-hershey-bar-1"),le=document.getElementById("new-hershey-bar-2"),de=document.getElementById("new-hershey-bar-3");ae.onclick=function(){console.log("option2 div 1"),D="You are a closet rockstar, unleashing brilliance and leaving everyone in awe",F=1},le.onclick=function(){console.log("option2 div 2"),D="You are always in FOMO mode, eager to seize every opportunity and get the best out of it",F=2},de.onclick=function(){console.log("option2 div 3"),D="You are the Ultimate Foodie, never hesitating to try new and exciting cuisines",F=3};var ue=document.getElementById("option-1"),me=document.getElementById("option-2"),ye=document.getElementById("option-3");ue.onclick=function(){console.log("option3 div 1"),N="Music",q=1},me.onclick=function(){console.log("option3 div 2"),N="Street food",q=1},ye.onclick=function(){console.log("option3 div 3"),N="Gaming",q=1};var ge=document.getElementById("exotic-hershey-1"),pe=document.getElementById("exotic-hershey-2"),he=document.getElementById("exotic-hershey-3");ge.onclick=function(){console.log("option1 div 1"),C="Berry Good Friends",j=1},pe.onclick=function(){console.log("option1 div 2"),C="Nutty Partners",j=2},he.onclick=function(){console.log("option1 div 3"),C="Trusted Confidantes",j=3};var fe=document.getElementById("exotic-dark-card2-1"),ve=document.getElementById("exotic-dark-card2-2"),be=document.getElementById("exotic-dark-card2-3");fe.onclick=function(){console.log("option2 div 1"),D="Wine & Chocolates at Home",F=1},ve.onclick=function(){console.log("option2 div 2"),D="Sundowners at Beach Resort",F=2},be.onclick=function(){console.log("option2 div 3"),D="Bollywood Music Festival ",F=3};var ke=document.getElementById("option-exotic-1"),we=document.getElementById("option-exotic-2"),Ee=document.getElementById("option-exotic-3");function Ie(){return Ie=d(a().mark((function e(){var t,n,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("canvas")||document.createElement("canvas"),n=!1,e.next=4,ZapparVideoRecorder.createCanvasVideoRecorder(t,{quality:10,maxFrameRate:144,audio:!1});case 4:(o=e.sent).onStart.bind((function(){n=!0,console.log("start 2")})),o.onComplete.bind(function(){var e=d(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("stop 2"),console.log(t.asDataURL()),e.t0=ZapparWebGLSnapshot,e.next=5,t.asDataURL();case 5:e.t1=e.sent,e.t2=function(){console.log("Dialog was closed")},e.t3={data:e.t1,fileNamePrepend:"hersheys_sibling_surprise",onClose:e.t2},(0,e.t0)(e.t3),n=!1;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),capture.addEventListener("click",d(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n?(o.stop(),console.log("stop"),capture.src="/images/shutter-button-start.png"):(o.start(),capture.src="/images/shutter-button-stop.png",console.log("start"));case 1:case"end":return e.stop()}}),e)}))));case 8:case"end":return e.stop()}}),e)}))),Ie.apply(this,arguments)}ke.onclick=function(){console.log("option3 div 1"),N="Discussing family",q=1},we.onclick=function(){console.log("option3 div 2"),N="Remembering childhood days",q=1},Ee.onclick=function(){console.log("option3 div 3"),N="Laughing at Silly Jokes ",q=1},AFRAME.registerComponent("swap-texture",{init:function(){console.log("init");var e=document.getElementById("msgclosebtn"),t=document.getElementById("uploadbtn");t.onchange=function(){!function(e){var n=new FileReader;n.onload=function(){if(t.files.length>0){var e=t.files.item(0).size/Math.pow(1024,2);if(console.log(e),e>=12)alert("please upload file less then 10mb"),console.log("size is large");else{document.getElementById("changeFileName").innerHTML="Uploaded!",console.log("size is ohk")}}console.log("image upload clicked"),(w=document.getElementById("uploadbtn")).src=n.result,console.log(w.src),console.log("sss"+U)},n.readAsDataURL(e.target.files[0])}(event)};var n=new THREE.TextureLoader,o=document.getElementById("modelname"),r=document.getElementById("notebox");function i(){console.log("clicked different btn");var e=document.getElementById("uploadbtn").files[0];console.log("clicked different btn1"),function(e){var t=new FormData;return t.append("image",e),new Promise((function(e,n){fetch("/questions",{method:"POST",body:t}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){var n=t.imageUrl;e(n)})).catch((function(e){n(e)}))}))}(e).then((function(e){console.log("clicked different btn2"),console.log("Uploaded Image URL:",e),O=e,console.log("dataurl "+O),setTimeout((function(){!function(e){console.log("Rendering the result with imageUrl:",e)}(e),console.log("clicked different btn3")}),2e3)})).catch((function(e){console.error("Error:",e)}))}if(nextQuestionid.onclick=function(){if(1==document.querySelectorAll(".options-row .expanded-div").length&&1==document.querySelectorAll(".options-row .custom-expanded-div").length&&1==document.querySelectorAll(".options-row .custom-expanded-option").length){p.style.display="none",I.style.display="none",loadingscreen.style.display="block",kissesloadingvid.style.display="block",kissesloadingvid.play(),1===Z&&setTimeout((function(){loadingscreen.style.display="none",y.style.zIndex=0,permissions.setAttribute("zappar-permissions-ui",""),J.style.display="block"}),6e3),f.innerHTML="".concat(M),R="Our bond can be described as ".concat(C," and that makes it special. Your ").concat(D," makes you a Super Sibling. You are the best I could ask for and I am sure with your crazy and determined attitude, all your dreams will turn into reality.<br>\n  This is my way of expressing what you mean to me. And for moments\n  <span>when words fall short,</span>"),console.log(R),completenote.innerHTML=R,document.querySelector(".message-wrapper").classList.remove("bar-message"),document.querySelector(".message-wrapper").classList.remove("hed-message"),document.querySelector(".message-wrapper").classList.add("kisses-message"),document.querySelector(".message-header h3").classList.remove("hed-note-text"),document.getElementById("msgclosebtn").classList.remove("hed-close-btn"),document.querySelector(".dynamic-name").classList.remove("hed-dynamic-name"),document.getElementById("completenote").classList.remove("hed-note-text");var e=document.getElementById("dynamicImg");e.classList.add("justify-content-center"),e.children[0].src="/images/say it with a kiss (brown).png",console.log(u.packtype),console.log("next"),i()}else v.classList.remove("invisible"),v.classList.add("visible")},nextQuestionid1.onclick=function(){if(1==document.querySelectorAll(".option-row-bars .expanded-div-bars").length&&1==document.querySelectorAll(".option-row-bars .new-expanded-div").length&&1==document.querySelectorAll(".option-row-bars .option-expanded").length){g.style.display="none",E.src="/images/hersheyslogo.png",E.parentElement.parentElement.classList.remove("justify-content-start"),E.parentElement.parentElement.classList.add("justify-content-center"),kissesloadingvid.style.display="none",I.style.display="block",loadingscreen.style.display="block",1===Z&&setTimeout((function(){loadingscreen.style.display="none",permissions.setAttribute("zappar-permissions-ui",""),y.style.zIndex=0,console.log(u.packtype),console.log("next"),J.style.display="block"}),6e3),f.innerHTML="".concat(M),R="Our bond can be described as ".concat(C," and that makes it special.<br>\n    ").concat(D,".<br>\n    Whenever we’re together, I love how we bond over ").concat(N,", and make every moment special.<br>\n    This is my way of expressing what you mean to me, because stories with my cool sibling are #MeantToBeShared!"),console.log(R),completenote.innerHTML=R,document.querySelector(".message-wrapper").classList.add("bar-message"),document.querySelector(".message-wrapper").insertAdjacentHTML("beforeend",'<div class="bars-note-png"></div>'),document.querySelector(".message-header h3").classList.add("bars-note-text"),document.getElementById("msgclosebtn").classList.add("bars-close-btn"),document.querySelector(".dynamic-name").classList.add("bars-dynamic-name"),document.getElementById("completenote").classList.add("bars-note-text"),document.querySelector(".dynamic-note").style.height="320px",document.querySelector(".close-icon").style.zIndex="99";var e=document.getElementById("dynamicImg");e.classList.remove("dynamic-img"),e.classList.remove("justify-content-center"),e.classList.add("container-fluid"),e.classList.add("bars-dynamic-img"),e.children[0].style.width="100%",e.children[0].style.borderBottomLeftRadius="10px",e.children[0].style.borderBottomRightRadius="10px",e.children[0].src="/images/bars-bottom-img.png",i()}else b.classList.remove("invisible"),b.classList.add("visible")},nextQuestionid2.onclick=function(){if(1==document.querySelectorAll(".options-row .exotic-hershey").length&&1==document.querySelectorAll(".options-row .exotic-expanded-div").length&&1==document.querySelectorAll(".options-row .expanded-option").length){h.style.display="none",E.parentElement.parentElement.classList.remove("justify-content-start"),E.parentElement.parentElement.classList.add("justify-content-center"),E.src="/images/hed-logo.png",I.style.display="none",loadingscreen.style.display="block",exoticloadingvid.style.display="block",exoticloadingvid.play(),1===Z&&setTimeout((function(){loadingscreen.style.display="none",y.style.zIndex=0,permissions.setAttribute("zappar-permissions-ui",""),J.style.display="block"}),6e3),f.innerHTML="".concat(M),R="We will forever be ".concat(C," for years to come. \n\n  Let's make this occasion special and bond over our idea of a perfect day - ").concat(D,", or spend time ").concat(N," just like old times<br>\n  \n  Thank you for being the best Sibling! You know I am in awe of you <span>😊</span> "),console.log(R),completenote.innerHTML=R,document.querySelector(".message-wrapper").classList.add("hed-message"),document.querySelector(".message-header h3").classList.add("hed-note-text"),document.getElementById("msgclosebtn").classList.add("hed-close-btn"),document.querySelector(".dynamic-name").classList.add("hed-dynamic-name"),document.getElementById("completenote").classList.add("hed-note-text");var e=document.getElementById("dynamicImg");e.classList.add("justify-content-start"),e.children[0].src="/images/hed-bottom-img.png",console.log(u.packtype),console.log("next"),i()}else k.classList.remove("invisible"),k.classList.add("visible")},document.getElementById("formId").addEventListener("submit",(function(e){e.preventDefault()})),console.log("init"),L=new URLSearchParams(document.location.search.substring(1)),B=new URLSearchParams(document.location.search.substring(2)),x=new URLSearchParams(document.location.search.substring(3)),S=new URLSearchParams(document.location.search.substring(4)),T=new URLSearchParams(document.location.search.substring(5)),P=new URLSearchParams(document.location.search.substring(6)),U=L.get("name")?L.get("name"):"friend",console.log(U),"friend"===U)receiverfirstscreen.style.display="none",firstscreen.style.display="block";else if(document.querySelector(".preview-text").style.display="none",receiverfirstscreen.style.display="block",firstscreen.style.display="none",send.classList.add("invisible"),A=B.get("name1"),j=x.get("name2"),F=S.get("name3"),q=T.get("name4"),M=P.get("name5"),console.log(M),console.log("Options="+j+" "+F+" "+q),console.log(A),console.log("receiver side"),"1"===A){console.log("pnametype"+A),O=U,_=13e3,o.setAttribute("gltf-model","/models/kisses .glb"),f.innerHTML="".concat(M),D=1===F?"Caring nature":2===F?"Delightfully annoying nature":"Giving mature advices",R="Our bond can be described as ".concat(C=1===j?"Sweet Troublemakers":2===j?"Partners in crime":"Top Secret keepers"," and that makes it special. Your ").concat(D," makes you a Super Sibling. You are the best I could ask for and I am sure with your crazy and determined attitude, all your dreams will turn into reality.<br>\n        This is my way of expressing what you mean to me. And for moments\n        <span>when words fall short,</span>"),console.log(R),completenote.innerHTML=R,document.querySelector(".message-wrapper").classList.add("kisses-message");var c=document.getElementById("dynamicImg");c.classList.add("justify-content-center"),c.children[0].src="/images/say it with a kiss (brown).png"}else if("2"===A){console.log("pnametype"+A),O=U,_=11e3,o.setAttribute("gltf-model","/models/bars final.glb"),f.innerHTML="".concat(M),D=1===F?"You are a closet rockstar, unleashing brilliance and leaving everyone in awe":2===F?"You are always in FOMO mode, eager to seize every opportunity and get the best out of it":"You are the Ultimate Foodie, never hesitating to try new and exciting cuisines",N=1===q?"Music":2===q?"Street food":"Gaming",R="Our bond can be described as ".concat(C=1===j?"Sweet Siblings":2===j?"Nutty Friends":"Trusted Partners"," and that makes it special.<br>\n           ").concat(D,".<br>\n           Whenever we’re together, I love how we bond over ").concat(N,", and make every moment special."),console.log(R),completenote.innerHTML=R,document.querySelector(".message-wrapper").classList.add("bar-message"),document.querySelector(".message-wrapper").insertAdjacentHTML("beforeend",'<div class="bars-note-png"></div>'),document.querySelector(".message-header h3").classList.add("bars-note-text"),document.getElementById("msgclosebtn").classList.add("bars-close-btn"),document.querySelector(".dynamic-name").classList.add("bars-dynamic-name"),document.getElementById("completenote").classList.add("bars-note-text"),document.querySelector(".dynamic-note").style.height="320px",document.querySelector(".close-icon").style.zIndex="99";var s=document.getElementById("dynamicImg");s.classList.remove("dynamic-img"),s.classList.remove("justify-content-center"),s.classList.add("container-fluid"),s.classList.add("bars-dynamic-img"),s.children[0].style.width="100%",s.children[0].src="/images/bars-bottom-img.png"}else if("3"===A){console.log("pnametype"+A),O=U,_=17e3,o.setAttribute("gltf-model","/models/exotic darkv13.glb"),f.innerHTML="".concat(M),D=1===F?"Wine & Chocolates at Home":2===F?"Sundowners at Beach Resort":"Bollywood Music Festival ",N=1===q?"Discussing family":2===q?"Remembering childhood days":"Laughing at Silly Jokes ",R="We will forever be ".concat(C=1===j?"Berry Good Friends":2===j?"Nutty Partners":"Trusted Confidantes"," for years to come. \n\n           Let's make this occasion special and bond over our idea of a perfect day - ").concat(D,", or spend time ").concat(N," just like old times<br>\n           \n           Thank you for being the best Sibling! You know I am in awe of you <span>😊</span>"),console.log(R),completenote.innerHTML=R,document.querySelector(".message-wrapper").classList.add("hed-message"),document.querySelector(".message-header h3").classList.add("hed-note-text"),document.getElementById("msgclosebtn").classList.add("hed-close-btn"),document.querySelector(".dynamic-name").classList.add("hed-dynamic-name"),document.getElementById("completenote").classList.add("hed-note-text");var a=document.getElementById("dynamicImg");a.classList.add("justify-content-start"),a.children[0].src="/images/hed-bottom-img.png"}document.getElementById("receiverbtn").addEventListener("click",(function(){bgaudio.play(),receiverfirstscreen.style.display="none",y.style.zIndex=0,permissions.setAttribute("zappar-permissions-ui",""),J.style.display="block"})),e.onclick=function(){messagenote.style.display="none",o.setAttribute("animation-mixer",{timeScale:1})},r.addEventListener("click",(function(e){console.log("envolope clicked"),tapOnEnvelope.style.display="none",messagenote.style.display="block",r.setAttribute("class","")})),(J=document.getElementById("tap-to-place")||document.createElement("div")).addEventListener("click",(function(){!function(){Ie.apply(this,arguments)}(),function(){var e;"kisses"===m||"1"===A?(console.log("kisses"),e=o.getObject3D("mesh").children[4].children[3],console.log(o.getObject3D("mesh")),console.log(o.getObject3D("mesh").children[4].children[3])):"chocolatebar"===m||"2"===A?(console.log("bar"),e=o.getObject3D("mesh").children[2].children[2],console.log(o.getObject3D("mesh")),console.log(o.getObject3D("mesh").children[2].children[2])):"exotic"!==m&&"3"!==A||(console.log("exotic"),e=o.getObject3D("mesh").children[1].children[5],console.log(o.getObject3D("mesh")),console.log(o.getObject3D("mesh").children[1].children[5]));var t=document.getElementById("rakhi"),r=O,i=new Image;i.src=r,i.onload=function(){var o=document.createElement("canvas"),r=i.width/2-300,c=i.height/2-300;o.width=600,o.height=600,o.getContext("2d").drawImage(i,r,c,600,600,0,0,600,600);var s=o.toDataURL();t.src=s,console.log("www"+O),e.material.map=n.load(t.src),console.log(O),e.material.map.flipY=!1}}(),sharepopupdiv.style.display="block",arscreen.style.display="block",document.getElementById("instant-tracker").setAttribute("zappar-instant","placement-mode: false"),J.remove(),setTimeout((function(){o.setAttribute("animation-mixer",{clip:"Animation",loop:"once",crossFadeDuration:.4,clampWhenFinished:!0}),setTimeout((function(){0===H&&(o.setAttribute("animation-mixer",{timeScale:0}),tapOnEnvelope.style.display="block",console.log("tap 1300"),r.setAttribute("class","cantap"))}),_)}),1e3)}))}}),document.getElementById("sendthankyou").addEventListener("click",(function(){document.getElementById("siblingname").focus()})),document.getElementById("sendgift").addEventListener("click",(function(){document.getElementById("siblingname").focus()}));var Le=document.getElementById("siblingname"),Be=document.getElementById("hoverChange");Le.addEventListener("input",(function(){Le.value.length>6&&Be.focus()})),document.getElementById("sendthankyou").addEventListener("click",(function(){document.getElementById("changeTextScreen").textContent="Say thankyou to"}))})()})();