<script setup lang="ts">
// 引入相关模块
import { ref, Ref, computed, reactive } from 'vue'

// 定义商品类
type goods = {
    name: string,
    num: number,
    price: number
}

// 定义购物车商品信息
const goodsInfo = reactive<goods[]>([
    {
        name: "芝奇幻光戟 32GB(16G*2)",
        num: 1,
        price: 1129
    },
    {
        name: "利民 PA120",
        num: 1,
        price: 219
    },
    {
        name: "三星970EVO Plus 1T",
        num: 1,
        price: 939
    },
    {
        name: "三星970EVO Plus 500G",
        num: 1,
        price: 737
    }
])

// 定义总金额
let $total: Ref<number> = ref<number>(0)

// 计算总金额
$total = computed<number>(() => {
    let total = 0
    goodsInfo.forEach(item => {
        total += item.num * item.price
    })
    return total
})

// 添加和删除商品数目函数
const addAndSub = (item: goods, type: boolean = false): void => {
    if (item.num > 1 && !type) {
        item.num--
    }
    if (item.num <= 99 && type) {
        item.num++
    }
}

// 删除当前商品
const del = (item: goods): void => {
    goodsInfo.splice(goodsInfo.indexOf(item), 1)
}




</script>

<template>
    <!-- 购物车 -->
    <div>
        <table style="width:80%" border>
            <thead>
                <tr>
                    <th>商品名称</th>
                    <th>商品数量</th>
                    <th>商品单价</th>
                    <th>商品总价</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in goodsInfo">
                    <td>{{ item.name }}</td>
                    <td>
                        <button @click="addAndSub(item, false)">-</button>
                        <span>{{ item.num }}</span>
                        <button @click="addAndSub(item, true)">+</button>
                    </td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.num * item.price }}</td>
                    <td>
                        <button @click="del(item)">删除</button>
                    </td>
                </tr>
                <tr>
                    <td colspan="3">总金额</td>
                    <td colspan="2">{{ $total }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
</style>