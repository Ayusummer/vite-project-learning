<script setup lang="ts">
import lessMenu from './Menu/lessMenu.vue'
import lessHeader from './Header/lessHeader.vue'
import lessContent from './Content/lessContent.vue'
import { reactive, ref } from 'vue'

const exposeArrayFromMenu = ref(null)

const data_array = reactive<number[]>([1, 2, 3])

// 父组件接收子组件传参
const getList = (list: number[]) => {
    console.log(list, "父组件接收子组件")
}

</script>

<template>
    <div class="layout_less">
        <!-- <div>{{ exposeArrayFromMenu }}</div> -->
        <lessMenu
            message="传递一个字符串"
            v-bind:data_array="data_array"
            @onclickTap="getList"
            ref="exposeArrayFromMenu"
        />
        <div class="layout_less-right">
            <lessHeader />
            <lessContent />
        </div>
    </div>
</template>

<style lang="less" scoped>
.layout_less {
    display: flex;
    height: 60%;
    overflow: hidden;
    border: 1px solid #ccc;
    &-right {
        display: flex;
        flex-direction: column; // 垂直方向
        flex: 1;
    }
}
</style>