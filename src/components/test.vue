<template>
  <div>
    <!-- 返回主界面 -->
    <el-button @click="$router.push('/navigation')">返回导航界面</el-button>
    <p v-for="item in 20" :key="item" class="item">{{ item }}</p>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  /* 显示滚动条 */
  overflow: auto;
}
</style>