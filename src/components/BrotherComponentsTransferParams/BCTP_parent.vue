<!-- 兄弟组件传参-父组件 -->
<script setup lang="ts">
import BCTP_A from './BCTP_A.vue'
import BCTP_B from './BCTP_B.vue'
import { Ref, ref } from 'vue'
// 定义一个 ref 变量, 用于接收 BCTP_A 组件的 flag 值, 并且设置默认值为 false
let BCTP_A_flag: Ref<boolean> = ref(false)
// 接收 BCTP_A 组件传递过来的 flag 值
const getFlag = (flag: boolean) => {
    BCTP_A_flag.value = flag
    console.log('父组件接收到 A 组件的传值为:', BCTP_A_flag.value)
}
</script>

<template>
    <div>
        <BCTP_A @transferFlag="getFlag"></BCTP_A>
        <BCTP_B :flag="BCTP_A_flag"></BCTP_B>
    </div>
</template>

<style lang="less" scoped>
</style>