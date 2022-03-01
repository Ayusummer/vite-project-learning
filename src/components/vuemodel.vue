<!-- v-model 实现简易计算器, v-model 双向绑定示例 -->
<script setup lang="ts">
import { ref, Ref } from 'vue'

const n1: Ref<number> = ref(0)
const n2: Ref<number> = ref(0)
const result: Ref<number> = ref(0)
const opt: Ref<string> = ref('+')

const message: Ref<string> = ref("v-model字符串")

const calculate = (): void => {
    switch (opt.value) {
        case '+':
            result.value = n1.value + n2.value
            break
        case '-':
            result.value = n1.value - n2.value
            break
        case '*':
            result.value = n1.value * n2.value
            break
        case '/':
            result.value = n1.value / n2.value
            break
        default:
            break
    }
}

</script>

<template>
    {{ result }}
    <input type="number" v-model="n1" />
    <select v-model="opt">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="number" v-model="n2" />
    <input type="button" value="=" @click="calculate" />
    <input type="number" v-model="result" />

    <input v-model="message" type="text" />
    <div>{{ message }}</div>
</template>

<style scoped>
</style> 