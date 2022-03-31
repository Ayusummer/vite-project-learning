<script setup lang="ts">
import DialogVModel from './Dialog_vmodel.vue'
import { ref, Ref } from 'vue'

let flag: Ref<boolean> = ref<boolean>(true)
let title: Ref<string> = ref<string>("咸鱼型233")
let change: Ref<boolean> = ref<boolean>(false)
</script>

<template>
    <div>
        <button @click="flag = !flag">change {{ flag }}</button>
        <div>标题:{{ title }}</div>
        <!-- 单个双向绑定可以直接 v-model="xxx" 多个的时候可以用 v-model:xxx="xxx" -->
        <DialogVModel v-model:flag="flag" v-model:title="title" v-model.change="change" />
    </div>
</template>

<style lang="less" scoped></style>