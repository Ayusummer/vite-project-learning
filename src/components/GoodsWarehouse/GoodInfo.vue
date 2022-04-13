<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { data } from './goods.json'

const route = useRoute();
const router = useRouter();

const item = data.find(v => v.id === Number(route.params.id))
</script>

<template>
    <div>
        <!-- 返回商品货仓界面 -->
        <el-button @click="router.push('/goodsWarehouse')">返回商品货仓界面</el-button>
        <!-- 动态路由传参, 导入数据结合传入id提取目标数据 -->
        <el-card>
            <template #header>
                <div class="card-header">动态路由传参, 导入数据结合传入id提取目标数据</div>
            </template>
            <div>
                <el-row>
                    id: {{ item?.id }}
                </el-row>
                <el-row>
                    商品名称 {{ item?.name }}
                </el-row>
                <el-row>
                    商品价格: {{ item?.price }}
                </el-row>
            </div>
        </el-card>
        <!-- params 传参, route.params 接收参数 -->
        <el-card>
            <template #header>
                <div class="card-header">params 传参, route.params 接收参数</div>
            </template>
            <div>
                <el-row>
                    id: {{ route.params?.id }}
                </el-row>
                <el-row>
                    商品名称 {{ route.params?.name }}
                </el-row>
                <el-row>
                    商品价格: {{ route.params?.price }}
                </el-row>
            </div>
        </el-card>
        <!-- query传参, useRoute().query 接收参数 -->
        <el-card>
            <template #header>
                <div class="card-header">query传参, useRoute().query 接收参数</div>
            </template>
            <div>
                <el-row>
                    id: {{ route.query?.id }}
                </el-row>
                <el-row>
                    商品名称 {{ route.query?.name }}
                </el-row>
                <el-row>
                    商品价格: {{ route.query?.price }}
                </el-row>
            </div>
        </el-card>
    </div>
</template>

<style lang="less" scoped>
.card-header {
    // 文字居中
    text-align: center;
}
</style>