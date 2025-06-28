import sanitizeHtml from "sanitize-html";
import type { Directive } from "vue";

const vSanitizeHtml: Directive = {
  mounted(el, binding) {
    el.innerHTML = sanitizeHtml(binding.value);
  },
  updated(el, binding) {
    el.innerHTML = sanitizeHtml(binding.value);
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("sanitize-html", vSanitizeHtml);
});
