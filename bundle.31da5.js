!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://jknanda78.github.io/build-your-own-component",t(t.s=0)}({0:function(e,t,n){e.exports=n("pwNi")},"2uBq":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.cardCVVMaskingHOC=t.cardExpiryMaskingHOC=t.cardNumberMaskingHOC=void 0;var o=n("YHxR"),a=r(o),u=n("EIUK"),i=r(u),l=n("gRy4"),s=r(l);t.cardNumberMaskingHOC=a.default,t.cardExpiryMaskingHOC=i.default,t.cardCVVMaskingHOC=s.default},"3OQs":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("KM04");n("efQB"),n("giSp");var o=function(e){return(0,r.h)("span",{class:"shell"},(0,r.h)("span",null,(0,r.h)("i",{"arial-hidden":"true"},e.value),e.mask))};o.displayName="Masking Functional Component",t.default=o},"3fIs":function(){},"5D9O":function(e,t,n){"use strict";"function"==typeof Symbol&&Symbol;e.exports=n("wVGV")()},"7mgg":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateCardNumberHOC=void 0;var r=n("zxsQ");t.validateCardNumberHOC=function(e){return e&&e.__esModule?e:{default:e}}(r).default},"8tcF":function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("KM04"),s=n("sbNy"),c=function(e){return e&&e.__esModule?e:{default:e}}(s),p=function(e){function t(){for(var e,n,r,a,u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={value:""},r.onKeyUpHandler=function(e){var t=r.props;r.setState({value:e.target.value}),t.onKeyUp&&t.onKeyUp(e,t.cardType)},r.onBlurHandler=function(e){var t=r.props;t.onBlur&&t.onBlur(e,t.cardType)},a=n,o(r,a)}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.Masking,o=e.DesignPattern,a=r(e,["label","Masking","DesignPattern"]);a.maxLength=e.maxLength,a.placeholder=e.placeholder;var i={};return i.mask=e.mask,i.value=e.value,(0,l.h)(o,{label:t,error:e.error,name:a.name},(0,l.h)(c.default,u({},a,{onKeyUp:this.onKeyUpHandler,onBlur:this.onBlurHandler,value:e.value||this.state.value})),(0,l.h)(n,i))}}]),t}(l.Component);p.displayName="Card Number",t.default=p},Asjh:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},CB7t:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Pattern2=t.Pattern1=t.renderFormField=void 0;var r=n("KM04");n("3fIs"),n("P36y");var o=t.renderFormField=function(e){var t=e.label,n=e.error,o=e.name,a=e.children,u=n&&n[o]?n[o]:null;return t?(0,r.h)("div",{class:"group"},a,(0,r.h)("span",{class:u?"error":""},u),(0,r.h)("span",{class:"highlight"}),(0,r.h)("span",{class:"bar"}),(0,r.h)("label",{for:o},t)):(0,r.h)("div",{class:"btn-group"},a)};t.Pattern1=function(e){return(0,r.h)("div",{class:"donut-input-field"},o(e))},t.Pattern2=function(e){return(0,r.h)("div",{class:"kitkat-input-field"},o(e))}},EIUK:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("KM04"),l=n("3OQs"),s=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=function(e){var t=function(t){function n(){for(var e,t,o,a,u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return t=o=r(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o.setMasking=function(e,t){var n=e.target.value,r="",o=n.length,a="XdDmMyY9";n.match(/[A-Z]/i)&&(n=n.substr(0,o-1));for(var u=n.replace(/\D/g,""),i=t.placeholder.length,l=0,s=0;l<i;l++){var c=!isNaN(parseInt(u[s],10)),p=a.indexOf(t.placeholder[l])>=0;if(p&&c)r+=u[s++];else{if(p&&!c)return{value:r};r+=t.placeholder[l]}if(void 0===u[s])break}return 1===r.length&&"MM"===t.placeholder.toUpperCase().substr(0,2)&&r>1&&r<10&&(r="0"+r),{value:r,mask:t.placeholder.substr(r.length)}},o.maskingOnKeyUp=function(e,t){switch(e.keyCode){case 20:case 17:case 18:case 16:case 37:case 38:case 40:return}return o.setMasking(e,t)},a=t,r(o,a)}return o(n,t),u(n,[{key:"render",value:function(){return(0,i.h)(e,a({},this.props,{Masking:s.default,setMasking:this.setMasking,maskingOnKeyUp:this.maskingOnKeyUp}))}}]),n}(i.Component);return t.displayName="Card Expiry Masking",t}},JkW7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("KM04"),o=n("NSdR"),a=function(e){return e&&e.__esModule?e:{default:e}}(o),u=n("tZtr");t.default=function(){return(0,r.h)(a.default,{DesignPattern:u.Pattern2})}},KM04:function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){function n(){}function r(e,t){var r,o,a,u,i=S;for(u=arguments.length;u-- >2;)H.push(arguments[u]);for(t&&null!=t.children&&(H.length||H.push(t.children),delete t.children);H.length;)if((o=H.pop())&&void 0!==o.pop)for(u=o.length;u--;)H.push(o[u]);else"boolean"==typeof o&&(o=null),(a="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(a=!1)),a&&r?i[i.length-1]+=o:i===S?i=[o]:i.push(o),r=a;var l=new n;return l.nodeName=e,l.children=i,l.attributes=null==t?void 0:t,l.key=null==t?void 0:t.key,void 0!==K.vnode&&K.vnode(l),l}function o(e,t){for(var n in t)e[n]=t[n];return e}function a(e,t){return r(e.nodeName,o(o({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function u(e){!e.__d&&(e.__d=!0)&&1==D.push(e)&&(K.debounceRendering||T)(i)}function i(){var e,t=D;for(D=[];e=t.pop();)e.__d&&P(e)}function l(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&s(e,t.nodeName):n||e._componentConstructor===t.nodeName}function s(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function c(e){var t=o({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function p(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,n,r,o,a){if("className"===n&&(n="class"),"key"===n);else if("ref"===n)r&&r(null),o&&o(e);else if("class"!==n||a)if("style"===n){if(o&&"string"!=typeof o&&"string"!=typeof r||(e.style.cssText=o||""),o&&"object"==(void 0===o?"undefined":t(o))){if("string"!=typeof r)for(var u in r)u in o||(e.style[u]="");for(var u in o)e.style[u]="number"==typeof o[u]&&!1===E.test(u)?o[u]+"px":o[u]}}else if("dangerouslySetInnerHTML"===n)o&&(e.innerHTML=o.__html||"");else if("o"==n[0]&&"n"==n[1]){var i=n!==(n=n.replace(/Capture$/,""));n=n.toLowerCase().substring(2),o?r||e.addEventListener(n,y,i):e.removeEventListener(n,y,i),(e.__l||(e.__l={}))[n]=o}else if("list"!==n&&"type"!==n&&!a&&n in e)h(e,n,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(n);else{var l=a&&n!==(n=n.replace(/^xlink\:?/,""));null==o||!1===o?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.removeAttribute(n):"function"!=typeof o&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),o):e.setAttribute(n,o))}else e.className=o||""}function h(e,t,n){try{e[t]=n}catch(e){}}function y(e){return this.__l[e.type](K.event&&K.event(e)||e)}function v(){for(var e;e=R.pop();)K.afterMount&&K.afterMount(e),e.componentDidMount&&e.componentDidMount()}function b(e,t,n,r,o,a){A++||(B=null!=o&&void 0!==o.ownerSVGElement,L=null!=e&&!("__preactattr_"in e));var u=_(e,t,n,r,a);return o&&u.parentNode!==o&&o.appendChild(u),--A||(L=!1,a||v()),u}function _(e,t,n,r,o){var a=e,u=B;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),g(e,!0))),a.__preactattr_=!0,a;var i=t.nodeName;if("function"==typeof i)return x(e,t,n,r);if(B="svg"===i||"foreignObject"!==i&&B,i+="",(!e||!s(e,i))&&(a=p(i,B),e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),g(e,!0)}var l=a.firstChild,c=a.__preactattr_,f=t.children;if(null==c){c=a.__preactattr_={};for(var d=a.attributes,h=d.length;h--;)c[d[h].name]=d[h].value}return!L&&f&&1===f.length&&"string"==typeof f[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=f[0]&&(l.nodeValue=f[0]):(f&&f.length||null!=l)&&m(a,f,n,r,L||null!=c.dangerouslySetInnerHTML),k(a,t.attributes,c),B=u,a}function m(e,t,n,r,o){var a,u,i,s,c,p=e.childNodes,d=[],h={},y=0,v=0,b=p.length,m=0,O=t?t.length:0;if(0!==b)for(var k=0;k<b;k++){var w=p[k],M=w.__preactattr_,C=O&&M?w._component?w._component.__k:M.key:null;null!=C?(y++,h[C]=w):(M||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(d[m++]=w)}if(0!==O)for(var k=0;k<O;k++){s=t[k],c=null;var C=s.key;if(null!=C)y&&void 0!==h[C]&&(c=h[C],h[C]=void 0,y--);else if(!c&&v<m)for(a=v;a<m;a++)if(void 0!==d[a]&&l(u=d[a],s,o)){c=u,d[a]=void 0,a===m-1&&m--,a===v&&v++;break}c=_(c,s,n,r),i=p[k],c&&c!==e&&c!==i&&(null==i?e.appendChild(c):c===i.nextSibling?f(i):e.insertBefore(c,i))}if(y)for(var k in h)void 0!==h[k]&&g(h[k],!1);for(;v<=m;)void 0!==(c=d[m--])&&g(c,!1)}function g(e,t){var n=e._component;n?U(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||f(e),O(e))}function O(e){for(e=e.lastChild;e;){var t=e.previousSibling;g(e,!0),e=t}}function k(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||d(e,r,n[r],n[r]=void 0,B);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||d(e,r,n[r],n[r]=t[r],B)}function w(e){var t=e.constructor.name;(F[t]||(F[t]=[])).push(e)}function M(e,t,n){var r,o=F[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),X.call(r,t,n)):(r=new X(t,n),r.constructor=e,r.render=C),o)for(var a=o.length;a--;)if(o[a].constructor===e){r.__b=o[a].__b,o.splice(a,1);break}return r}function C(e,t,n){return this.constructor(e,n)}function j(e,t,n,r,o){e.__x||(e.__x=!0,(e.__r=t.ref)&&delete t.ref,(e.__k=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.__c||(e.__c=e.context),e.context=r),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===K.syncComponentUpdates&&e.base?u(e):P(e,1,o)),e.__r&&e.__r(e))}function P(e,t,n,r){if(!e.__x){var a,u,i,l=e.props,s=e.state,p=e.context,f=e.__p||l,d=e.__s||s,h=e.__c||p,y=e.base,_=e.__b,m=y||_,O=e._component,k=!1;if(y&&(e.props=f,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(l,s,p)?k=!0:e.componentWillUpdate&&e.componentWillUpdate(l,s,p),e.props=l,e.state=s,e.context=p),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!k){a=e.render(l,s,p),e.getChildContext&&(p=o(o({},p),e.getChildContext()));var w,C,x=a&&a.nodeName;if("function"==typeof x){var X=c(a);u=O,u&&u.constructor===x&&X.key==u.__k?j(u,X,1,p,!1):(w=u,e._component=u=M(x,X,p),u.__b=u.__b||_,u.__u=e,j(u,X,0,p,!1),P(u,1,n,!0)),C=u.base}else i=m,w=O,w&&(i=e._component=null),(m||1===t)&&(i&&(i._component=null),C=b(i,a,p,n||!y,m&&m.parentNode,!0));if(m&&C!==m&&u!==O){var N=m.parentNode;N&&C!==N&&(N.replaceChild(C,m),w||(m._component=null,g(m,!1)))}if(w&&U(w),e.base=C,C&&!r){for(var H=e,S=e;S=S.__u;)(H=S).base=C;C._component=H,C._componentConstructor=H.constructor}}if(!y||n?R.unshift(e):k||(e.componentDidUpdate&&e.componentDidUpdate(f,d,h),K.afterUpdate&&K.afterUpdate(e)),null!=e.__h)for(;e.__h.length;)e.__h.pop().call(e);A||r||v()}}function x(e,t,n,r){for(var o=e&&e._component,a=o,u=e,i=o&&e._componentConstructor===t.nodeName,l=i,s=c(t);o&&!l&&(o=o.__u);)l=o.constructor===t.nodeName;return o&&l&&(!r||o._component)?(j(o,s,3,n,r),e=o.base):(a&&!i&&(U(a),e=u=null),o=M(t.nodeName,s,n),e&&!o.__b&&(o.__b=e,u=null),j(o,s,1,n,r),e=o.base,u&&e!==u&&(u._component=null,g(u,!1))),e}function U(e){K.beforeUnmount&&K.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?U(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,f(t),w(e),O(t)),e.__r&&e.__r(null)}function X(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{}}function N(e,t,n){return b(n,e,{},!1,t,!1)}var K={},H=[],S=[],T="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,E=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,D=[],R=[],A=0,B=!1,L=!1,F={};o(X.prototype,{setState:function(e,t){var n=this.state;this.__s||(this.__s=o({},n)),o(n,"function"==typeof e?e(n,this.props):e),t&&(this.__h=this.__h||[]).push(t),u(this)},forceUpdate:function(e){e&&(this.__h=this.__h||[]).push(e),P(this,2)},render:function(){}});var V={h:r,createElement:r,cloneElement:a,Component:X,render:N,rerender:i,options:K};e.exports=V}()},NSdR:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("KM04"),s=n("2uBq"),c=n("7mgg"),p=n("8tcF"),f=r(p),d=n("YXlM"),h=(r(d),n("WFeU"));r(h);n("Yfv7");var y=(0,c.validateCardNumberHOC)(f.default),v=(0,s.cardNumberMaskingHOC)(f.default),b=((0,c.validateCardNumberHOC)((0,s.cardNumberMaskingHOC)(f.default)),(0,s.cardNumberMaskingHOC)(y),function(e){function t(){for(var e,n,r,a,u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={cardType:""},r.onChangeHandler=function(){console.log("AddCard::onChange")},r.onKeyUpHandler=function(e,t){console.log("AddCard::onKeyUp"),t&&r.setState({cardType:t})},r.onBlurHandler=function(e,t){console.log("AddCard::onBlur"),t&&r.setState({cardType:t})},a=n,o(r,a)}return a(t,e),i(t,[{key:"render",value:function(){return(0,l.h)("div",null,(0,l.h)("form",null,(0,l.h)("h2",null,"Add Card - Card number with masking & without validation"),(0,l.h)("div",{class:"add-card"},(0,l.h)(v,u({},this.props,{label:"Card Number",class:"masked",type:"tel",name:"card-number",id:"cardNumber",placeholder:"15 to 16 digits",onBlur:this.onBlurHandler,onChange:this.onChangeHandler,onKeyUp:this.onKeyUpHandler,required:"required"})))),(0,l.h)("form",null,(0,l.h)("h2",null,"Add Card - Card number with validation without masking"),(0,l.h)("div",{class:"add-card"},(0,l.h)(y,u({},this.props,{label:"Card Number",class:"masked",type:"tel",name:"card-number",id:"cardNumber",placeholder:"15 to 16 digits",onBlur:this.onBlurHandler,onChange:this.onChangeHandler,onKeyUp:this.onKeyUpHandler,required:"required"})))))}}]),t}(l.Component));b.displayName="Add Card",t.default=b},P36y:function(){},UQex:function(e){"use strict";function t(e){return function(){return e}}var n=function(){};n.thatReturns=t,n.thatReturnsFalse=t(!1),n.thatReturnsTrue=t(!0),n.thatReturnsNull=t(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},WFeU:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,i,l,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n("KM04"),f=n("sbNy"),d=function(e){return e&&e.__esModule?e:{default:e}}(f),h=(i=u=function(e){function t(e){var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.call(n),n.state={value:"",mask:"",placeholder:e.placeholder,maxLength:""},n.onKeyUpHandler=n.onKeyUpHandler.bind(n),n.onFocusHandler=n.onFocusHandler.bind(n),n}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.maxLength,o=e.Masking,a=e.DesignPattern,u=r(e,["label","maxLength","Masking","DesignPattern"]);u.maxLength=this.state.maxLength||n;var i={};return i.mask=this.state.mask,i.value=this.state.value,(0,p.h)(a,{label:t},(0,p.h)(d.default,s({},u,{onKeyUp:this.onKeyUpHandler,onFocus:this.onFocusHandler,value:this.state.value})),(0,p.h)(o,i))}}]),t}(p.Component),l=function(){var e=this;this.onFocusHandler=function(){var t=e.props,n=t.cardType,r=n?t.getMasking(n):"",o=r?r.mask.length:"";o&&e.setState({maxLength:o})},this.onKeyUpHandler=function(t){var n=e.props,r=t.target.value,o=n.cardType,a=o?n.getMasking(o):"",u={value:r,mask:a?a.mask:""},i=n.maskingOnKeyUp(t,u);e.setState({value:i&&i.value||r,mask:i&&i.mask})}},i);h.defaultProps={maxLength:3},t.default=h},YHxR:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("KM04"),l=n("3OQs"),s=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=function(e){var t=function(t){function n(){for(var e,t,o,a,u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return t=o=r(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o.onKeyUpHandler=function(e){console.log("cardNumberMaskingHOC::onKeyUp");var t=o.props,n=e.target.value,r=o.getMasking(n.charAt(0)),a=t.placeholder,u=t.value,i=r.mask.length?r.mask.length:a.length,l={value:u,mask:r.mask},s=o.setMasking(e,l);o.setState({cardType:r.type,cardLength:r.length,maxLength:i,value:s&&s.value||n,mask:s&&s.mask}),o.props.onKeyUp&&o.props.onKeyUp(e,o.state.cardType)},o.getMasking=function(e){switch(parseInt(e,10)){case 3:return{type:"American Express",mask:"XXXX XXXXXX XXXXX",length:15};case 4:return{type:"VISA",mask:"XXXX XXXX XXXX XXXX",length:16};case 5:return{type:"MasterCard",mask:"XXXX XXXX XXXX XXXX",length:16};case 6:return{type:"Discover",mask:"XXXX XXXX XXXX XXXX",length:16};default:return{type:"",mask:""}}},o.setMasking=function(e,t){switch(e.keyCode){case 20:case 17:case 18:case 16:case 37:case 38:case 40:return}var n=e.target.value,r="",o=n.length,a="XdDmMyY9";n.match(/[A-Z]/i)&&(n=n.substr(0,o-1));for(var u=n.replace(/\D/g,""),i=t.mask.length,l=0,s=0;l<i;l++){var c=!isNaN(parseInt(u[s],10)),p=a.indexOf(t.mask[l])>=0;if(p&&c)r+=u[s++];else{if(p&&!c)return{value:r};r+=t.mask[l]}if(void 0===u[s])break}return{value:r,mask:t.mask.substr(r.length)}},a=t,r(o,a)}return o(n,t),u(n,[{key:"render",value:function(){return(0,i.h)(e,a({},this.props,this.state,{Masking:s.default,getMasking:this.getMasking,setMasking:this.setMasking,onKeyUp:this.onKeyUpHandler}))}}]),n}(i.Component);return t.displayName="Card Number Masking",t}},YXlM:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("KM04"),s=n("sbNy"),c=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=function(e){function t(){for(var e,n,r,a,u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={value:"",mask:r.props.placeholder},r.onKeyUpHandler=function(e){var t=r.props.maskingOnKeyUp(e,r.props);t&&(t.value||t.mask)&&r.setState({value:t.value,mask:t.mask})},a=n,o(r,a)}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.Masking,o=e.DesignPattern,a=r(e,["label","Masking","DesignPattern"]);a.maxLength=e.placeholder.length;var i={};return i.mask=this.state.mask,i.value=this.state.value,(0,l.h)(o,{label:t},(0,l.h)(c.default,u({},a,{onKeyUp:this.onKeyUpHandler,value:this.state.value})),(0,l.h)(n,i))}}]),t}(l.Component)},Yfv7:function(){},atRc:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("KM04"),s=n("5D9O"),c=function(e){return e&&e.__esModule?e:{default:e}}(s),p=c.default.oneOf,f=c.default.string,d=c.default.bool,h=c.default.func,y=function(e){function t(){for(var e,n,r,a,u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.onClickHandler=function(e){var t=r.props.onClick;t&&t(e)},r.onChangeHandler=function(e){var t=r.props.onChange;t&&t(e)},r.onKeyUpHandler=function(e){var t=r.props.onKeyUp;t&&t(e)},r.onKeyDownHandler=function(e){var t=r.props.onKeyDown;t&&t(e)},r.onFocusHandler=function(e){var t=r.props.onFocus;t&&t(e)},r.onBlurHandler=function(e){var t=r.props.onBlur;t&&t(e)},r.onBlurHandler=function(e){var t=r.props.onBlur;t&&t(e)},r.onMouseUpHandler=function(e){var t=r.props.onMouseUp;t&&t(e)},r.onMouseDownHandler=function(e){var t=r.props.onMouseDown;t&&t(e)},a=n,o(r,a)}return a(t,e),i(t,[{key:"render",value:function(e){var t=r(e,["label"]);return(0,l.h)("input",u({},t,{onClick:this.onClickHandler,onChange:this.onChangeHandler,onKeyUp:this.onKeyUpHandler,onKeyDown:this.onKeyDownHandler,onFocus:this.onFocusHandler,onBlur:this.onBlurHandler,onMouseUp:this.onMouseUpHandler,onMouseDown:this.onMouseDownHandler}))}}]),t}(l.Component);y.defaultProps={onBlur:null,onChange:null,onClick:null,onFocus:null,onKeyDown:null,onKeyUp:null,onMouseDown:null,onMouseUp:null,placeholder:null,readonly:null,required:!1,type:"text",value:null},y.propTypes={autoComplete:p(["on","off"]),id:f.isRequired,label:f.isRequired,maxLength:f.isRequired,name:f.isRequired,onBlur:h,onChange:h,onClick:h,onFocus:h,onKeyDown:h,onKeyUp:h,onMouseDown:h,onMouseUp:h,placeholder:f,readonly:d,required:d,type:f,value:p([d,f])},t.default=y},efQB:function(){},gRy4:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("KM04"),l=n("3OQs"),s=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=function(e){var t=function(t){function n(){for(var e,t,o,a,u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return t=o=r(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o.getMasking=function(e){switch(e){case"American Express":return{mask:"XXXX"};case"VISA":case"MasterCard":case"Discover":return{mask:"XXX"};default:return{mask:""}}},o.setMasking=function(e,t){var n=e.target.value,r="",o=n.length,a="XdDmMyY9";n.match(/[A-Z]/i)&&(n=n.substr(0,o-1));for(var u=n.replace(/\D/g,""),i=t.mask.length,l=0,s=0;l<i;l++){var c=!isNaN(parseInt(u[s],10)),p=a.indexOf(t.mask[l])>=0;if(p&&c)r+=u[s++];else{if(p&&!c)return{value:r};r+=t.mask[l]}if(void 0===u[s])break}return{value:r,mask:t.mask.substr(r.length)}},o.maskingOnKeyUp=function(e,t){switch(e.keyCode){case 20:case 17:case 18:case 16:case 37:case 38:case 40:return}return o.setMasking(e,t)},a=t,r(o,a)}return o(n,t),u(n,[{key:"render",value:function(){return(0,i.h)(e,a({},this.props,{Masking:s.default,getMasking:this.getMasking,setMasking:this.setMasking,maskingOnKeyUp:this.maskingOnKeyUp}))}}]),n}(i.Component);return t.displayName="Card CVV Masking",t}},giSp:function(){},pwNi:function(e,t,n){"use strict";var r=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register("/sw.js");var o=function(e){return e&&e.default||e};if("function"==typeof o(n("JkW7"))){var a=document.body.firstElementChild,u=function(){var e=o(n("JkW7"));a=(0,r.render)((0,r.h)(e),document.body,a)};u()}},sbNy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("atRc");t.default=function(e){return e&&e.__esModule?e:{default:e}}(r).default},tZtr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Pattern2=t.Pattern1=void 0;var r=n("CB7t");t.Pattern1=r.Pattern1,t.Pattern2=r.Pattern2},"wRU+":function(e){"use strict";function t(e,t,r,o,a,u,i,l){if(n(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,o,a,u,i,l],p=0;s=new Error(t.replace(/%s/g,function(){return c[p++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var n=function(){};e.exports=t},wVGV:function(e,t,n){"use strict";var r=n("UQex");n("wRU+"),n("Asjh");e.exports=function(){function e(){}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},zxsQ:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("KM04");t.default=function(e){var t=function(t){function n(){for(var e,t,a,u,i=arguments.length,l=Array(i),s=0;s<i;s++)l[s]=arguments[s];return t=a=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),a.getCardLenth=function(e){switch(parseInt(e,10)){case 3:return{type:"American Express",length:15};case 4:return{type:"VISA",length:16};case 5:return{type:"MasterCard",length:16};case 6:return{type:"Discover",length:16};default:return{type:"",length:0}}},a.cardNumber=function(e,t){var n=null;if(e){if(!t){var r=a.getCardLenth(e.charAt(0));t=r.length,a.setState({cardType:r.type})}e.replace(/\s/g,"").length!==t&&(n="cardNumber.length.mismatch")}return n},a.validationOnKeyUp=function(e){console.log("validateCardNumberHOC::onKeyUp");var t=e.target.value,n=a.getCardLenth(t.charAt(0));a.setState({cardType:n.type,cardLength:n.length,error:{}}),a.props.onKeyUp&&a.props.onKeyUp(e,a.state.cardType)},a.validationOnBlur=function(e){console.log("validateCardNumberHOC::onBlur");var t=a.props,n=a.cardNumber(e.target.value,a.state.cardLength);a.setState(n?{error:r({},t.name,n)}:{error:{}}),a.props.onBlur&&a.props.onBlur(e)},u=t,o(a,u)}return a(n,t),i(n,[{key:"render",value:function(){return(0,l.h)(e,u({},this.props,this.state,{onBlur:this.validationOnBlur,onKeyUp:this.validationOnKeyUp}))}}]),n}(l.Component);return t.displayName="Validate Card Number",t}}});
//# sourceMappingURL=bundle.31da5.js.map