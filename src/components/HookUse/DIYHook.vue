<!-- 自定义hook使用测试 -->
<script setup lang="ts">
import useBase64 from '../../hooks/ImageToBase64'
useBase64({ el: '#img' }).then(res => {
    console.log(res.baseUrl)
})

</script>

<template>
    <div>
        <!-- 返回导航页面 -->
        <el-button @click="$router.push('/navigation')">返回导航页面</el-button>
        <img id="img" width="512" height="512" src="../../assets/M4.png" alt="M4" />
    </div>
</template>

<style lang="less" scoped>
</style>