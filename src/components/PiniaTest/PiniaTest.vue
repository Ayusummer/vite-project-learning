<script setup lang="ts">
import { useTestStore } from '@/store';

const useTest = useTestStore()
</script>

<template>
    <div>pinia:{{ useTest.current }} -- {{ useTest.name }}</div>
</template>

<style lang="less" scoped>
</style>