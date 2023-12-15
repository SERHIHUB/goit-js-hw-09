import"./assets/styles-32c4905e.js";const e=document.querySelector(".feedback-form");e.querySelector("message");const a="feedback-form-state";e.addEventListener("submit",t=>{evt.preventDefault(),console.log(t.target.elements.message.value),e.reset()});e.addEventListener("input",t=>{localStorage.setItem(a,t.target.value)});
//# sourceMappingURL=commonHelpers2.js.map
