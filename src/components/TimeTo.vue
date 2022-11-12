<template lang="pug">
.hello
  header
    h2  🇨🇿 {{ DateTime.fromJSDate(timeOfNextCycle).toFormat("dd.MM.yyyy HH:mm:ss") }}
  footer
    OnlineMembers
</template>

<script setup lang="ts">
import OnlineMembers from "./OnlineMembers.vue";
import {nextFullMoon} from "./calculateCycle";
import {DateTime} from "luxon";
import {ref} from "vue";

const props = defineProps({
  time: {type: Date, required: true},
})
const timeOfNextCycle = await nextFullMoon(props.time)
</script>

<style scoped lang="stylus">
.hello
  display flex
  flex-direction column
  align-items center
  justify-content center
  background rgba(#5C6784, 0.8)
  border-radius 1em
  padding 1em
  h2
    color #4CB963
</style>
