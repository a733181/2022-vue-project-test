<template lang="pug">
div
  h1 guitarEvent
  input(type="button" value="到首頁" @click="goto('home')")
  input(type="button" value="吉他社史" @click="goto('guitarhistory')")
  input(type="button" value="教學內容" @click="goto('guitarLearning')")
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goto = (name) => {
  router.push({ name });
};
</script>
