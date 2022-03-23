<script setup lang="ts">
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import {reactive, markRaw} from 'vue'

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
</script>

<template>
    <div class="content_layout">
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