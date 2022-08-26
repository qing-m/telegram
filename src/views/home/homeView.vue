<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useHomeStore } from "@/common/store/modules/home";
const homeStore = useHomeStore();
const { count, doubleCount } = storeToRefs(homeStore);
</script>

<template>
  <div class="view_home">
    {{ count }}
    {{ doubleCount }}
    <button @click="homeStore.increment()">+</button>
  </div>
</template>

<style lang="scss" scoped></style>
