import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/index";
import vue3GoogleLogin from "vue3-google-login";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(vue3GoogleLogin, {
  clientId:
    "790024986563-vmsp7vljfv3sv6vidtmed66n3i5b2dtk.apps.googleusercontent.com",
});
app.mount("#app");
