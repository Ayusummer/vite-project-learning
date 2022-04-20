<!-- 全局过滤器测试: 字符串格式化 -->
<script setup lang="ts">
// import { app } from '../../main'
</script>

<template>
<div>
    <!-- 返回导航页面 -->
    <el-button @click="$router.push('/navigation')">返回导航页面</el-button>
    <!-- <div>{{ app.config.globalProperties.$filters.format('咸鱼型') }}</div> -->
    <div>{{ $filters.format('咸鱼型') }}</div>
    <div>{{ $env }}</div>
</div>

</template>

<style lang="less" scoped>
</style>