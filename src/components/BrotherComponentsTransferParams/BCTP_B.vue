<!-- 与 A 组件互为兄弟组件 -->
<script setup lang="ts">
import Bus from '../../Bus'
import { ref, Ref } from 'vue'

let flagB = ref(false)  // 定义一个 ref 变量, 用于接收 A 组件的 flag 值, 并且设置默认值为 false

type Props = {
    flag: boolean
}
defineProps<Props>()

// 利用 Bus 接收 A 组件派发的 flag
Bus.on('transferFlagToBByBus', (flag: boolean) => {
    flagB.value = flag
    console.log('B 组件接收到 A 组件的传值为:', flagB.value)
})
</script>

<template>
    <div class="BCTP_B">
        <div>B 组件接收到父组件传过来的值为: {{ flag }}</div>
        <div>B 组件从 Bus 接收到从 A 组件传过来的值为: {{ flagB }}</div>
    </div>
</template>

<style lang="less" scoped>
.BCTP_B {
    width: 200px;
    height: 200px;
    background: green;
    color: #fff;
}
</style>