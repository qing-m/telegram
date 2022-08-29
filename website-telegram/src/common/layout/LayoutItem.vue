<script lang="ts" setup>
import NavBar from "@/common/layout/components/NavBar/NavBar.vue";
import AppMain from "@/common/layout/components/AppMain/AppMain.vue";
import FooterItem from "@/common/layout/components/FooterItem/FooterItem.vue";
</script>

<template>
  <div class="layout_container">
    <nav-bar></nav-bar>
    <app-main>
      <router-view></router-view>
    </app-main>
    <footer-item></footer-item>
  </div>
</template>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
