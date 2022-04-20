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

</script>

<template>
    <div>
        <!-- 返回登录界面 -->
        <el-button @click="router.push({ name: 'login' })">返回登录界面</el-button>
        <el-button @click="switchToHelloWorld">跳转到 helloWorld 组件</el-button>
        <el-button @click="switchToMarquee">跳转到 marquee 组件</el-button>
        <el-button @click="router.push('/goodsWarehouse')">跳转到商品货仓界面</el-button>
        <!-- 跳转到 namedView -->
        <el-button @click="router.push({ name: 'namedView' })">跳转到 namedView 组件</el-button>
        <!-- 跳转到兄弟组件传参测试页面 -->
        <el-button @click="router.push({ name: 'brotherComponentsTransferParams' })">跳转到兄弟组件传参测试页面</el-button>
        <!-- 跳转到 dialog 页面 -->
        <el-button @click="router.push({ name: 'dialog' })">跳转到 Dialog 组件</el-button>
        <!-- 跳转到 ElementPlusBacktop 测试页面 -->
        <el-button @click="router.push({ name: 'elementPlusBacktop' })">跳转到 ElementPlusBacktop 组件</el-button>
        <!-- 跳转到 ElementFormTest 页面 -->
        <el-button @click="router.push({ name: 'elementFormTest' })">跳转到 ElementFormTest 组件</el-button>
        <!-- 跳转到 Hook 测试页面 -->
        <el-button @click="router.push({ name: 'hookTest' })">跳转到 Hook 测试页面</el-button>
        <!-- 跳转到 Pinia 测试页面 -->
        <el-button @click="router.push({ name: 'piniaTest' })">跳转到 Pinia 测试页面</el-button>
        <!-- 跳转到依赖注入测试页面 -->
        <el-button @click="router.push({ name: 'dependencyInjectionTest' })">跳转到依赖注入测试页面</el-button>
        <!-- 跳转到生命周期测试组件 -->
        <el-button @click="router.push({ name: 'lifecycleTest' })">跳转到生命周期测试组件</el-button>
        <!-- 跳转到 deep 强改UI组件样式测试页面 -->
        <el-button @click="router.push({ name: 'deepTest' })">跳转到 deep 强改UI组件样式测试页面</el-button>
        <!-- 跳转到 transition 测试页面 -->
        <el-button @click="router.push({ name: 'transitionTest' })">跳转到 transition 测试页面</el-button>
        <!-- 跳转到列表过渡测试页面 -->
        <el-button @click="router.push({ name: 'transitionListTest' })">跳转到列表过渡测试页面</el-button>
        <!-- 跳转到组件拖曳测试页面 -->
        <el-button @click="router.push({ name: 'dragTest' })">跳转到组件拖曳测试页面</el-button>
        <!-- 跳转到全局过滤器测试页面 -->
        <el-button @click="router.push({ name: 'globalFilterTest' })">跳转到全局过滤器测试页面</el-button>
        <!-- 跳转到 vuemodel 测试页面 -->
        <el-button @click="router.push({ name: 'vuemodelTest' })">跳转到 vuemodel 测试页面</el-button>
        <!-- 跳转到 VueWatch 测试页面 -->
        <el-button @click="router.push({ name: 'vueWatchTest' })">跳转到 VueWatch 测试页面</el-button>
        <!-- 跳转到 watchEffect 测试页面 -->
        <el-button @click="router.push({ name: 'watchEffectTest' })">跳转到 watchEffect 测试页面</el-button>
        <!-- 跳转到 v-bind 测试页面 -->
        <el-button @click="router.push({ name: 'vbindTest' })">跳转到 v-bind 测试页面</el-button>
        <!-- computed 购物车示例页面 -->
        <el-button @click="router.push({ name: 'computedTest' })">跳转到 computed 购物车示例页面</el-button>
        <!-- 跳转到 vueon 测试页面 -->
        <el-button @click="router.push({ name: 'VueOnTest' })">跳转到 vueon 测试页面</el-button>
        <!-- 跳转到 less 测试页面 -->
        <el-button @click="router.push({ name: 'lessTest' })">跳转到 less 测试页面</el-button>
        <!-- 跳转到测试页面 -->
        <el-button @click="router.push({ name: 'test' })">跳转到测试页面</el-button>
    </div>
</template>

<style lang="less" scoped>
</style>