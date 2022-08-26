/*
 * @Author: WangHeYao
 * @Date: 2022-08-26 15:24:28
 * @Last Modified by:   WangHeYao
 * @Last Modified time: 2022-08-26 15:24:28
 */
/* eslint-disable */
// declare声明宣告
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
