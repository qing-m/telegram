/*
 * @Author: WangHeYao
 * @Date: 2022-08-26 15:06:08
 * @Last Modified by: WangHeYao
 * @Last Modified time: 2022-08-26 16:44:43
 */

import { createApp } from "vue";
import "@/common/style/index.scss";
import App from "@/views/App.vue";

import store from "@/common/store";
import router from "@/common/router";
import "@/common/utils/permission";

createApp(App).use(store).use(router).mount("#app");
