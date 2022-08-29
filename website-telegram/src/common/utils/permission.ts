/*
 * @Author: WangHeYao
 * @Date: 2022-08-26 16:41:43
 * @Last Modified by: WangHeYao
 * @Last Modified time: 2022-08-26 16:56:28
 */

import router from "@/common/router";
import { start, close } from "@/common/utils/nprogress";

router.beforeEach((to) => {
  start();

  window.document.title = to.meta.title as string;
});

router.afterEach(() => {
  close();
});
