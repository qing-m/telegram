/*
 * @Author: WangHeYao
 * @Date: 2022-08-25 17:02:38
 * @Last Modified by: WangHeYao
 * @Last Modified time: 2022-08-26 10:18:10
 */
import { createApp } from "vue";
import "@/common/style/index.scss";

import App from "./App.vue";

import store from "./common/store";
import router from "./common/router";

createApp(App).use(store).use(router).mount("#app");
