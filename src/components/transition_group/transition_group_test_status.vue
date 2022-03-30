<!-- 状态过渡 -->
<script setup lang="ts">
import gsap from 'gsap'
import { reactive, watch } from 'vue'

const num = reactive({
    current: 0,
    tweenedNumber: 0
})

watch(() => num.current, (newVal, oldVal) => {
    gsap.to(num, {
        duration: 1,
        tweenedNumber: newVal,
        onUpdate: () => {
            console.log(num.tweenedNumber)
        }
    })
})
</script>

<template>
    <div>
        <input v-model="num.current" step="20" type="number" />
        <div>{{ num.tweenedNumber.toFixed(0) }}</div>
    </div>
</template>

<style lang="less" scoped>
</style>