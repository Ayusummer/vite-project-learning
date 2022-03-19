<script setup lang="ts">
import lessMenu from './Menu/lessMenu.vue'
import lessHeader from './Header/lessHeader.vue'
import lessContent from './Content/lessContent.vue'

</script>

<template>
    <div class="layout_less">
        <lessMenu />
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