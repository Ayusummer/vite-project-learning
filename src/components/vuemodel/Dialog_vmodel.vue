<script setup lang="ts">
import { ref, Ref } from 'vue'
type Props = {
    flag: boolean,
    title: string
    modelModifiers?: {
        change: boolean,
    }
}
const PropsData = defineProps<Props>()
console.log(PropsData)

// 改值:
const emit = defineEmits(['update:flag', 'update:title', 'update:modelModifiers', 'update:peopleModifiers'])
const close = () => {
    if (PropsData.modelModifiers?.change) {
        emit("update:title", "子组件已接收回传change")
    } else {
        console.log(PropsData.modelModifiers?.change)
        emit("update:title", "子组件未接收到change信号")
    }
    emit('update:flag', false)
    // emit('update:title', '咸鱼型')
}

</script>

<template>
    <div v-if="flag" class="Dialog_vmodel">
        <div class="Dialog_vmodel-header">
            <span>标题---{{ title }}</span>
            <span @click="close">X</span>
        </div>
        <div class="Dialog_vmodel-content">
            <span>内容</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.Dialog_vmodel {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &-header {
        header-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
    &-content {
        padding: 10px;
    }
}
</style>