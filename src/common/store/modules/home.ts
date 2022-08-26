/*
 * @Author: WangHeYao
 * @Date: 2022-08-25 17:03:20
 * @Last Modified by: WangHeYao
 * @Last Modified time: 2022-08-25 17:09:45
 */
import { defineStore } from "pinia";

export const useHomeStore = defineStore({
  id: "home",
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
