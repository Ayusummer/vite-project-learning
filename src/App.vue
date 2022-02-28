<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Marquee from './components/Marquee.vue';
import VueOn from './components/vueon.vue';
import VueModel from './components/vuemodel.vue';
import VueBind from './components/vuebind.vue';

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <HelloWorld msg="233" /> -->
  <!-- <Marquee /> -->
  <!-- <VueOn /> -->
  <!-- <VueModel /> -->
  <VueBind />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
