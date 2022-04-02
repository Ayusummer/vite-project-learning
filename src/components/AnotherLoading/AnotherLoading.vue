<script setup lang="ts">
import { ref } from 'vue'

let isShow = ref<boolean>(false)

const show = () => {
    isShow.value = true
}

const hide = () => {
    isShow.value = false
}
// 使用 defineExpose 暴露属性给 AnotherLoading.ts
defineExpose({
    show,
    hide,
    isShow
})
</script>

<template>
    <div v-if="isShow" class="loading">
        <div class="loading-content">loading...</div>
    </div>
</template>

<style lang="less" scoped>
.loading {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
        font-size: 30px;
        color: #fff;
    }
}
</style>