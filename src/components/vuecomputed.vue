<!-- computed 购物车示例 -->
<script setup lang="ts">
import { computed, reactive, ref, Ref } from 'vue'

// computed 函数形式
let price1: Ref<number> = ref(0)
let mul1 = computed<string>(() => {
    return `$` + price1.value
})

// computed 对象形式
let price2 = ref<number | string>(1)
let mul2 = computed({
    get: () => {
        return price2.value
    },
    set: (value) => {
        price2.value = `set` + value
    }
})

// 购物车示例
// 定义商品类型
type goods = {
    name: string,
    num: number,
    price: number
}
// 总金额定义
let $total: Ref<number> = ref<number>(0)
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
// 添加和删除商品数目函数
const addAndSub = (item: goods, type: boolean = false): void => {
    if (item.num > 1 && !type) {
        item.num--
    }
    if (item.num <= 99 && type) {
        item.num++
    }
}
// 从购物车中删除当前商品信息
const del = (index: number) => {
    goodsInfo.splice(index, 1)
}

// 计算总金额
$total = computed<number>(() => {
    return goodsInfo.reduce((prev, next) => {
        return prev + (next.num * next.price)
    }, 0)
})

</script>

<template>
    <div>
        <!-- 返回导航页面 -->
        <el-button @click="$router.push('/navigation')">返回</el-button>
        <div>{{ mul1 }}</div>
        <div>{{ mul2 }}</div>
        <div @click="mul2 = 100">click</div>

        <!-- 购物车示例 -->
        <table style="width:800px" border>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>数量</th>
                    <th>价格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="index" v-for="(item, index) in goodsInfo">
                    <td align="center">{{ item.name }}</td>
                    <td align="center">
                        <button @click="addAndSub(item, false)">-</button>
                        {{ item.num }}
                        <button @click="addAndSub(item, true)">+</button>
                    </td>
                    <td align="center">{{ item.num * item.price }}</td>
                    <td align="center">
                        <button @click="del(index)">删除</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td align="center">总价:{{ $total }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<style scoped>
</style>