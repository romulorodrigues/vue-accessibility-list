import AccessibilityList from "./AccessibilityList.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("accessibility-list", AccessibilityList);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

AccessibilityList.install = install;

export default AccessibilityList;