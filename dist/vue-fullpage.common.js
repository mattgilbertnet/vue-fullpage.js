/*!
 * vue-fullpage.js v0.1.7
 * https://github.com/alvarotrigo/vue-fullpage.js
 *
 * @license vue-fullpage is released under the MIT license but notice
 * fullPage.js is licensed under GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/vue-fullpage/ - A project by Alvaro Trigo
 */

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!
* fullPage 4.0.12
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
!function(n,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).fullpage=t()}(this,(function(){"use strict";var n,t,e,i;Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(n){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),e=t.length>>>0;if("function"!=typeof n)throw new TypeError("predicate must be a function");for(var i=arguments[1],o=0;o<e;){var r=t[o];if(n.call(i,r,o,t))return r;o++}}}),Array.from||(Array.from=(n=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===n.call(t)},e=Math.pow(2,53)-1,i=function(n){var t=function(n){var t=Number(n);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(n);return Math.min(Math.max(t,0),e)},function(n){var e=this,o=Object(n);if(null==n)throw new TypeError("Array.from requires an array-like object - not null or undefined");var r,a=arguments.length>1?arguments[1]:void 0;if(void 0!==a){if(!t(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(r=arguments[2])}for(var l,u=i(o.length),c=t(e)?Object(new e(u)):new Array(u),s=0;s<u;)l=o[s],c[s]=a?void 0===r?a(l,s):a.call(r,l,s):l,s+=1;return c.length=u,c}));var o=window,r=document,a=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),l=/(Mac|iPhone|iPod|iPad)/i.test(o.navigator.userAgent),u="ontouchstart"in o||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,c=!!window.MSInputMethodContext&&!!document.documentMode,s={test:{},shared:{}};function f(n,t){o.console&&o.console[n]&&o.console[n]("fullPage: "+t)}function d(n){return"none"!==o.getComputedStyle(n).display}function v(n){return Array.from(n).filter((function(n){return d(n)}))}function p(n,t){return(t=arguments.length>1?t:document)?t.querySelectorAll(n):null}function h(n){n=n||{};for(var t=1,e=arguments.length;t<e;++t){var i=arguments[t];if(i)for(var o in i)i.hasOwnProperty(o)&&"__proto__"!=o&&"constructor"!=o&&("[object Object]"!==Object.prototype.toString.call(i[o])?n[o]=i[o]:n[o]=h(n[o],i[o]))}return n}function g(n,t){return null!=n&&n.classList.contains(t)}function w(){return"innerHeight"in o?o.innerHeight:r.documentElement.offsetHeight}function m(){return o.innerWidth}function b(n,t){var e;for(e in n=A(n),t)if(t.hasOwnProperty(e)&&null!==e)for(var i=0;i<n.length;i++)n[i].style[e]=t[e];return n}function S(n,t){if(null==t)return n.previousElementSibling;var e=S(n);return e&&Q(e,t)?e:null}function y(n,t){if(null==t)return n.nextElementSibling;var e=y(n);return e&&Q(e,t)?e:null}function M(n){return n[n.length-1]}function T(n,t){n=E(n)?n[0]:n;for(var e=null!=t?p(t,n.parentNode):n.parentNode.childNodes,i=0,o=0;o<e.length;o++){if(e[o]==n)return i;1==e[o].nodeType&&i++}return-1}function A(n){return E(n)?n:[n]}function x(n){n=A(n);for(var t=0;t<n.length;t++)n[t].style.display="none";return n}function O(n){n=A(n);for(var t=0;t<n.length;t++)n[t].style.display="block";return n}function E(n){return"[object Array]"===Object.prototype.toString.call(n)||"[object NodeList]"===Object.prototype.toString.call(n)}function k(n,t){n=A(n);for(var e=0;e<n.length;e++)n[e].classList.add(t);return n}function R(n,t){n=A(n);for(var e=t.split(" "),i=0;i<e.length;i++){t=e[i];for(var o=0;o<n.length;o++)n[o].classList.remove(t)}return n}function j(n,t){t.appendChild(n)}function z(n,t,e){var i;t=t||r.createElement("div");for(var o=0;o<n.length;o++){var a=n[o];(e&&!o||!e)&&(i=t.cloneNode(!0),a.parentNode.insertBefore(i,a)),i.appendChild(a)}return n}function D(n,t){z(n,t,!0)}function L(n,t){for("string"==typeof t&&(t=K(t)),n.appendChild(t);n.firstChild!==t;)t.appendChild(n.firstChild)}function P(n){for(var t=r.createDocumentFragment();n.firstChild;)t.appendChild(n.firstChild);n.parentNode.replaceChild(t,n)}function N(n,t){return n&&1===n.nodeType?Q(n,t)?n:N(n.parentNode,t):null}function H(n,t){W(n,n.nextSibling,t)}function C(n,t){W(n,n,t)}function W(n,t,e){E(e)||("string"==typeof e&&(e=K(e)),e=[e]);for(var i=0;i<e.length;i++)n.parentNode.insertBefore(e[i],t)}function I(){var n=r.documentElement;return(o.pageYOffset||n.scrollTop)-(n.clientTop||0)}function F(n){return Array.prototype.filter.call(n.parentNode.children,(function(t){return t!==n}))}function V(n){n.preventDefault()}function Z(n,t){return n.getAttribute(t)}function B(n,t,e){r.addEventListener(n,t,"undefined"===e?null:e)}function G(n,t,e){o.addEventListener(n,t,"undefined"===e?null:e)}function Y(n,t,e){r.removeEventListener(n,t,"undefined"===e?null:e)}function U(n,t,e){o.removeEventListener(n,t,"undefined"===e?null:e)}function X(n){if("function"==typeof n)return!0;var t=Object.prototype.toString.call(n);return"[object Function]"===t||"[object GeneratorFunction]"===t}function _(n,t,e){var i;e=void 0===e?{}:e,"function"==typeof o.CustomEvent?i=new CustomEvent(t,{detail:e}):(i=r.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,e),n.dispatchEvent(i)}function Q(n,t){return(n.matches||n.t||n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||n.oMatchesSelector).call(n,t)}function J(n,t){if("boolean"==typeof t)for(var e=0;e<n.length;e++)n[e].style.display=t?"block":"none";return n}function K(n){var t=r.createElement("div");return t.innerHTML=n.trim(),t.firstChild}function q(n){n=A(n);for(var t=0;t<n.length;t++){var e=n[t];e&&e.parentElement&&e.parentNode.removeChild(e)}}function $(n,t){Array.prototype.filter.call(n,t)}function nn(n,t,e){for(var i=n[e],o=[];i;)(Q(i,t)||null==t)&&o.push(i),i=i[e];return o}function tn(n,t){return nn(n,t,"nextElementSibling")}function en(n,t){return nn(n,t,"previousElementSibling")}function on(n){return Object.keys(n).map((function(t){return n[t]}))}function rn(n){return n[n.length-1]}function an(n,t){for(var e=0,i=n.slice(Math.max(n.length-t,1)),o=0;o<i.length;o++)e+=i[o];return Math.ceil(e/t)}function ln(n,t){n.setAttribute(t,Z(n,"data-"+t)),n.removeAttribute("data-"+t)}function un(n,t){var e=[n];do{n=n.parentNode,e.push(n)}while(!Q(n,t));return e}o.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(n,t){t=t||window;for(var e=0;e<this.length;e++)n.call(t,this[e],e,this)}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(n,t){if(null==n)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(n),i=1;i<arguments.length;i++){var o=arguments[i];if(null!=o)for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},writable:!0,i:!0}),window.fp_utils={$:p,deepExtend:h,hasClass:g,getWindowHeight:w,css:b,prev:S,next:y,last:M,index:T,getList:A,hide:x,show:O,isArrayOrList:E,addClass:k,removeClass:R,appendTo:j,wrap:z,wrapAll:D,wrapInner:L,unwrap:P,closest:N,after:H,before:C,insertBefore:W,getScrollTop:I,siblings:F,preventDefault:V,isFunction:X,trigger:_,matches:Q,toggle:J,createElementFromHTML:K,remove:q,filter:$,untilAll:nn,nextAll:tn,prevAll:en,showError:f};var cn=Object.freeze({__proto__:null,showError:f,isVisible:d,getVisible:v,$:p,deepExtend:h,hasClass:g,getWindowHeight:w,o:m,css:b,prev:S,next:y,last:M,index:T,getList:A,hide:x,show:O,isArrayOrList:E,addClass:k,removeClass:R,appendTo:j,wrap:z,wrapAll:D,wrapInner:L,unwrap:P,closest:N,after:H,before:C,insertBefore:W,getScrollTop:I,siblings:F,preventDefault:V,l:Z,u:B,v:G,p:Y,h:U,isFunction:X,trigger:_,matches:Q,toggle:J,createElementFromHTML:K,remove:q,filter:$,untilAll:nn,nextAll:tn,prevAll:en,toArray:on,g:rn,S:an,M:ln,T:un});function sn(n){return sn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},sn(n)}var fn={A:{},O:function(n,t){var e=this;return"object"!==sn(this.A[n])&&(this.A[n]=[]),this.A[n].push(t),function(){return e.removeListener(n,t)}},removeListener:function(n,t){if("object"===sn(this.A[n])){var e=this.A[n].indexOf(t);e>-1&&this.A[n].splice(e,1)}},R:function(n){for(var t=this,e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];"object"===sn(this.A[n])&&this.A[n].forEach((function(n){return n.apply(t,i)}))},once:function(n,t){var e=this,i=this.O(n,(function(){i();for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];t.apply(e,o)}))}},dn={j:0,D:0,slides:[],L:[],P:null,N:null,H:!1,C:!1,W:!1,I:!1,F:!1,V:void 0,Z:void 0,B:!1,canScroll:!0,G:"none",Y:"none",U:!1,X:!1,_:!0,J:0,K:w(),q:!1,nn:{}};function vn(n){Object.assign(dn,n)}function pn(){return dn}o.state=dn;var hn="onAfterRenderNoAnchor",gn="onClickOrTouch",wn="moveSlideLeft",mn="moveSlideRight",bn="onInitialise",Sn="bindEvents",yn="onDestroy",Mn="contentChanged",Tn="onScrollOverflowScrolled",An="onScrollPageAndSlide",xn="onKeyDown",On="onMenuClick",En="scrollPage",kn="landscapeScroll",Rn="scrollBeyondFullpage",jn="onPerformMovement",zn="afterSectionLoads",Dn="afterSlideLoads";function Ln(n){fn.R(gn,{e:n,target:n.target})}function Pn(){["click","touchstart"].forEach((function(n){Y(n,Ln)}))}function Nn(){vn({_:!0})}fn.O(Sn,(function(){["click","touchstart"].forEach((function(n){B(n,Ln)})),G("focus",Nn),fn.O(yn,Pn)}));var Hn="fullpage-wrapper",Cn="."+Hn,Wn="fp-responsive",In="fp-notransition",Fn="fp-destroyed",Vn="fp-enabled",Zn="active",Bn=".active",Gn="fp-completely",Yn="fp-section",Un="."+Yn,Xn=".fp-tableCell",_n="#fp-nav",Qn="fp-slide",Jn="."+Qn,Kn=".fp-slide.active",qn="fp-slides",$n=".fp-slides",nt="fp-slidesContainer",tt="."+nt,et="fp-table",it="fp-overflow",ot="."+it,rt="fp-is-overflow",at=".fp-slidesNav",lt=".fp-slidesNav a",ut="fp-controlArrow",ct="."+ut,st="fp-prev",ft=".fp-controlArrow.fp-prev",dt=".fp-controlArrow.fp-next",vt={menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,licenseKey:"",credits:{enabled:!0,label:"Made with fullPage.js",position:"right"},css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,tn:600,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!0,scrollOverflowReset:!1,touchSensitivity:5,touchWrapper:null,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,allowCorrectDirection:!1,scrollOverflowMacStyle:!0,controlArrows:!0,controlArrowsHTML:['<div class="fp-arrow"></div>','<div class="fp-arrow"></div>'],controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",afterLoad:null,beforeLeave:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,onScrollOverflow:null,lazyLoading:!0,observer:!0},pt=null,ht=!1,gt=h({},vt),wt=null;function mt(n){return pt}function bt(){return wt||vt}function St(){return gt}function yt(n,t,e){wt[n]=t,"internal"!==e&&(gt[n]=t)}function Mt(){if(!bt().anchors.length){var n=p(bt().sectionSelector.split(",").join("[data-anchor],")+"[data-anchor]",pt);n.length&&n.length===p(bt().sectionSelector,pt).length&&(ht=!0,n.forEach((function(n){bt().anchors.push(Z(n,"data-anchor").toString())})))}if(!bt().navigationTooltips.length){var t=p(bt().sectionSelector.split(",").join("[data-tooltip],")+"[data-tooltip]",pt);t.length&&t.forEach((function(n){bt().navigationTooltips.push(Z(n,"data-tooltip").toString())}))}}function Tt(n){return void 0!==window["fp_"+n+"Extension"]}function At(n){var t=bt();return null!==t[n]&&"[object Array]"===Object.prototype.toString.call(t[n])?t[n].length&&s[n]:t[n]&&s[n]}function xt(n,t,e){if(At(n))return X(s[n][t])?s[n][t](e):s[n][t]}function Ot(){return xt("dragAndMove","isAnimating")}function Et(){return xt("dragAndMove","isGrabbing")}function kt(n){return bt().offsetSections&&s.offsetSections?Math.round(xt("offsetSections","getWindowHeight",n)):w()}function Rt(n,t){n.insertBefore(t,n.firstChild)}function jt(n){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function e(n){var e,i,o,r,a,l,u="",c=0;for(n=n.replace(/[^A-Za-z0-9+/=]/g,"");c<n.length;)e=t.indexOf(n.charAt(c++))<<2|(r=t.indexOf(n.charAt(c++)))>>4,i=(15&r)<<4|(a=t.indexOf(n.charAt(c++)))>>2,o=(3&a)<<6|(l=t.indexOf(n.charAt(c++))),u+=String.fromCharCode(e),64!=a&&(u+=String.fromCharCode(i)),64!=l&&(u+=String.fromCharCode(o));return u=function(n){for(var t,e="",i=0,o=0,r=0;i<n.length;)(o=n.charCodeAt(i))<128?(e+=String.fromCharCode(o),i++):o>191&&o<224?(r=n.charCodeAt(i+1),e+=String.fromCharCode((31&o)<<6|63&r),i+=2):(r=n.charCodeAt(i+1),t=n.charCodeAt(i+2),e+=String.fromCharCode((15&o)<<12|(63&r)<<6|63&t),i+=3);return e}(u),u}function i(n){return n.slice(3).slice(0,-3)}return function(n){var t=n.split("_");if(t.length>1){var o=t[1];return e(n.replace(i(t[1]),"").split("_")[0].slice(2).slice(0,-2))+"_"+e(o.slice(3).slice(0,-3))}return i(n)}(e(n))}o.fp_utils=o.fp_utils||{},Object.assign(o.fp_utils,{prependTo:Rt,toggleClass:function(n,t,e){if(n.classList&&null==e)n.classList.toggle(t);else{var i=g(n,t);i&&null==e||!e?R(n,t):(!i&&null==e||e)&&k(n,t)}}});var zt=function(n){this.anchor=n.anchor,this.item=n.item,this.index=n.index(),this.isLast=this.index===n.item.parentElement.querySelectorAll(n.selector).length-1,this.isFirst=!this.index,this.isActive=n.isActive},Dt=function(n,t){this.parent=this.parent||null,this.selector=t,this.anchor=Z(n,"data-anchor")||bt().anchors[T(n,bt().sectionSelector)],this.item=n,this.isVisible=d(n),this.isActive=g(n,Zn),this.en=g(n,it)||null!=p(ot,n)[0],this.on=t===bt().sectionSelector,this.container=N(n,tt)||N(n,Cn),this.index=function(){return this.siblings().indexOf(this)}};function Lt(n){return n.map((function(n){return n.item}))}function Pt(n,t){return n.find((function(n){return n.item===t}))}Dt.prototype.siblings=function(){return this.on?this.isVisible?dn.L:dn.rn:this.parent?this.parent.slides:0},Dt.prototype.prev=function(){var n=this.siblings(),t=(this.on?n.indexOf(this):this.parent.slides.indexOf(this))-1;return t>=0?n[t]:null},Dt.prototype.next=function(){var n=this.siblings(),t=(this.on?n.indexOf(this):this.parent.slides.indexOf(this))+1;return t<n.length?n[t]:null},Dt.prototype.prevPanel=function(){return this===this.prev()?this.parent?this.parent.prev():null:this.prev()||(this.parent?this.parent.prev():null)},Dt.prototype.nextPanel=function(){return this===this.next()?this.parent?this.parent.next():null:this.next()||(this.parent?this.parent.next():null)},Dt.prototype.an=function(){return this.on?dn.L:dn.ln};var Nt,Ht=function(n){zt.call(this,n)},Ct=function(n){zt.call(this,n)};function Wt(n){var t=p(Kn,n);return t.length&&(n=t[0]),n}function It(n){return n?n.activeSlide?n.activeSlide:n:null}function Ft(n){var t,e,i=bt();return i.autoScrolling&&!i.scrollBar?(t=-n,e=p(Cn)[0]):(t=n,e=window),{options:t,element:e}}function Vt(n,t){!bt().autoScrolling||bt().scrollBar||n.self!=window&&g(n,qn)?n.self!=window&&g(n,qn)?n.scrollLeft=t:n.scrollTo(0,t):n.style.top=t+"px"}function Zt(n){var t="transform "+bt().scrollingSpeed+"ms "+bt().easingcss3;return R(n,In),b(n,{"-webkit-transition":t,transition:t})}function Bt(n,t){var e=n.index(),i=T(t,Un);return e==i?"none":e>i?"up":"down"}function Gt(n){return k(n,In)}function Yt(n){return{"-webkit-transform":n,"-moz-transform":n,"-ms-transform":n,transform:n}}function Ut(n,t){t?Zt(mt()):Gt(mt()),clearTimeout(Nt),b(mt(),Yt(n)),s.test.un=n,Nt=setTimeout((function(){R(mt(),In)}),10)}function Xt(n){var t=Math.round(n);if(bt().css3&&bt().autoScrolling&&!bt().scrollBar)Ut("translate3d(0px, -"+t+"px, 0px)",!1);else if(bt().autoScrolling&&!bt().scrollBar)b(mt(),{top:-t+"px"}),s.test.top=-t+"px";else{var e=Ft(t);Vt(e.element,e.options)}}function _t(n,t){"internal"!==t&&xt("fadingEffect","update",n),xt("cards","update_",n),yt("scrollingSpeed",n,t)}s.setScrollingSpeed=_t;var Qt,Jt=null,Kt=null,qt=null;function $t(n,t,e,i){var r,a=function(n){return n.self!=o&&g(n,qn)?n.scrollLeft:!bt().autoScrolling||bt().scrollBar?I():n.offsetTop}(n),l=t-a,u=!1,c=dn.B;vn({B:!0}),Qt&&window.cancelAnimationFrame(Qt),Qt=function(s){r||(r=s);var f=Math.floor(s-r);if(dn.B){var d=t;e&&(d=o.fp_easings[bt().easing](f,a,l,e)),f<=e&&Vt(n,d),f<e?window.requestAnimationFrame(Qt):void 0===i||u||(i(),vn({B:!1}),u=!0)}else u||c||(i(),vn({B:!1}),u=!0)},window.requestAnimationFrame(Qt)}function ne(n){return n&&!n.item?new Ht(new ui(n)):n?new Ht(n):null}function te(n){return n?new Ct(n):null}function ee(n,t){var e=function(n,t){var e={afterRender:function(){return{section:ne(pn().P),cn:te(pn().P.activeSlide)}},onLeave:function(){return{origin:ne(t.items.origin),destination:ne(t.items.destination),direction:t.direction,trigger:pn().N}},afterLoad:function(){return e.onLeave()},afterSlideLoad:function(){return{section:ne(t.items.section),origin:ne(t.items.origin),destination:ne(t.items.destination),direction:t.direction,trigger:pn().N}},onSlideLeave:function(){return e.afterSlideLoad()},beforeLeave:function(){return e.onLeave()},onScrollOverflow:function(){return{section:ne(pn().P),cn:te(pn().P.activeSlide),position:t.position,direction:t.direction}}};return e[n]()}(n,t);return _(mt(),n,e),!1!==bt()[n].apply(e[Object.keys(e)[0]],on(e))}function ie(n){var t=Wt(n);p("video, audio",t).forEach((function(n){n.hasAttribute("data-autoplay")&&"function"==typeof n.play&&n.play()})),p('iframe[src*="youtube.com/embed/"]',t).forEach((function(n){n.hasAttribute("data-autoplay")&&oe(n),n.onload=function(){n.hasAttribute("data-autoplay")&&oe(n)}}))}function oe(n){n.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function re(n){var t=Wt(n);p("video, audio",t).forEach((function(n){n.hasAttribute("data-keepplaying")||"function"!=typeof n.pause||n.pause()})),p('iframe[src*="youtube.com/embed/"]',t).forEach((function(n){/youtube\.com\/embed\//.test(Z(n,"src"))&&!n.hasAttribute("data-keepplaying")&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function ae(n){bt().lazyLoading&&p("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Wt(n)).forEach((function(n){if(["src","srcset"].forEach((function(t){var e=Z(n,"data-"+t);null!=e&&e&&(ln(n,t),n.addEventListener("load",(function(){})))})),Q(n,"source")){var t=N(n,"video, audio");t&&(t.load(),t.onloadeddata=function(){})}}))}function le(){var n=pn().P.item,t=pn().P.activeSlide,e=ue(n),i=String(e);t&&(i=i+"-"+ue(t.item)),i=i.replace("/","-").replace("#","");var o=new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g");Jt.className=Jt.className.replace(o,""),k(Jt,"fp-viewing-"+i)}function ue(n){if(!n)return null;var t=Z(n,"data-anchor"),e=T(n);return null==t&&(t=e),t}function ce(n,t,e){var i="";bt().anchors.length&&!bt().lockAnchors&&(n?(null!=e&&(i=e),null==t&&(t=n),vn({Z:t}),se(i+"/"+t)):null!=n?(vn({Z:t}),se(e)):se(e)),le()}function se(n){if(bt().recordHistory)location.hash=n;else if(a||u)o.history.replaceState(void 0,void 0,"#"+n);else{var t=o.location.href.split("#")[0];o.location.replace(t+"#"+n)}}function fe(n,t,e){var i="Section"===t?bt().anchors[n]:Z(e,"data-anchor");return encodeURI(bt().navigationTooltips[n]||i||t+" "+(n+1))}function de(n){V(n),vn({N:"horizontalNav"});var t=N(this,Un),e=p($n,N(this,Un))[0],i=Pt(pn().L,t).slides[T(N(this,"li"))];fn.R(kn,{slides:e,destination:i.item})}var ve,pe={};function he(n,t,e){"all"!==t?pe[e][t]=n:Object.keys(pe[e]).forEach((function(t){pe[e][t]=n}))}function ge(){return pe}function we(){var n=N(this,Un);g(this,st)?ge().m.left&&(vn({N:"slideArrow"}),fn.R(wn,{section:n})):ge().m.right&&(vn({N:"slideArrow"}),fn.R(mn,{section:n}))}function me(n){!bt().loopHorizontal&&bt().controlArrows&&(J(p(ft,n.section),0!==n.slideIndex),J(p(dt,n.section),null!=y(n.destiny)))}function be(){clearTimeout(ve),vn({W:!1})}function Se(n,t,e){var i=N(n,Un),o=pn().L.filter((function(n){return n.item==i}))[0],r=o.slides.filter((function(n){return n.item==t}))[0],a={slides:n,destiny:t,direction:e,destinyPos:{left:t.offsetLeft},slideIndex:r.index(),section:i,sectionIndex:o.index(),anchorLink:o.anchor,slidesNav:p(at,i)[0],slideAnchor:r.anchor,prevSlide:o.activeSlide.item,prevSlideIndex:o.activeSlide.index(),items:{section:o,origin:o.activeSlide,destination:r},localIsResizing:dn.I};a.xMovement=Me(a.prevSlideIndex,a.slideIndex),a.direction=a.direction?a.direction:a.xMovement,a.localIsResizing||vn({canScroll:!1}),xt("parallax","applyHorizontal",a),xt("cards","apply",a),xt("dropEffect","apply",a),xt("waterEffect","apply",a),bt().onSlideLeave&&!a.localIsResizing&&"none"!==a.xMovement&&X(bt().onSlideLeave)&&!1===ee("onSlideLeave",a)?vn({W:!1}):(At("dropEffect")&&bt().dropEffect||(k(t,Zn),R(F(t),Zn)),oi(),a.localIsResizing||(re(a.prevSlide),ae(t)),me(a),o.isActive&&!a.localIsResizing&&ce(a.slideIndex,a.slideAnchor,a.anchorLink),xt("continuousHorizontal","apply",a),Et()?Ae(a):ye(n,a,!0),bt().interlockedSlides&&s.interlockedSlides&&(At("continuousHorizontal")&&void 0!==e&&e!==a.xMovement||xt("interlockedSlides","apply",a)))}function ye(n,t,e){var i,o,r=t.destinyPos;if(i=t.slidesNav,o=t.slideIndex,bt().slidesNavigation&&null!=i&&(R(p(Bn,i),Zn),k(p("a",p("li",i)[o]),Zn)),vn({scrollX:Math.round(r.left)}),bt().css3){var a="translate3d(-"+Math.round(r.left)+"px, 0px, 0px)";s.test.sn[t.sectionIndex]=a,At("dragAndMove")&&void 0!==t.dn||Zt(p(tt,n)),b(p(tt,n),Yt(a)),At("interlockedSlides")||clearTimeout(ve),ve=setTimeout((function(){e&&Ae(t)}),bt().scrollingSpeed)}else s.test.left[t.sectionIndex]=Math.round(r.left),$t(n,Math.round(r.left),bt().scrollingSpeed,(function(){e&&Ae(t)}))}function Me(n,t){return n==t?"none":n>t?"left":"right"}function Te(){clearTimeout(ve)}function Ae(n){xt("continuousHorizontal","afterSlideLoads",n),n.localIsResizing||(xt("parallax","afterSlideLoads"),xt("scrollOverflowReset","setPrevious",n.prevSlide),xt("scrollOverflowReset","reset"),X(bt().afterSlideLoad)&&ee("afterSlideLoad",n),vn({canScroll:!0}),ie(n.destiny),fn.R(Dn,n)),vn({W:!1}),xt("interlockedSlides","interlockedSlides",n)}function xe(n,t){_t(0,"internal"),void 0!==t&&vn({I:!0}),Se(N(n,$n),n),void 0!==t&&vn({I:!1}),_t(St().scrollingSpeed,"internal")}function Oe(n,t){yt("recordHistory",n,t)}function Ee(n,t){n||Xt(0),yt("autoScrolling",n,t);var e=pn().P.item;if(bt().autoScrolling&&!bt().scrollBar)b(qt,{overflow:"hidden",height:"100%"}),R(Jt,"fp-scrollable"),Oe(St().recordHistory,"internal"),b(mt(),{"-ms-touch-action":"none","touch-action":"none"}),null!=e&&Xt(e.offsetTop);else if(b(qt,{overflow:"visible",height:"initial"}),k(Jt,"fp-scrollable"),Oe(!!bt().autoScrolling&&St().recordHistory,"internal"),b(mt(),{"-ms-touch-action":"","touch-action":""}),Gt(mt()),null!=e){var i=Ft(e.offsetTop);i.element.scrollTo(0,i.options)}_(mt(),"setAutoScrolling",n)}function ke(){for(var n=p(Kn),t=0;t<n.length;t++)xe(n[t],"internal")}function Re(){var n=p(".fp-auto-height")[0]||Qe()&&p(".fp-auto-height-responsive")[0];bt().lazyLoading&&n&&p(".fp-section:not(.active)").forEach((function(n){var t,e,i,o,r;e=(t=n.getBoundingClientRect()).top,i=t.bottom,o=e+2<dn.K&&e>0,r=i>2&&i<dn.K,(o||r)&&ae(n)}))}function je(){_(S(this),"click")}function ze(){q(p(_n));var n=r.createElement("div");n.setAttribute("id","fp-nav");var t=r.createElement("ul");n.appendChild(t),j(n,Jt);var e=p(_n)[0];k(e,"fp-"+bt().navigationPosition),bt().showActiveTooltip&&k(e,"fp-show-active");for(var i="",o=0;o<pn().L.length;o++){var a=pn().L[o],l="";bt().anchors.length&&(l=a.anchor),i+='<li><a href="#'+encodeURI(l)+'"><span class="fp-sr-only">'+fe(a.index(),"Section")+"</span><span></span></a>";var u=bt().navigationTooltips[a.index()];void 0!==u&&""!==u&&(i+='<div class="fp-tooltip fp-'+bt().navigationPosition+'">'+u+"</div>"),i+="</li>"}p("ul",e)[0].innerHTML=i;var c=p("li",p(_n)[0])[pn().P.index()];k(p("a",c),Zn)}function De(n){n.preventDefault&&V(n),vn({N:"verticalNav"});var t=T(N(this,"#fp-nav li"));fn.R(En,{destination:pn().L[t]})}function Le(n,t){var e;e=n,bt().menu&&bt().menu.length&&p(bt().menu).forEach((function(n){null!=n&&(R(p(Bn,n),Zn),k(p('[data-menuanchor="'+e+'"]',n),Zn))})),function(n,t){var e=p(_n)[0];bt().navigation&&null!=e&&"none"!==e.style.display&&(R(p(Bn,e),Zn),k(n?p('a[href="#'+n+'"]',e):p("a",p("li",e)[t]),Zn))}(n,t)}pe.m={up:!0,down:!0,left:!0,right:!0},pe.k=h({},pe.m),fn.O(gn,(function(n){var t=n.target;(Q(t,ct)||N(t,ct))&&we.call(t,n)})),s.landscapeScroll=Se,fn.O(Sn,(function(){fn.O(jn,be)})),s.setRecordHistory=Oe,s.setAutoScrolling=Ee,s.test.setAutoScrolling=Ee,(new Date).getTime();var Pe,Ne,He,Ce,We,Ie,Fe=(Ne=!0,He=(new Date).getTime(),Ce=!o.fullpage_api,function(n,t){var e=(new Date).getTime(),i="wheel"===n?bt().scrollingSpeed:100;return Ne=Ce||e-He>=i,Ce=!o.fullpage_api,Ne&&(Pe=t(),He=e),void 0===Pe||Pe});function Ve(n,t){if(X(bt().beforeLeave))return Fe(pn().N,(function(){return ee(n,t)}))}function Ze(n,t,e){var i=n.item;if(null!=i){var o,r,a={element:i,callback:t,isMovementUp:e,dtop:Be(i),yMovement:Bt(pn().P,i),anchorLink:n.anchor,sectionIndex:n.index(),activeSlide:n.activeSlide?n.activeSlide.item:null,leavingSection:pn().P.index()+1,localIsResizing:dn.I,items:{origin:pn().P,destination:n},direction:null};if(!(pn().P.item==i&&!dn.I||bt().scrollBar&&I()===a.dtop&&!g(i,"fp-auto-height"))){if(null!=a.activeSlide&&(o=Z(a.activeSlide,"data-anchor"),r=T(a.activeSlide,null)),!a.localIsResizing){var l=a.yMovement;if(void 0!==e&&(l=e?"up":"down"),a.direction=l,Tt("dropEffect")&&s.dropEffect.onLeave_(a),Tt("waterEffect")&&s.waterEffect.onLeave_(a),X(bt().beforeLeave)&&!1===Ve("beforeLeave",a))return;if(X(bt().onLeave)&&!ee("onLeave",a))return}xt("parallax","apply",a),xt("cards","apply",a),xt("dropEffect","apply",a),xt("waterEffect","apply",a),bt().autoScrolling&&bt().continuousVertical&&void 0!==a.isMovementUp&&(!a.isMovementUp&&"up"==a.yMovement||a.isMovementUp&&"down"==a.yMovement)&&(a=function(n){vn({q:!0});var t=pn().P.item;return n.isMovementUp?C(t,tn(t,Un)):H(t,en(t,Un).reverse()),Xt(pn().P.item.offsetTop),ke(),n.vn=t,n.dtop=n.element.offsetTop,n.yMovement=Bt(pn().P,n.element),n.leavingSection=n.items.origin.index()+1,n.sectionIndex=n.items.destination.index(),_(mt(),"onContinuousVertical",n),n}(a)),xt("scrollOverflowReset","setPrevious",pn().P.item),a.localIsResizing||re(pn().P.item),At("dropEffect")&&bt().dropEffect||(k(i,Zn),R(F(i),Zn)),oi(),ae(i),vn({canScroll:s.test.pn}),ce(r,o,a.anchorLink),function(n){var t=bt().scrollingSpeed<700,e=t?700:bt().scrollingSpeed;if(vn({G:"none",scrollY:Math.round(n.dtop)}),fn.R(jn),bt().css3&&bt().autoScrolling&&!bt().scrollBar)Ut("translate3d(0px, -"+Math.round(n.dtop)+"px, 0px)",!0),At("waterEffect")&&ke(),bt().scrollingSpeed?(clearTimeout(We),We=setTimeout((function(){Ge(n),vn({canScroll:!t||s.test.pn})}),bt().scrollingSpeed)):Ge(n);else{var i=Ft(n.dtop);s.test.top=-n.dtop+"px",clearTimeout(We),$t(i.element,i.options,bt().scrollingSpeed,(function(){bt().scrollBar?We=setTimeout((function(){Ge(n)}),30):(Ge(n),vn({canScroll:!t||s.test.pn}))}))}t&&(clearTimeout(Ie),Ie=setTimeout((function(){vn({canScroll:!0})}),e))}(a),vn({V:a.anchorLink}),Le(a.anchorLink,function(n){return null!=n.vn?n.isMovementUp?dn.j-1:0:n.sectionIndex}(a))}}}function Be(n){var t=n.offsetHeight,e=n.offsetTop,i=e,o=At("dragAndMove")&&xt("dragAndMove","isGrabbing")?xt("dragAndMove","isScrollingDown"):e>dn.J,r=i-w()+t,a=bt().bigSectionsDestination;return t>w()?(o||a)&&"bottom"!==a||(i=r):(o||dn.I&&null==y(n))&&(i=r),At("offsetSections")&&(i=s.offsetSections.getSectionPosition_(o,i,n)),vn({J:i}),i}function Ge(n){vn({H:!1}),function(n){null!=n.vn&&(n.isMovementUp?C(p(Un)[0],n.vn):H(p(Un)[pn().L.length-1],n.vn),Xt(pn().P.item.offsetTop),function(){for(var n=p(Kn),t=0;t<n.length;t++)xe(n[t],"internal")}(),n.sectionIndex=n.items.destination.index(),n.leavingSection=n.items.origin.index()+1,vn({q:!1}))}(n),X(bt().afterLoad)&&!n.localIsResizing&&ee("afterLoad",n),xt("parallax","afterLoad"),xt("waterEffect","afterLoad"),xt("dropEffect","afterLoad"),xt("scrollOverflowReset","reset"),xt("resetSliders","apply",n),oi(),n.localIsResizing||ie(n.element),k(n.element,Gn),R(F(n.element),Gn),Re(),ti.hn(),vn({canScroll:!0}),fn.R(zn,n),X(n.callback)&&n.callback()}function Ye(n,t){yt("fitToSection",n,t)}function Ue(){dn.canScroll&&(vn({I:!0}),Ze(dn.P),vn({I:!1}))}function Xe(){var n=bt().responsive||bt().responsiveWidth,t=bt().responsiveHeight,e=n&&o.innerWidth<n,i=t&&o.innerHeight<t;n&&t?_e(e||i):n?_e(e):t&&_e(i)}function _e(n){var t=Qe();n?t||(Ee(!1,"internal"),Ye(!1,"internal"),x(p(_n)),k(Jt,Wn),X(bt().afterResponsive)&&bt().afterResponsive.call(mt(),n),xt("responsiveSlides","toSections"),_(mt(),"afterResponsive",n)):t&&(Ee(St().autoScrolling,"internal"),Ye(St().autoScrolling,"internal"),O(p(_n)),R(Jt,Wn),X(bt().afterResponsive)&&bt().afterResponsive.call(mt(),n),xt("responsiveSlides","toSlides"),_(mt(),"afterResponsive",n))}function Qe(){return g(Jt,Wn)}function Je(n){bt().verticalCentered&&(!bt().scrollOverflow&&ti.gn(n.item)||ti.wn(n)||g(n.item,et)||k(n.item,et))}s.moveTo=moveTo,s.getScrollY=function(){return dn.scrollY},fn.O(yn,(function(){clearTimeout(We),clearTimeout(Ie)})),s.setFitToSection=Ye,s.fitToSection=Ue,s.setResponsive=_e;var Ke=null;function qe(n){var t=n.item,e=n.mn.length,i=n.index();!pn().P&&n.isVisible&&(k(t,Zn),oi()),Ke=pn().P.item,At("offsetSections")&&b(t,{height:kt(t)+"px"}),bt().paddingTop&&b(t,{"padding-top":bt().paddingTop}),bt().paddingBottom&&b(t,{"padding-bottom":bt().paddingBottom}),void 0!==bt().sectionsColor[i]&&b(t,{"background-color":bt().sectionsColor[i]}),void 0!==bt().anchors[i]&&t.setAttribute("data-anchor",n.anchor),e||Je(n)}function $e(){bt().scrollOverflow&&!bt().scrollBar&&(ti.bn(),ti.hn())}s.getActiveSection=function(){return pn().P},fn.O(Sn,(function(){fn.O(hn,$e),fn.O(Dn,ti.hn)}));var ni,ti={Sn:null,yn:null,Mn:null,Tn:function(n){if(!dn.canScroll)return V(n),!1},hn:function(){if(bt().scrollOverflow){r.activeElement===this.Sn&&this.Sn.blur();var n=ti.An(pn().P.item);!n||a||u||(this.Sn=n,this.Sn.focus())}},bn:function(){bt().scrollOverflowMacStyle&&!l&&k(Jt,"fp-scroll-mac"),pn().ln.forEach((function(n){if(!(n.slides&&n.slides.length||g(n.item,"fp-auto-height-responsive")&&Qe())){var t,e=Wt(n.item),i=ti.gn(n.item),o=(t=n).on?t:t.parent;if(c){var r=i?"addClass":"removeClass";cn[r](o.item,rt),cn[r](n.item,rt)}else k(o.item,rt),k(n.item,rt);n.en||(ti.xn(e),ti.On(e)),n.en=!0}}))},On:function(n){ti.An(n).addEventListener("scroll",ti.En),n.addEventListener("wheel",ti.Tn,{passive:!1}),n.addEventListener("keydown",ti.Tn,{passive:!1})},xn:function(n){var t=document.createElement("div");t.className=it,L(n,t),t.setAttribute("tabindex","-1")},kn:function(n){var t=p(ot,n)[0];t&&(P(t),n.removeAttribute("tabindex"))},An:function(n){var t=Wt(n);return p(ot,t)[0]||t},en:function(n){return g(n,it)||null!=p(ot,n)[0]},wn:function(n){return n.on&&n.activeSlide?n.activeSlide.en:n.en},gn:function(n){return ti.An(n).scrollHeight>o.innerHeight},Rn:function(n,t){if(!dn.canScroll)return!1;var e=ti.An(t);if(!bt().scrollOverflow||!g(e,it)||g(Wt(t),"fp-noscroll"))return!0;var i=c?1:0,o=e.scrollTop,r="up"===n&&o<=0,a="down"===n&&e.scrollHeight<=Math.ceil(e.offsetHeight+o)+i,l=r||a;return l||(this.yn=(new Date).getTime()),l},jn:function(){this.Mn=(new Date).getTime();var n=this.Mn-ti.yn,t=(a||u)&&dn.U,e=dn.X&&n>600;return t&&n>400||e},En:(ni=0,function(n){var t=n.target.scrollTop,e="none"!==dn.G?dn.G:ni<t?"down":"up";ni=t,X(bt().onScrollOverflow)&&ee("onScrollOverflow",{position:t,direction:e}),g(n.target,it)&&dn.canScroll&&ti.Rn(e,n.target)&&ti.jn()&&fn.R(Tn,{direction:e})})},ei=null,ii=null;function oi(){dn.P=null,dn.L.map((function(n){var t=g(n.item,Zn);n.isActive=t,n.en=ti.en(n.item),t&&(dn.P=n),n.slides.length&&(n.activeSlide=null,n.slides.map((function(t){var e=g(t.item,Zn);t.en=ti.en(n.item),t.isActive=e,e&&(n.activeSlide=t)})))})),function(){var n=dn.P,t=!!dn.P&&dn.P.slides.length,e=dn.P?dn.P.activeSlide:null;if(!n&&dn.L.length&&!pn().H){if(ei){var i=li(ei,dn.L);i&&(dn.P=i,dn.P.isActive=!0,k(dn.P.item,Zn)),dn.P&&Xt(dn.P.item.offsetTop)}if(t&&!e&&ii){var o=li(ii,dn.P.slides);o&&(dn.P.activeSlide=o,dn.P.activeSlide.isActive=!0,k(dn.P.activeSlide.item,Zn)),dn.P.activeSlide&&xe(dn.P.activeSlide.item,"internal")}}}(),_(mt(),"onUpdateStateDone")}function ri(){var n=p(bt().sectionSelector+", "+Un,mt()),t=v(n),e=Array.from(n).map((function(n){return new ui(n)})),i=e.filter((function(n){return n.isVisible})),o=i.reduce((function(n,t){return n.concat(t.slides)}),[]);ei=ai(dn.P),ii=ai(dn.P?dn.P.activeSlide:null),dn.j=t.length,dn.D=i.reduce((function(n,t){return n+t.slides.length}),0),dn.L=i,dn.rn=e,dn.slides=o,dn.ln=dn.L.concat(dn.slides)}function ai(n){if(!n)return null;var t=n?n.item:null,e=n.on?dn.rn:dn.P.zn;if(t){var i=Pt(e,t);return i?i.index():null}return null}function li(n,t){var e,i=n-1,o=n;do{if(e=t[i]||t[o])break;i-=1,o+=1}while(i>=0||o<t.length);return e}var ui=function(n){var t=this;[].push.call(arguments,bt().sectionSelector),Dt.apply(this,arguments),this.mn=p(bt().slideSelector,n),this.zn=Array.from(this.mn).map((function(n){return new si(n,t)})),this.slides=this.zn.filter((function(n){return n.isVisible})),this.activeSlide=this.slides.length?this.slides.filter((function(n){return n.isActive}))[0]||this.slides[0]:null};ui.prototype=Dt.prototype,ui.prototype.constructor=ui;var ci,si=function(n,t){this.parent=t,Dt.call(this,n,bt().slideSelector)};function fi(){k(p(bt().sectionSelector,mt()),Yn),k(p(bt().slideSelector,mt()),Qn)}function di(n){var t=n.slides.length,e=n.mn,i=n.slides,o=100*t,a=100/t;if(!p($n,n.item)[0]){var l=r.createElement("div");l.className=qn,D(e,l);var u=r.createElement("div");u.className=nt,D(e,u)}b(p(tt,n.item),{width:o+"%"}),t>1&&(bt().controlArrows&&function(n){var t=n.item,e=[K(bt().controlArrowsHTML[0]),K(bt().controlArrowsHTML[1])];H(p($n,t)[0],e),k(e,ut),k(e[0],st),k(e[1],"fp-next"),"#fff"!==bt().controlArrowColor&&(b(p(dt,t),{"border-color":"transparent transparent transparent "+bt().controlArrowColor}),b(p(ft,t),{"border-color":"transparent "+bt().controlArrowColor+" transparent transparent"})),bt().loopHorizontal||x(p(ft,t))}(n),bt().slidesNavigation&&function(n){var t=n.item,e=n.slides.length;j(K('<div class="fp-slidesNav"><ul></ul></div>'),t);var i=p(at,t)[0];k(i,"fp-"+bt().slidesNavPosition);for(var o=0;o<e;o++)j(K('<li><a href="#"><span class="fp-sr-only">'+fe(o,"Slide",p(Jn,t)[o])+"</span><span></span></a></li>"),p("ul",i)[0]);b(i,{"margin-left":"-"+i.innerWidth/2+"px"});var r=n.activeSlide?n.activeSlide.index():0;k(p("a",p("li",i)[r]),Zn)}(n)),i.forEach((function(n){b(n.item,{width:a+"%"}),bt().verticalCentered&&Je(n)}));var c=At("responsiveSlides")?null:n.activeSlide||null;null!=c&&dn.P&&(0!==dn.P.index()||0===dn.P.index()&&0!==c.index())?(xe(c.item,"internal"),k(c.item,"fp-initial")):k(e[0],Zn)}si.prototype=Dt.prototype,si.prototype.constructor=ui;var vi={attributes:!1,subtree:!0,childList:!0,characterData:!0};function pi(){return xt("responsiveSlides","isResponsiveSlidesChanging")||v(p(bt().slideSelector,mt())).length!==pn().D}function hi(n){var t=pi();(pi()||xt("responsiveSlides","isResponsiveSlidesChanging")||v(p(bt().sectionSelector,mt())).length!==pn().j)&&!dn.q&&(bt().observer&&ci&&ci.disconnect(),ri(),oi(),bt().anchors=[],q(p(_n)),fi(),Mt(),bt().navigation&&ze(),t&&(q(p(at)),q(p(ct))),pn().L.forEach((function(n){n.slides.length?t&&di(n):qe(n)}))),bt().observer&&ci&&p(Cn)[0]&&ci.observe(p(Cn)[0],vi)}fn.O(Sn,(function(){var n,t,e;bt().observer&&"MutationObserver"in window&&p(Cn)[0]&&(n=p(Cn)[0],t=vi,(e=new MutationObserver(hi)).observe(n,t),ci=e),fn.O(Mn,hi)})),s.Dn=hi;var gi=function(){var n=!1;try{var t=Object.defineProperty({},"passive",{get:function(){n=!0}});G("testPassive",null,t),U("testPassive",null,t)}catch(n){}return function(){return n}}();function wi(){return!!gi()&&{passive:!1}}var mi,bi,Si,yi,Mi=(Si=(new Date).getTime(),yi=[],{Ln:function(n){var t=(n=n||o.event).wheelDelta||-n.deltaY||-n.detail,e=Math.max(-1,Math.min(1,t)),i=void 0!==n.wheelDeltaX||void 0!==n.deltaX;mi=Math.abs(n.wheelDeltaX)<Math.abs(n.wheelDelta)||Math.abs(n.deltaX)<Math.abs(n.deltaY)||!i;var r=(new Date).getTime();bi=e<0?"down":"up",yi.length>149&&yi.shift(),yi.push(Math.abs(t));var a=r-Si;Si=r,a>200&&(yi=[])},Pn:function(){var n=an(yi,10)>=an(yi,70);return!!yi.length&&n&&mi},Nn:function(){return bi}});function Ti(){var n=bt().css3?I()+w():rn(pn().L).item.offsetTop+rn(pn().L).item.offsetHeight,t=Ft(n);s.test.top=-n+"px",vn({canScroll:!1}),$t(t.element,t.options,bt().scrollingSpeed,(function(){setTimeout((function(){vn({H:!0}),vn({canScroll:!0})}),30)}))}function Ai(){mt().getBoundingClientRect().bottom>=0&&xi()}function xi(){var n=Ft(rn(pn().L).item.offsetTop);vn({canScroll:!1}),$t(n.element,n.options,bt().scrollingSpeed,(function(){vn({canScroll:!0}),vn({H:!1}),vn({Hn:!1})}))}var Oi,Ei,ki,Ri=(Oi=!1,Ei={},ki={},function(n,t,e){switch(n){case"set":Ei[t]=(new Date).getTime(),ki[t]=e;break;case"isNewKeyframe":var i=(new Date).getTime();Oi=i-Ei[t]>ki[t]}return Oi});function ji(){var n=pn().P.next();n||!bt().loopBottom&&!bt().continuousVertical||(n=pn().L[0]),null!=n?Ze(n,null,!1):mt().scrollHeight<Jt.scrollHeight&&fn.R(Rn)}function zi(){var n=pn().P.prev();n||!bt().loopTop&&!bt().continuousVertical||(n=rn(pn().L)),null!=n&&Ze(n,null,!0)}s.moveSectionDown=ji,s.moveSectionUp=zi;var Di=0;function Li(n){bt().autoScrolling&&(dn.canScroll&&(n.pageY<Di&&ge().m.up?zi():n.pageY>Di&&ge().m.down&&ji()),Di=n.pageY)}function Pi(n){if(ge().m[n]){var t="down"===n?ji:zi;At("scrollHorizontally")&&(t=xt("scrollHorizontally","getScrollSection",{type:n,scrollSection:t})),bt().scrollOverflow&&ti.wn(pn().P)?ti.Rn(n,pn().P.item)&&ti.jn()&&t():t()}}var Ni,Hi,Ci,Wi=0,Ii=0,Fi=0,Vi=0,Zi=Qi(),Bi={Cn:"ontouchmove"in window?"touchmove":Zi?Zi.move:null,Wn:"ontouchstart"in window?"touchstart":Zi?Zi.down:null};function Gi(n){var t=N(n.target,Un)||pn().P.item,e=ti.wn(pn().P);if(Yi(n)){vn({U:!0,X:!1}),bt().autoScrolling&&e&&!dn.canScroll&&V(n);var i=_i(n);Fi=i.y,Vi=i.x;var r=Math.abs(Wi-Fi)>o.innerHeight/100*bt().touchSensitivity,a=Math.abs(Ii-Vi)>m()/100*bt().touchSensitivity,l=p($n,t).length&&Math.abs(Ii-Vi)>Math.abs(Wi-Fi),u=Wi>Fi?"down":"up";vn({G:l?Ii>Vi?"right":"left":u}),l?!dn.W&&a&&(Ii>Vi?ge().m.right&&fn.R(mn,{section:t}):ge().m.left&&fn.R(wn,{section:t})):bt().autoScrolling&&dn.canScroll&&r&&Pi(u)}}function Yi(n){return void 0===n.pointerType||"mouse"!=n.pointerType}function Ui(n){if(bt().fitToSection&&vn({B:!1}),Yi(n)){var t=_i(n);Wi=t.y,Ii=t.x}G("touchend",Xi)}function Xi(){U("touchend",Xi),vn({U:!1})}function _i(n){var t={};return t.y=void 0!==n.pageY&&(n.pageY||n.pageX)?n.pageY:n.touches[0].pageY,t.x=void 0!==n.pageX&&(n.pageY||n.pageX)?n.pageX:n.touches[0].pageX,u&&Yi(n)&&bt().scrollBar&&void 0!==n.touches&&(t.y=n.touches[0].pageY,t.x=n.touches[0].pageX),t}function Qi(){var n;return o.PointerEvent&&(n={down:"pointerdown",move:"pointermove"}),n}function Ji(n){bt().autoScrolling&&Yi(n)&&ge().m.up&&(dn.canScroll||V(n))}function Ki(n,t){var e=null==t?pn().P.item:t,i=Pt(dn.L,e),o=p($n,e)[0];if(!(null==o||Ot()||dn.W||i.slides.length<2)){var r=i.activeSlide,a="left"===n?r.prev():r.next();if(!a){if(!bt().loopHorizontal)return;a="left"===n?rn(i.slides):i.slides[0]}vn({W:!s.test.pn}),Se(o,a.item,n)}}function qi(n){Ki("left",n)}function $i(n){Ki("right",n)}function no(n){var t=pn().L.filter((function(t){return t.anchor===n}))[0];if(!t){var e=void 0!==n?n-1:0;t=pn().L[e]}return t}function to(n){null!=n&&Se(N(n,$n),n)}function eo(n,t){var e=no(n);if(null!=e){var i=function(n,t){var e=t.slides.filter((function(t){return t.anchor===n}))[0];return null==e&&(n=void 0!==n?n:0,e=t.slides[n]),e?e.item:null}(t,e);e.anchor===dn.V||g(e.item,Zn)?to(i):Ze(e,(function(){to(i)}))}}function io(n,t){var e=no(n);void 0!==t?eo(n,t):null!=e&&Ze(e)}function oo(){clearTimeout(Hi),Y("keydown",ro),Y("keyup",ao)}function ro(n){clearTimeout(Hi);var t,e=n.keyCode,i=[37,39].indexOf(e)>-1,o=bt().autoScrolling||bt().fitToSection||i;9===e?function(n){var t=n.shiftKey,e=r.activeElement,i=fo(Wt(pn().P.item));function o(n){return V(n),i[0]?i[0].focus():null}if(!function(n){var t=fo(r),e=t.indexOf(r.activeElement),i=t[n.shiftKey?e-1:e+1],o=N(i,Jn),a=N(i,Un);return!o&&!a}(n)){e?null==N(e,".fp-section.active,.fp-section.active .fp-slide.active")&&(e=o(n)):o(n);var a=e==i[0],l=e==i[i.length-1],u=t&&a;if(u||!t&&l){V(n);var c=function(n){var t,e=n?"prevPanel":"nextPanel",i=[],o=It((dn.P&&dn.P.activeSlide?dn.P.activeSlide:dn.P)[e]());do{(i=fo(o.item)).length&&(t={In:o,Fn:i[n?i.length-1:0]}),o=It(o[e]())}while(o&&0===i.length);return t}(u),s=c?c.In:null;if(s){var f=s.on?s:s.parent;fn.R(An,{Vn:f.index()+1,slideAnchor:s.on?0:s.index()}),Ci=c.Fn,V(n)}}}}(n):Q(t=r.activeElement,"textarea")||Q(t,"input")||Q(t,"select")||"true"==Z(t,"contentEditable")||""==Z(t,"contentEditable")||!bt().keyboardScrolling||!o||(Ni=n.ctrlKey,Hi=setTimeout((function(){!function(n){var t=n.shiftKey,e=r.activeElement,i=Q(e,"video")||Q(e,"audio"),o=ti.Rn("up",pn().P.item),a=ti.Rn("down",pn().P.item),l=[37,39].indexOf(n.keyCode)>-1;if(function(n){(function(n){return[40,38,32,33,34].indexOf(n.keyCode)>-1&&!dn.H})(n)&&!N(n.target,ot)&&n.preventDefault()}(n),dn.canScroll||l)switch(vn({N:"keydown"}),n.keyCode){case 38:case 33:ge().k.up&&o&&(dn.H?fn.R(xn,{e:n}):zi());break;case 32:if(t&&ge().k.up&&!i&&o){zi();break}case 40:case 34:if(ge().k.down&&a){if(dn.H)return;32===n.keyCode&&i||ji()}break;case 36:ge().k.up&&io(1);break;case 35:ge().k.down&&io(pn().L.length);break;case 37:ge().k.left&&qi();break;case 39:ge().k.right&&$i()}}(n)}),0))}function ao(n){dn._&&(Ni=n.ctrlKey)}function lo(){vn({_:!1}),Ni=!1}function uo(n){so()}function co(n){N(Ci,Jn)&&!N(Ci,Kn)||so()}function so(){Ci&&(Ci.focus(),Ci=null)}function fo(n){return[].slice.call(p('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',n)).filter((function(n){return"-1"!==Z(n,"tabindex")&&null!==n.offsetParent}))}s.moveSlideLeft=qi,s.moveSlideRight=$i,s.moveTo=io,fn.O(Sn,(function(){G("blur",lo),B("keydown",ro),B("keyup",ao),fn.O(yn,oo),fn.O(Dn,uo),fn.O(zn,co)}));var vo=(new Date).getTime(),po=[];function ho(n){n?(function(){var n,t="";o.addEventListener?n="addEventListener":(n="attachEvent",t="on");var e="onwheel"in r.createElement("div")?"wheel":void 0!==r.onmousewheel?"mousewheel":"DOMMouseScroll",i=wi();"DOMMouseScroll"==e?r[n](t+"MozMousePixelScroll",go,i):r[n](t+e,go,i)}(),mt().addEventListener("mousedown",wo),mt().addEventListener("mouseup",mo)):(r.addEventListener?(Y("mousewheel",go,!1),Y("wheel",go,!1),Y("MozMousePixelScroll",go,!1)):r.detachEvent("onmousewheel",go),mt().removeEventListener("mousedown",wo),mt().removeEventListener("mouseup",mo))}function go(n){var t=(new Date).getTime(),e=g(p(".fp-completely")[0],"fp-normal-scroll"),i=function(n,t){(new Date).getTime();var e=pn().H&&n.getBoundingClientRect().bottom>=0&&"up"===Mi.Nn(),i=pn().Hn;if(i)return V(t),!1;if(pn().H){if(e){var o;if(!(i||Ri("isNewKeyframe","beyondFullpage")&&Mi.Pn()))return(o=Ft(rn(pn().L).item.offsetTop+rn(pn().L).item.offsetHeight)).element.scrollTo(0,o.options),vn({Hn:!1}),V(t),!1;if(Mi.Pn())return e=!1,vn({Hn:!0}),vn({N:"wheel"}),xi(),V(t),!1}else Ri("set","beyondFullpage",1e3);if(!i&&!e)return!0}}(mt(),n);if(dn.X||vn({U:!1,X:!0,G:"none"}),!ge().m.down&&!ge().m.up)return V(n),!1;if(i)return!0;if(!1===i)return V(n),!1;if(bt().autoScrolling&&!Ni&&!e){var r=(n=n||o.event).wheelDelta||-n.deltaY||-n.detail,a=Math.max(-1,Math.min(1,r)),l=void 0!==n.wheelDeltaX||void 0!==n.deltaX,u=Math.abs(n.wheelDeltaX)<Math.abs(n.wheelDelta)||Math.abs(n.deltaX)<Math.abs(n.deltaY)||!l,c=a<0?"down":a>0?"up":"none";po.length>149&&po.shift(),po.push(Math.abs(r)),bt().scrollBar&&V(n);var s=t-vo;return vo=t,s>200&&(po=[]),vn({Y:c}),dn.canScroll&&!Ot()&&an(po,10)>=an(po,70)&&u&&(vn({N:"wheel"}),Pi(a<0?"down":"up")),!1}bt().fitToSection&&vn({B:!1})}function wo(n){var t;2==n.which&&(t=n.pageY,Di=t,mt().addEventListener("mousemove",Li))}function mo(n){2==n.which&&mt().removeEventListener("mousemove",Li)}function bo(n){n?(ho(!0),function(){if(Bi.Cn&&(a||u)&&(!At("dragAndMove")||"mouseonly"===bt().dragAndMove)){bt().autoScrolling&&(Jt.removeEventListener(Bi.Cn,Ji,{passive:!1}),Jt.addEventListener(Bi.Cn,Ji,{passive:!1}));var n=bt().touchWrapper;n.removeEventListener(Bi.Wn,Ui),n.removeEventListener(Bi.Cn,Gi,{passive:!1}),n.addEventListener(Bi.Wn,Ui),n.addEventListener(Bi.Cn,Gi,{passive:!1})}}()):(ho(!1),function(){if(Bi.Cn&&(a||u)){bt().autoScrolling&&(Jt.removeEventListener(Bi.Cn,Gi,{passive:!1}),Jt.removeEventListener(Bi.Cn,Ji,{passive:!1}));var n=bt().touchWrapper;n.removeEventListener(Bi.Wn,Ui),n.removeEventListener(Bi.Cn,Gi,{passive:!1})}}())}s.setMouseWheelScrolling=ho;var So=!0;function yo(){["mouseenter","touchstart","mouseleave","touchend"].forEach((function(n){Y(n,To,!0)}))}function Mo(n,t){document["fp_"+n]=t,B(n,To,!0)}function To(n){var t=n.type,e=!1,i="mouseleave"===t?n.toElement||n.relatedTarget:n.target;i!=document&&i?("touchend"===t&&(So=!1,setTimeout((function(){So=!0}),800)),("mouseenter"!==t||So)&&(bt().normalScrollElements.split(",").forEach((function(n){if(!e){var t=Q(i,n),o=N(i,n);(t||o)&&(s.shared.Zn||bo(!1),s.shared.Zn=!0,e=!0)}})),!e&&s.shared.Zn&&(bo(!0),s.shared.Zn=!1))):bo(!0)}function Ao(n,t){_t(0,"internal"),io(n,t),_t(St().scrollingSpeed,"internal")}fn.O(Sn,(function(){bt().normalScrollElements&&(["mouseenter","touchstart"].forEach((function(n){Mo(n,!1)})),["mouseleave","touchend"].forEach((function(n){Mo(n,!0)}))),fn.O(yn,yo)})),s.silentMoveTo=Ao;var xo,Oo,Eo=w(),ko=m(),Ro=!1;function jo(){clearTimeout(xo),clearTimeout(Oo),U("resize",zo)}function zo(){Ro||(bt().autoScrolling&&!bt().scrollBar||!bt().fitToSection)&&Lo(w()),function(){if(a)for(var n=0;n<4;n++)Oo=setTimeout((function(){window.requestAnimationFrame((function(){bt().autoScrolling&&!bt().scrollBar&&(vn({I:!0}),Ao(dn.P.index()+1),vn({I:!1}))}))}),200*n)}(),Ro=!0,clearTimeout(xo),xo=setTimeout((function(){!function(){if(vn({I:!0}),Lo(""),_(mt(),"onResize"),bt().autoScrolling||dn.H||function(){if(!bt().autoScrolling||bt().scrollBar){var n=.01*o.innerHeight;r.documentElement.style.setProperty("--vh","".concat(n,"px"))}}(),fn.R(Mn),oi(),Xe(),a){var n=r.activeElement;if(!Q(n,"textarea")&&!Q(n,"input")&&!Q(n,"select")){var t=w();Math.abs(t-Eo)>20*Math.max(Eo,t)/100&&(Do(!0),Eo=t)}}else e=w(),i=m(),dn.K===e&&ko===i||(vn({K:e}),ko=i,Do(!0));var e,i;_(mt(),"onResizeEnds"),vn({I:!1})}(),Ro=!1}),400)}function Do(n){if(!g(mt(),Fn)){vn({I:!0,K:w(),Bn:m()});for(var t=pn().L,e=0;e<t.length;++e){var i=t[e],r=p($n,i.item)[0],a=i.slides;At("offsetSections")&&b(i.item,{height:kt(i.item)+"px"}),a.length>1&&Se(r,i.activeSlide.item)}bt().scrollOverflow&&ti.bn();var l=pn().P.index();dn.H||!l||At("fadingEffect")||At("dropEffect")||At("waterEffect")||Ao(l+1),vn({I:!1}),X(bt().afterResize)&&n&&bt().afterResize.call(mt(),o.innerWidth,o.innerHeight),X(bt().afterReBuild)&&!n&&bt().afterReBuild.call(mt()),_(mt(),"afterRebuild")}}function Lo(n){pn().L.forEach((function(t){var e=""===n?"":kt(t.item)+"px";b(t.item,{height:e})}))}function Po(){var n,t,e=o.location.hash;if(e.length){var i=e.replace("#","").split("/"),r=e.indexOf("#/")>-1;n=r?"/"+i[1]:decodeURIComponent(i[0]);var a=r?i[2]:i[1];a&&a.length&&(t=decodeURIComponent(a))}return{section:n,cn:t}}function No(){U("hashchange",Ho)}function Ho(){if(!dn.F&&!bt().lockAnchors){var n=Po(),t=n.section,e=n.cn,i=void 0===dn.V,o=void 0===dn.V&&void 0===e&&!dn.W;t&&t.length&&(t&&t!==dn.V&&!i||o&&!Ot()||!dn.W&&dn.Z!=e&&!Ot())&&fn.R(An,{Vn:t,slideAnchor:e})}}function Co(n){var t=n.target;N(t,bt().menu+" [data-menuanchor]")&&Wo.call(t,n)}function Wo(n){vn({N:"menu"}),!p(bt().menu)[0]||!bt().lockAnchors&&bt().anchors.length||(V(n),fn.R(On,{anchor:Z(this,"data-menuanchor")}))}function Io(n){var t=n.target;t&&N(t,"#fp-nav a")?De.call(t,n.e):Q(t,".fp-tooltip")?je.call(t):(Q(t,lt)||null!=N(t,lt))&&de.call(t,n.e)}s.reBuild=Do,fn.O(Sn,(function(){zo(),G("resize",zo),fn.O(yn,jo)})),s.setLockAnchors=function(n){bt().lockAnchors=n},fn.O(Sn,(function(){G("hashchange",Ho),fn.O(yn,No)})),fn.O(Sn,(function(){B("wheel",Mi.Ln,wi()),fn.O(Rn,Ti),fn.O(xn,Ai)})),fn.O(Sn,(function(){fn.O(gn,Co)})),fn.O(Sn,(function(){fn.O(gn,Io)}));var Fo,Vo,Zo=0;function Bo(n){var t,e,i,o,r;if(_(mt(),"onScroll"),!dn.I&&pn().P&&(rn(pn().L),!pn().H&&!pn().Hn&&(!bt().autoScrolling||bt().scrollBar||At("dragAndMove"))&&!Et())){var a=At("dragAndMove")?Math.abs(xt("dragAndMove","getCurrentScroll")):I(),l=function(n){var t=n>Zo?"down":"up";return Zo=n,vn({J:n}),t}(a),u=0,c=a+w()/2,s=(At("dragAndMove")?xt("dragAndMove","getDocumentHeight"):Jt.scrollHeight-w())===a,f=pn().L;if(vn({scrollY:a}),s)u=f.length-1;else if(a)for(var d=0;d<f.length;++d)(N(f[d].item,Un)||f[d].item).offsetTop<=c&&(u=d);else u=0;if(i=l,o=pn().P.item.offsetTop,r=o+w(),("up"==i?r>=I()+w():o<=I())&&(g(pn().P.item,Gn)||(k(pn().P.item,Gn),R(F(pn().P.item),Gn))),e=(t=f[u]).item,!t.isActive){vn({F:!0});var v,p,h=pn().P.item,m=pn().P.index()+1,b=Bt(pn().P,e),S=t.anchor,y=t.index()+1,M=t.activeSlide,T={P:h,sectionIndex:y-1,anchorLink:S,element:e,leavingSection:m,direction:b,items:{origin:pn().P,destination:t}};if(M&&(p=M.anchor,v=M.index()),dn.canScroll)R(f.filter((function(n){return n.index()!==t.index()})).map((function(n){return n.item})),Zn),k(e,Zn),xt("parallax","afterLoad"),X(bt().beforeLeave)&&Ve("beforeLeave",T),X(bt().onLeave)&&ee("onLeave",T),X(bt().afterLoad)&&ee("afterLoad",T),xt("resetSliders","apply",{localIsResizing:dn.I,leavingSection:m}),re(h),ae(e),ie(e),Le(S,y-1),bt().anchors.length&&vn({V:S}),ce(v,p,S),oi();clearTimeout(Fo),Fo=setTimeout((function(){vn({F:!1})}),100)}bt().fitToSection&&dn.canScroll&&(clearTimeout(Vo),Vo=setTimeout((function(){dn.L.filter((function(n){var t=n.item.getBoundingClientRect();return Math.round(t.bottom)===Math.round(w())||0===Math.round(t.top)})).length||Ue()}),bt().tn))}}function Go(n,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach((function(t){he(n,t,"k")})):(he(n,"all","k"),bt().keyboardScrolling=n)}function Yo(n){var t=n.index();void 0!==bt().anchors[t]&&n.isActive&&Le(bt().anchors[t],t),bt().menu&&bt().css3&&null!=N(p(bt().menu)[0],Cn)&&p(bt().menu).forEach((function(n){Jt.appendChild(n)}))}function Uo(){var n,t,e=pn().P,i=pn().P.item;k(i,Gn),ae(i),Re(),ie(i),t=no((n=Po()).section),n.section&&t&&(void 0===t||t.index()!==T(Ke))||!X(bt().afterLoad)||ee("afterLoad",{P:i,element:i,direction:null,anchorLink:e.anchor,sectionIndex:e.index(),items:{origin:pn().P,destination:pn().P}}),X(bt().afterRender)&&ee("afterRender"),_(mt(),"afterRender")}function Xo(n,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach((function(t){he(n,t,"m")})):he(n,"all","m"),_(mt(),"setAllowScrolling",{value:n,Gn:t})}function _o(){var n=Po(),t=n.section,e=n.cn;t?bt().animateAnchor?eo(t,e):Ao(t,e):fn.R(hn,null)}fn.O(yn,(function(){clearTimeout(Fo),clearTimeout(Vo)})),fn.O(Sn,(function(){G("scroll",Bo),r.body.addEventListener("scroll",Bo),fn.O(An,(function(n){eo(n.Vn,n.slideAnchor)})),fn.O(On,(function(n){io(n.anchor,void 0)})),fn.O(Tn,(function(n){("down"===n.direction?ji:zi)()})),fn.O(En,(function(n){Ze(n.destination)}))})),fn.O(yn,(function(){U("scroll",Bo)})),s.getActiveSlide=function(){return te(pn().P.activeSlide)},s.getScrollX=function(){return dn.scrollX},fn.O(Sn,(function(){fn.O(yn,Te),fn.O(kn,(function(n){Se(n.slides,n.destination)})),fn.O(mn,(function(n){$i(n.section)})),fn.O(wn,(function(n){qi(n.section)}))})),fn.O(Sn,(function(){var n=bt().credits.position,t=["left","right"].indexOf(n)>-1?"".concat(n,": 0;"):"",e='\n        <div class="fp-watermark" style="'.concat(t,'">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(bt().credits.label,"\n            </a>\n        </div>\n    "),i=rn(dn.L),o=!dn.Yn||bt().credits.enabled;i&&i.item&&o&&i.item.insertAdjacentHTML("beforeend",e)})),function(){fn.O(bn,(function(){var t,l,u;vn({Yn:(bt().licenseKey,t=bt().licenseKey,l=function(t){var e=parseInt("514").toString(16);if(!t||t.length<29||4===t.split(n[0]).length)return null;var i=["Each","for"][o()]().join(""),l=t[["split"]]("-"),u=[];l[i]((function(n,t){if(t<4){var i=function(n){var t=n[n.length-1],e=["NaN","is"][o()]().join("");return window[e](t)?r(t):function(n){return n-Zn.length}(t)}(n);u.push(i);var a=r(n[i]);if(1===t){var l=["pa","dS","t","art"].join("");a=a.toString()[l](2,"0")}e+=a,0!==t&&1!==t||(e+="-")}}));var c=0,s="";return t.split("-").forEach((function(n,t){if(t<4){for(var e=0,i=0;i<4;i++)i!==u[t]&&(e+=Math.abs(r(n[i])),isNaN(n[i])||c++);var o=a(e);s+=o}})),s+=a(c),{Un:new Date(e+"T00:00"),Xn:e.split("-")[2]===8*(Zn.length-2)+"",_n:s}}(t),u=function(n){var t=i[o()]().join("");return n&&0===t.indexOf(n)&&n.length===t.length}(t),(l||u)&&(bt().credits&&l&&e<=l.Un&&l._n===t.split(n[0])[4]||u||l.Xn)||!1)})}));var n=["-"],t="2022-9-25".split("-"),e=new Date(t[0],t[1],t[2]),i=["se","licen","-","v3","l","gp"];function o(){return[["re","verse"].join("")]["".length]}function r(n){return n?isNaN(n)?n.charCodeAt(0)-72:n:""}function a(n){var t=72+n;return t>90&&t<97&&(t+=15),String.fromCharCode(t).toUpperCase()}}(),s.setKeyboardScrolling=Go,s.shared.Qn=Uo,s.setAllowScrolling=Xo;var Qo={};function Jo(){return Qo}var Ko,qo,$o,nr,tr=!g(Jt,jt("OHNsd3AtZnVsbHBhZ2UtanM5T20="));function er(n){if(qo=r.createElement("div"),Ko=jt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),tr||(Ko=Ko.replace("extensions/","").replace("Extension","")),qo.innerHTML=Ko,qo=qo.firstChild,"MutationObserver"in window&&new MutationObserver(or).observe(r.body,{childList:!0,subtree:!1}),(!tr||At(n)&&s[n])&&(!function(n){var t=void 0!==Jo()[n]&&Jo()[n].length,e=[],i=!1;return E(Jo()[n])?e=Jo()[n]:e.push(Jo()[n]),e.forEach((function(e){var o=function(){if(r.domain.length){for(var n=r.domain.replace(/^(www\.)/,"").split(".");n.length>2;)n.shift();return n.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),a=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN","NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],l=jt(a[0]),u=jt(a[1]),c=jt(a[2]),s=jt(a[3]),f=jt(a[4]),d=jt(a[5]),v=void 0!==bt()[f+d];t=t||v;var p=[l,u,c].indexOf(o)<0&&0!==o.length;if(!t&&!v&&p)return!1;var h=t?jt(e):"";h=h.split("_"),console.log("---pepe------"),console.log(h);var g=h.length>1&&h[1].indexOf(n,h[1].length-n.length)>-1,w=h.length>1&&h[1].toLowerCase().indexOf(f)>-1,m=h[0].indexOf(o,h[0].length-o.length)<0,b=g||w;i=i||!(m&&p&&s!=h[0])&&b||!p})),i}(n)||!tr)){ir();var t=jt("MzQ1c2V0SW50ZXJ2YWwxMjM=");window[t](ir,2e3)}}function ir(){qo&&(nr||(Math.random()<.5?Rt(Jt,qo):j(qo,Jt),nr=!0),qo.setAttribute("style",jt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,jt("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function or(n){n.forEach((function(n){if(n.removedNodes[0]&&n.removedNodes[0].isEqualNode(qo)){clearTimeout($o);var t=jt("bDIwc2V0VGltZW91dDAzbA==");$o=window[t](rr,900)}}))}function rr(){nr=!1}function ar(){ri(),oi(),bt().scrollBar=bt().scrollBar||bt().hybrid,Mt(),function(){b(un(mt(),"body"),{height:"100%",position:"relative"}),k(mt(),Hn),k(Kt,Vn),vn({K:w()}),R(mt(),Fn),fi(),xt("parallax","init");for(var n=pn().rn,t=0;t<n.length;t++){var e=n[t],i=e.mn;e.item.setAttribute("data-fp-styles",Z(e.item,"style")),qe(e),Yo(e),i.length>0&&di(e)}bt().fixedElements&&bt().css3&&p(bt().fixedElements).forEach((function(n){Jt.appendChild(n)})),bt().navigation&&ze(),p('iframe[src*="youtube.com/embed/"]',mt()).forEach((function(n){var t,e;e=Z(t=n,"src"),t.setAttribute("src",e+(/\?/.test(e)?"&":"?")+"enablejsapi=1")})),xt("fadingEffect","apply"),xt("waterEffect","init"),xt("dropEffect","init"),xt("cards","init"),bt().scrollOverflow&&ti.bn()}(),Xo(!0),bo(!0),Ee(bt().autoScrolling,"internal"),Xe(),le(),"complete"===r.readyState&&_o(),G("load",_o),Uo(),tr||er("l"),ri(),oi()}function lr(){var n=bt().licenseKey,t="font-size: 15px;background:yellow;";""===bt().licenseKey.trim()?(f("error","Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"),f("error","https://github.com/alvarotrigo/fullPage.js#options")):bt()&&dn.Yn||r.domain.indexOf("alvarotrigo.com")>-1?n&&n.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(f("error","Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"),f("error","https://alvarotrigo.com/fullPage/pricing")),g(Kt,Vn)?f("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(bt().continuousVertical&&(bt().loopTop||bt().loopBottom)&&(bt().continuousVertical=!1,f("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!bt().scrollOverflow||!bt().scrollBar&&bt().autoScrolling||f("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!bt().continuousVertical||!bt().scrollBar&&bt().autoScrolling||(bt().continuousVertical=!1,f("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),bt().anchors.forEach((function(n){var t=[].slice.call(p("[name]")).filter((function(t){return Z(t,"name")&&Z(t,"name").toLowerCase()==n.toLowerCase()})),e=[].slice.call(p("[id]")).filter((function(t){return Z(t,"id")&&Z(t,"id").toLowerCase()==n.toLowerCase()}));if(e.length||t.length){f("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var i=e.length?"id":"name";(e.length||t.length)&&f("error",'"'+n+'" is is being used by another element `'+i+"` property")}})))}function ur(){return{options:bt(),internals:{container:mt(),canScroll:dn.canScroll,isScrollAllowed:ge(),getDestinationPosition:Be,isTouch:u,c:er,getXmovement:Me,removeAnimation:Gt,getTransforms:Yt,lazyLoad:ae,addAnimation:Zt,performHorizontalMove:ye,landscapeScroll:Se,silentLandscapeScroll:xe,keepSlidesPosition:ke,silentScroll:Xt,styleSlides:di,styleSection:qe,scrollHandler:Bo,getEventsPage:_i,getMSPointer:Qi,isReallyTouch:Yi,usingExtension:At,toggleControlArrows:me,touchStartHandler:Ui,touchMoveHandler:Gi,nullOrSection:ne,items:{SectionPanel:ui,SlidePanel:si,Item:Dt},getVisible:v,getState:pn,updateState:oi,updateStructuralState:ri,getPanels:function(){return dn.ln},getSections:function(){return dn.L},setActiveSection:function(n){dn.P=n}}}}function cr(n){var t=["NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],e=jt(t[0]),i=jt(t[1]),o=void 0!==bt()[e+i],r="fp_"+n+"Extension";Jo()[n]=o?bt()[e+i]:bt()[n+i],s[n]=void 0!==window[r]?new window[r]:null,s[n]&&s[n].c(n)}function sr(n,t){var e;if(Jt=p("body")[0],Kt=p("html")[0],qt=p("html, body"),!g(Kt,Vn))return"touchWrapper",e="string"==typeof n?p(n)[0]:n,vt.touchWrapper=e,function(n){wt=h({},vt,n),gt=Object.assign({},wt)}(t),function(n){pt=n}("string"==typeof n?p(n)[0]:n),fn.R(bn),lr(),s.getFullpageData=ur,s.version="4.0.12",s.test=Object.assign(s.test,{top:"0px",un:"translate3d(0px, 0px, 0px)",sn:function(){for(var n=[],t=0;t<p(bt().sectionSelector,mt()).length;t++)n.push("translate3d(0px, 0px, 0px)");return n}(),left:function(){for(var n=[],t=0;t<p(bt().sectionSelector,mt()).length;t++)n.push(0);return n}(),options:bt(),setAutoScrolling:null}),s.shared=Object.assign(s.shared,{Qn:null,Zn:!1}),o.fullpage_api=s,o.fullpage_extensions=!0,mt()&&(fn.R("beforeInit"),cr("continuousHorizontal"),cr("scrollHorizontally"),cr("resetSliders"),cr("interlockedSlides"),cr("responsiveSlides"),cr("fadingEffect"),cr("dragAndMove"),cr("offsetSections"),cr("scrollOverflowReset"),cr("parallax"),cr("cards"),cr("dropEffect"),cr("waterEffect"),xt("dragAndMove","init"),xt("responsiveSlides","init"),ar(),fn.R(Sn),xt("dragAndMove","turnOffTouch")),o.fullpage_api;lr()}return s.destroy=function(n){_(mt(),"destroy",n),Ee(!1,"internal"),Xo(!0),bo(!1),Go(!1),k(mt(),Fn),fn.R(yn),xt("dragAndMove","destroy"),n&&(Xt(0),p("img[data-src], source[data-src], audio[data-src], iframe[data-src]",mt()).forEach((function(n){ln(n,"src")})),p("img[data-srcset]").forEach((function(n){ln(n,"srcset")})),q(p("#fp-nav, .fp-slidesNav, .fp-controlArrow")),b(Lt(pn().L),{height:"","background-color":"",padding:""}),b(Lt(pn().slides),{width:""}),b(mt(),{height:"",position:"","-ms-touch-action":"","touch-action":""}),b(qt,{overflow:"",height:""}),R(Kt,Vn),R(Jt,Wn),Jt.className.split(/\s+/).forEach((function(n){0===n.indexOf("fp-viewing")&&R(Jt,n)})),Lt(pn().ln).forEach((function(n){bt().scrollOverflow&&ti.kn(n),R(n,"fp-table active "+Gn),Z(n,"data-fp-styles")&&n.setAttribute("style",Z(n,"data-fp-styles")),g(n,Yn)&&!ht&&n.removeAttribute("data-anchor")})),Gt(mt()),[Xn,tt,$n].forEach((function(n){p(n,mt()).forEach((function(n){P(n)}))})),b(mt(),{"-webkit-transition":"none",transition:"none"}),o.scrollTo(0,0),[Yn,Qn,nt].forEach((function(n){R(p("."+n),n)})))},o.fp_easings=h(o.fp_easings,{easeInOutCubic:function(n,t,e,i){return(n/=i/2)<1?e/2*n*n*n+t:e/2*((n-=2)*n*n+2)+t}}),o.jQuery&&function(n,t){n&&t?n.fn.fullpage=function(e){e=n.extend({},e,{$:n}),new t(this[0],e),Object.keys(s).forEach((function(n){bt().$.fn.fullpage[n]=s[n]}))}:f("error","jQuery is required to use the jQuery fullpage adapter!")}(o.jQuery,sr),sr}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(6),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  "1925baca"
)
Component.options.__file = "/Users/iupreso/Projects/IU_INT2109/dev/vue-fullpage.js/src/FullPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FullPage.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fullpageExtensions = __webpack_require__(0);

