!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=0)}([function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),l=function(t){function e(){var e=t.call(this)||this;e.color="black",e.value=0,e.valueExt=0,e.handleClick=function(){e.value+=1,e.rootValueEl.textContent=e.value.toString()};var o=e.attachShadow({mode:"closed"}),n=document.createElement("style");n.textContent="\n    #root {\n      align-items: center;\n      background-color: yellow;\n      display: flex;\n      flex-direction: column;\n    }\n    ",o.appendChild(n);var r=document.createElement("div");return r.id="root",e.rootHelloEl=document.createElement("div"),e.rootHelloEl.setAttribute("style","color: "+e.color),e.rootHelloEl.textContent="Hello World",r.appendChild(e.rootHelloEl),e.rootValueEl=document.createElement("div"),e.rootValueEl.textContent=e.value.toString(),r.appendChild(e.rootValueEl),e.rootButtonEl=document.createElement("button"),e.rootButtonEl.textContent="increment",r.appendChild(e.rootButtonEl),e.rootValueExtEl=document.createElement("div"),e.rootValueExtEl.textContent=e.valueExt.toString(),r.appendChild(e.rootValueExtEl),o.appendChild(r),e}return r(e,t),Object.defineProperty(e,"observedAttributes",{get:function(){return["color"]},enumerable:!0,configurable:!0}),e.prototype.attributeChangedCallback=function(t,e,o){switch(t){case"color":this.color=o,this.rootHelloEl.setAttribute("style","color: "+this.color)}},e.prototype.connectedCallback=function(){this.rootButtonEl.addEventListener("click",this.handleClick)},e.prototype.disconnectedCallback=function(){this.rootButtonEl.removeEventListener("click",this.handleClick)},e.prototype.increment=function(){this.valueExt+=1,this.rootValueExtEl.textContent=this.valueExt.toString()},e}(HTMLElement);window.customElements.define("hello-world",l)}]);