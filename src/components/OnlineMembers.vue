<template lang="pug">
.members
  | {{presence_count}} {{ presence_count > 1 ? 'členů': 'člen'  }} je  
  a(:href="instant_invite") online
</template>

<script setup lang="ts">
import axios from 'axios'
import {ref} from "vue";
const guildId = '1008614869429395527'
const apiLink = `https://discordapp.com/api/guilds/${guildId}/widget.json`
const response = ref(await axios.get(apiLink))
// data
const {presence_count, instant_invite} = response.value.data
</script>

<style lang="stylus" scoped>
.members
  font-size 1.5rem
  font-weight 700
  text-align center
  a
    text-decoration none
    &:hover
      text-decoration underline
</style>