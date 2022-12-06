<template lang="pug">
TheTop
#middle
  #left
    LeftMenu
    LeftUpdate
  #right
    RightMarquee
    #page
      RouterView(v-slot="{ Component }")
        transition(name="router" mode="out-in")
          component(:is="Component")
TheFooter
</template>

<script setup>
import TheTop from '@/components/TheTop.vue';
import LeftMenu from '@/components/LeftMenu.vue';
import LeftUpdate from '@/components/LeftUpdate.vue';
import RightMarquee from '@/components/RightMarquee.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style scoped>
.router-enter-from,
.router-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.router-enter-active {
  transition: transform 150ms ease-out;
}
.router-leave-active {
  transition: transform 150ms ease-in;
}
.router-enter-to,
.router-leave-from {
  opacity: 1;
  transform: translateY(0%);
}
</style>
