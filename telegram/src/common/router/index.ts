/*
 * @Author: WangHeYao
 * @Date: 2022-08-26 15:23:38
 * @Last Modified by:   WangHeYao
 * @Last Modified time: 2022-08-26 15:23:38
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView/HomeView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/UserView/UserView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
