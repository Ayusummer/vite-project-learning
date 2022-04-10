<script setup lang="ts">
import router from '@/router'
import { data } from './goods.json'

type good = {
    id: number;
    name: string;
    price: number;
}

// 转到商品详情页_path+query
const toGoodsDetail = (good: good) => {
    router.push({
        path: '/goodInfo',
        query: good
    })
}



</script>

<template>
    <div>
        <el-table :data=data>
            <el-table-column label="商品名称" prop="name" width="180">
            </el-table-column>
            <el-table-column label="商品价格" prop="price" width="180">
            </el-table-column>
            <!-- 商品id -->
            <el-table-column label="商品id" prop="id" width="180">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <!-- 跳转到商品详情页 -->
                <template #default="scope">
                    <el-button @click="toGoodsDetail(scope.row)" type="text">查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>
</div>
</template>

<style lang="less" scoped>
</style>
