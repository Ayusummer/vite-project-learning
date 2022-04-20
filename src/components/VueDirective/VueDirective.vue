<!-- 组件拖曳示例 -->
<script setup lang="ts">
// 导入 directive 相关模块
import { ref, Directive, DirectiveBinding } from 'vue'
// 自定义 v-move 指令进行组件拖曳
const vMove: Directive<any, void> = (el: HTMLDivElement, binding: DirectiveBinding) => {
    // 取当前元素的第一个子元素作为拖曳元素
    let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement
    console.log(moveElement)
    // 定义鼠标按下事件(拖动)
    const mouseDown = (e: MouseEvent) => {
        let X = e.clientX - el.offsetLeft
        let Y = e.clientY - el.offsetTop
        const move = (e: MouseEvent) => {
            console.log(e)
            el.style.left = e.clientX - X + 'px'
            el.style.top = e.clientY - Y + 'px'
        }
        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move)
        })
    }
    // 绑定鼠标按下拖曳事件
    moveElement.addEventListener('mousedown', mouseDown)
}

</script>

<template>
    <div>
        <!-- 返回导航页面 -->
        <el-button @click="$router.push('/navigation')">返回导航页面</el-button>
        <div v-move class="box">
            <div class="header"></div>
            <div>内容</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.box {
    // box 内容区域样式定义
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border: 3px solid #000;

    // 拖曳 header 样式定义
    .header {
        width: 100%;
        height: 50px;
        background: rgb(5, 5, 5);
    }
}
</style>