<script setup lang="ts">
// 引入 vue-router
import router from '@/router'

// 跳转到 helloWorld 组件
const switchToHelloWorld = (): void => {
    router.push({
        name: 'helloWorld'
    })
}

// 跳转到 marquee 组件
const switchToMarquee = (): void => {
    router.push({
        name: 'marquee'
    })
}

// 
</script>

<template>
    <div>
        <el-button @click="switchToHelloWorld">跳转到 helloWorld 组件</el-button>
        <el-button @click="switchToMarquee">跳转到 marquee 组件</el-button>
        <el-button @click="router.push('/goodsWarehouse')">跳转到商品货仓界面</el-button>
        <!-- 跳转到 namedView -->
        <el-button @click="router.push({ name: 'namedView' })">跳转到 namedView 组件</el-button>
    </div>
</template>

<style lang="less" scoped>
</style>