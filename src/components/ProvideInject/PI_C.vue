<script setup lang="ts">
import { inject, Ref, ref } from 'vue'

let data = inject<Ref<boolean>>('flag', ref(false)) // 两个参数, 前者是 key 后者是 默认值
</script>

<template>
    <div class="PI_C">
        <!-- 通过按钮改变 data 接受的 flag 值(取反)-->
        <button @click="data = !data">改变 flag</button>
        <h1>C 组件内容区域</h1>
        <h1>{{ data }}</h1>
    </div>
</template>

<style lang="less" scoped>
.PI_C {
    width: 300px;
    height: 300px;
    background: green;
    color: #fff;
}
</style>