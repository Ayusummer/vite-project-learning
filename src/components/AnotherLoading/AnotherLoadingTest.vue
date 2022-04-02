<script setup lang="ts">
import { ComponentInternalInstance, getCurrentInstance } from 'vue';

const { appContext } = getCurrentInstance() as ComponentInternalInstance

const showLoading = () => {
    console.log(appContext)
    appContext.config.globalProperties.$AnotherLoading.show()
    setTimeout(() => {
        appContext.config.globalProperties.$AnotherLoading.hide()
    }, 2000)
}
</script>

<template>
    <div>
        <button @click="showLoading">切换</button>
    </div>
</template>

<style lang="less" scoped>
</style>