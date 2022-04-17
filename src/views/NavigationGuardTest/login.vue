<script setup lang="ts">
import { reactive, ref, Ref } from 'vue'
import type { FormInstance, FormItemRule } from 'element-plus'
import { ElMessage } from 'element-plus'
import router from '@/router'
import LoadingBar from '@/components/Loading/LoadingBar.vue'

// 定义表单数据类型
type FormData = {
    account: string,
    password: string
}

// 定义表单验证规则
const form = ref<FormInstance>()

// 定义规则类型
type Rules = {
    [K in keyof FormData]?: Array<FormItemRule>
}

// 定义表单数据
const formLabelAlign = reactive<FormData>({
    // 账号
    account: '',
    // 密码
    password: '',
})

// 定义规则
const rules = reactive<Rules>({
    account: [
        {
            required: true,
            message: '请输入账号',
            type: 'string',
        },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            type: 'string',
        },
    ],
})

// 密码输入框的显示状态
const showPassword: Ref<boolean> = ref(false)


//  登录函数
const login = (): void => {
    form.value?.validate((validate) => {
        if (validate) {
            // 跳转到首页
            router.push('/navigation')
            // 设置token
            localStorage.setItem('token', '1')
        } else {
            // 提示错误
            ElMessage.error('请检查表单错误')
        }
    })
}

</script>

<template>
    <!-- loadingbar 测试 -->
    <!-- <LoadingBar></LoadingBar> -->
    <div class="login">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <!-- 返回主界面 -->
                    <el-button @click="$router.push('/')">返回主界面</el-button>
                    Login
                </div>
            </template>
            <el-form :model="formLabelAlign" :rules="rules" ref="form">
                <el-form-item label="账号:" prop="account">
                    <el-input v-model="formLabelAlign.account" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码:" prop="password">
                    <!-- <el-input type="password" v-model="formLabelAlign.password" /> -->
                    <el-input v-model="formLabelAlign.password" type="password" show-password show-password-icon
                        @click="showPassword = !showPassword" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item>
                    <!-- 登录按钮 -->
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>

            </el-form>
        </el-card>
    </div>
</template>

<style lang="less" scoped>
.login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box-card {
    width: 480px;
}
</style>