<script setup lang="ts">
import router from '@/router'
</script>

<template>
    <el-card>
        <template #header>
            <div class="card-header">我是父路由</div>
            <div class="card-header">
                <!-- 返回主界面 -->
                <el-button @click="router.push('/navigation')">返回导航界面</el-button>
                <!-- 跳转到货仓主界面 -->
                <el-button @click="router.push('/goodsWarehouse/')">返回货仓主界面</el-button>
                <!-- 前往商品1详情页 -->
                <el-button @click="router.push('/goodsWarehouse/goodInfo/1')">前往商品1详情页</el-button>
            </div>
        </template>
        <router-view></router-view>
    </el-card>
</template>

<style lang="less" scoped>
.card-header {
    // 文字居中
    text-align: center;
}
</style>