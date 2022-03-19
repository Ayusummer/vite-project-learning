<script setup lang="ts">
</script>

<template>
    <div class="content_layout">
        <div class="content_layout-items" :key="item" v-for="item in 100">{{ item }}</div>
    </div>
</template>

<style lang="less" scoped>
.content_layout {
    flex: 1;
    margin: 20px;
    border: 1px solid #ccc;
    overflow: auto;
    &-items {
        padding: 20px;
        border: 1px solid #ccc;
    }
}
</style>