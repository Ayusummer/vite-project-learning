<script setup lang="ts">
import { ref } from 'vue'
// 引入 vue-router
import router from '@/router'

defineProps<{ msg: string }>()

const count = ref(0)

// 使用 router.push 跳转到跑马灯页面
const switchToMarquee = (): void => {
  router.push('/marquee')
}

// router.push 传对象
const switchToMarquee_object = (): void => {
  router.push({
    path: '/marquee',
    query: {
      msg: '这是一个跑马灯'
    }
  })
}

// 不留示例记录跳转
const switchToMarquee_no_record = (): void => {
  router.replace('/marquee')
}

// 前进 1 级界面
const forward = (): void => {
  router.forward()
  // 或者 router.go(1)
}

// 回退 1 级界面
const back = (): void => {
  router.back()
  // 或者 router.go(-1)
}
</script>

<template>
  <div class="vueLogo">
    <img alt="Vue logo" src="@/assets/logo.png" />
  </div>
  <el-button>
    <router-link :to="{
      name: 'marquee'
    }">跑马灯组件跳转</router-link>
  </el-button>
  <!-- 使用 a 标签跳转 -->
  <el-button>
    <a href="/marquee">使用a标签跳转到跑马灯</a>
  </el-button>
  <!-- 使用 router.push 跳转 -->
  <el-button @click="switchToMarquee">使用router.push跳转到跑马灯</el-button>
  <!-- router.push 传对象 -->
  <el-button @click="switchToMarquee_object">使用router.push传对象跳转到跑马灯</el-button>
  <!-- 不留历史记录跳转 -->
  <el-button @click="switchToMarquee_no_record">不留历史记录跳转到跑马灯</el-button>
  <!-- 前进 1 级界面 -->
  <el-button @click="forward">前进 1 级界面</el-button>
  <!-- 回退 1 级界面 -->
  <el-button @click="back">回退 1 级界面</el-button>

  <!-- 示例内容区域 -->
  <div class="hello_msg">
    <h1>{{ msg }}</h1>
    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
      See
      <code>README.md</code> for more information.
    </p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<!-- 在<style>标签中使用 scoped 属性会限制样式只影响 <style> 标签的父元素和它所有的后代元素。 -->
<style scoped>.hello_msg {
  text-align: center;
}

.vueLogo {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}</style>
