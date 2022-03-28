<!-- 登录组件 -->
<script setup lang="ts">
import {reactive, onMounted, onUnmounted, onActivated, onDeactivated} from 'vue'
// 只有使用了 keep-alive 组件才会有 onActivated 和 onDeactivated 事件

// 登录表单
const form = reactive({
    login:"",
    password:""
})

// 登录按钮触发事件
const submit = () => {
    console.log(form)
}

onMounted(() => {
    console.log("login mounted")
})

onUnmounted(() => {
    console.log("login unmounted")
})

onActivated(() => {
    console.log("login activated")
})

onDeactivated(() => {
    console.log("login deactivated")
})
</script>

<script lang="ts">
export default{
    name: "Login"
}
</script>

<template>
<div>
    <!-- 账密输入表单 -->
    <table>
        <!-- 账号输入区域 -->
        <tr>
            <td>账号</td>
            <td>
                <input type="text" v-model="form.login" placeholder="请输入账号">
            </td>
        </tr>
        <!-- 密码输入区域 -->
        <tr>
            <td>密码</td>
            <td>
                <input type="password" v-model="form.password" placeholder="请输入密码">
            </td>
        </tr>
    </table>
    <button @click="submit">登录</button>

</div>
</template>

<style lang="less" scoped>
</style>