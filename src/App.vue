<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Marquee from './components/Marquee.vue';
import VueOn from './components/vueon.vue';
import VueModel from './components/vuemodel/vuemodel.vue';
import VueBind from './components/vuebind.vue';
import VueComputed from './components/vuecomputed.vue';
import VueComputedT from './components/vuecomputedt_test.vue';
import VueWatch from './components/VueWatch/vuewatch.vue';
import Vuewatch from './components/VueWatch/vuewatch.vue';
import Vuewatcheffect from './components/VueWatch/vuewatcheffect.vue';
import lessLayout from './layout_less/less_layout.vue';
import TransitionTest from './components/transition/transition_test.vue';
import TransitionTestGsap from './components/transition/transition_test_gsap.vue';
import Transition_test_gsap from './components/transition/transition_test_gsap.vue';
import Transition_test_appear from './components/transition/transition_test_appear.vue';
import TransitionGroupTest from './components/transition_group/transition_group_test.vue';
import TransitionGroupTestFLIP from './components/transition_group/transition_group_test_flip.vue';
import TransitionGroupTestStatus from './components/transition_group/transition_group_test_status.vue';
import PIA from './components/ProvideInject/PI_A.vue';
import BCTP_parent from './components/BrotherComponentsTransferParams/BCTP_parent.vue';
import DialogVModelParent from './components/vuemodel/Dialog_parent.vue';
import VueDirective from './components/VueDirective/VueDirective.vue';
import DIYHook from './components/HookUse/DIYHook.vue';
import StringFilterTest from './components/VueGlobalProperties/stringFilterTest.vue';
import WatchEffectTest2Vue from './components/VueWatch/WatchEffectTest2.vue';
import AnotherLoadingTest from './components/AnotherLoading/AnotherLoadingTest.vue'
import Test from './components/test.vue'
import FormTestVue from './components/ElementPlusTest/FormTest.vue';
import ElementUIInputStyleTest from './components/ScopedDeepTest/ELementUIInputStyleChange.vue'
import PiniaTest from '@/components/PiniaTest/PiniaTest.vue'
import ElemntBackTopTestVue from './components/ElementPlusTest/ElemntBackTopTest.vue';
import ElementBackTopTest from './components/ElementPlusTest/ElemntBackTopTest.vue';
</script>

<template>
  <router-view></router-view>
  <!-- <div class="vueLogo">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>-->
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
  <!-- <Transition_test_appear></Transition_test_appear> -->
  <!-- <TransitionGroupTest></TransitionGroupTest> -->
  <!-- <TransitionGroupTestFLIP></TransitionGroupTestFLIP> -->
  <!-- <TransitionGroupTestStatus></TransitionGroupTestStatus> -->
  <!-- <PIA></PIA> -->
  <!-- <BCTP_parent></BCTP_parent> -->
  <!-- <DialogVModelParent></DialogVModelParent> -->
  <!-- <VueDirective></VueDirective> -->
  <!-- <DIYHook></DIYHook> -->
  <!-- <StringFilterTest></StringFilterTest> -->
  <!-- <WatchEffectTest2Vue></WatchEffectTest2Vue> -->
  <!-- <AnotherLoadingTest></AnotherLoadingTest> -->
  <!--   <Test></Test>-->
  <!-- <FormTestVue></FormTestVue> -->
  <!-- <ElementUIInputStyleTest></ElementUIInputStyleTest> -->
  <!-- <PiniaTest></PiniaTest> -->
  <!-- <ElementBackTopTest></ElementBackTopTest> -->
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}

.vueLogo {
  height: 40%;
  border: 1px solid #ccc;
}
</style>
