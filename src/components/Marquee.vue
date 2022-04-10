<!-- 跑马灯组件 -->
<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'

// let props = defineProps({
//     msg1: String
// })
// console.log(props.msg1)

let msg = ref<string>("这是一个跑马灯")
let interval_id: number = 0

const startMethod = (): void => {
    // 开始定时器之前进行判断, 避免产生多个定时器
    if (interval_id) {
        return
    }
    // 添加定时器: 点击按钮后, 让字符串持续滚动
    interval_id = window.setInterval((): void => {
        // 获取 msg 的第一个字符
        let start: string = msg.value.substring(0, 1);
        // 获取 后面的所有字符
        let end = msg.value.substring(1);
        // 重新拼接得到新的字符串，并赋值给 this.msg
        msg.value = end + start;
        console.log(msg.value)
    }, 400)
}

const stopMethod = (): void => {
    // 停止定时器
    clearInterval(interval_id);
    // 将 intervalId 置为 0
    interval_id = 0;
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

// 返回 navigation 界面
const backToNavigation = (): void => {
    router.push({
        name: 'navigation'
    })
}


</script>

<template>
    <el-button @click="backToNavigation">返回 navigation 界面</el-button>
    <el-button>
        <router-link to="/">HelloWorld</router-link>
    </el-button>
    <!-- <p>{{ msg1 }}</p> -->
    <p>{{ msg }}</p>
    <input type="button" value="跑马灯走起" @click="startMethod" />
    <input type="button" value="跑马灯停止" @click="stopMethod" />
    <!-- 前进 1 级界面 -->
    <el-button @click="forward">前进 1 级界面</el-button>
    <!-- 回退 1 级界面 -->
    <el-button @click="back">回退 1 级界面</el-button>
</template>

<style></style> 