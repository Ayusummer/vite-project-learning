<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const counter = ref(0)
const enabled = ref(false)

watchEffect(() => {
    if (enabled.value)
        console.log(counter.value)
    else
        console.log("disabled")
})

</script>

<template>
    <div>
        {{ counter }}
        <button @click="counter += 1">counter + 1</button>
    </div>
    <div>
        {{ enabled }}
        <button @click="enabled = !enabled">enabled change</button>
    </div>
</template>

<style lang="less" scoped>
</style>