<!-- 全局组件学习: 封装一个 Card 组件 -->
<script setup lang="ts">

type Props = {
    content: string
}
defineProps<Props>()

// 两种写法是一致的
// defineProps<{
//     content: string
// }>()

</script>

<template>
    <div class="card">
        <div class="card-header">
            <div>标题</div>
            <div>副标题</div>
        </div>
        <div v-if="content" class="card-content">{{ content }}</div>
    </div>
</template>



<style lang="less" scoped>
@border: #ccc;
.card {
    width: 300px;
    border: 1px solid @border;
    border-radius: 3px;
    &:hover {
        box-shadow: 0 0 10px @border;
    }

    &-content {
        padding: 10px;
    }
    &-header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid @border;
    }
}
</style>