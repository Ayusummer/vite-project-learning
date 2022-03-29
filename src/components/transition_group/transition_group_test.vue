<script setup lang="ts">
import {ref, reactive} from 'vue'
import 'animate.css'

const list = reactive<number[]>([1, 2, 3, 4, 5, 6])

const add = () => {
    list.push(list.length + 1)
}

const dec = () => {
    list.pop()
}
</script>

<template>
<div>
    <button @click="add">添加</button>
    <button @click="dec">删除</button>
    <div class="wraps">
        <transition-group 
            enter-active-class="animate__animated animate__bounce"
            leave-active-class="animate__animated animate__fadeOut"
        >
            <div v-for="item in list" :key="item" class="box">
                {{item}}
            </div>
        </transition-group>
    </div>
</div>
</template>

<style lang="less" scoped>
.wraps {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;  // 不换行
    border: 1px solid #ccc;
    .box{
        margin: 10px;
    }
}
</style>