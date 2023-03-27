import { createApp } from "vue";
import App from "./App";
import router from "./routers";

import "./assets/css/app.css";

createApp(App).use(router).mount("#app");
