/*
 * @Author: WangHeYao
 * @Date: 2022-08-26 15:23:38
 * @Last Modified by: WangHeYao
 * @Last Modified time: 2022-08-26 16:00:11
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LayoutItem from "@/common/layout/LayoutItem.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView/LoginView.vue"),
  },
  {
    path: "/",
    component: LayoutItem,
    children: [
      {
        path: "",
        component: () => import("@/views/HomeView/HomeView.vue"),
      },
      {
        path: "home",
        name: "home",
        component: () => import("@/views/HomeView/HomeView.vue"),
      },
      {
        path: "user",
        name: "user",
        component: () => import("@/views/UserView/UserView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
