<template lang="pug">
.hello
  header
    h2  {{nextLunacy.toFormat("dd.MM.yyyy HH:mm:ss") }}
      span  ({{nextLunacy.toRelative()}})
  footer
    OnlineMembers
</template>

<script setup lang="ts">
import { createTimeOfInterest } from "astronomy-bundle/time";
import OnlineMembers from "./OnlineMembers.vue";
import { createMoon } from "astronomy-bundle/moon";
import { createEarth } from "astronomy-bundle/earth";
import type { Location } from "astronomy-bundle/earth/types/LocationTypes";
import {DateTime} from "luxon";
const props = defineProps({
  time: {type: Date, required: true},
})

const location: Location = {
  lat: 49.8175,
  lon: 15.4730
};

const toi = createTimeOfInterest.fromDate(props.time);
const moon = await createMoon(toi);
const toiTransit = await moon.getTransit(location);

const nextLunacy = DateTime.fromJSDate(toiTransit.getDate())

const fullMoon = await createMoon(toi).getUpcomingFullMoon()

</script>

<style scoped lang="stylus">
.hello
  display flex
  flex-direction column
  align-items center
  justify-content center
  background #5C6784
  border-radius 1em
  padding 1em
  h2
    color #4CB963
</style>
