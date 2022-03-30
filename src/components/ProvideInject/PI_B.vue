<script setup lang="ts">
import PIC from './PI_C.vue'
import { inject } from 'vue'

let data = inject('flag')
</script>

<template>
    <div class="PI_B">
        <h1>B 组件内容区域</h1>
        <div>{{ data }}</div>
        <PIC></PIC>
    </div>
</template>

<style lang="less" scoped>
.PI_B {
    width: 300px;
    height: 300px;
    background: blue;
    color: #fff;
}
</style>