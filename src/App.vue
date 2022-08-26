<template>
  <div class="app_view">
    <div class="link_main">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/user">USER</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.app_view {
  width: 100%;
  height: 100vh;
  .link_main {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
