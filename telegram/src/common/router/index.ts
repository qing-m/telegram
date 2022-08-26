/*
 * @Author: WangHeYao
 * @Date: 2022-08-26 15:23:38
 * @Last Modified by: WangHeYao
 * @Last Modified time: 2022-08-26 15:51:01
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/common/layout/LayoutIndex.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/homeIndex",
    component: Layout,
    children: [
      {
        path: "homeIndex",
        name: "homeIndex",
        component: () => import("@/views/HomeView/HomeView.vue"),
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    component: () => Layout,
    children: [
      {
        path: "userIndex",
        name: "userIndex",
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
