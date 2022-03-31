<script setup lang="ts">
import { reactive } from 'vue'

type names = {
    name: string,
    age: number
}
const data = reactive<names[]>([
    {
        name: '张三',
        age: 18
    },
    {
        name: '李四',
        age: 20
    },
    {
        name: '王五',
        age: 22
    }
])

</script>

<template>
    <div>
        <header class="header">
            <slot name="dialog_header" />
        </header>
        <main class="main">
            <div v-for="item in data">
                <slot :data="item"></slot>
            </div>
        </main>
        <footer class="footer">
            <slot name="dialog_footer" />
        </footer>
    </div>
</template>

<style lang="less" scoped>
.header {
    height: 100px;
    background: red;
    color: #fff;
}
.main {
    height: 100px;
    background: green;
    color: #fff;
}
.footer {
    height: 100px;
    background: blue;
    color: #fff;
}
</style>