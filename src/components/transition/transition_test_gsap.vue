<script setup lang="ts">
import {ref} from 'vue'
// 引入 gsap
import gsap from 'gsap'

// 定义状态切换标记
const flag = ref<boolean>(true)

const EnterFrom = (el:Element) =>{
    gsap.set(el, {
        width:0,
        height:0
    })
}

const EnterActive = (el:Element, done:gsap.Callback) =>{
    gsap.to(el, {
        width:400,
        height:400,
        onComplete:done
    })
}

const leave = (el:Element, done:gsap.Callback) =>{
    gsap.to(el, {
        width:0,
        height:0,
        onComplete:done
    })
}

</script>

<template>
<div>
    <button @click="flag=!flag"> switch </button>
    <transition 
        @before-enter="EnterFrom"
        @enter="EnterActive"
        @leave="leave"
    >
        <div v-if="flag" class="box"></div>
    </transition>
</div>
</template>

<style lang="less" scoped>
.box {
    width: 400px;
    height: 400px;
    background: red;
}
</style>