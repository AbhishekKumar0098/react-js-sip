!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("React")):"function"==typeof define&&define.amd?define(["React"],r):"object"==typeof exports?exports.CapanicusSip=r(require("React")):e.CapanicusSip=r(e.React)}(self,(e=>(()=>{"use strict";var r={883:r=>{r.exports=e}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};n.r(o),n.d(o,{Number:()=>f,add:()=>l,subtract:()=>c});var a=n(883),u=n.n(a);function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}var l=function(e,r){return e+r},c=function(e,r){return e-r},f=function(){var e,r,t=(e=(0,a.useState)("Yash"),r=2,function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,u,i=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(c)throw o}}return i}}(e,r)||function(e,r){if(e){if("string"==typeof e)return i(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=t[0];return t[1],u().createElement("div",null,n)};return o})()));