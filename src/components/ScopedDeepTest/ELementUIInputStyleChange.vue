<!-- 创建时间: 2022/4/2-21-04-29 -->
<!-- 路径: src/components/ScopedDeepTest -->
<!-- IDE: WebStorm -->
<!-- 创建者: 233 -->
<template>
<div style="margin:200px;">
  <el-input class="ipt"></el-input>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.ipt{
  // 样式穿透修改 input 样式
  :deep(input){
    background-color:red;
  }
}
</style>