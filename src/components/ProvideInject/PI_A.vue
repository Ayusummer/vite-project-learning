<script setup lang="ts">
import PIB from './PI_B.vue'
import { provide, ref } from 'vue'

provide('flag', ref(false))  // 两个参数, 前者是 key 后者是 value
</script>

<template>
    <div class="PI_A">
        <div>A 组件内容区域</div>
        <PIB></PIB>
    </div>
</template>

<style lang="less" scoped>
.PI_A {
    width: 300px;
    height: 300px;
    background: red;
    color: #fff;
}
</style>