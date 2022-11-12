<template lang="pug">
.members
  | {{onlineMembers}} {{ onlineMembers > 1 ? 'členů': 'člen'  }} je
  a(:href="invite")  online
</template>

<script setup lang="ts">
import axios from 'axios'
const guildId = '1008614869429395527'
const apiLink = `https://discordapp.com/api/guilds/${guildId}/widget.json`
const response = await axios.get(apiLink)
console.log('onlineOnDiscord', response.data)
const onlineMembers = response.data.presence_count
const invite = response.data.instant_invite

</script>

<style lang="stylus" scoped>
.members
  color #4CB963
  font-size 1.5rem
  font-weight 700
  text-align center
  a
    color #A0EADE
    text-decoration none
    &:hover
      text-decoration underline
</style>