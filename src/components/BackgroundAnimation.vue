<template>
  <Renderer ref="renderer" resize antialias alpha>
    <Camera :position="{ z: 4 }" />
    <Scene>
      <PointLight :position="{ x: 10, y: 10, z: 10 }" color='#8CFFDA' />
      <PointLight :position="{ x: -10, y: 10, z: 10 }" color='#FFB2E6' />
      <TorusKnot ref="mesh" :position="{ x:0, y: 0, z: 0 }" :rotation="rot" :tubularSegments="128" :radius="1" :tube="0.25">
        <PhongMaterial />
      </TorusKnot>
    </Scene>
  </Renderer>
</template>

<script lang="ts" setup>

import {onMounted, ref} from "vue";
const renderer = ref<any>(null);
const mesh = ref(null);
const rot = ref({ y: Math.PI , z: Math.PI  })
onMounted(() => {
  if(renderer.value != null ) {
    renderer.value.onBeforeRender(() => {
      rot.value.y = Math.PI * Math.sin(Date.now() / 6000);
      rot.value.z = Math.PI * Math.cos(Date.now() / 6000);
    });
  }
})
</script>