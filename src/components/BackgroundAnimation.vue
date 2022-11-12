<template>
  <Renderer ref="renderer" resize antialias>
    <Camera :position="{ z: 4 }" />
    <Scene background="#ffffff">
      <AmbientLight color="#808080" />
      <PointLight :position="{ y: 10, z: 10 }" />
      <TorusKnot ref="mesh" :position="{ x:0, y: 0, z: 0 }" :rotation="rot">
        <LambertMaterial />
      </TorusKnot>
    </Scene>
  </Renderer>
</template>

<script setup>

import {onMounted, onUnmounted, ref} from "vue";
const renderer = ref(null);
const rot = ref({ y: Math.PI / 4, z: Math.PI / 4 })
onMounted(() => {
  if(renderer.value != null) {
    renderer.value.onBeforeRender(() => {
      console.log(rot);
      rot.value.y += 0.001;
    });
  }
})

</script>