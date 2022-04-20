<script setup lang="ts">
import { useTestStore } from '@/store';
import { userStore } from '@/store/User'
// 导入 storeToRefs 以从 store 中获取响应式数据
import { storeToRefs } from 'pinia';
// element-plus button 相关依赖
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'

const userTest = userStore()

// 当有 action 执行时便会执行 $onAction 函数
userTest.$onAction((args) => {
    console.log("有 action 执行了 ↓")
    console.log(args)
    console.log("有 action 执行了 ↑")
})

// 通过 $subscribe 订阅 state 的改变
userTest.$subscribe((args, state) => {
    console.log(args)
    console.log('userTest state:', state)
})

// 调用 userTest 中的 setUser 函数设置 user
const changeUserByAction = () => {
    userTest.setUser()
}

// 调用 userTest 中的 setUserAsync 函数设置 user
const changeUserByActionAsync = () => {
    userTest.setUserAsync()
}
const useTest = useTestStore()
// 调用 useTest actions 中的  printStudentState() 函数打印 studentSTore 中的 name
console.log('studentStoreName:')
useTest.printStudentState()

// 直接结构 useTest 不具有响应式特性
const { current, name } = useTest
// 通过 storeToRefs 将 store 中的数据转换为响应式数据
const { current: currentRef, name: nameRef } = storeToRefs(useTest)


// 直接修改属性值实现 useTest.current++
const useTestChange1 = () => {
    useTest.current++
}
// 方法2: 通过$patch 批量修改属性值
const useTestChange2 = () => {
    useTest.$patch({
        name: '马克杯',
        current: 10
    })
}
// 方法3: $patch 函数式写法
const useTestChange3 = () => {
    useTest.$patch((state) => {
        state.name = '立牌'
        state.current = 5
    })
}
// 方法4: 通过原始对象修改整个实例(缺点在于需要修改state所有属性, 因此一般不建议使用)
const useTestChange4 = () => {
    useTest.$state = {
        name: '小夜灯',
        current: 7
    }
}
// 方法5: 通过 actions 修改
const useTestChange5 = () => {
    useTest.currentIncrement()
}
</script>

<template>
    <div class="box">
        <!-- 返回导航页面 -->
        <el-button @click="$router.push('/navigation')">返回导航页面</el-button>
        <el-backtop target=".box" :right="40" :bottom="40" :visibility-height="1">UP</el-backtop>
        <!-- 用于占位的 card -->
        <div>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">用于占位的 card</div>
                </template>
                用于占位的 card
            </el-card>
        </div>
        <!-- 用于占位的 card -->
        <div>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">用于占位的 card</div>
                </template>
                用于占位的 card
            </el-card>
        </div>
        <!-- 用于占位的 card -->
        <div>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">用于占位的 card</div>
                </template>
                用于占位的 card
            </el-card>
        </div>
        <!-- PInia API 测试 -->
        <div>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">PInia API 测试</div>
                </template>
                <el-row>
                    <el-button @click="userTest.$reset()">通过 $reset 重置 userTest 到初始状态</el-button>
                </el-row>
            </el-card>
        </div>
        <!-- actions 同/异步写法, getters 测试 -->
        <div>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">actions 同/异步写法, getters 测试</div>
                </template>
                <p>actions-user: {{ userTest.user }}</p>
                <p>actions-name: {{ userTest.name }}</p>
                <p>getters: {{ userTest.newName }}</p>
                <el-button @click="changeUserByAction">通过 action 修改 user</el-button>
                <el-button @click="changeUserByActionAsync">通过 action 异步修改 user</el-button>
            </el-card>
        </div>
        <!-- 基础 state 修改测试, actions 测试 -->
        <div>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">基础 state 修改测试, actions 测试</div>
                </template>
                <el-row>pinia: {{ useTest.name }} -- ${{ useTest.current }}</el-row>
                <el-row>直接解构: name: {{ name }} --- current: {{ current }} --- 不具有响应式特性</el-row>
                <el-row>通过 storeToRefs 解构: name: {{ nameRef }} --- current: {{ currentRef }} --- 具有响应式特性</el-row>
                <el-row>
                    <el-button type="primary" @click="useTestChange1">increment-直接修改属性值</el-button>
                    <el-button type="primary" @click="useTestChange2">通过$patch批量修改属性</el-button>
                    <el-button type="primary" @click="useTestChange3">$patch的函数式写法</el-button>
                </el-row>
                <el-row>
                    <el-button type="primary" @click="useTestChange4">通过原始对象修改整个实例</el-button>
                    <el-button type="primary" @click="useTestChange5">通过 actions 修改 current++</el-button>
                </el-row>
            </el-card>
        </div>
    </div>
</template>

<style lang="less" scoped>
.box {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
.card-header {
    // 文字居中
    text-align: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 620px;
}
</style>