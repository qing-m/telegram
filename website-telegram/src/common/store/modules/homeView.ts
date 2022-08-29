/*
 * @Author: WangHeYao
 * @Date: 2022-08-26 15:05:41
 * @Last Modified by: WangHeYao
 * @Last Modified time: 2022-08-26 15:23:44
 */

import { defineStore } from "pinia";

export const useHomeViewStore = defineStore({
  id: "homeView",
  state: () => {
    return {
      count: 0,
      num: 10,
      name: "Eduardo",
    };
  },
  getters: {
    doubleCount: (state) => state.count * 2,
    doubleSum: (state) => state.count * 2 + state.num,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        paths: ["count"],
        storage: localStorage,
      },
    ],
  },
});
