/*
 * @Author: WangHeYao
 * @Date: 2022-08-25 17:03:06
 * @Last Modified by:   WangHeYao
 * @Last Modified time: 2022-08-25 17:03:06
 */
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

const store = createPinia();
store.use(piniaPluginPersist);

export default store;
