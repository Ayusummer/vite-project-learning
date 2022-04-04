<script setup lang="ts">
import { useTestStore } from '@/store';
// 导入 storeToRefs 以从 store 中获取响应式数据
import { storeToRefs } from 'pinia';
const useTest = useTestStore()

// 调用 useTest actions 中的  printStudentState() 函数打印 studentSTore 中的 name
console.log('studentStoreName:')
useTest.printStudentState()

// 直接结构 useTest 不具有响应式特性
const { current, name } = useTest
// 通过 storeToRefs 将 store 中的数据转换为响应式数据
const { current: currentRef, name: nameRef } = storeToRefs(useTest)


// 直接修改属性值实现 useTest.current++
const useTestChange1 = () => {
    useTest.current++
}
// 方法2: 通过$patch 批量修改属性值
const useTestChange2 = () => {
    useTest.$patch({
        name: '马克杯',
        current: 10
    })
}
// 方法3: $patch 函数式写法
const useTestChange3 = () => {
    useTest.$patch((state) => {
        state.name = '立牌'
        state.current = 5
    })
}
// 方法4: 通过原始对象修改整个实例(缺点在于需要修改state所有属性, 因此一般不建议使用)
const useTestChange4 = () => {
    useTest.$state = {
        name: '小夜灯',
        current: 7
    }
}
// 方法5: 通过 actions 修改
const useTestChange5 = () => {
    useTest.currentIncrement()
}
</script>

<template>
    <div>
        <div>pinia: {{ useTest.name }} -- ${{ useTest.current }}</div>
        <button @click="useTestChange1">increment-直接修改属性值</button>
        <button @click="useTestChange2">通过$patch批量修改属性</button>
        <button @click="useTestChange3">$patch的函数式写法</button>
        <button @click="useTestChange4">通过原始对象修改整个实例</button>
        <button @click="useTestChange5">通过 actions 修改</button>
    </div>
    <div>
        <div>直接解构: name: {{ name }} --- current: {{ current }} --- 不具有响应式特性</div>
        <div>通过 storeToRefs 解构: name: {{ nameRef }} --- current: {{ currentRef }} --- 具有响应式特性</div>
    </div>
</template>

<style lang="less" scoped>
</style>