<script setup lang="ts">

const fatherClick = (): void => {
    console.log("father 被点击了")
}

const childClick = (): void => {
    console.log("child 被点击了")
}

</script>

<template>
<div>
    <!-- 返回导航页面 -->
    <el-button @click="$router.push('/navigation')">返回导航页面</el-button>
    <div class="father" @click.self="fatherClick">
        <div class="child" @click="childClick"></div>
    </div>
</div>

</template>

<style scoped>
.father {
    height: 300px;
    width: 300px;
    background: pink;
}

.child {
    width: 200px;
    height: 200px;
    background: green;
}
</style>