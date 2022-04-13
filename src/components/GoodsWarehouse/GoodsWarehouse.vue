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

// 转到商品详情页_name+params
const toGoodsDetail_params = (good: good) => {
    router.push({
        name: 'goodInfo',
        params: good
    })
}

// 转到商品详情页_动态路由传id
const toGoodsDetail_dynamic = (good: good) => {
    router.push({
        name: 'goodInfo',
        params: {
            id: good.id
        }
    })
}

</script>

<template>
    <div>
        <!-- 返回主界面 -->
        <el-button @click="router.push('/')">返回主界面</el-button>
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
                    <el-row>
                        <el-button @click="toGoodsDetail(scope.row)" type="text">查看详情_path+query</el-button>
                    </el-row>
                    <el-row>
                        <!-- 使用 params 路由传参 -->
                        <el-button @click="toGoodsDetail_params(scope.row)" type="text">查看详情_name+params</el-button>
                    </el-row>
                    <el-row>
                        <!-- 使用动态 路由传参 -->
                        <el-button @click="toGoodsDetail_dynamic(scope.row)" type="text">查看详情_动态路由传id</el-button>
                    </el-row>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style lang="less" scoped>
</style>
