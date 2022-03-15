<script setup lang="ts">
import { ref, watch, reactive } from 'vue'

let message = ref({
    nav: {
        bar: {
            name: "233"
        }
    }
})

let message2 = reactive({
    nav: {
        bar: {
            title: "233"
        }
    }
})

watch(message, (newVal, oldVal) => {
    console.log("message新值:" + newVal + "，旧值：" + oldVal)
},
    {
        deep: true
    }
)

watch(() => message2.nav.bar.title, (newVal, oldVal) => {
    console.log("message2新值:" + newVal + "，旧值：" + oldVal)
})


</script>

<template>
    <div>
        message.nav.bar.name:
        <input v-model="message.nav.bar.name" type="text" />
    </div>
    <div>
        message2.nav.bar.title:
        <input v-model="message2.nav.bar.title" type="text" />
    </div>
</template>

<style>
</style>