!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body"),n=null;e.setAttribute("disabled",!0),t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),n=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.0212f8a5.js.map