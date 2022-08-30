import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import { createPinia } from "pinia";
const store = createPinia();
createApp(App).use(router).use(store).mount("#app");
