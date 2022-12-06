<template lang="pug">
div
  h1 GuitarHistory
  input(type="button" value="到首頁" @click="goto('/')")
  input(type="button" value="活動公告" @click="goto('/guitarEvent')")
  input(type="button" value="教學內容" @click="goto('/guitarLearning')")
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();

const goto = (path) => {
  // console.log(path);
  router.push(path);
};
</script>
