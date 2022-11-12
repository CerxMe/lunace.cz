<template lang="pug">
.hello
  header
    | {{ timeOfNextCycle.setLocale('cs').toRelative() }}
    | &lt;{{ timeOfNextCycle.setLocale('cs').toFormat('HH:mm - dd. MMMM yyyy') }}>
</template>

<script setup lang="ts">
import {nextFullMoon} from "./calculateCycle";
import {DateTime} from "luxon";
import {ref} from "vue";

const props = defineProps({
  time: {type: Date, required: true},
})
const timeOfNextCycle = DateTime.fromJSDate(await nextFullMoon(props.time))
</script>

<style scoped lang="stylus">
.hello
  display flex
  flex-direction column
  align-items center
  justify-content center
  background rgba(#5C6784, 0.8)
  border-radius 0.5em
  padding .2em
  color #4CB963
</style>
