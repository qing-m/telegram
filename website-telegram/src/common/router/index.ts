/*
 * @Author: WangHeYao
 * @Date: 2022-08-26 15:23:38
 * @Last Modified by: WangHeYao
 * @Last Modified time: 2022-08-26 16:49:55
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LayoutItem from "@/common/layout/LayoutItem.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    meta: { title: "LOGIN", icon: "login", hidden: false },
    component: () => import("@/views/LoginView/LoginView.vue"),
  },
  {
    path: "/",
    redirect: "/home",
    component: LayoutItem,
    children: [
      {
        path: "home",
        name: "home",
        meta: { title: "HOME", icon: "home", hidden: false },
        component: () => import("@/views/HomeView/HomeView.vue"),
      },
      {
        path: "user",
        name: "user",
        meta: { title: "USER", icon: "user", hidden: false },
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
