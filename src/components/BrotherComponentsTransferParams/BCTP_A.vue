<!-- 与 B 组件互为兄弟组件 -->
<script setup lang="ts">
import { ref, Ref } from 'vue'
import Bus from '../../Bus'

const emit = defineEmits(['transferFlag'])
let flag: Ref<boolean> = ref(false)

const emitFlag = () => {
    flag.value = !flag.value
    console.log("A组件待传值flag:" + flag.value + "到父组件")
    emit('transferFlag', flag.value)
}

// 使用 bus 传值给 B 组件
const emitFlagToBByBus = () => {
    flag.value = !flag.value
    Bus.emit('transferFlagToBByBus', flag.value)
}
</script>

<template>
    <div class="BCTP_A">
        <button @click="emitFlag">flag 取反并传给 parent</button>
        <button @click="emitFlagToBByBus">flag 取反并通过 Bus 派发给 B 组件</button>
    </div>
</template>

<style lang="less" scoped>
.BCTP_A {
    width: 200px;
    height: 200px;
    background: blue;
    color: #fff;
}
</style>