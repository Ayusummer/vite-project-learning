<script setup lang="ts">
import {ref} from 'vue'
// 引入 animate.css
import 'animate.css'

// 定义状态切换标记
const flag = ref<boolean>(true)

</script>

<template>
<div>
    <button @click="flag=!flag"> switch </button>
    <transition 
        enter-active-class="animate__animated animate__bounce"
        leave-active-class="animate__animated animate__fadeOut"
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