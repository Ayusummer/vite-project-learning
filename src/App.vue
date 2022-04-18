<script setup lang="ts">
import 'animate.css'
</script>

<template>
  <!-- route 即路由信息, Component 即当前 VNode -->
  <router-view #default="{ route, Component }">
    <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
</style>
