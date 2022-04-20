<!-- 登录组件 -->
<script setup lang="ts">
import {reactive, onMounted, onUnmounted, onActivated, onDeactivated} from 'vue'


// 登录表单
const form = reactive({
    login:"",
    password:"",
    code:""
})

// 登录按钮触发事件
const submit = () => {
    console.log(form)
}

onMounted(() => {
    console.log("register mounted")
})

onUnmounted(() => {
    console.log("register unmounted")
})

onActivated(() => {
    console.log("register activated")
})

// 设置切换到登录界面时, 注册界面的验证码会清空
onDeactivated(() => {
    console.log("register deactivated")
    form.code=""
    console.log("验证码已清空")
})
</script>

<template>
<div>
    <!-- 返回导航页面 -->
    <el-button @click="$router.push('/navigation')">返回导航页面</el-button>
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
        <!-- 验证码输入区域 -->
        <tr>
            <td>验证码</td>
            <td>
                <input type="text" v-model="form.code" placeholder="请输入验证码">
            </td>
        </tr>
    </table>
    <button @click="submit">注册</button>

</div>
</template>

<style lang="less" scoped>
</style>