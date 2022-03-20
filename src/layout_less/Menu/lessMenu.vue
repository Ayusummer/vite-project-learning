<script setup lang="ts">
import { reactive } from 'vue'

/* 子组件通过 defineExpose 将内部属性 exposeArray 暴露给父组件 */
const exposeArray = reactive<number[]>([7, 8, 9])
defineExpose({
    exposeArray
})


/* 子组件给父组件传参 */
const list = reactive<number[]>([4, 5, 6])
const emit = defineEmits(['onclickTap'])
const clickTap = () => {
    emit('onclickTap', list)
}

// 参数默认值
type Props = {
    message?: string
    data_array?: number[]
    omit?: string
}
withDefaults(defineProps<Props>(), {
    message: 'Hello World',
    data_array: () => [1, 2, 3],
    omit: 'omit'
})

</script>

<template>
    <div class="menu_less">
        菜单区域
        {{ message }}
        <div v-for="item in data_array" :key="item">{{ item }}</div>
        {{ omit }}
        <button @click="clickTap">派发给父组件</button>
    </div>
</template>

<style lang="less" scoped>
.menu_less {
    width: 200px;
    border-right: 1px solid #ccc;
}
</style>