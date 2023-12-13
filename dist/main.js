(()=>{"use strict";var e={402:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(537),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,'* {\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n  color: white;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: bisque;\n}\n\n#main-content {\n  height: 100vh;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n#main-content .game-space {\n  height: 600px;\n  width: 600px;\n  border: 1px solid black;\n  border-radius: 1em;\n\n  display: grid;\n  grid-template: auto / 2fr 1fr;\n  align-items: center;\n  background-color: azure;\n}\n\n#main-content .game-space .board-list {\n  padding: 1em;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2em;\n}\n\n.game-board {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  padding: 0.5em;\n  border: 1px solid black;\n}\n.game-board .board-cell {\n  display: inline-block;\n  border: 1px solid black;\n}\n\n#main-content .game-information {\n  height: 100%;\n  border-radius: 0 1em 1em 0;\n  border: 1px solid black;\n  background-color: black;\n}\n\n@media screen and (min-width: 700px) {\n  #main-content .game-space {\n    width: 800px;\n  }\n}\n',"",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAAA;EACE,4DAA4D;EAC5D,YAAY;AACd;;AAEA;;EAEE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;;EAElB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,2DAA2D;EAC3D,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,cAAc;EACd,uBAAuB;AACzB;AACA;EACE,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE;IACE,YAAY;EACd;AACF",sourcesContent:['* {\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n  color: white;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: bisque;\n}\n\n#main-content {\n  height: 100vh;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n#main-content .game-space {\n  height: 600px;\n  width: 600px;\n  border: 1px solid black;\n  border-radius: 1em;\n\n  display: grid;\n  grid-template: auto / 2fr 1fr;\n  align-items: center;\n  background-color: azure;\n}\n\n#main-content .game-space .board-list {\n  padding: 1em;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2em;\n}\n\n.game-board {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  padding: 0.5em;\n  border: 1px solid black;\n}\n.game-board .board-cell {\n  display: inline-block;\n  border: 1px solid black;\n}\n\n#main-content .game-information {\n  height: 100%;\n  border-radius: 0 1em 1em 0;\n  border: 1px solid black;\n  background-color: black;\n}\n\n@media screen and (min-width: 700px) {\n  #main-content .game-space {\n    width: 800px;\n  }\n}\n'],sourceRoot:""}]);const u=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var l=this[u][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],u=0;u<e.length;u++){var l=e[u],c=r.base?l[0]+r.base:l[0],s=o[c]||0,f="".concat(c," ").concat(s);o[c]=s+1;var d=n(f),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var m=a(p,r);r.byIndex=u,t.splice(u,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var u=n(o[i]);t[u].references--}for(var l=r(e,a),c=0;c<o.length;c++){var s=n(o[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),l=n.n(u),c=n(216),s=n.n(c),f=n(589),d=n.n(f),p=n(402),m={};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function y(e){throw new TypeError('"'+e+'" is read-only')}function v(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,C(r.key),r)}}function A(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===h(t)?t:String(t)}function S(e,t,n){x(e,t),t.set(e,n)}function x(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function k(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function M(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,B(e,t,"get"))}function B(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}m.styleTagTransform=d(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=s(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var j=new WeakMap,T=new WeakMap,P=new WeakMap,I=new WeakMap,O=new WeakMap,W=new WeakSet,z=new WeakMap,q=new WeakMap,N=new WeakMap,V=A((function e(t){var n,r,a,o,i=this;w(this,e),x(this,n=W),n.add(this),S(this,j,{writable:!0,value:[]}),S(this,T,{writable:!0,value:[]}),S(this,P,{writable:!0,value:function(e){var t,n=v(M(i,T));try{for(n.s();!(t=n.n()).done;)if(t.value.shipId===e)return!1}catch(e){n.e(e)}finally{n.f()}return!0}}),S(this,I,{writable:!0,value:function(){for(var e=Math.round(999*Math.random());!M(i,P).call(i,e);)Math.round(999*Math.random()),y("id");return e}}),S(this,O,{writable:!0,value:function(e){for(var t=[],n=0;n<e;n++){for(var r=[],a=0;a<e;a++)r.push(0);t.push(r)}return t}}),S(this,z,{writable:!0,value:function(e,t){M(i,T).push(new Y(e,t))}}),S(this,q,{writable:!0,value:function(e,t){for(var n=M(i,I).call(i),r=t.x;r<=t.x+(e.length-1);r++)if(!i.isValidMove({x:r,y:t.y},!0))return!1;for(var a=t.x;a<=t.x+(e.length-1);a++)k(i,W,U).call(i,n,a,t.y);return M(i,z).call(i,e,n),!0}}),S(this,N,{writable:!0,value:function(e,t){for(var n=M(i,I).call(i),r=t.y;r<=t.y+(e.length-1);r++)if(!i.isValidMove({x:t.x,y:r},!0))return!1;for(var a=t.y;a<=t.y+(e.length-1);a++)k(i,W,U).call(i,n,t.x,a);return M(i,z).call(i,e,n),!0}}),E(this,"getBoard",(function(){return M(i,j).slice()})),E(this,"getShips",(function(){return M(i,T).slice()})),E(this,"getDataAt",(function(e){return i.isValidMove(e)?M(i,j)[e.y][e.x]:null})),E(this,"getString",(function(){for(var e="",t=0;t<i.size;t++){for(var n="",r=0;r<i.size;r++)n+=M(i,j)[t][r]+" ";e+="".concat(n,"\n")}return e})),E(this,"printBoard",(function(){console.log(i.getString())})),E(this,"isValidMove",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!(e.x<0||e.x>i.size-1||e.y<0||e.y>i.size-1||M(i,j)[e.y][e.x]<=-1||t&&M(i,j)[e.y][e.x]>=1)})),E(this,"placeShip",(function(e,t,n){return n?M(i,N).call(i,e,t):M(i,q).call(i,e,t)})),E(this,"hasAllShipSunk",(function(){var e,t=v(M(i,T));try{for(t.s();!(e=t.n()).done;)if(!1===e.value.ship.isSunk())return!1}catch(e){t.e(e)}finally{t.f()}return!0})),E(this,"receiveAttack",(function(e){if(!i.isValidMove(e))return!1;if(0!=M(i,j)[e.y][e.x]){var t,n=v(M(i,T));try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.shipId===M(i,j)[e.y][e.x])return r.ship.hit(),k(i,W,U).call(i,-2,e.x,e.y),r.ship}}catch(e){n.e(e)}finally{n.f()}}return k(i,W,U).call(i,-1,e.x,e.y),!0})),this.size=t,r=this,a=j,o=M(this,O).call(this,t),function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(r,B(r,a,"set"),o)}));function U(e,t,n){M(this,j)[n][t]=e}var Y=A((function e(t,n){w(this,e),this.ship=t,this.shipId=n}));function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,L(r.key),r)}}function R(e,t,n){return t&&G(e.prototype,t),n&&G(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Z(e,t,n){return(t=L(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){var t=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===D(t)?t:String(t)}function F(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function H(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,J(e,t,"get"))}function $(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,J(e,t,"set"),n),n}function J(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var Q=new WeakMap,_=new WeakMap,X=R((function e(t){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),F(this,Q,{writable:!0,value:void 0}),F(this,_,{writable:!0,value:void 0}),Z(this,"getHitCount",(function(){return H(n,Q)})),Z(this,"hit",(function(){$(n,Q,H(n,Q)+1)})),Z(this,"isSunk",(function(){return H(n,Q)>=n.length?$(n,_,!0):$(n,_,!1),H(n,_)})),t<=0)throw new Error("invalid ship length of ".concat(t));this.length=t,$(this,Q,0),$(this,_,!1)}));function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ae(r.key),r)}}function te(e,t,n){return t&&ee(e.prototype,t),n&&ee(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ne(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function re(e,t,n){return(t=ae(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e){var t=function(e,t){if("object"!==K(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===K(t)?t:String(t)}function oe(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function ie(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,le(e,t,"get"))}function ue(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,le(e,t,"set"),n),n}function le(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var ce=new WeakMap,se=te((function e(t,n){var r=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];ne(this,e),oe(this,ce,{writable:!0,value:void 0}),re(this,"addRandomShips",(function(e){for(var t=e>ie(r,ce)-1?ie(r,ce)-1:e,n=ie(r,ce)>8?8:ie(r,ce),a=0;a<t;a++){for(var o=new X(Math.round(Math.random()*(n-1)+1)),i={x:Math.round(Math.random()*(ie(r,ce)-1)),y:Math.round(Math.random()*(ie(r,ce)-1))};!r.board.isValidMove(i,!0);)i={x:Math.round(Math.random()*(ie(r,ce)-1)),y:Math.round(Math.random()*(ie(r,ce)-1))};var u=Math.random()<.5;r.board.placeShip(o,i,u)}})),this.name=t,ue(this,ce,n),this.board=new V(n),a&&(this.computer=new me)})),fe=new WeakMap,de=new WeakMap,pe=new WeakMap,me=te((function e(){var t=this;ne(this,e),oe(this,fe,{writable:!0,value:null}),oe(this,de,{writable:!0,value:function(e){if(e<=0)throw new Error("invalid board size!");if(null!=ie(t,fe)){var n=Math.random()<.5,r=Math.random()<.5?1:-1;if(n){var a=ie(t,fe).y+r;return{x:ie(t,fe).x,y:a}}return{x:ie(t,fe).x+r,y:ie(t,fe).y}}return{x:Math.round(Math.random()*(e-1)),y:Math.round(Math.random()*(e-1))}}}),oe(this,pe,{writable:!0,value:function(e){for(var t=e.getBoard(),n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++)if(e.isValidMove({x:r,y:n}))return{x:r,y:n};return{x:0,y:0}}}),re(this,"performAutomateAttack",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null!=n&&ue(t,fe,n);for(var r=e.board,a=ie(t,de).call(t,r.size),o=0;!r.isValidMove(a);){if(o>10){a=ie(t,pe).call(t,r);break}a=ie(t,de).call(t,r.size),o++}return"object"===K(r.receiveAttack(a))?ue(t,fe,a):ue(t,fe,null),!0}))}));function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ye(e){document.querySelector('.game-board[data-player-name="'.concat(e.name,'"')).replaceWith(ve(e))}function ve(e){var t=e.board.getBoard(),n=document.createElement("div");n.setAttribute("data-player-name",e.name),n.classList.toggle("game-board"),null!=e.computer?n.style.backgroundColor="purple":n.style.backgroundColor="blue",n.style.gridTemplate="repeat(".concat(e.board.size,",1fr) / repeat(").concat(e.board.size,",1fr)");for(var r=0;r<e.board.size;r++)for(var a=0;a<e.board.size;a++){var o=be(t[r][a],a,r);n.append(o)}return n}function be(e,t,n){var r=document.createElement("div");return r.style.display="inline-block",r.style.width="".concat(16,"px"),r.style.height="".concat(16,"px"),r.setAttribute("data-x",t),r.setAttribute("data-y",n),r.classList.toggle("board-cell"),r.style.backgroundColor=e>=1?"black":-1===e?"red":e<-1?"green":"white",r}function ge(e){return ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ge(e)}function Ae(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return we(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?we(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function we(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ke(r.key),r)}}function Ce(e,t,n){return t&&Ee(e.prototype,t),n&&Ee(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Se(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xe(e,t,n){return(t=ke(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ke(e){var t=function(e,t){if("object"!==ge(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==ge(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===ge(t)?t:String(t)}function Me(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function Be(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,Te(e,t,"get"))}function je(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,Te(e,t,"set"),n),n}function Te(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var Pe=new WeakMap,Ie=new WeakMap,Oe=new WeakMap,We=new WeakMap,ze=new WeakMap,qe=Ce((function e(t){var n=this;if(Se(this,e),Me(this,Pe,{writable:!0,value:!1}),Me(this,Ie,{writable:!0,value:void 0}),Me(this,Oe,{writable:!0,value:void 0}),Me(this,We,{writable:!0,value:function(){var e,t=Ae(Be(n,Oe));try{for(t.s();!(e=t.n()).done;)if(e.value.board.hasAllShipSunk())return!0}catch(e){t.e(e)}finally{t.f()}return!1}}),Me(this,ze,{writable:!0,value:function(){Be(n,We).call(n)?je(n,Pe,!0):Be(n,Ie).advanceTurn()}}),xe(this,"getPlayers",(function(){return Be(n,Oe)})),xe(this,"getNextPlayer",(function(){return Be(n,Oe)[Be(n,Ie).peekNextTurn()]})),xe(this,"getCurrentPlayer",(function(){return Be(n,Oe)[Be(n,Ie).getCurrentTurn()]})),xe(this,"startGame",(function(){je(n,Pe,!1)})),xe(this,"playGame",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null!=n.getCurrentPlayer().computer)n.getCurrentPlayer().computer.performAutomateAttack(n.getNextPlayer());else{if(null==e)throw new Error("no move chosen for human player!");n.getNextPlayer().board.receiveAttack(e)}Be(n,ze).call(n)})),xe(this,"gameString",(function(){var e="";e+="------------------------\n";var t,r=Ae(Be(n,Oe));try{for(r.s();!(t=r.n()).done;){var a=t.value;e+=a.name+"\n",e+=a.board.getString()}}catch(e){r.e(e)}finally{r.f()}return e+"------------------------\n"})),xe(this,"hasGameEnded",(function(){return!!Be(n,Pe)})),t.length>2)throw new Error("more than two player not supported!");je(this,Oe,t),je(this,Ie,new Ue)})),Ne=new WeakMap,Ve=new WeakMap,Ue=Ce((function e(){var t=this;Se(this,e),Me(this,Ne,{writable:!0,value:void 0}),Me(this,Ve,{writable:!0,value:function(){je(t,Ne,Math.random()<.5?1:0)}}),xe(this,"getCurrentTurn",(function(){return Be(t,Ne)})),xe(this,"peekNextTurn",(function(){return(Be(t,Ne)+1)%2})),xe(this,"advanceTurn",(function(){je(t,Ne,(Be(t,Ne)+1)%2)})),je(this,Ne,0)}));!function(){var e=new se("tom",10,!0),t=new se("jerry",10,!0);e.addRandomShips(10),t.addRandomShips(10);var n=new qe([e,t]);n.startGame(),function(e){var t,n=document.querySelector(".board-list"),r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return he(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?he(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}(e.getPlayers());try{for(r.s();!(t=r.n()).done;){var a=t.value;n.append(ve(a))}}catch(e){r.e(e)}finally{r.f()}}(n);var r=setInterval((function(){ye(n.getCurrentPlayer()),ye(n.getNextPlayer()),n.playGame(),ye(n.getCurrentPlayer()),ye(n.getNextPlayer()),n.hasGameEnded()&&(console.log("game ended"),clearInterval(r))}),300)}()})()})();
//# sourceMappingURL=main.js.map