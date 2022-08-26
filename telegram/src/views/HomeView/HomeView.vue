<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useHomeViewStore } from "@/common/store/modules/homeView";
const homeViewStroe = useHomeViewStore();
const { count, doubleCount } = storeToRefs(useHomeViewStore());
</script>

<template>
  <div class="home_view">
    {{ homeViewStroe.count }}
    {{ count }}
    {{ doubleCount }}
    <button @click="homeViewStroe.increment()">+</button>
    <router-link :to="{ name: 'userIndex' }">redirect</router-link>
  </div>
</template>

<style lang="scss"></style>
