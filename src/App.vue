<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TimeTo from './components/TimeTo.vue'
import BackgroundAnimation from './components/BackgroundAnimation.vue'
import {ref} from "vue";
const now = new Date()
</script>

<template lang="pug">
section
  header
    Suspense
      BackgroundAnimation
      template(v-slot:fallback)
        p Loading...
  main
    Suspense
      TimeTo(:time="now")
      template(v-slot:fallback)
        p Loading...
</template>

<style lang="stylus" scoped>
header
  position absolute
  bottom 0
  right 0
  width 100%
  height 100%
  z-index -1
</style>
