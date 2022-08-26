/*
 * @Author: WangHeYao
 * @Date: 2022-08-25 17:02:59
 * @Last Modified by:   WangHeYao
 * @Last Modified time: 2022-08-25 17:02:59
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/homeView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/user/userView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
