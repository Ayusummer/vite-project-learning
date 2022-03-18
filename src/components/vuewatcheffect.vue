<script setup lang="ts">
import { watchEffect, ref } from 'vue'

let message = ref<string>('233')
let message2 = ref<string>("寄")

const stop = watchEffect((oninvalidate) => {
    // let ipt: HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement
    console.log("messgae===>" + message.value)
    // console.log("messgae2===>" + message2.value)

    // console.log(ipt, "ell")

    oninvalidate(() => {
        console.log("before")
    })
}, {
    flush: "post",
    onTrigger: (e) => {
        debugger
    }
}

);

const stopWatch = () => stop()

</script>

<template>
    <div>
        <input id="ipt" type="text" v-model="message" />
        <input type="text" v-model="message2" />
        <button @click="stopWatch">停止监听</button>
    </div>
</template>

<style scoped>
</style>


