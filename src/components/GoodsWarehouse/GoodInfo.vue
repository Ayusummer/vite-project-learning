<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
    <div>
        <el-row>
            id: {{ route.query.id }}
        </el-row>
        <el-row>
            商品名称 {{ route.query.name }}
        </el-row>
        <el-row>
            商品价格: {{ route.query.price }}
        </el-row>
</div>
</template>

<style lang="less" scoped>
</style>