var _fullpageExtensions2 = _interopRequireDefault(_fullpageExtensions);

var _constants = __webpack_require__(3);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//

function camelToKebab(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

exports.default = {
  methods: {
    build: function build() {
      var slideSelector = this.options.slideSelector || '.slide';
      var sectionSelector = this.options.sectionSelector || '.section';
      var activeSectionIndex = fp_utils.index(document.querySelector(sectionSelector + '.active'));
      var activeSlide = document.querySelector(sectionSelector + '.active ' + slideSelector + '.active');
      var activeSlideIndex = activeSlide ? fp_utils.index(activeSlide) : -1;

      this.destroy();

      if (activeSectionIndex > -1) {
        fp_utils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], 'active');
      }

      if (activeSlideIndex > -1) {
        fp_utils.addClass(activeSlide, 'active');
      }

      this.init();
    },
    destroy: function destroy() {
      if (typeof fullpage_api !== 'undefined' && typeof fullpage_api.destroy !== 'undefined') {
        fullpage_api.destroy('all');
      }
    },
    emitEvent: function emitEvent(name, args) {
      // Emit event on Vue way
      this.$emit.apply(this, [camelToKebab(name)].concat(_toConsumableArray(args)));

      // Run event's handler with non Vue way
      if (this.options.hasOwnProperty(name)) {
        this.options[name].apply(this, args);
      }
    },
    init: function init() {
      // eslint-disable-next-line
      this.api = new _fullpageExtensions2.default(this.$refs.fullpage, this.options);
    }
  },
  mounted: function mounted() {
    !this.skipInit && this.init();
  },
  beforeDestroy: function beforeDestroy() {
    if (typeof this.api !== 'undefined') {
      this.destroy();
    }
  },
  data: function data() {
    var _this = this;

    return {
      events: constants.EVENTS.reduce(function (eventsHandlers, event) {
        return _extends({}, eventsHandlers, _defineProperty({}, event, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.emitEvent(event, args);
        }));
      }, {}),
      api: undefined
    };
  },

  props: {
    options: {
      type: Object,
      required: true
    },
    skipInit: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    options: {
      deep: true,
      handler: function handler() {
        this.build();
      }
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENTS = exports.EVENTS = ['afterLoad', 'onLeave', 'afterRender', 'afterResize', 'afterResponsive', 'afterSlideLoad', 'onSlideLeave'];

var METHODS = exports.METHODS = ['moveSectionUp', 'moveSectionDown', 'moveTo', 'silentMoveTo', 'moveSlideRight', 'moveSlideLeft', 'setAutoScrolling', 'setFitToSection', 'fitToSection', 'setLockAnchors', 'setAllowScrolling', 'setKeyboardScrolling', 'setRecordHistory', 'setScrollingSpeed', 'destroy', 'reBuild', 'setResponsive', 'responsiveSlidesToSections', 'responsiveSlidesToSlides'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.FullPage = undefined;

var _FullPage = __webpack_require__(1);

var _FullPage2 = _interopRequireDefault(_FullPage);

var _fullpageExtensions = __webpack_require__(0);

var _fullpageExtensions2 = _interopRequireDefault(_fullpageExtensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function plugin(Vue) {
  Vue.component('full-page', _FullPage2.default);
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
if (!window.fullpage_api) {
  window.fullpage = _fullpageExtensions2.default;
}

exports.default = plugin;

var version = '__VERSION__';
// Export all components too
exports.FullPage = _FullPage2.default;
exports.version = version;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "fullpage"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);