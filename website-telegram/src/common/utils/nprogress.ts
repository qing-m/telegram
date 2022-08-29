/*
 * @Author: WangHeYao
 * @Date: 2022-08-26 16:41:58
 * @Last Modified by:   WangHeYao
 * @Last Modified time: 2022-08-26 16:41:58
 */

import NProgress from "nprogress";
import "@/common/style/nprogress.scss";

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 1000, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.1, // 更改启动时使用的最小百分比
  parent: "body", //指定进度条的父容器
});
// 打开进度条
export const start = () => {
  NProgress.start();
};

// 关闭进度条
export const close = () => {
  NProgress.done();
};
