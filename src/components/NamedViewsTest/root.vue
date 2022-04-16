<script setup lang="ts">
</script>

<template>
    <!-- 返回主界面 -->
    <el-button @click="$router.push('/')">返回主界面</el-button>
    <!-- 跳转到 namedView主界面 -->
    <el-button @click="$router.push({ name: 'namedView' })">跳转到 namedView 主界面</el-button>
    <!-- 跳转到 user1 -->
    <el-button @click="$router.push('/namedView/user1')">跳转到 user1</el-button>
    <!-- 跳转到 user2 -->
    <el-button @click="$router.push('/namedView/user2')">跳转到 user2</el-button>
    <router-view></router-view>
    <router-view name="b"></router-view>
    <router-view name="c"></router-view>
</template>

<style lang="less" scoped>
</style>