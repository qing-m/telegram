/*
 * @Author: WangHeYao
 * @Date: 2022-08-26 15:04:48
 * @Last Modified by:   WangHeYao
 * @Last Modified time: 2022-08-26 15:04:48
 */

import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

const store = createPinia();
store.use(piniaPluginPersist);

export default store;
