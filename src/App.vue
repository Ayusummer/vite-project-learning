<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Marquee from './components/Marquee.vue';
import VueOn from './components/vueon.vue';
import VueModel from './components/vuemodel.vue';
import VueBind from './components/vuebind.vue';
import VueComputed from './components/vuecomputed.vue';
import VueComputedT from './components/vuecomputedt_test.vue';
import VueWatch from './components/vuewatch.vue';
import Vuewatch from './components/vuewatch.vue';
import Vuewatcheffect from './components/vuewatcheffect.vue';
import lessLayout from './layout_less/less_layout.vue';
import TransitionTest from './components/transition/transition_test.vue';
import TransitionTestGsap from './components/transition/transition_test_gsap.vue';
import Transition_test_gsap from './components/transition/transition_test_gsap.vue';
import Transition_test_appear from './components/transition/transition_test_appear.vue';
</script>

<template>
  <!-- <div class="vueLogo">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div> -->

  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <HelloWorld msg="233" /> -->
  <!-- <Marquee /> -->
  <!-- <VueOn /> -->
  <!-- <VueModel /> -->
  <!-- <VueBind /> -->
  <!-- <VueComputed /> -->
  <!-- <VueComputedT /> -->
  <!-- <Vuewatch /> -->
  <!-- <vuewatcheffect /> -->
  <!-- <lessLayout /> -->
  <!-- <Card content="此处为内容区域 233333" /> -->
  <!-- <TransitionTest></TransitionTest> -->
  <!-- <Transition_test_gsap></Transition_test_gsap> -->
  <Transition_test_appear></Transition_test_appear>
</template>

<style lang="less">
html,
body,
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  height: 100%;
  overflow: hidden;
}

.vueLogo {
  height: 40%;
  border: 1px solid #ccc;
}
</style>
