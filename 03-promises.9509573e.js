!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("iU1Pc"),u=document.querySelector(".form");function l(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}function a(t){e(i).Notify.success(t)}function c(t){e(i).Notify.failure(t)}u.addEventListener("submit",(function(e){e.preventDefault();for(var t=Number(e.target.delay.value),n=Number(e.target.step.value),o=Number(e.target.amount.value),r=t,i=1;i<=o;i+=1)i>1&&(r+=n),l(i,r).then(a).catch(c);setTimeout((function(){var e=document.createElement("h1");e.textContent="That's all Folks",e.style.width="600px",e.style.marginLeft="auto",e.style.marginRight="auto",e.style.marginTop="200px",e.style.color="red",e.style.backgroundColor="lime",e.style.fontSize="60px",e.style.textAlign="center",u.after(e)}),r+1e3),setTimeout((function(){document.querySelector("h1").remove()}),r+4e3)}))}();
//# sourceMappingURL=03-promises.9509573e.js.map