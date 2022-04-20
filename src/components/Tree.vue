<!-- 递归组件示例 -->
<script setup lang="ts">

type TreeList = {
    name: string;
    icon?: string;
    children?: TreeList[] | [];
}

type Props = {
    dataTreeList?: TreeList[]
}
defineProps<Props>()

const emit = defineEmits(['on-click'])

const ClickItem = (item: TreeList) => {
    console.log(item, 2333);
    emit('on-click', item)
}

</script>

<script lang="ts">
export default {
    name: "Tree"
}

</script>


<template>
    <div>
        <!-- 返回导航页面 -->
        <el-button @click="$router.push('/navigation')">返回导航页面</el-button>
        <div style="margin-left: 10px;">
            <!-- {{dataTreeList}} -->
            <div :key="index" v-for="(item, index) in dataTreeList" @click.stop="ClickItem(item)">
                {{ item.name }}
                <Tree v-if="item?.children?.length" :dataTreeList="item.children" @on-click="ClickItem" />
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
</style>