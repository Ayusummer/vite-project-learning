<script setup lang="ts">
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import Dialog from '../../components/Dialog.vue'
// import Loading from '../../components/Loading/loading.vue' 异步化组件后就不能这样直接引入使用了
import {reactive, markRaw, ref, defineAsyncComponent} from 'vue'

const Loading = defineAsyncComponent(() => import('../../components/Loading/loading.vue'))

type Tabs = {
    name: string,
    comName:any
}

type Com = Pick<Tabs, 'comName'>

const data = reactive<Tabs[]>([
    {
        name: '我是 A 组件',
        comName: markRaw(A)
    },
    {
        name: '我是 B 组件',
        comName: markRaw(B)
    },
    {
        name: '我是 C 组件',
        comName: markRaw(C)
    }
])


let current = reactive<Com>({
    comName: data[0].comName
})

const switchCom =(item: Tabs) =>{
    current.comName = item.comName
}

// 动态插槽相关
let name = ref('dialog_header')
</script>

<template>
    <div class="content_layout">
        <!-- 异步组件测试 -->
        <Suspense>
            <template #default>
                <Loading></Loading>
            </template>
            <template #fallback>
                <div>加载中...</div>
            </template>
        </Suspense>
        <!-- 插槽测试 -->
        <Dialog>
            <!-- 具名插槽 -->
            <template v-slot:dialog_header>
                <div>
                    摆
                </div>
            </template>
            <!-- 匿名插槽 -->
            <!-- <template v-slot="{data}"> -->
            <!-- 简写: -->
            <template #default="{data}">
                <div>
                    姓名: {{data.name}} 年龄: {{data.age}}
                </div>
            </template>
            <!-- 具名插槽 -->
            <!-- 简写: -->
            <template #dialog_footer>
                <div>
                    摸了
                </div>
            </template>
            <!-- 动态插槽 -->
            <template #[name]>
                动态插槽演示
            </template>
        </Dialog>
        <div class = "tab">
            <div :key="item.name" v-for="item in data"
                @click="switchCom(item)">
                {{item.name}}
            </div>
        </div>
        <component :is="current.comName" />
        <div class="content_layout-items" 
            :key="item" v-for="item in 100">
                {{ item }}
        </div>      
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

.tab{
    display: flex;
    flex:1;
    flex-direction: row;
    div{
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
        &:hover{
            background: #eee;
        }
    }
}
</style>