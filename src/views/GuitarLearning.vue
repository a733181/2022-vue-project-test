<template lang="pug">
div
  h1 guitarLearning
  input(type="button" value="到首頁" @click="goto('/')")
  input(type="button" value="吉他社史" @click="goto('/guitarhistory')")
  input(type="button" value="活動公告" @click="goto('/guitarEvent')")
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goto = (path) => {
  router.push(path);
};
</script>
