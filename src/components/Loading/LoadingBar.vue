<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue'

let speed: Ref<number> = ref<number>(1)
let bar = ref<HTMLElement>()
let timer: Ref<number> = ref<number>(0)

const startLoading = (): void => {
    let dom = bar.value as HTMLElement
    console.log(dom)
    window.requestAnimationFrame(function fn() {
        if (speed.value < 100) {
            speed.value += 5
            dom.style.width = `${speed.value}%`
            timer.value = window.requestAnimationFrame(fn)
        } else {
            speed.value = 0
            dom.style.width = `${speed.value}%`
            window.cancelAnimationFrame(timer.value)
        }
    }
    )
}

const stopLoading = (): void => {
    // let dom = bar.value as HTMLElement
    // setTimeout(() => {
    //     window.requestAnimationFrame(() => {
    //         speed.value = 100;
    //         dom.style.width = `${speed.value}%`
    //     })
    // }, 500)
    console.log("233")
}

// onMounted(() => {
//     startLoading()
//     stopLoading()
// })

defineExpose({
    startLoading,
    stopLoading,
})

</script>

<template>
    <div class="wraps">
        <div ref="bar" class="bar"></div>
    </div>
</template>

<style lang="less" scoped>
.wraps {
    position: fixed;
    top: 0;
    width: 100%;
    height: 2px;

    .bar {
        height: inherit;
        width: 0;
        background: rgb(72, 154, 221);
    }
}
</style>