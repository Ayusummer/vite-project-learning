<!-- v-bind 示例 -->
<script setup lang="ts">
import { ref, Ref } from 'vue'

let flag: Ref<boolean> = ref(false)

type Cls = {
    other: boolean,
    h: boolean
}

const flag1: Cls = {
    other: false,
    h: true
}


type Style = {
    height: string,
    color: string
}

const style: Style = {
    height: "300px",
    color: "blue"
}

</script>

<template>
<div>
    <!-- 返回导航页面 -->
    <el-button @click="$router.push('/navigation')">返回导航页面</el-button>
    <!-- v-model 下拉菜单绑定 flag -->
    <select v-model="flag">
        <option type="string" value="true">true</option>
        <option type="string" value="false">false</option>
    </select>
    <!-- 绑定样式 -->
    <div :class="[flag ? 'active' : 'other', 'h']">12323</div>
    <!-- 利用元组进行样式绑定 -->
    <div :class="flag1">{{ flag1 }}</div>
    <div :style="style">2222</div>
</div>

</template>

<style scoped>
.active {
    color: red;
}
.other {
    color: blue;
}
.h {
    height: 300px;
    border: 1px solid #ccc;
}
</style>
